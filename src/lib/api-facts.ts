/**
 * How the refresh routine re-reads a `via: api` fact without spending tokens.
 * Pure, so `node --test` can hold it to real fact shapes; scripts/refresh-api.ts
 * does the fetching and the writing.
 *
 * Each fact gets a reader picked by its field and source URL. The reader names
 * the API call that answers it and what to take from the answer. The URL in the
 * fact stays as written, since a moved source URL is a review case in
 * confirmation.ts, except for a pinned one, below. What happens with the answer
 * depends on the kind of fact:
 *
 * - write: a count, a date, a version, a license or a language. A changed value
 *   is written. Dates, majors and contributor counts only move forward; one that goes back is reported.
 * - confirm: a name or a flag. Re-dated when the source still says it, reported
 *   when it says something else, never rewritten by a script.
 * - skip: no reader, or a field kept as it is.
 *
 * A fact pinned to one release tag or one week of downloads is read at the
 * latest one, and its URL moves there with the new value.
 */
import { isDeepStrictEqual } from 'node:util';
import { parse, stringify } from 'yaml';

export type Fact = {
  field: string;
  value?: unknown;
  url?: string;
  checkedAt?: string;
  via?: string;
  quote?: string;
  period?: string;
};

export type Answer = { status: number; json?: unknown; link?: string | null };

export type Reader = {
  kind: 'write' | 'confirm';
  call: string;
  /** The value the answer gives for this fact, or undefined when it holds none. */
  read: (answer: Answer, fact: Fact, date: string) => unknown;
  /** Dates, majors and contributor counts never move back. */
  forward?: boolean;
  /** For a fact pinned to one release or one week: the URL of the one the new value comes from. */
  move?: (answer: Answer) => string | undefined;
};

export type Skip = { skip: string };

type Json = Record<string, any>;
const figure = /^[\d,]+(?:\.\d+)?/;
const body = (answer: Answer) => (answer.json ?? {}) as Json;
const day = (value: unknown) => (typeof value === 'string' && value ? value.slice(0, 10) : undefined);

/** The major of a version or tag: `v8.1.4.1` 8, `release-36.3.0` 36. A monorepo tag (`@scope/pkg@4.2.1`) or a calendar version has none. */
export function majorOf(version: unknown): number | undefined {
  const text = String(version ?? '');
  if (/[@/]/.test(text)) return undefined;
  const match = text.match(/(\d+)\.\d+/) ?? text.match(/^v?(\d+)$/);
  const major = match ? Number(match[1]) : undefined;
  return major !== undefined && major < 1990 ? major : undefined;
}

/** A figure with several periods, picked by the words after the old figure; without them the period is unknown. */
function period(old: unknown, periods: Record<string, number | undefined>, words: Record<string, RegExp>) {
  /* A figure kept per period ({ total, monthly }): each period re-read, other keys kept. */
  if (old && typeof old === 'object' && !Array.isArray(old)) {
    const next: Json = { ...old };
    const keys = Object.keys(old).filter((key) => key in periods);
    if (!keys.length || keys.some((key) => typeof periods[key] !== 'number')) return undefined;
    for (const key of keys) next[key] = periods[key];
    return next;
  }
  const suffix = typeof old === 'string' ? old.replace(/^[\d,.]+/, '') : '';
  for (const [key, pattern] of Object.entries(words)) if (pattern.test(suffix)) return periods[key];
  return undefined;
}

const firstStable = (releases: unknown) =>
  Array.isArray(releases) ? releases.find((release: Json) => !release.draft && !release.prerelease) : undefined;
const firstPre = (releases: unknown) =>
  Array.isArray(releases) ? releases.find((release: Json) => !release.draft && release.prerelease) : undefined;

/** The page count GitHub puts in the `last` link of a one-per-page list, else the list's own length. */
function listCount(answer: Answer) {
  const last = answer.link?.match(/[?&]page=(\d+)>; rel="last"/)?.[1];
  if (last) return Number(last);
  return Array.isArray(answer.json) ? answer.json.length : undefined;
}

function spdx(license: unknown) {
  const id = (license as Json)?.spdx_id;
  return typeof id === 'string' && id !== 'NOASSERTION' ? id : undefined;
}

