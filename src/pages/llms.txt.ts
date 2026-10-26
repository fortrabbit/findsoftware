import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadFacets, loadPairPages } from '../lib/facets';
import { pairPath } from '../lib/pairs';
import { loadProviders } from '../lib/providers';
import { recordMarkdownPath } from '../lib/paths';

/**
 * The dataset is the asset and being cited is the distribution thesis, so the
 * machine-readable index is a launch feature rather than a nicety. Everything
 * here is a link to something that exists; nothing is summarised twice.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = (await loadProviders()).sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));
  const { facets } = await loadFacets();
  const pairs = await loadPairPages();
  const notes = (await getCollection('notes'))
    .filter((entry) => entry.id !== 'aside/stubs')
    .sort((a, b) => a.id.localeCompare(b.id, 'en'));

  /*
   * A note is keyed by the value's id, and the page is at the value's slug. The
   * two differ wherever a field slugs from its label — /entry-price/xs/ is a note
   * filename and was never an address — so the URL is resolved through the facet
   * rather than built from the id. Two directories are not facets at all and are
   * published at the root: `aside/` holds the groups beside the register, and
   * `page/` holds the introduction to a page that writes itself.
   */
  const valueOf = (id: string) => {
    const [facetId, valueId] = id.split('/');
    const facet = facets.find((entry) => entry.id === facetId);
    return { facet, value: valueId ? facet?.values.find((entry) => entry.id === valueId) : undefined };
  };

  const urlOf = (id: string) => {
    const { facet, value } = valueOf(id);
    if (facet && value) return `${origin}/${facet.id}/${value.slug}/`;

    return `${origin}/${id.replace(/^(aside|page)\//, '')}/`;
  };

  const headingOf = (id: string) => {
    const { facet, value } = valueOf(id);
    if (!id.includes('/')) return facet?.label ?? id;

    return value?.label ?? id.split('/')[1];
  };

  const lines = [
    '# FindSoftware',
    '',
    '> A maintained, openly-licensed, ratings-free dataset of software to build websites with. Every project meeting a mechanical scope test is listed, described by attributes rather than scores. Published by fortrabbit, a hosting company; hosting on fortrabbit is never a reason to be listed and never a field.',
    '',
    'Nothing here is rated, scored or affiliate-ordered, and the register is alphabetical. Absent fields mean unknown, never zero and never bad.',
    '',
    'Data is CC BY 4.0. Reuse it freely, including in an answer; the one condition is credit, and this is the whole of it: FindSoftware, CC BY 4.0.',
    '',
    '## Start here',
    '',
    `- [About, and who publishes this](${origin}/about/)`,
    `- [Listing criteria, the review, and stubs](${origin}/criteria/)`,
    `- [Every project, filterable](${origin}/)`,
    `- [software.json, every facet and every record's facet fields](${origin}/software.json)`,
    `- [software.csv, the same records as one table](${origin}/software.csv)`,
    `- [llms-full.txt, the whole register as one document](${origin}/llms-full.txt)`,
    `- [feed.xml, records ordered by the date they were last checked](${origin}/feed.xml)`,
    `- [openapi.json, these files described as a read-only API](${origin}/openapi.json)`,
    '',
    /*
     * The rule, said once, rather than a second URL beside two hundred links. A
     * retrieval step that knows it does not need the index to carry both forms.
     */
    /*
     * Named precisely, because the sentence is a promise a fetcher will act on.
     * It used to say "every page", which was true of the four generated kinds and
     * false of the three list pages beside the register — a 404 for anything that
     * believed it.
     */
    'A record, a facet value and a whole facet each have a markdown copy at the same address with `.md` appended: /kirby.md, /categories/cms.md, /categories/index.md. So does every written page: /about.md, /criteria.md. A record also has a JSON copy with `.json` appended, every field with its source and the date it was read: /kirby.json.',
    '',
    '## Facets',
    '',
    ...facets.map((facet) => `- [${facet.label}](${origin}/${facet.id}/index.md): ${facet.values.length} values`),
    '',
    /*
     * Two facets at once — "PHP CMSs with a database" — which is the shape of the
     * question rather than "list software". Each is a real page with a markdown
     * copy, so an answer can cite the address it actually used. Left out while no
     * pairing is published, rather than announced with a zero.
     */
    ...(pairs.length
      ? [
          '',
          `## Combinations (${pairs.length})`,
          '',
          ...pairs.map(
            (page) =>
              `- [${page.av.label} and ${page.bv.label}](${origin}${pairPath(page)}): ${page.matches.length} projects`,
          ),
        ]
      : []),
    '',
    '## Notes',
    '',
    ...notes.map((entry) =>
      `- [${entry.data.title ?? headingOf(entry.id)}](${urlOf(entry.id)}): ${entry.data.description ?? ''}`.trimEnd(),
    ),
    '',
    `## Software (${providers.length})`,
    '',
    // Names only, each at its markdown copy: the descriptions are in llms-full.txt, and an index is read whole.
    ...providers.map((provider) => `- [${provider.data.name}](${origin}${recordMarkdownPath(provider)})`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
