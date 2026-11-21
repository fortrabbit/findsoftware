/*
 * Puts one refreshed fact file onto its lane, commits and pushes it.
 *
 *   node scripts/refresh-commit.ts <id> confirmed [body-file]
 *   node scripts/refresh-commit.ts <id> unreadable|stopped "<note>"
 *
 * Run on `work` at origin/main, with only the fact file changed. A confirmed file
 * that fails validate is logged `stopped`. The guard picks the lane. Any failure
 * exits 1 and leaves the tree on a clean `work`; nothing is forced.
 */
import { execFileSync } from 'node:child_process';
import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parse } from 'yaml';

const [id, given, extra] = process.argv.slice(2);
if (!id || !['confirmed', 'unreadable', 'stopped'].includes(given)) {
  console.error('usage: node scripts/refresh-commit.ts <id> confirmed|unreadable|stopped [body-file|note]');
  process.exit(2);
}

const date = new Date().toISOString().slice(0, 10);
const path = `research/facts/${id}.yml`;
const logFile = 'research/refresh-log.tsv';
const run = (cmd: string, args: string[], input?: string) =>
  execFileSync(cmd, args, { encoding: 'utf8', input, stdio: ['pipe', 'pipe', 'pipe'] });
const git = (...args: string[]) => run('git', args);
const passes = (cmd: string, ...args: string[]) => {
  try {
    run(cmd, args);
    return true;
  } catch {
    return false;
  }
};
type Fact = { via?: string; checkedAt?: unknown; [key: string]: unknown };

/** What the run did to each kind of fact, counted rather than told: "page 14 confirmed, 1 changed, 0 left; ...". */
function tally(before: string, after: string) {
  const [a, b] = [before, after].map((doc) => (parse(doc)?.facts ?? []) as Fact[]);
  const counts: Record<string, number[]> = {};
  for (const [index, is] of b.entries()) {
    const { checkedAt, ...rest } = is;
    const { checkedAt: wasChecked, ...wasRest } = a[index] ?? {};
    const slot = (counts[is.via ?? 'other'] ??= [0, 0, 0]);
    if (JSON.stringify(rest) !== JSON.stringify(wasRest)) slot[1]++;
    else if (checkedAt !== wasChecked) slot[0]++;
    else slot[2]++;
  }
  return Object.entries(counts)
    .map(([via, [confirmed, changed, left]]) => `${via} ${confirmed} confirmed, ${changed} changed, ${left} left`)
    .join('; ');
}

/* The guard cannot fetch pages: a quote this run wrote must be on its page, or a person reads it. */
function unquoted(after: string) {
  const quotes = (doc: string) =>
    new Set(
      (parse(doc)?.facts ?? [])
        .filter((f: { via?: string }) => f.via === 'page')
        .map((f: { quote?: string }) => f.quote),
    );
  const before = quotes(git('show', `HEAD:${path}`));
  const written = [...quotes(after)].filter((quote) => quote && !before.has(quote));
  if (!written.length) return '';
  let report = '';
  try {
    run('node', ['scripts/check-quotes.mjs', id]);
  } catch (error) {
    report = String((error as { stdout?: string }).stdout ?? '');
  }
  const missing = report.split('\n').filter((line) => written.some((quote) => line.includes(`"${quote}"`)));
  return missing.length ? `review: quote not on its page\n${missing.join('\n')}` : '';
}

const changed = () => git('status', '--porcelain', '--', path).trim() !== '';

const branch = git('rev-parse', '--abbrev-ref', 'HEAD').trim();
const dirty = git('status', '--porcelain', '--untracked-files=no')
  .split('\n')
  .filter((line) => line && line.slice(3) !== path);
if (branch !== 'work' || dirty.length) {
  console.error(`refresh-commit: expected work with only ${path} changed, found ${branch}: ${dirty.join(', ')}`);
  process.exit(1);
}

let text: string | undefined;
let failed = false;
try {
  let outcome = given;
  let note = given === 'confirmed' ? '' : (extra ?? '');
  const body = given === 'confirmed' && extra ? readFileSync(extra, 'utf8').trim() : '';
  if (outcome !== 'confirmed') git('checkout', '--', path);

  if (outcome === 'confirmed' && changed()) {
    const builds = passes('node', 'scripts/import-facts.mjs', date) && passes('pnpm', 'run', '-s', 'validate');
    git('checkout', '--', 'src/content');
    if (!builds) {
      git('checkout', '--', path);
      [outcome, note] = ['stopped', 'validate failed on the refreshed file'];
    }
  }

  let lane = 'claude/refresh';
  let reasons = '';
  if (changed()) {
    text = readFileSync(path, 'utf8');
    git('add', '--', path);
    try {
      run('node', ['scripts/refresh-guard.ts', 'HEAD', '--staged']);
    } catch (error) {
      const { status, stdout } = error as { status?: number; stdout?: string };
      if (status !== 1) throw error;
      [lane, reasons] = ['claude/refresh-review', String(stdout).trim()];
    }
    note = tally(git('show', `HEAD:${path}`), text);
    if (lane === 'claude/refresh') reasons = unquoted(text);
    if (reasons) lane = 'claude/refresh-review';
    git('reset', '-q', '--', path);
    git('checkout', '--', path);
  }

  const name = String(parse(text ?? readFileSync(path, 'utf8'))?.name ?? id);
  const subject = outcome === 'confirmed' ? `Refresh ${name}, read ${date}` : `Log ${name} as ${outcome}, ${date}`;
  const message = [
    subject,
    [note, body, reasons].filter(Boolean).join('\n\n'),
    'Co-Authored-By: Claude <noreply@anthropic.com>',
  ]
    .filter(Boolean)
    .join('\n\n');

  git('fetch', '--prune', 'origin');
  const base = passes('git', 'rev-parse', '--verify', '-q', `origin/${lane}`) ? `origin/${lane}` : 'origin/main';
  git('checkout', '-q', '--no-track', '-B', lane, base);
  if (text !== undefined) writeFileSync(path, text);
  appendFileSync(logFile, `${date}\t${id}\t${outcome}\t${note || lane}\n`);
  git('add', '--', path, logFile);
  run('git', ['commit', '-q', '-F', '-'], message);
  git('push', '-q', 'origin', `HEAD:refs/heads/${lane}`);
  console.log(`${id}: ${outcome}, ${lane}`);
} catch (error) {
  failed = true;
  const err = error as { stderr?: string; message?: string };
  console.error(`refresh-commit: ${String(err.stderr || err.message).trim()}`);
  if (text !== undefined) {
    const kept = join(tmpdir(), `refresh-${id}.yml`);
    writeFileSync(kept, text);
    console.error(`the refreshed file is kept at ${kept}`);
  }
} finally {
  passes('git', 'checkout', '-q', '-f', '--no-track', '-B', 'work', 'origin/main');
}
process.exit(failed ? 1 : 0);
