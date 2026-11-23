/*
 * Lists software the research files do not know yet: young GitHub repositories
 * that took off under the register's topics, and Show HN launches with a
 * repository. Prints one tab-separated line per find, most stars first.
 *
 *   node scripts/discover.ts [--limit 10]
 *
 * A find is known when its repository appears anywhere in research/, or its
 * homepage host is a homepage in a candidates CSV. A rejected row counts, so a
 * find checked once never comes back. GITHUB_TOKEN raises the search limit.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const limit = Number(args[args.indexOf('--limit') + 1]) || 10;
const day = 86_400_000;
const since = (days: number) => new Date(Date.now() - days * day).toISOString().slice(0, 10);

/* Topics that name what the register lists; a broad one like "framework" drowns it in apps. */
const topics = [
  'cms',
  'headless-cms',
  'static-site-generator',
  'web-framework',
  'php-framework',
  'nodejs-framework',
  'css-framework',
  'component-library',
  'ecommerce',
  'search-engine',
  'web-analytics',
  'documentation-generator',
  'blog-engine',
  'form-builder',
  'comments',
];
const minStars = 500;

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

let answered = 0;
let failed = 0;
async function get(url: string): Promise<any> {
  const headers: Record<string, string> = { 'User-Agent': 'findsoftware-discover', Accept: 'application/json' };
  if (url.startsWith('https://api.github.com/') && process.env.GITHUB_TOKEN)
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(url, { headers }).catch(() => null);
  /* A token the sandbox sets but GitHub refuses: drop it and go on anonymously. */
  if (response?.status === 401 && headers.Authorization) {
    delete process.env.GITHUB_TOKEN;
    return get(url);
  }
  if (!response?.ok) {
    console.error(`discover: ${response?.status ?? 'no answer'} ${url}`);
    failed++;
    return undefined;
  }
  answered++;
  return response.json().catch(() => undefined);
}

const slugOf = (url: string) =>
  url
    .match(/github\.com\/([\w.-]+\/[\w.-]+)/i)?.[1]
    .replace(/\.git$/, '')
    .toLowerCase();
const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};
/* Shared hosts carry many projects, so their host says nothing about which one. */
const shared =
  /(github\.io|gitlab\.io|vercel\.app|netlify\.app|pages\.dev|github\.com|gitlab\.com|codeberg\.org|npmjs\.com|packagist\.org|pypi\.org)$/;

const known = new Set<string>();
const knownHosts = new Set<string>();
for (const file of readdirSync('research')) {
  if (!file.endsWith('.csv')) continue;
  const text = readFileSync(`research/${file}`, 'utf8');
  for (const match of text.matchAll(/github\.com\/[\w.-]+\/[\w.-]+/gi)) known.add(slugOf(match[0])!);
  for (const match of text.matchAll(/https?:\/\/[^,\s]+/g)) {
    const host = hostOf(match[0]);
    if (host && !shared.test(host)) knownHosts.add(host);
  }
}
for (const file of readdirSync('research/facts')) {
  const text = readFileSync(`research/facts/${file}`, 'utf8');
  for (const match of text.matchAll(/github\.com\/[\w.-]+\/[\w.-]+/gi)) known.add(slugOf(match[0])!);
}

type Find = { slug: string; stars: number; created: string; homepage: string; description: string; source: string };
const finds = new Map<string, Find>();
const add = (repo: any, source: string) => {
  const slug = String(repo?.full_name ?? '').toLowerCase();
  if (!slug || known.has(slug) || finds.has(slug) || repo.fork || repo.archived) return;
  if (/^awesome|\/awesome/.test(slug)) return;
  /* Lists and agent add-ons are never software to build a site with. */
  if (/agent skill|skills for|claude code|\bmcp\b|curated list|collection of/i.test(String(repo.description ?? '')))
    return;
  const homepage = String(repo.homepage ?? '');
  if (homepage && knownHosts.has(hostOf(homepage))) return;
  finds.set(slug, {
    slug,
    stars: repo.stargazers_count ?? 0,
    created: String(repo.created_at ?? '').slice(0, 10),
    homepage,
    description: String(repo.description ?? '')
      .replace(/\s+/g, ' ')
      .slice(0, 160),
    source,
  });
};

for (const topic of topics) {
  /* The search API allows 30 calls a minute and refuses bursts. */
  await new Promise((resolve) => setTimeout(resolve, 2500));
  const q = encodeURIComponent(`topic:${topic} created:>${since(730)} stars:>=${minStars} archived:false`);
  const page = await get(`https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&per_page=30`);
  for (const repo of page?.items ?? []) add(repo, `topic:${topic}`);
}

const after = Math.floor((Date.now() - 30 * day) / 1000);
const hn = await get(
  `https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i>${after},points>=40&hitsPerPage=100`,
);
for (const hit of hn?.hits ?? []) {
  const slug = slugOf(String(hit.url ?? ''));
  if (!slug || known.has(slug) || finds.has(slug)) continue;
  add(await get(`https://api.github.com/repos/${slug}`), `show-hn:${hit.objectID}`);
}

const sorted = [...finds.values()].sort((a, b) => b.stars - a.stars).slice(0, limit);
for (const find of sorted)
  console.log(
    [
      `https://github.com/${find.slug}`,
      find.stars,
      find.created,
      find.homepage || '-',
      find.source,
      find.description || '-',
    ].join('\t'),
  );
/* Every call refused is an outage, not a quiet week: the run must say so. */
if (!answered) {
  console.error(`discover: all ${failed} calls failed`);
  process.exit(1);
}
console.error(`discover: ${finds.size} unknown, ${sorted.length} printed, ${known.size} repositories known`);
