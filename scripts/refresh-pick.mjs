/*
 * Which fact files the refresh routine reads next.
 *
 * Ordered by the oldest page fact in each file, files with no date first, and
 * within one date the reverse of A-to-Z. Page facts decide the order because the
 * weekly API refresh re-dates every `via: api` fact and the file's own
 * `checkedAt`; the page reads are what this routine spends tokens on. Files the
 * routine handled recently are skipped, whatever the outcome: a project whose
 * pages cannot be read leaves no date, and without this it would come up every
 * morning.
 *
 * Every status but `accepted` runs on a weekly cycle: first in the queue on
 * Sundays (UTC), last on every other day. Stubs, hosted services and
 * discontinued software rarely change, and sorted in with the rest they would
 * fill every run.
 *
 * The list is a queue of attempts, not a batch. The routine works down it and
 * stops once enough files have been reached, so the tail comes up again tomorrow.
 *
 *   node scripts/refresh-pick.mjs            # 20 ids
 *   node scripts/refresh-pick.mjs --n 3      # three
 *   node scripts/refresh-pick.mjs --days 30  # retry sooner than the default 60
 *   node scripts/refresh-pick.mjs --hidden   # the Sunday order, any day
 *
 * Reads research/refresh-log.tsv, which the routine appends to, and skips any
 * file still waiting on the review branch, whose commit carries no log line.
 * See .claude/skills/refresh-record/SKILL.md.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const factsDir = 'research/facts';
const logFile = 'research/refresh-log.tsv';

const arg = (name, fallback) => {
  const at = process.argv.indexOf(`--${name}`);
  return at > 0 ? Number(process.argv[at + 1]) : fallback;
};
const n = arg('n', 20);
const days = arg('days', 60);
const hiddenFirst = process.argv.includes('--hidden') || new Date().getUTCDay() === 0;

const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
const recent = new Set();
if (existsSync(logFile)) {
  for (const line of readFileSync(logFile, 'utf8').split('\n')) {
    const [date, id] = line.split('\t');
    if (date && id && date >= since) recent.add(id);
  }
}

/* Fact files changed on the review branch and not yet merged: somebody is reading those. */
try {
  const changed = execFileSync('git', ['diff', '--name-only', 'origin/main...origin/claude/refresh-review'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
  for (const path of changed.split('\n')) {
    const match = path.match(/^research\/facts\/(.+)\.yml$/);
    if (match) recent.add(match[1]);
  }
} catch {
  /* No review branch, nothing waiting. */
}

const day = (value) => (value ? String(value).slice(0, 10) : '');

const candidates = readdirSync(factsDir)
  .filter((file) => file.endsWith('.yml'))
  .map((file) => parse(readFileSync(join(factsDir, file), 'utf8')))
  .filter((data) => data?.id && !recent.has(data.id))
  .map((data) => {
    const pages = (data.facts ?? []).filter((fact) => fact.via === 'page').map((fact) => day(fact.checkedAt));
    return {
      id: data.id,
      name: String(data.name ?? data.id),
      oldest: pages.length ? pages.sort()[0] : day(data.checkedAt),
      later: (data.status !== 'accepted') === hiddenFirst ? 0 : 1,
    };
  })
  .sort((a, b) => a.later - b.later || a.oldest.localeCompare(b.oldest) || b.name.localeCompare(a.name));

for (const { id } of candidates.slice(0, n)) console.log(id);
