import { loadSoftware, type Provider } from '../lib/providers';
import type { APIRoute } from 'astro';
import { credit, licenceUrl } from '../lib/seo';
import { recordJsonPath, recordMarkdownPath, recordPath } from '../lib/paths';

/**
 * The record as JSON: every field the page shows, each source with the date it
 * was read, and the prose. software.json holds the facet fields of all records;
 * this is the whole of one, for a reader that wants to check a fact rather than
 * filter a list. An absent field is unknown, as on the page.
 */
export async function getStaticPaths() {
  const providers = await loadSoftware();
  return providers.map((provider) => ({
    params: {
      record: recordJsonPath(provider)
        .slice(1)
        .replace(/\.json$/, ''),
    },
    props: { provider },
  }));
}

export const GET: APIRoute = async ({ props, site }) => {
  const { provider } = props as { provider: Provider };
  const origin = site?.origin ?? '';
  const meta = {
    name: 'FindSoftware',
    page: `${origin}${recordPath(provider)}`,
    markdown: `${origin}${recordMarkdownPath(provider)}`,
    license: licenceUrl,
    attribution: credit,
    note: 'Attributes are recorded, never scored. An absent field means unknown, never zero and never bad.',
  };
  return new Response(JSON.stringify({ meta, record: provider.data, prose: provider.body?.trim() || null }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
