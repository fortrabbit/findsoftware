/*
 * Puts one refreshed fact file onto its lane, commits and pushes it.
 *
 *   node scripts/refresh-commit.ts <id> confirmed [body-file]
 *   node scripts/refresh-commit.ts <id> unreadable "<note>"
 *   node scripts/refresh-commit.ts <id> stopped "<note>"
 *
 * Run on `work` at origin/main, with only the fact file changed. A confirmed file
 * that fails validate is undone and logged `stopped`. The guard picks the lane:
 * claude/refresh merges on its own and gets the log line, claude/refresh-review
 * waits for a person. Any git failure stops the script with a message and leaves
 * the tree on `work`; nothing is forced.
 */
import { execFileSync } from 'node:child_process';
import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

const [id, given, extra] = process.argv.slice(2);
if (!id || !['confirmed', 'unreadable', 'stopped'].includes(given)) {
  console.error('usage: node scripts/refresh-commit.ts <id> confirmed|unreadable|stopped [body-file|note]');
  process.exit(2);
}

const date = new Date().toISOString().slice(0, 10);
const path = `research/facts/${id}.yml`;
const logFile = 'research/refresh-log.tsv';
const run = (cmd: string, ...args: string[]) =>
  execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const git = (...args: string[]) => run('git', ...args);
const passes = (cmd: string, ...args: string[]) => {
  try {
    run(cmd, ...args);
    return true;
  } catch {
    return false;
  }
};

const branch = git('rev-parse', '--abbrev-ref', 'HEAD').trim();
const dirty = git('status', '--porcelain', '--untracked-files=no')
  .split('\n')
  .filter((line) => line && line.slice(3) !== path);
if (branch !== 'work' || dirty.length) {
  console.error(
    `refresh-commit: expected branch work with only ${path} changed, found ${branch} and ${dirty.join(', ')}`,
  );
  process.exit(1);
}

let outcome = given;
let note = given === 'confirmed' ? '' : (extra ?? '');
const body = given === 'confirmed' && extra ? readFileSync(extra, 'utf8').trim() : '';

if (outcome !== 'confirmed') git('checkout', '--', path);
const changed = () => git('status', '--porcelain', '--', path).trim() !== '';

if (outcome === 'confirmed' && changed()) {
  const builds = passes('node', 'scripts/import-facts.mjs', date) && passes('pnpm', 'run', '-s', 'validate');
  git('checkout', '--', 'src/content');
  if (!builds) {
    git('checkout', '--', path);
    outcome = 'stopped';
    note = 'validate failed on the refreshed file';
  }
}

let lane = 'claude/refresh';
let reasons = '';
if (changed()) {
  git('add', '--', path);
  try {
    run('node', 'scripts/refresh-guard.ts', 'HEAD', '--staged');
  } catch (error) {
    lane = 'claude/refresh-review';
    reasons = String((error as { stdout?: string }).stdout ?? '').trim();
  }
  git('reset', '-q', '--', path);
}

const text = changed() ? readFileSync(path, 'utf8') : undefined;
const name = String(parse(readFileSync(path, 'utf8'))?.name ?? id);
const subject = outcome === 'confirmed' ? `Refresh ${name}, read ${date}` : `Log ${name} as ${outcome}, ${date}`;
const message = [
  subject,
  [body, note, reasons].filter(Boolean).join('\n\n'),
  'Co-Authored-By: Claude <noreply@anthropic.com>',
]
  .filter(Boolean)
  .join('\n\n');

try {
  if (text !== undefined) git('checkout', '--', path);
  git('fetch', '--prune', 'origin');
  const base = passes('git', 'rev-parse', '--verify', '-q', `origin/${lane}`) ? `origin/${lane}` : 'origin/main';
  git('checkout', '-q', '--no-track', '-B', lane, base);
  if (text !== undefined) writeFileSync(path, text);
  if (lane === 'claude/refresh') appendFileSync(logFile, `${date}\t${id}\t${outcome}\t${note || 'read'}\n`);
  git('add', '--', path, logFile);
  if (!git('diff', '--cached', '--name-only').trim()) {
    console.log(`${id}: nothing to commit`);
  } else {
    execFileSync('git', ['commit', '-q', '-F', '-'], { input: message, stdio: ['pipe', 'pipe', 'pipe'] });
    git('push', '-q', 'origin', `HEAD:refs/heads/${lane}`);
    console.log(`${id}: ${outcome}, ${lane}`);
  }
  git('checkout', '-q', '--no-track', '-B', 'work', 'origin/main');
} catch (error) {
  fail(error);
}

function fail(error: unknown): never {
  const err = error as { stderr?: string; message?: string };
  console.error(`refresh-commit: ${String(err.stderr || err.message).trim()}`);
  if (text !== undefined) writeFileSync(`/tmp/refresh-${id}.yml`, text);
  passes('git', 'checkout', '-q', '-f', '--no-track', '-B', 'work', 'origin/main');
  console.error(text !== undefined ? `the refreshed file is kept at /tmp/refresh-${id}.yml` : '');
  process.exit(1);
}