function github(fact: Fact, url: URL): Reader | Skip {
  const parts = url.pathname.split('/').filter(Boolean);
  const api = url.host === 'api.github.com';
  if (api && parts[0] === 'users' && parts[1] && fact.field === 'repoOwnerType') {
    return { kind: 'write', call: `https://api.github.com/users/${parts[1]}`, read: (a) => lowerType(body(a).type) };
  }
  if (!api && parts.length === 1 && fact.field === 'repoOwnerType') {
    return { kind: 'write', call: `https://api.github.com/users/${parts[0]}`, read: (a) => lowerType(body(a).type) };
  }
  const [owner, repo, ...rest] = api ? (parts[0] === 'repos' ? parts.slice(1) : []) : parts;
  if (!owner || !repo) return { skip: 'not a repository url' };
  const base = `https://api.github.com/repos/${owner}/${repo}`;
  const where = rest.join('/');
  if (/^releases\/tags?\//.test(where)) {
    /* Pinned to one release: read the latest and point the fact at it, in the old URL's form. */
    const move = (a: Answer) => {
      const tag = body(a).tag_name;
      if (typeof tag !== 'string') return undefined;
      return api ? `${base}/releases/tags/${encodeURIComponent(tag)}` : body(a).html_url;
    };
    const call = `${base}/releases/latest`;
    if (fact.field === 'latestReleaseDate')
      return { kind: 'write', forward: true, call, move, read: (a) => day(body(a).published_at) };
    if (fact.field === 'currentMajor')
      return { kind: 'write', forward: true, call, move, read: (a) => majorOf(body(a).tag_name) };
    return { skip: 'pinned to one release' };
  }

  const releases = where === 'releases' ? `${base}/releases?per_page=30` : `${base}/releases/latest`;
  const release = (a: Answer) => (where === 'releases' ? firstStable(a.json) : body(a));
  switch (fact.field) {
    case 'githubStargazers':
      return { kind: 'write', call: base, read: (a) => body(a).stargazers_count };
    case 'language':
      return { kind: 'write', call: base, read: (a) => body(a).language ?? undefined };
    case 'license':
      return { kind: 'write', call: base, read: (a) => spdx(body(a).license) };
    case 'homepage':
      return { kind: 'write', call: base, read: (a) => body(a).homepage || undefined };
    case 'repoOwnerType':
      return { kind: 'write', call: base, read: (a) => lowerType(body(a).owner?.type) };
    case 'repository':
      return { kind: 'confirm', call: base, read: (a) => body(a).html_url };
    case 'sourcePublic':
      return {
        kind: 'confirm',
        call: base,
        read: (a) => (typeof body(a).private === 'boolean' ? !body(a).private : undefined),
      };
    case 'status':
      return { kind: 'confirm', call: base, read: (a) => (body(a).archived ? 'discontinued' : 'active') };
    case 'contributors':
      return {
        kind: 'write',
        forward: true,
        call: `${base}/contributors?per_page=1${/[?&]anon=(1|true)/.test(url.search) ? '&anon=1' : ''}`,
        read: listCount,
      };
    case 'lastCommitDate':
      return {
        kind: 'write',
        forward: true,
        call: `${base}/commits?per_page=1`,
        read: (a) => (Array.isArray(a.json) ? day(a.json[0]?.commit?.committer?.date) : undefined),
      };
    case 'latestReleaseDate':
      return { kind: 'write', forward: true, call: releases, read: (a) => day(release(a)?.published_at) };
    case 'currentMajor':
      return { kind: 'write', forward: true, call: releases, read: (a) => majorOf(release(a)?.tag_name) };
    case 'latestPrereleaseDate':
      return {
        kind: 'write',
        forward: true,
        call: `${base}/releases?per_page=30`,
        read: (a) => day(firstPre(a.json)?.published_at),
      };
  }
  return { skip: 'no reader' };
}

const lowerType = (type: unknown) => (typeof type === 'string' ? type.toLowerCase() : undefined);

