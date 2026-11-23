/**
 * What the refresh routine may merge on its own, and what waits for a person.
 * Pure, so `node --test` can hold it to the fact file format without git.
 *
 * The routine edits `research/facts/<id>.yml`, because records are generated
 * from them. Every value, quote, source and status it writes merges on its own;
 * the build and validate are the checks. Only what the routine never writes is
 * held back: `id`, `name`, `description`, `notes`, a removed fact that no new
 * source replaces, a date moved back, an added `notFound` entry or one dropped
 * without a fact, a status other than
 * `discontinued`, a discontinued record built on another project (AGENTS.md:
 * an archived plugin is a stub). Any of these means a run went wrong, so a person looks. The
 * same function decides both the routine's lane and the Action's guard, so the
 * two cannot disagree.
 */
import { isDeepStrictEqual } from 'node:util';
import { parse } from 'yaml';

type Fact = {
  field: string;
  value?: unknown;
  url?: string;
  checkedAt?: string;
  via?: string;
  quote?: string;
  period?: string;
};

type FactFile = {
  id?: string;
  name?: string;
  status?: string;
  checkedAt?: string;
  description?: string;
  facts?: Fact[];
  notFound?: string[];
  [key: string]: unknown;
};

/** Top-level keys the routine moves itself. Every other key must stay as it was. */
const written = new Set(['checkedAt', 'status', 'facts', 'notFound']);

function read(text: string): FactFile | null {
  try {
    const doc = parse(text);
    return doc && typeof doc === 'object' && !Array.isArray(doc) ? doc : null;
  } catch {
    return null;
  }
}

/**
 * A URL with its release tag or download week left out: the same source, read
 * again at a newer release or week. Moving to another repository or package is
 * still another source.
 */
