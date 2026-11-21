/*
 * Re-reads the `via: api` facts of the given fact files and prints what it did
 * not decide. The rules are in src/lib/api-facts.ts.
 *
 *   node scripts/refresh-api.ts [--dry] <id>...
 *
 * GITHUB_TOKEN raises GitHub's limit from 60 to 5,000 calls an hour.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';
import {
  applyChanges,
  goesBack,
  readerFor,
  restate,
  same,
  type Answer,
  type Change,
  type Fact,
} from '../src/lib/api-facts.ts';

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const ids = args.filter((arg) => !arg.startsWith('--'));
const date = new Date().toISOString().slice(0, 10);
if (!ids.length) {
  console.error('usage: node scripts/refresh-api.ts [--dry] <id> ...');
  process.exit(1);
}

/* Each agent shell starts fresh, so the token is looked up here rather than exported once. */
if (!process.env.GITHUB_TOKEN) {
  try {
    process.env.GITHUB_TOKEN = execFileSync('gh', ['auth', 'token'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    /* No gh: GitHub's anonymous limit applies. */
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const answers = new Map<string, Promise<Answer>>();
let githubSpent = false;

async function call(url: string): Promise<Answer> {
  const headers: Record<string, string> = { 'User-Agent': 'findsoftware-refresh', Accept: 'application/json' };
  if (url.startsWith('https://api.github.com/') && process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  if (githubSpent && url.startsWith('https://api.github.com/')) return { status: -1 };
  for (let attempt = 1; attempt <= 3; attempt++) {
    const response = await fetch(url, { headers }).catch(() => null);
    if (response?.headers.get('x-ratelimit-remaining') === '0' && !response.ok) {
      githubSpent = true;
      return { status: -1 };
    }
    if (!response || response.status === 429 || response.status >= 500) {
      await sleep(5000 * attempt);
      continue;
    }
    /* A token the sandbox sets but GitHub refuses: drop it and go on anonymously. */
    if (response?.status === 401 && headers.Authorization) {
      delete process.env.GITHUB_TOKEN;
      return call(url);
    }
    if (!response.ok) return { status: response.status };
    const json = await response.json().catch(() => undefined);
    return { status: response.status, json, link: response.headers.get('link') };
  }
  return { status: 0 };
}

const fetchOnce = (url: string) => {
  if (!answers.has(url)) answers.set(url, call(url));
  return answers.get(url)!;
};

const show = (value: unknown) => JSON.stringify(value);

/** The repository and package documents that carry archived, deprecated and abandoned flags. */
function signalSources(facts: Fact[]) {
  const sources = new Set<string>();
  for (const fact of facts) {
    if (fact.via !== 'api') continue;
    const repo = String(fact.url ?? '').match(
      /^https:\/\/(?:api\.github\.com\/repos|github\.com)\/([^/#?]+)\/([^/#?]+)/,
    );
    if (repo) sources.add(`https://api.github.com/repos/${repo[1]}/${repo[2].replace(/\.git$/, '')}`);
    if (fact.field === 'npmName' && typeof fact.value === 'string')
      sources.add(`https://registry.npmjs.org/${fact.value.replace('/', '%2F')}/latest`);
    if (fact.field === 'packagistName' && typeof fact.value === 'string')
      sources.add(`https://packagist.org/packages/${fact.value}.json`);
  }
  return sources;
}
let failed = false;

for (const id of ids) {
  const path = `research/facts/${id}.yml`;
  let text: string;
  try {
    text = readFileSync(path, 'utf8');
  } catch {
    console.log(`${id}: no fact file`);
    failed = true;
    continue;
  }
  let doc;
  try {
    doc = parse(text);
  } catch {
    doc = undefined;
  }
  if (!doc || !Array.isArray(doc.facts)) {
    console.log(`${id}: not a fact file`);
    failed = true;
    continue;
  }
  const facts: Fact[] = doc.facts;
  const changes: Change[] = [];
  const notes: string[] = [];
  const skipped = new Map<string, number>();
  let confirmed = 0;

  for (const [index, fact] of facts.entries()) {
    if (fact.via !== 'api') continue;
    const reader = readerFor(fact);
    if ('skip' in reader) {
      if (reader.skip !== 'kept') skipped.set(reader.skip, (skipped.get(reader.skip) ?? 0) + 1);
      continue;
    }
    const answer = await fetchOnce(reader.call);
    if (answer.status === 404 || answer.status === 410) {
      notes.push(
        reader.call.endsWith('/releases/latest')
          ? `no release: ${fact.field}, ${reader.call} answers ${answer.status}`
          : `gone: ${fact.field} source ${reader.call} answers ${answer.status}`,
      );
      continue;
    }
    if (answer.status === -1) {
      skipped.set('github limit', (skipped.get('github limit') ?? 0) + 1);
      continue;
    }
    if (!answer.json) {
      notes.push(`no answer: ${fact.field} from ${reader.call} (${answer.status || 'failed'})`);
      continue;
    }
    const next = reader.read(answer, fact, date);
    if (next === undefined || next === null || next === '') {
      skipped.set('unread', (skipped.get('unread') ?? 0) + 1);
      continue;
    }
    if (typeof fact.value === 'object' && typeof next !== 'object') {
      skipped.set('structured', (skipped.get('structured') ?? 0) + 1);
      continue;
    }
    if (same(fact.field, fact.value, next)) {
      changes.push({ index });
      confirmed++;
    } else if (reader.kind === 'confirm') {
      notes.push(`differs: ${fact.field} ${show(fact.value)} → source says ${show(next)} (${reader.call})`);
    } else if (reader.forward && goesBack(fact.field, fact.value, next)) {
      notes.push(`goes back: ${fact.field} ${show(fact.value)} → ${show(next)} (${reader.call})`);
    } else {
      const value = restate(fact.value, next, date);
      const url = reader.move?.(answer);
      if (reader.move && !url) {
        notes.push(`no source to move to: ${fact.field} (${reader.call})`);
        continue;
      }
      changes.push({ index, value, url });
      notes.push(`changed: ${fact.field} ${show(fact.value)} → ${show(value)} (${url ?? reader.call})`);
    }
  }

  /* Criterion 4 signals, read from each repository and package the file names. */
  if (doc.status !== 'discontinued') {
    const plugin = facts.some((fact) => fact.field === 'basedOn')
      ? ' (built on another project: a person decides)'
      : '';
    for (const url of signalSources(facts)) {
      const answer = await fetchOnce(url);
      const body = answer.json as Record<string, any> | undefined;
      if (body?.archived === true) notes.push(`archived: ${body.html_url}${plugin}`);
      if (typeof body?.deprecated === 'string') notes.push(`deprecated: ${body.name}: ${body.deprecated}${plugin}`);
      const abandoned = body?.package?.abandoned;
      if (abandoned)
        notes.push(
          `abandoned: ${body.package.name}${typeof abandoned === 'string' ? `, use ${abandoned}` : ''}${plugin}`,
        );
    }
  }

  const result = applyChanges(text, changes, date);
  if (result === null) {
    notes.push('not written: the file layout does not allow a safe edit');
    failed = true;
  } else if (result !== text && !dry) {
    writeFileSync(path, result);
  }

  const skips = [...skipped].map(([why, count]) => `${count} ${why}`).join(', ');
  const written = changes.filter((change) => change.value !== undefined).length;
  console.log(`${id}: ${confirmed} confirmed, ${written} changed${skips ? `, skipped ${skips}` : ''}`);
  for (const note of notes) console.log(`  ${note}`);
}

if (githubSpent) console.log('GitHub limit reached: set GITHUB_TOKEN, or run again in an hour.');
process.exit(failed ? 1 : 0);
