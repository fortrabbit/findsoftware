/**
 * The register's "built on" graph, laid out once per build for /graph.json,
 * for the old /graph/ address to forward, and for each record page to ask
 * whether it is in it.
 */
import { buildGraph, type GraphData as Drawing } from './graph';
import { fieldOf, labelOf, slugOf } from './fields';
import { isListed, loadSoftware } from './providers';
import { recordPath } from './paths';
import { loadBands } from './usage-data';
import { inDefaultView, loadMomentum } from './momentum-data';

export interface GraphData extends Drawing {
  /** Every record drawn: the listed ones and the parents they bring along. */
  drawn: Set<string>;
}

let built: Promise<GraphData> | undefined;

const make = async (): Promise<GraphData> => {
  const software = await loadSoftware();
  const bands = await loadBands();
  const momentum = await loadMomentum();
  const listed = new Set(software.filter(isListed).map((entry) => entry.id));
  const { nodes, edges } = buildGraph(
    software.map((entry) => ({
      id: entry.id,
      name: entry.data.name,
      language: entry.data.language,
      basedOn: entry.data.basedOn,
      href: recordPath(entry),
      band: bands.get(entry.id),
      quiet: listed.has(entry.id) && !inDefaultView(momentum, entry.id),
    })),
    (record) => listed.has(record.id),
    (id) => ({
      label: labelOf('language', id),
      href: `/languages/${slugOf(fieldOf.get('language')!, { id, label: labelOf('language', id) })}/`,
    }),
  );
  const drawn = new Set(nodes.filter((node) => node.kind !== 'language').map((node) => node.key));
  return { nodes, edges, drawn };
};

/** Once per build; `astro dev` builds afresh so an edited record shows on the next request. */
export const loadGraph = (): Promise<GraphData> => {
  if (!import.meta.env.PROD) return make();
  built ??= make();
  return built;
};

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
