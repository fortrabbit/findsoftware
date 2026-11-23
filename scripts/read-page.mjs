/**
 * Fetches one page for the refresh, as curl would, and saves its text.
 * A github.com URL is read through raw.githubusercontent.com or the API,
 * because github.com answers cloud runners with 403.
 *
 *   node scripts/read-page.mjs <url> <file>
 *
 * Prints "<status> <final url>", like curl -w '%{http_code} %{url_effective}'.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { githubSources, readGithub } from './github-source.mjs';

const [url, file] = process.argv.slice(2);
if (!url || !file) {
  console.error('usage: node scripts/read-page.mjs <url> <file>');
  process.exit(2);
}

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

const sources = githubSources(url);
if (sources) {
  const { text, error } = await readGithub(url, sources);
  if (text !== undefined) writeFileSync(file, text);
  console.log(`${text !== undefined ? 200 : error} ${sources.map((source) => source.url).join(' + ')}`);
} else {
  const response = await fetch(url, {
    headers: { 'user-agent': 'FindSoftware refresh' },
    signal: AbortSignal.timeout(30000),
  }).catch((error) => ({ status: error.name === 'TimeoutError' ? 'timeout' : error.message }));
  if (response.arrayBuffer) writeFileSync(file, Buffer.from(await response.arrayBuffer()));
  console.log(`${response.status} ${response.url ?? url}`);
}