function npm(fact: Fact, url: URL): Reader | Skip {
  if (url.host === 'api.npmjs.org') {
    if (fact.field !== 'npmWeeklyDownloads') return { skip: 'no reader' };
    if (/^\/downloads\/point\/last-week\/./.test(url.pathname))
      return { kind: 'write', call: url.href, read: (a) => body(a).downloads };
    /* Pinned to one week: read last week and point the fact at its dates. */
    const pinned = url.pathname.match(/^\/downloads\/(?:range|point)\/(\d{4}-\d{2}-\d{2}:\d{4}-\d{2}-\d{2})\/(.+)$/);
    if (!pinned) return { skip: 'no reader' };
    const week = (a: Answer) => `${body(a).start}:${body(a).end}`;
    return {
      kind: 'write',
      call: `https://api.npmjs.org/downloads/point/last-week/${pinned[2]}`,
      move: (a) => (body(a).start && body(a).end ? url.href.replace(pinned[1], week(a)) : undefined),
      read: (a, f) => {
        const downloads = body(a).downloads;
        if (typeof downloads !== 'number') return undefined;
        if (typeof f.value === 'number') return downloads;
        if (typeof f.value !== 'string' || !figure.test(f.value)) return undefined;
        const { start, end } = body(a);
        const value = f.value.replace(figure, String(downloads));
        /* "2026-10-23..29" names the end by its day only. */
        if (/\d{4}-\d{2}-\d{2}\.\.\d{2}(?!\d)/.test(value))
          return value.replace(/\d{4}-\d{2}-\d{2}\.\.\d{2}(?!\d)/, `${start}..${end}`);
        const dates = value.match(/\d{4}-\d{2}-\d{2}/g) ?? [];
        if (dates.length === 1) return undefined;
        const next = [start, end];
        return value.replace(/\d{4}-\d{2}-\d{2}/g, () => next.shift() ?? '');
      },
    };
  }
  const name = decodeURIComponent(url.pathname.slice(1).replace(/\/latest$/, ''));
  const doc = `https://registry.npmjs.org/${name.replace('/', '%2F')}`;
  const latest = `${doc}/latest`;
  switch (fact.field) {
    case 'npmName':
      return { kind: 'confirm', call: latest, read: (a) => body(a).name };
    case 'currentMajor':
      return { kind: 'write', forward: true, call: latest, read: (a) => majorOf(body(a).version) };
    case 'license':
      return {
        kind: 'write',
        call: latest,
        read: (a) => {
          const license = body(a).license;
          return typeof license === 'string' ? license : (license?.type ?? undefined);
        },
      };
    case 'latestReleaseDate':
      return {
        kind: 'write',
        forward: true,
        call: doc,
        read: (a) => day(body(a).time?.[body(a)['dist-tags']?.latest]),
      };
    case 'runtimeMin':
      return { kind: 'confirm', call: latest, read: (a) => body(a).engines?.node };
  }
  return { skip: 'no reader' };
}

function packagist(fact: Fact, url: URL): Reader | Skip {
  const name = url.pathname.match(/^\/(?:packages|p2)\/([^/]+\/[^/]+?)(?:\.json)?(?:\/.*)?$/)?.[1];
  if (!name) return { skip: 'not a package url' };
  const meta = `https://repo.packagist.org/p2/${name}.json`;
  const stable = (a: Answer) =>
    (body(a).packages?.[name] ?? []).find((version: Json) => !String(version.version_normalized).includes('-'));
  switch (fact.field) {
    case 'packagistName':
      return {
        kind: 'confirm',
        call: `https://packagist.org/packages/${name}.json`,
        read: (a) => body(a).package?.name,
      };
    case 'packagistDownloads':
      return {
        kind: 'write',
        call: `https://packagist.org/packages/${name}.json`,
        read: (a, f) =>
          period(f.value, body(a).package?.downloads ?? {}, {
            monthly: /month/i,
            daily: /day|daily/i,
            total: /total/i,
          }),
      };
    case 'currentMajor':
      return { kind: 'write', forward: true, call: meta, read: (a) => majorOf(stable(a)?.version) };
    case 'latestReleaseDate':
      return { kind: 'write', forward: true, call: meta, read: (a) => day(stable(a)?.time) };
    case 'runtimeMin':
      return { kind: 'confirm', call: meta, read: (a) => stable(a)?.require?.php };
  }
  return { skip: 'no reader' };
}

