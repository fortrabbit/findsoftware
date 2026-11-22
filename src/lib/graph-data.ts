/**
 * The register's "built on" graph, laid out once until a record changes (see dev-cache.ts) for /graph.json,
 * for the old /graph/ address to forward, and for each record page to ask
 * whether it is in it.
 */
import { buildGraph, type GraphData as Drawing } from './graph';
import { fieldOf, labelOf, slugOf } from './fields';
import { isListed, loadSoftware } from './providers';
import { recordPath } from './paths';
import { loadBands } from './usage-data';
import { inDefaultView, loadMomentum } from './momentum-data';
import { cached } from './dev-cache';
import { loadFacets } from './facets';

export interface GraphData extends Drawing {
  /** Every record drawn: the listed ones and the parents they bring along. */
  drawn: Set<string>;
}

const make = async (): Promise<GraphData> => {
  // Discontinued software is not drawn, not even as the parent of a record that is.
  const software = (await loadSoftware()).filter((entry) => entry.data.status !== 'discontinued');
  const bands = await loadBands();
  const momentum = await loadMomentum();
  // The register's default view; a parent without momentum still comes along with its children.
  const listed = new Set(
    software.filter((entry) => isListed(entry) && inDefaultView(momentum, entry.id)).map((entry) => entry.id),
  );
  const withPage = new Set(
    ((await loadFacets()).facets.find((facet) => facet.field === 'language')?.values ?? [])
      .filter((value) => value.count > 0)
      .map((value) => value.id),
  );
  const { nodes, edges } = buildGraph(
    software.map((entry) => ({
      id: entry.id,
      name: entry.data.name,
      language: entry.data.language,
      basedOn: entry.data.basedOn,
      href: recordPath(entry),
      band: bands.get(entry.id),
    })),
    (record) => listed.has(record.id),
    // Linked only when its page is built: a language page lists register records, and a record beside the register can bring its language into the graph.
    (id) => ({
      label: labelOf('language', id),
      ...(withPage.has(id)
        ? { href: `/languages/${slugOf(fieldOf.get('language')!, { id, label: labelOf('language', id) })}/` }
        : {}),
    }),
  );
  const drawn = new Set(nodes.filter((node) => node.kind !== 'language').map((node) => node.key));
  return { nodes, edges, drawn };
};

/** Laid out once until a record changes (see dev-cache.ts). */
export const loadGraph: () => Promise<GraphData> = cached(make);

export interface Step {
  key: string;
  label: string;
  href: string;
}

/**
 * The "built on" chain above a record, from its language down to its nearest
 * parent, following the first parent at each step: what the record's
 * breadcrumb shows and where Escape goes. A record outside the graph starts
 * from the first of its parents that is in it, or from its language.
 */
export const trailOf = async (record: { id: string; basedOn?: string[]; language?: string }): Promise<Step[]> => {
  const { nodes, edges } = await loadGraph();
  const byKey = new Map(nodes.map((node) => [node.key, node]));
  const parentOf = new Map<string, string>();
  for (const [source, target] of edges) if (!parentOf.has(target)) parentOf.set(target, source);

  const start = byKey.has(record.id)
    ? parentOf.get(record.id)
    : [...(record.basedOn ?? []), record.language && `language:${record.language}`].find((key): key is string =>
        Boolean(key && byKey.has(key)),
      );
  const steps: Step[] = [];
  for (let key = start; key && byKey.has(key) && !steps.some((step) => step.key === key); key = parentOf.get(key)) {
    const node = byKey.get(key)!;
    if (node.href) steps.unshift({ key, label: node.label, href: node.href });
  }
  return steps;
};
