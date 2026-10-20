/**
 * Re-fetches every quoted source in the named fact files and reports each quote
 * the page text no longer contains. The mechanical half of checking a record,
 * so a reviewing agent only reads the failures.
 *
 *   node scripts/check-quotes.mjs <id> [<id>...]
 *
 * Exits 1 when a quote is missing. Each URL is fetched once per run.
 */
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

const userAgent = 'FindSoftware research';
const ids = process.argv.slice(2);
if (!ids.length) {
  console.error('usage: node scripts/check-quotes.mjs <id> [<id>...]');
  process.exit(2);
}

const entities = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  '#39': "'",
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  mdash: '—',
  ndash: '–',
  hellip: '…',
  copy: '©',
  reg: '®',
  trade: '™',
  euro: '€',
  middot: '·',
};
// Curly quotes, dashes and markup differ between page and quote without changing the words.
// Markup is stripped only from HTML: in a raw source file, `<?php ... ?>` would take the code with it.
const stripMarkup = (text) =>
  text.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
const normalize = (text, html = false) =>
  (html ? stripMarkup(String(text)) : String(text))
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/&(#x?[0-9a-f]+|[a-z0-9]+);/gi, (match, name) => {
      if (name[0] === '#')
        return String.fromCodePoint(
          name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : Number(name.slice(1)),
        );
      return entities[name.toLowerCase()] ?? match;
    })
    .replace(/[‘’`´]/g, "'")
    .replace(/[“”„]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[*_#>|\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

// A GitHub file page carries the file as escaped JSON for its script; the raw file is the same text, readable.
const raw = (url) =>
  url.replace(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/blob\//, 'https://raw.githubusercontent.com/$1/');

// A page served as Latin-1 reads as garbled umlauts when decoded as UTF-8, and its quotes never match.
const decode = (type, bytes) => {
  const declared =
    /charset=([\w-]+)/i.exec(type ?? '')?.[1] ??
    /<meta[^>]+charset=["']?([\w-]+)/i.exec(new TextDecoder('latin1').decode(bytes.slice(0, 2048)))?.[1];
  try {
    return new TextDecoder(declared ?? 'utf-8').decode(bytes);
  } catch {
    return new TextDecoder('utf-8').decode(bytes);
  }
};

const pages = new Map();
const page = (url) => {
  if (!pages.has(url)) {
    pages.set(
      url,
      fetch(raw(url), { headers: { 'user-agent': userAgent }, signal: AbortSignal.timeout(20000) })
        .then(async (response) =>
          response.ok
            ? {
                text: normalize(
                  decode(response.headers.get('content-type'), await response.arrayBuffer()),
                  /html/i.test(response.headers.get('content-type') ?? '') ||
                    /\.(html?|md|markdown)$/i.test(new URL(url).pathname),
                ),
              }
            : { error: `${response.status}` },
        )
        .catch((error) => ({ error: error.name === 'TimeoutError' ? 'timeout' : error.message })),
    );
  }
  return pages.get(url);
};

let checked = 0;
const failures = [];
for (const id of ids) {
  const research = parse(readFileSync(`research/facts/${id}.yml`, 'utf8'));
  for (const fact of research.facts ?? []) {
    if (!fact.quote || !fact.url) continue;
    checked++;
    const { text, error } = await page(fact.url);
    if (error) failures.push(`${id} ${fact.field}: ${error} ${fact.url}`);
    else if (!text.includes(normalize(fact.quote)))
      failures.push(`${id} ${fact.field}: not on page ${fact.url} "${fact.quote}"`);
  }
}

for (const failure of failures) console.log(failure);
console.log(`${checked} quotes, ${failures.length} not confirmed`);
process.exit(failures.length ? 1 : 0);