function registry(fact: Fact, url: URL): Reader | Skip {
  const host = url.host;
  if (host === 'pypi.org') {
    const name = url.pathname.match(/^\/(?:pypi|project)\/([^/]+)/)?.[1];
    if (!name) return { skip: 'not a package url' };
    const call = `https://pypi.org/pypi/${name}/json`;
    const info = (a: Answer) => body(a).info ?? {};
    if (fact.field === 'pypiName') return { kind: 'confirm', call, read: (a) => info(a).name };
    if (fact.field === 'currentMajor')
      return { kind: 'write', forward: true, call, read: (a) => majorOf(info(a).version) };
    if (fact.field === 'latestReleaseDate')
      return {
        kind: 'write',
        forward: true,
        call,
        read: (a) => day(body(a).releases?.[info(a).version]?.[0]?.upload_time),
      };
  }
  if (host === 'pypistats.org' && fact.field === 'pypiDownloads') {
    return {
      kind: 'write',
      call: url.href,
      read: (a, f) =>
        period(
          f.value,
          { lastMonth: body(a).data?.last_month, lastWeek: body(a).data?.last_week, lastDay: body(a).data?.last_day },
          { lastMonth: /month/i, lastWeek: /week/i, lastDay: /day/i },
        ),
    };
  }
  if (host === 'rubygems.org') {
    const name = url.pathname.match(/^\/api\/v1\/gems\/([^/]+)\.json$/)?.[1];
    if (!name) return { skip: 'no reader' };
    if (fact.field === 'rubygemsName') return { kind: 'confirm', call: url.href, read: (a) => body(a).name };
    if (fact.field === 'rubygemsDownloads') return { kind: 'write', call: url.href, read: (a) => body(a).downloads };
    if (fact.field === 'currentMajor')
      return { kind: 'write', forward: true, call: url.href, read: (a) => majorOf(body(a).version) };
  }
  if (host === 'crates.io') {
    const name = url.pathname.match(/^\/api\/v1\/crates\/([^/]+)$/)?.[1];
    if (!name) return { skip: 'no reader' };
    const crate = (a: Answer) => body(a).crate ?? {};
    if (fact.field === 'crateName') return { kind: 'confirm', call: url.href, read: (a) => crate(a).name };
    if (fact.field === 'crateDownloads') return { kind: 'write', call: url.href, read: (a) => crate(a).downloads };
    if (fact.field === 'currentMajor')
      return { kind: 'write', forward: true, call: url.href, read: (a) => majorOf(crate(a).max_stable_version) };
  }
  if (host === 'hub.docker.com' && fact.field === 'dockerPulls' && url.pathname.startsWith('/v2/repositories/')) {
    return { kind: 'write', call: url.href, read: (a) => body(a).pull_count };
  }
  return { skip: 'no reader' };
}

/* Stable once recorded, or a judgement rather than a reading. */
/* Not re-read: a first release and a judged license model do not change, and adoption.mjs owns its figures. */
const kept = new Set([
  'firstRelease',
  'licenseModel',
  'httpArchiveSites',
  'dependentRepos',
  'dependentPackages',
  'ecosystemsMonthlyDownloads',
  'packagistMonthlyDownloads',
  'wordpressActiveInstalls',
]);

export function readerFor(fact: Fact): Reader | Skip {
  if (fact.via !== 'api' || !fact.url) return { skip: 'not an api fact' };
  if (kept.has(fact.field)) return { skip: 'kept' };
  let url: URL;
  try {
    url = new URL(fact.url);
  } catch {
    return { skip: 'not a url' };
  }
  if (url.host === 'api.github.com' || url.host === 'github.com') return github(fact, url);
  if (url.host === 'registry.npmjs.org' || url.host === 'api.npmjs.org') return npm(fact, url);
  if (url.host === 'packagist.org' || url.host === 'repo.packagist.org') return packagist(fact, url);
  return registry(fact, url);
}

/**
 * The new reading in the old value's form: a number stays a number, a quoted
 * figure keeps the words after it ("380807 total"), a date in those words moves
 * to the run date ("6112866 (2026-10-31)").
 */
export function restate(old: unknown, next: unknown, date: string): unknown {
  if (typeof next === 'object') return next;
  if (typeof next === 'number' && typeof old === 'string' && figure.test(old)) {
    return old.replace(figure, String(next)).replace(/\d{4}-\d{2}-\d{2}/g, date);
  }
  if (typeof old === 'string' && typeof next === 'number') return String(next);
  if (typeof old === 'number' && typeof next === 'string' && /^\d+$/.test(next)) return Number(next);
  return next;
}