export const pinless = (url: string) =>
  url.replace(/\/releases\/tags?\/[^/?#]+/, '/releases/tag/*').replace(/\d{4}-\d{2}-\d{2}:\d{4}-\d{2}-\d{2}/, '*');

/* A fact's source: the same field read off the same URL the same way. Two of them are two facts. */
const source = (fact: Fact) => JSON.stringify([fact.field, pinless(fact.url ?? ''), fact.via ?? '', fact.period ?? '']);

function bySource(facts: Fact[]): Map<string, Fact[]> {
  const groups = new Map<string, Fact[]>();
  for (const fact of facts) groups.set(source(fact), [...(groups.get(source(fact)) ?? []), fact]);
  return groups;
}

/**
 * Why the routine may not merge this fact file change on its own. Empty means it may.
 * `before` and `after` are the file's text at the two revisions.
 */
export function reviewReasons(before: string, after: string): string[] {
  const [a, b] = [read(before), read(after)];
  if (!a || !b) return ['not a fact file'];

  const reasons: string[] = [];
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if (!written.has(key) && !isDeepStrictEqual(a[key], b[key])) reasons.push(`changes ${key}`);
  }

  if (a.checkedAt && (b.checkedAt ?? '') < a.checkedAt) reasons.push('moves checkedAt back');

  /* A fact this run wrote or re-dated. */
  const fresh: Fact[] = [];
  const removed: Fact[] = [];
  const [old, now] = [bySource(a.facts ?? []), bySource(b.facts ?? [])];
  for (const [key, olds] of old) {
    const nows = now.get(key) ?? [];
    for (const [index, was] of olds.entries()) {
      const is = nows[index];
      if (!is) removed.push(was);
      else if ((is.checkedAt ?? '') < (was.checkedAt ?? '')) reasons.push(`moves ${is.field} checkedAt back`);
      else if (!isDeepStrictEqual(was, is)) fresh.push(is);
    }
  }
  const added = [...now].flatMap(([key, nows]) => nows.slice(old.get(key)?.length ?? 0));
  fresh.push(...added);
  /* A source moved to a new URL is the old fact removed and a new one added for the same field. */
  for (const was of removed) {
    if (!added.some((fact) => fact.field === was.field))
      reasons.push(`removes ${was.field} from ${was.url ?? 'no url'}`);
  }

  const found = new Set(fresh.map((fact) => fact.field));
  const notFound = new Set(b.notFound ?? []);
  for (const field of b.notFound ?? []) {
    if (!(a.notFound ?? []).includes(field)) reasons.push(`adds ${field} to notFound`);
  }
  for (const field of a.notFound ?? []) {
    if (!notFound.has(field) && !found.has(field)) reasons.push(`drops ${field} from notFound without a fact`);
  }

  /* An archived plugin is a stub, which is curation: a record built on another project goes to a person. */
  const plugin = (b.facts ?? []).some((fact) => fact.field === 'basedOn');
  if (a.status !== b.status && b.status !== 'discontinued') reasons.push(`changes status to ${b.status}`);
  else if (a.status !== b.status && plugin) reasons.push('discontinues a record built on another project');

  return reasons;
}

/**
 * Why a fact file the discovery adds may not merge on its own, or '' when it may.
 * A new record is accepted, hosted-service or boundary, and every fact carries its source.
 */
export function newFileProblem(id: string, text: string): string {
  const doc = read(text);
  if (!doc || doc.id !== id) return `not a fact file for ${id}`;
  if (!['accepted', 'hosted-service', 'boundary'].includes(String(doc.status)))
    return `new record with status ${doc.status}`;
  const unsourced = (doc.facts ?? []).find(
    (fact) => !fact.url || !fact.checkedAt || !['api', 'page'].includes(fact.via ?? ''),
  );
  return unsourced ? `${unsourced.field} without its source` : '';
}

/* The line of each fact's quote, in fact order, or -1 for a fact without one. */
function quoteLines(lines: string[]): number[] {
  const found: number[] = [];
  let inFacts = false;
  for (const [index, line] of lines.entries()) {
    if (/^\S/.test(line)) inFacts = line === 'facts:';
    else if (inFacts && line.startsWith('  - ')) found.push(-1);
    else if (inFacts && found.length && line.startsWith('    quote:')) found[found.length - 1] = index;
  }
  return found;
}

/**
 * Takes back what a refresh wrote without proof, as text so the file keeps its
 * layout: a quote check-quotes did not find on its page returns to the old
 * quote (or goes, for a fact that had none), and a `discontinued` without a
 * fresh `status` fact returns to the old status.
 */
export function keepProof(before: string, after: string, missing: string[]): { text: string; notes: string[] } {
  const [a, b] = [read(before), read(after)];
  if (!a || !b) return { text: after, notes: [] };
  const [oldLines, lines] = [before.split('\n'), after.split('\n')];
  const [oldQuotes, quotes] = [quoteLines(oldLines), quoteLines(lines)];
  const [old, now] = [bySource(a.facts ?? []), bySource(b.facts ?? [])];
  const notes: string[] = [];
  const drop = new Set<number>();
  for (const [index, fact] of (b.facts ?? []).entries()) {
    if (!fact.quote || !missing.includes(fact.quote) || quotes[index] < 0) continue;
    const was = old.get(source(fact))?.[now.get(source(fact))!.indexOf(fact)];
    const line = was ? oldQuotes[(a.facts ?? []).indexOf(was)] : -1;
    if (line >= 0) lines[quotes[index]] = oldLines[line];
    else drop.add(quotes[index]);
    notes.push(`${fact.field} quote not on its page, ${line >= 0 ? 'old quote kept' : 'quote dropped'}`);
  }
  const proof = (b.facts ?? []).some(
    (fact) => fact.field === 'status' && fact.value === 'discontinued' && fact.checkedAt === b.checkedAt,
  );
  if (b.status === 'discontinued' && a.status !== 'discontinued' && !proof) {
    const at = lines.findIndex((line) => line.startsWith('status:'));
    const was = oldLines.find((line) => line.startsWith('status:'));
    if (at >= 0 && was) {
      lines[at] = was;
      notes.push(`status kept at ${a.status}: no status fact shows the end`);
    }
  }
  return { text: lines.filter((_, index) => !drop.has(index)).join('\n'), notes };
}

export const isFactFile = (path: string) => /^research\/facts\/[^/]+\.yml$/.test(path);
