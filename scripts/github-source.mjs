/**
 * github.com answers HTML pages with 403 to cloud runners, so a page fact on
 * github.com is read from the same text through raw.githubusercontent.com or
 * the API: a file from its raw copy, a repository or folder from its README
 * (the repository's description included), a release from its notes.
 * Returns undefined for a URL it has no reader for.
 */
const userAgent = 'FindSoftware research';

/* The text a github.com URL shows, as a list of sources to read and join. */
export function githubSources(url) {
  const match = /^https:\/\/github\.com\/([^/#?]+)\/([^/#?]+?)(?:\.git)?(\/.*)?\/?$/.exec(url.replace(/[#?].*$/, ''));
  if (!match) return undefined;
  const [, owner, repo, rest = ''] = match;
  const api = `https://api.github.com/repos/${owner}/${repo}`;
  const path = rest.replace(/\/$/, '');
  if (!path)
    return [
      { url: api, field: 'description' },
      { url: `${api}/readme`, raw: true },
    ];
  const blob = /^\/blob\/(.+)$/.exec(path);
  if (blob) return [{ url: `https://raw.githubusercontent.com/${owner}/${repo}/${blob[1]}` }];
  const tree = /^\/tree\/([^/]+)\/(.+)$/.exec(path);
  if (tree) return [{ url: `${api}/readme/${tree[2]}?ref=${tree[1]}`, raw: true }];
  const tag = /^\/releases\/tag\/(.+)$/.exec(path);
  if (tag) return [{ url: `${api}/releases/tags/${tag[1]}`, field: ['name', 'body'] }];
  return undefined;
}

/* Reads every source of a github.com URL; { text } when one answered, else { error } with the first status. */
export async function readGithub(url, sources = githubSources(url)) {
  const parts = [];
  let error;
  for (const source of sources) {
    const headers = { 'user-agent': userAgent };
    if (source.url.startsWith('https://api.github.com/')) {
      headers.accept = source.raw ? 'application/vnd.github.raw' : 'application/vnd.github+json';
      if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const response = await fetch(source.url, { headers, signal: AbortSignal.timeout(20000) }).catch((e) => ({
      ok: false,
      status: e.name === 'TimeoutError' ? 'timeout' : e.message,
    }));
    if (!response.ok) {
      error ??= String(response.status);
      continue;
    }
    if (!source.field) parts.push(await response.text());
    else {
      const json = await response.json().catch(() => ({}));
      for (const field of [source.field].flat()) if (json[field]) parts.push(String(json[field]));
    }
  }
  return parts.length ? { text: parts.join('\n\n') } : { error: error ?? 'no text' };
}