/** Whether the reading says the same as the fact. Majors compare as numbers, names ignore case. */
export function same(field: string, old: unknown, next: unknown): boolean {
  if (typeof next === 'object') return isDeepStrictEqual(old, next);
  if (field === 'currentMajor') return majorOf(old) === next || Number(String(old).match(/\d+/)?.[0]) === next;
  if (field === 'runtimeMin')
    return String(old).match(/\d+(?:\.\d+)?/)?.[0] === String(next).match(/\d+(?:\.\d+)?/)?.[0];
  if (typeof next === 'number')
    return (
      Number(
        String(old)
          .replace(/,/g, '')
          .match(/\d+(?:\.\d+)?/)?.[0],
      ) === next
    );
  // GitHub reports the GPL family without its -only or -or-later suffix.
  if (field === 'license' && String(old).startsWith(`${next}-`)) return true;
  const plain = (value: unknown) =>
    String(value)
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '');
  return plain(old) === plain(next);
}

/** Whether a forward-only reading went back: an older date, a lower major, fewer contributors. */
export function goesBack(field: string, old: unknown, next: unknown): boolean {
  if (typeof next === 'number') return next < Number(String(old).replace(/,/g, '').match(/\d+/)?.[0]);
  return String(next) < String(old).slice(0, 10);
}

export type Change = { index: number; value?: unknown; url?: string };

/** A YAML scalar for one `value:` line, quoted when the old line was or when bare text would read as another type. */
function scalar(value: unknown, quoted: boolean): string {
  if (typeof value === 'string' && quoted) return JSON.stringify(value);
  const text = stringify(value, { collectionStyle: 'flow' }).trimEnd();
  return text.includes('\n') ? JSON.stringify(value) : text;
}

/**
 * Applies changes to a fact file as text, so its layout stays as written: each
 * listed fact gets the run date, a new value where one is given, and the file's
 * own `checkedAt` moves too. Returns null when the file's layout is not one this
 * can edit safely, or when the result does not parse to what was meant.
 */
export function applyChanges(text: string, changes: Change[], date: string): string | null {
  if (!changes.length) return text;
  let doc;
  try {
    doc = parse(text);
  } catch {
    return null;
  }
  const lines = text.split('\n');
  const starts = lines.flatMap((line, at) => (/^ {2}- field: \S+$/.test(line) ? [at] : []));
  if (starts.length !== (doc.facts ?? []).length) return null;
  const factsEnd = lines.findIndex((line, at) => at > lines.indexOf('facts:') && /^\S/.test(line));

  /* Last fact first, so a block value folded into one line leaves the earlier starts where they are. */
  for (const { index, value, url } of [...changes].sort((a, b) => b.index - a.index)) {
    const from = starts[index];
    const to = starts[index + 1] ?? (factsEnd < 0 ? lines.length : factsEnd);
    const dateAt = lines.findIndex((line, at) => at > from && at < to && line.startsWith('    checkedAt: '));
    if (dateAt < 0) return null;
    lines[dateAt] = `    checkedAt: ${date}`;
    if (url !== undefined) {
      const urlAt = lines.findIndex((line, at) => at > from && at < to && line.startsWith('    url: '));
      if (urlAt < 0) return null;
      lines[urlAt] = `    url: ${scalar(url, /^ {4}url: ["']/.test(lines[urlAt]))}`;
    }
    if (value === undefined) continue;
    const blockAt = lines.findIndex((line, at) => at > from && at < to && line === '    value:');
    if (blockAt >= 0 && value && typeof value === 'object' && !Array.isArray(value)) {
      let end = blockAt + 1;
      while (end < to && /^ {6}/.test(lines[end])) end++;
      lines.splice(blockAt, end - blockAt, `    value: ${scalar(value, false)}`);
      continue;
    }
    const valueAt = lines.findIndex((line, at) => at > from && at < to && /^ {4}value: \S/.test(line));
    if (valueAt < 0 || /^ {4}value: [|>[]/.test(lines[valueAt]) || /^ {5}/.test(lines[valueAt + 1] ?? '')) return null;
    lines[valueAt] = `    value: ${scalar(value, /^ {4}value: ["']/.test(lines[valueAt]))}`;
  }
  const top = lines.findIndex((line) => line.startsWith('checkedAt: '));
  if (top < 0) return null;
  lines[top] = `checkedAt: ${date}`;

  const expected = structuredClone(doc);
  expected.checkedAt = date;
  for (const { index, value, url } of changes) {
    expected.facts[index].checkedAt = date;
    if (url !== undefined) expected.facts[index].url = url;
    if (value !== undefined) expected.facts[index].value = value;
  }
  const result = lines.join('\n');
  try {
    return isDeepStrictEqual(parse(result), expected) ? result : null;
  } catch {
    return null;
  }
}
