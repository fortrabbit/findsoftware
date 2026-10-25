/**
 * The register's "built on" graph, laid out once per build for /graph.json,
 * for the old /graph/ address to forward, and for each record page to ask
 * whether it is in it.
 */
import { buildGraph, type GraphData as Drawing } from './graph';
import { fieldOf, labelOf, slugOf } from './fields';
import { isListed, loadSoftware } from './providers';
import { recordPath } from './paths';

export interface GraphData extends Drawing {
  /** Every record drawn: the listed ones and the parents they bring along. */
  drawn: Set<string>;
}

let built: Promise<GraphData> | undefined;

const make = async (): Promise<GraphData> => {
  const software = await loadSoftware();
  const listed = new Set(software.filter(isListed).map((entry) => entry.id));
  const { nodes, edges } = buildGraph(
    software.map((entry) => ({
      id: entry.id,
      name: entry.data.name,
      language: entry.data.language,
      basedOn: entry.data.basedOn,
      href: recordPath(entry),
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
