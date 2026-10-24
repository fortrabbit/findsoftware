/**
 * The "built on" relations as one graph: languages in the centre, the projects
 * built on nothing else around them, and everything built on those further out.
 *
 * Pure so `node --test` can hold it: the page hands in plain records and gets
 * back nodes with positions and the same tree as nested lists. The layout runs
 * here, at build time, from fixed starting points, so a node sits in the same
 * place on every visit and nothing moves while the page loads.
 */
import Graph from 'graphology';
import forceAtlas2 from 'graphology-layout-forceatlas2';

export interface GraphRecord {
  id: string;
  name: string;
  description?: string;
  language?: string;
  basedOn?: string[];
  category?: string[];
  status?: string;
  href: string;
}

export interface GraphNode {
  key: string;
  label: string;
  kind: 'language' | 'root' | 'project';
  x: number;
  y: number;
  href?: string;
  description?: string;
  category?: string[];
  parents?: string[];
  status?: string;
}

export interface TreeItem {
  key: string;
  label: string;
  href?: string;
  children: TreeItem[];
}

/** Records with no language still need a centre; absent stays visible as absent. */
export const unknownLanguage = 'language:none';

/** A stable number in [0, 1) from a string (FNV-1a), so a starting point is the same on every build. */
const spread = (text: string) => {
  let hash = 0x811c9dc5;
  for (const char of text) hash = Math.imul(hash ^ char.charCodeAt(0), 0x01000193);
  return (hash >>> 0) / 2 ** 32;
};

const byLabel = (a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label, 'en');

/**
 * `show` decides which records are drawn; their parents come along whatever
 * their status, since a child without the thing it is built on reads as a root.
 */
export function buildGraph(
  records: GraphRecord[],
  show: (record: GraphRecord) => boolean,
  language: (id: string) => { label: string; href: string },
): { nodes: GraphNode[]; edges: [string, string][]; tree: TreeItem[] } {
  const byId = new Map(records.map((record) => [record.id, record]));
  const drawn = new Map<string, GraphRecord>();
  const add = (record: GraphRecord) => {
    if (drawn.has(record.id)) return;
    drawn.set(record.id, record);
    for (const parent of record.basedOn ?? []) {
      const found = byId.get(parent);
      if (found) add(found);
    }
  };
  records.filter(show).forEach(add);

  const parentsOf = (record: GraphRecord) => (record.basedOn ?? []).filter((parent) => drawn.has(parent));
  const languageOf = (record: GraphRecord) => (record.language ? `language:${record.language}` : unknownLanguage);

  const graph = new Graph();
  const languages = [...new Set([...drawn.values()].filter((r) => !parentsOf(r).length).map(languageOf))].sort();

  // Fixed starting points: languages on a small ring, each record in its language's sector further out.
  // The offset comes from the id, so no two records start on the same spot: the layout cannot pull apart a stack.
  languages.forEach((language, index) => {
    const angle = (2 * Math.PI * index) / languages.length;
    graph.addNode(language, { x: 150 * Math.cos(angle), y: 150 * Math.sin(angle) });
  });
  const ids = [...drawn.keys()].sort();
  for (const id of ids) {
    const record = drawn.get(id)!;
    const sector = languages.indexOf(languageOf(record));
    const angle = (2 * Math.PI * (sector + spread(id))) / languages.length;
    const radius = (parentsOf(record).length ? 400 : 250) + 100 * spread(`${id}:radius`);
    graph.addNode(id, { x: radius * Math.cos(angle), y: radius * Math.sin(angle) });
  }

  const edges: [string, string][] = [];
  for (const id of ids) {
    const record = drawn.get(id)!;
    const parents = parentsOf(record);
    for (const source of parents.length ? parents : [languageOf(record)]) {
      if (!graph.hasEdge(source, id)) {
        graph.addEdge(source, id);
        edges.push([source, id]);
      }
    }
  }

  forceAtlas2.assign(graph, {
    iterations: 1500,
    settings: {
      ...forceAtlas2.inferSettings(graph),
      gravity: 0.5,
      scalingRatio: 20,
      linLogMode: true,
      barnesHutOptimize: false,
    },
  });

  // ForceAtlas2 settles into a disc; the elliptical grid mapping stretches that disc onto a square,
  // so the page can widen it to the frame instead of leaving the corners empty.
  const keys = graph.nodes();
  const cx = keys.reduce((sum, key) => sum + graph.getNodeAttribute(key, 'x'), 0) / keys.length;
  const cy = keys.reduce((sum, key) => sum + graph.getNodeAttribute(key, 'y'), 0) / keys.length;
  const reach =
    Math.max(...keys.map((key) => Math.hypot(graph.getNodeAttribute(key, 'x') - cx, graph.getNodeAttribute(key, 'y') - cy))) || 1;
  const half = (a: number, b: number) =>
    0.5 * Math.sqrt(Math.max(0, 2 + a * a - b * b + 2 * Math.SQRT2 * a)) -
    0.5 * Math.sqrt(Math.max(0, 2 + a * a - b * b - 2 * Math.SQRT2 * a));
  for (const key of keys) {
    const u = (graph.getNodeAttribute(key, 'x') - cx) / reach;
    const v = (graph.getNodeAttribute(key, 'y') - cy) / reach;
    graph.setNodeAttribute(key, 'x', 500 * half(u, v));
    graph.setNodeAttribute(key, 'y', 500 * half(v, u));
  }

  const round = (value: number) => Math.round(value * 100) / 100;
  const nodes: GraphNode[] = [
    ...languages.map((key) => ({
      key,
      ...(key === unknownLanguage ? { label: 'Language not recorded' } : language(key.slice('language:'.length))),
      kind: 'language' as const,
      x: round(graph.getNodeAttribute(key, 'x')),
      y: round(graph.getNodeAttribute(key, 'y')),
    })),
    ...ids.map((id) => {
      const record = drawn.get(id)!;
      const parents = parentsOf(record);
      return {
        key: id,
        label: record.name,
        kind: parents.length ? ('project' as const) : ('root' as const),
        x: round(graph.getNodeAttribute(id, 'x')),
        y: round(graph.getNodeAttribute(id, 'y')),
        href: record.href,
        description: record.description,
        category: record.category,
        parents: parents.map((parent) => drawn.get(parent)!.name),
        status: record.status,
      };
    }),
  ];

  // The same tree as links. A project built on two parents is listed under both; a cycle stops at the repeat.
  const childrenOf = new Map<string, string[]>();
  for (const [source, target] of edges) childrenOf.set(source, [...(childrenOf.get(source) ?? []), target]);
  const label = new Map(nodes.map((node) => [node.key, node]));
  const branch = (key: string, path: Set<string>): TreeItem => ({
    key,
    label: label.get(key)!.label,
    href: label.get(key)!.href,
    children: (childrenOf.get(key) ?? [])
      .filter((child) => !path.has(child))
      .map((child) => branch(child, new Set([...path, child])))
      .sort(byLabel),
  });
  const tree = languages.map((language) => branch(language, new Set([language]))).sort(byLabel);

  return { nodes, edges, tree };
}
