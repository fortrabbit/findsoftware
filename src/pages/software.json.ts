import type { APIRoute } from 'astro';
import { loadAsides, loadDrafts, loadFacets, loadListed } from '../lib/facets';
import { credit, licenceUrl } from '../lib/seo';
import { newest } from '../lib/modified';

/**
 * The "database": every facet definition and every record's facet fields, in one
 * file, published under CC BY. This is the dataset a reader downloads, not
 * something the site needs to work — the find view carries its own small index,
 * so nothing here is shaped by what a filter happens to require.
 *
 * `drafts` and the `asides` are kept apart from `software` rather than flagged
 * inside it, so nothing that counts the register can pick them up by forgetting
 * a filter.
 */
export const GET: APIRoute = async ({ site }) => {
  const { facets, providers: register } = await loadFacets();
  const shown = new Set(register.map((row) => row.id));
  const providers = (await loadListed()).map((row) => ({ ...row, momentum: shown.has(row.id) }));
  const drafts = await loadDrafts();
  const asides = await loadAsides();

  /*
   * The terms travel inside the file. This gets downloaded, renamed and passed
   * on, and by then nothing outside it says what may be done with it — a key in
   * the object is the only part of the licence that survives the trip.
   */
  /*
   * The newest `checkedAt` in the register, so the file says how fresh it is
   * without anybody having to scan two hundred records to work it out. Every
   * record carries its own date; this is the one the whole download claims.
   */
  const modified = newest(providers.map((provider) => provider.modifiedAt));
  const checked = providers
    .map((provider) => provider.checkedAt)
    .filter((date): date is Date => Boolean(date))
    .map(Number);

  const meta = {
    name: 'FindSoftware',
    url: `${site?.origin ?? ''}/`,
    license: licenceUrl,
    attribution: credit,
    ...(checked.length ? { checkedAt: new Date(Math.max(...checked)).toISOString().slice(0, 10) } : {}),
    ...(modified ? { modifiedAt: modified.toISOString().slice(0, 10) } : {}),
    note: 'Attributes are recorded, never scored. An absent field means unknown, never zero and never bad. `momentum` says whether the site shows a record by default; the About page states the thresholds.',
  };

  return new Response(JSON.stringify({ meta, facets, software: providers, drafts, asides }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
