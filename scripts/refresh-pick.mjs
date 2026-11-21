/*
 * The ids the refresh routine reads next, oldest `checkedAt` first: ten a day
 * visits every record once a year. Skips ids logged in the last 60 days, whatever
 * the outcome, so an unreadable record does not come up every morning, and files
 * waiting on the review branch.
 *
 *   node scripts/refresh-pick.mjs [--n 10]
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const factsDir = 'research/facts';
const logFile = 'research/refresh-log.tsv';

const at = process.argv.indexOf('--n');
const n = at > 0 ? Number(process.argv[at + 1]) : 10;

const since = new Date(Date.now() - 60 * 86400000).toISOString().slice(0, 10);
const recent = new Set();
const git = (...args) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

/* The merge lane's log as well: while its Action is red, main does not have those lines yet. */
const logs = [existsSync(logFile) ? readFileSync(logFile, 'utf8') : ''];
try {
  logs.push(git('show', `origin/claude/refresh:${logFile}`));
} catch {
  /* No merge lane waiting. */
}
for (const line of logs.join('\n').split('\n')) {
  const [date, id] = line.split('\t');
  if (date && id && date >= since) recent.add(id);
}

/* Fact files changed on the review branch and not yet merged: somebody is reading those. */
try {
  const changed = git('diff', '--name-only', 'origin/main...origin/claude/refresh-review');
  for (const path of changed.split('\n')) {
    const match = path.match(/^research\/facts\/(.+)\.yml$/);
    if (match) recent.add(match[1]);
  }
} catch {
  /* No review branch, nothing waiting. */
}

const candidates = readdirSync(factsDir)
  .filter((file) => file.endsWith('.yml'))
  .map((file) => parse(readFileSync(join(factsDir, file), 'utf8')))
  .filter((data) => data?.id && !recent.has(data.id))
  .map((data) => ({
    id: data.id,
    name: String(data.name ?? data.id),
    checked: data.checkedAt ? String(data.checkedAt).slice(0, 10) : '',
  }))
  .sort((a, b) => a.checked.localeCompare(b.checked) || b.name.localeCompare(a.name));

for (const { id } of candidates.slice(0, n)) console.log(id);
