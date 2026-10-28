#!/usr/bin/env node
// Measures momentum into src/data/momentum.json: weekly commits on GitHub, npm and Packagist downloads against a year ago.
// Usage: node scripts/momentum.mjs <YYYY-MM-DD> [--limit N] [record-id ...]
// Best effort: oldest measurement first, stops before GitHub's rate limit runs out. GITHUB_TOKEN raises that limit.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

const args = process.argv.slice(2);
const date = args.shift();
if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '')) {
  console.error('Usage: node scripts/momentum.mjs <YYYY-MM-DD> [--limit N] [record-id ...]');
  process.exit(1);
}
const limitAt = args.indexOf('--limit');
const limit = limitAt >= 0 ? Number(args.splice(limitAt, 2)[1]) : Infinity;
const only = new Set(args);

const RECORDS = 'src/content/software';
const OUT = 'src/data/momentum.json';
const UA = { 'User-Agent': 'FindSoftware research' };
const GH = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
const RESERVE = 50;

const shift = (day, { days = 0, years = 0 }) => {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCFullYear(d.getUTCFullYear() - years);
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
};
// The 28 days ending four days ago, since npm's last days are still filling in; the same days a year before.
const npmEnd = shift(date, { days: 4 });
const npmWindow = `${shift(npmEnd, { days: 27 })}:${npmEnd}`;
const npmWindowYearAgo = `${shift(npmEnd, { days: 27, years: 1 })}:${shift(npmEnd, { years: 1 })}`;
// The last full month, and the same month a year before.
const lastMonth = (() => {
  const d = new Date(`${date.slice(0, 7)}-01T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() - 1);
  return d.toISOString().slice(0, 7);
})();
const lastMonthYearAgo = `${Number(lastMonth.slice(0, 4)) - 1}${lastMonth.slice(4)}`;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let ghLeft = Infinity;
async function get(url, headers = {}, tries = 6) {
  for (let i = 0; i < tries; i++) {
    const response = await fetch(url, { headers: { ...UA, ...headers } });
    if (url.startsWith('https://api.github.com/'))
      ghLeft = Number(response.headers.get('x-ratelimit-remaining') ?? ghLeft);
    // 202 is GitHub still computing the statistics; 429 and 5xx are worth another try.
    if (response.status === 202 || response.status === 429 || response.status >= 500) {
      await wait(2000 * (i + 1));
      continue;
    }
    return response.ok ? response.json() : undefined;
  }
  return undefined;
}

const sum = (values) => values.reduce((a, b) => a + b, 0);

async function measure(record) {
  const figures = { checkedAt: date };
  const sources = [];
  if (record.github) {
    const repo = await get(`https://api.github.com/repos/${record.github}`, GH);
    if (repo?.pushed_at) figures.pushedAt = repo.pushed_at.slice(0, 10);
    const stats = await get(`https://api.github.com/repos/${record.github}/stats/participation`, GH, 8);
    if (Array.isArray(stats?.all) && stats.all.length === 52) {
      figures.commits13 = sum(stats.all.slice(-13));
      figures.commits26 = sum(stats.all.slice(-26));
      figures.commitsPrior26 = sum(stats.all.slice(0, 26));
    }
    if (repo || stats) sources.push(`https://api.github.com/repos/${record.github}/stats/participation`);
  }
  if (record.npm) {
    const now = await get(`https://api.npmjs.org/downloads/point/${npmWindow}/${record.npm}`);
    const then = await get(`https://api.npmjs.org/downloads/point/${npmWindowYearAgo}/${record.npm}`);
    if (typeof now?.downloads === 'number') figures.npm28 = now.downloads;
    if (typeof then?.downloads === 'number') figures.npm28YearAgo = then.downloads;
    if (now || then) sources.push(`https://api.npmjs.org/downloads/point/${npmWindow}/${record.npm}`);
    await wait(400);
  }
  if (record.packagist) {
    const url = `https://packagist.org/packages/${record.packagist}/stats/all.json?average=monthly&from=${lastMonthYearAgo}-01`;
    const stats = await get(url);
    const values = stats?.values && Object.values(stats.values)[0];
    if (Array.isArray(values)) {
      const at = (month) => values[stats.labels.indexOf(month)];
      if (typeof at(lastMonth) === 'number') figures.packagistDaily = at(lastMonth);
      if (typeof at(lastMonthYearAgo) === 'number') figures.packagistDailyYearAgo = at(lastMonthYearAgo);
      sources.push(url);
    }
  }
  return { ...figures, sources };
}

// What each record measures from, read off its repository URL and the sources of its download figures.
const records = [];
for (const file of readdirSync(RECORDS)) {
  const match = readFileSync(`${RECORDS}/${file}`, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  if (!match) continue;
  const data = parse(match[1]);
  const id = file.replace(/\.md$/, '');
  if (only.size && !only.has(id)) continue;
  if (data.status === 'stub') continue;
  const source = (field) => (data.sources ?? []).find((entry) => entry.field === field)?.url;
  records.push({
    id,
    github: data.urls?.repository?.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+?)(?:\.git)?\/?$/)?.[1],
    npm: source('npmWeeklyDownloads')?.match(/downloads\/(?:point|range)\/[^/]+\/(.+)$/)?.[1],
    packagist: source('packagistMonthlyDownloads')?.match(/packages\/([^/]+\/[^/]+?)(?:\/stats)?\.json/)?.[1],
  });
}

const held = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {};
const due = records
  .filter((record) => record.github || record.npm || record.packagist)
  .sort((a, b) => (held[a.id]?.checkedAt ?? '').localeCompare(held[b.id]?.checkedAt ?? ''))
  .slice(0, limit);

const save = () => {
  const sorted = Object.fromEntries(
    Object.keys(held)
      .sort()
      .map((id) => [id, held[id]]),
  );
  writeFileSync(OUT, `${JSON.stringify(sorted, null, 1)}\n`);
};

let done = 0;
async function worker() {
  while (due.length) {
    if (ghLeft < RESERVE) return;
    const record = due.shift();
    held[record.id] = await measure(record);
    if (++done % 50 === 0) {
      save();
      console.log(`${done} measured, GitHub calls left ${ghLeft}`);
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
save();
console.log(`${done} measured${due.length ? `, ${due.length} left for the next run (GitHub limit)` : ''}.`);
