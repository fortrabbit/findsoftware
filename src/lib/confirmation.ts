/**
 * What the refresh routine may merge on its own, and what waits for a person.
 * Pure, so `node --test` can hold it to the fact file format without git.
 *
 * The routine edits `research/facts/<id>.yml`, because records are generated
 * from them. Two kinds of fact change merge on their own. A **confirmation**
 * moves only `checkedAt` dates: read again, still true. A **sourced change**
 * moves a fact's `value` or `quote` together with its own `checkedAt`, set to
 * the run's date, and a page fact carries the quote that says it. An added fact
 * follows the same rule.
 *
 * A status change merges only to `discontinued`, and only with a `status` fact
 * written or re-dated in the same run, the clear signal AGENTS.md criterion 4
 * asks for. `stub` is human curation and never comes from the routine.
 *
 * What stays outside is what the routine does not write: `id`, `name`,
 * `description`, `notes`, a removed fact, a source URL moved to another
 * repository or package. Any of these on this lane means a run went wrong
 * rather than that something was researched, so the Action stops and a person
 * looks. A move to a newer release tag or download week of the same repository
 * or package is a sourced change. The same function decides both the
 * routine's lane and the Action's guard, so the two cannot disagree.
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
const content = ({ checkedAt: _, ...rest }: Fact) => rest;

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

  const runDate = b.checkedAt ?? '';
  const dateMoved = runDate > (a.checkedAt ?? '');
  if (a.checkedAt && runDate < a.checkedAt) reasons.push('moves checkedAt back');

  /* A fact this run wrote: it carries the run's date, the file's date moved, and its source is complete. */
  const fresh: Fact[] = [];
  const sourced = (fact: Fact, what: string) => {
    if (!dateMoved || fact.checkedAt !== runDate) reasons.push(`${what} ${fact.field} without the run's checkedAt`);
    else if (!fact.url) reasons.push(`${what} ${fact.field} without a url`);
    else if (fact.via !== 'api' && fact.via !== 'page') reasons.push(`${what} ${fact.field} without via`);
    else if (fact.via === 'page' && !fact.quote) reasons.push(`${what} ${fact.field} without a quote`);
    else fresh.push(fact);
  };

  const [old, now] = [bySource(a.facts ?? []), bySource(b.facts ?? [])];
  for (const [key, olds] of old) {
    const nows = now.get(key) ?? [];
    for (const [index, was] of olds.entries()) {
      const is = nows[index];
      if (!is) reasons.push(`removes ${was.field} from ${was.url ?? 'no url'}`);
      else if (!isDeepStrictEqual(content(was), content(is))) sourced(is, 'changes');
      else if ((is.checkedAt ?? '') < (was.checkedAt ?? '')) reasons.push(`moves ${is.field} checkedAt back`);
      else if (is.checkedAt !== was.checkedAt) fresh.push(is);
    }
  }
  for (const [key, nows] of now) {
    for (const is of nows.slice(old.get(key)?.length ?? 0)) sourced(is, 'adds');
  }

  const found = new Set(fresh.map((fact) => fact.field));
  const notFound = new Set(b.notFound ?? []);
  for (const field of b.notFound ?? []) {
    if (!(a.notFound ?? []).includes(field)) reasons.push(`adds ${field} to notFound`);
  }
  for (const field of a.notFound ?? []) {
    if (!notFound.has(field) && !found.has(field)) reasons.push(`drops ${field} from notFound without a fact`);
  }

  if (a.status !== b.status) {
    const signal = fresh.some((fact) => fact.field === 'status' && fact.value === 'discontinued');
    if (b.status !== 'discontinued') reasons.push(`changes status to ${b.status}`);
    else if (!signal) reasons.push('changes status without a fresh status fact');
  }

  return reasons;
}

export const isSelfMerging = (before: string, after: string) => reviewReasons(before, after).length === 0;

/** The files a self-merging push may touch besides fact files. */
export const confirmationFiles = new Set(['research/refresh-log.tsv']);

export const isFactFile = (path: string) => /^research\/facts\/[^/]+\.yml$/.test(path);

/*
 * Record helpers for scripts/landed.ts, which reads what moved on the generated
 * records after a push.
 */
const date = /checkedAt: \d{4}-\d{2}-\d{2}/g;

/** The record with every `checkedAt` date blanked, and a bare `checkedAt:` line dropped. */
export function withoutDates(record: string): string {
  return record
    .replace(date, 'checkedAt: DATE')
    .split('\n')
    .filter((line) => line !== 'checkedAt: DATE')
    .join('\n');
}

/**
 * Frontmatter as one block of text per top-level key, dates blanked. A key owns
 * the lines indented under it, so `regions:` and its list are one block.
 */
function blocks(frontmatter: string): Map<string, string> {
  const byKey = new Map<string, string>();
  let key = '';
  for (const line of withoutDates(frontmatter).split('\n')) {
    const start = line.match(/^([A-Za-z]\w*):/);
    if (start) key = start[1];
    byKey.set(key, (byKey.get(key) ?? '') + line + '\n');
  }
  return byKey;
}

/** The top-level keys whose value differs, ignoring `checkedAt` dates. */
export function changedFields(before: string, after: string): string[] {
  const [a, b] = [blocks(before), blocks(after)];
  const keys = new Set([...a.keys(), ...b.keys()]);
  return [...keys].filter((key) => key && a.get(key) !== b.get(key));
}
