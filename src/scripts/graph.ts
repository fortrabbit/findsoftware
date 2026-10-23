/**
 * Draws the graph data the page embeds with Sigma. Positions come from the
 * build, so nothing here lays anything out: it paints, explains on hover, and
 * narrows to a subtree on click.
 */
import Graph from 'graphology';
import Sigma from 'sigma';
import { fitViewportToNodes } from '@sigma/utils';
import type { GraphNode } from '../lib/graph';

const root = document.querySelector<HTMLElement>('[data-graph]');
const data = document.querySelector<HTMLScriptElement>('[data-graph-data]');

if (root && data) {
  const { nodes, edges } = JSON.parse(data.textContent ?? '{}') as { nodes: GraphNode[]; edges: [string, string][] };
  const container = root.querySelector<HTMLElement>('[data-graph-canvas]')!;
  const tip = root.querySelector<HTMLElement>('[data-graph-tip]')!;
  root.hidden = false;

  const style = getComputedStyle(document.documentElement);
  const token = (name: string) => style.getPropertyValue(name).trim();
  const ink = token('--color-ink');
  const link = token('--color-link');
  const quiet = token('--color-hover');
  const page = token('--color-page');
  // The tokens are hex; a canvas takes the same colour with an alpha for lines and labels that overlap.
  const alpha = (hex: string, opacity: number) => {
    const [r, g, b] = [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16));
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const labelSize = 10;
  const labelFont = token('--font-data');

  const graph = new Graph();
  const byKey = new Map(nodes.map((node) => [node.key, node]));
  for (const node of nodes) {
    const language = node.kind === 'language';
    graph.addNode(node.key, {
      x: node.x,
      y: node.y,
      label: node.label,
      size: language ? 7 : 4,
      color: language ? ink : link,
      forceLabel: language,
    });
  }
  for (const [source, target] of edges) graph.addEdge(source, target, { color: quiet, size: 1 });

  const childrenOf = (key: string) => graph.outNeighbors(key);
  const subtree = (key: string) => {
    const seen = new Set([key]);
    const queue = [key];
    while (queue.length)
      for (const child of childrenOf(queue.shift()!)) if (!seen.has(child) && seen.add(child)) queue.push(child);
    return seen;
  };

  let focus: { key: string; members: Set<string> } | undefined;
  let hovered: string | undefined;
  let pinned: string | undefined;

  const sigma = new Sigma(graph, container, {
    labelFont,
    labelSize,
    // A halo in the page colour keeps a label readable where lines cross it; the text itself stays translucent.
    defaultDrawNodeLabel: (context, data) => {
      if (!data.label) return;
      context.font = `${labelSize}px ${labelFont}`;
      const x = data.x + data.size + 3;
      const y = data.y + labelSize / 3;
      context.lineJoin = 'round';
      context.lineWidth = 2;
      context.strokeStyle = alpha(page, 0.6);
      context.strokeText(data.label, x, y);
      context.fillStyle = alpha(ink, 0.8);
      context.fillText(data.label, x, y);
    },
    // Every label at every zoom level: the grid that would thin them out is made finer than any label.
    labelRenderedSizeThreshold: 0,
    labelDensity: 100,
    labelGridCellSize: 10,
    defaultEdgeColor: quiet,
    zIndex: true,
    nodeReducer: (key, attributes) => {
      if (!focus || focus.members.has(key)) {
        const marked = key === hovered || key === pinned || key === focus?.key;
        return {
          ...attributes,
          forceLabel: attributes.forceLabel || Boolean(focus),
          highlighted: marked,
          zIndex: marked ? 2 : 1,
        };
      }
      return { ...attributes, color: quiet, label: '', zIndex: 0 };
    },
    edgeReducer: (key, attributes) => {
      if (!focus) return attributes;
      const inside = focus.members.has(graph.source(key)) && focus.members.has(graph.target(key));
      return inside ? { ...attributes, color: alpha(link, 0.35), size: 1 } : { ...attributes, hidden: true };
    },
  });

  // The hover tip and the card a click pins show the same facts; only the card carries the link, since it stays put.
  const describe = (node: GraphNode, into: HTMLElement, pinned: boolean) => {
    into.replaceChildren();
    const line = (text: string, strong = false) => {
      const p = document.createElement('p');
      if (strong) p.append(Object.assign(document.createElement('strong'), { textContent: text }));
      else p.textContent = text;
      into.append(p);
    };
    line(node.label, true);
    if (node.description) line(node.description);
    if (node.category?.length) line(node.category.join(', '));
    if (node.parents?.length) line(`Built on ${node.parents.join(', ')}`);
    if (node.status) line(node.status);
    if (node.kind === 'language') {
      const roots = childrenOf(node.key);
      const names = roots.map((key) => byKey.get(key)!.label).sort((a, b) => a.localeCompare(b, 'en'));
      line(`${subtree(node.key).size - 1} projects, ${roots.length} of them built on nothing else:`);
      line(names.length > 12 ? `${names.slice(0, 12).join(', ')} and ${names.length - 12} more` : names.join(', '));
    }
    const built = node.kind === 'language' ? 0 : subtree(node.key).size - 1;
    if (built) line(`${built} ${built === 1 ? 'project is' : 'projects are'} built on it`);
    if (!pinned) {
      line('Click for the link');
      return;
    }
    if (node.href) {
      const p = document.createElement('p');
      p.append(
        Object.assign(document.createElement('a'), {
          href: node.href,
          textContent: node.kind === 'language' ? `Projects written in ${node.label}` : `${node.label} in the register`,
        }),
      );
      into.append(p);
    }
  };

  const card = root.querySelector<HTMLElement>('[data-graph-card]')!;
  sigma.on('enterNode', ({ node, event }) => {
    hovered = node;
    if (node === pinned) return;
    describe(byKey.get(node)!, tip, false);
    tip.hidden = false;
    const box = container.getBoundingClientRect();
    tip.style.left = `${Math.min(event.x + 16, box.width - tip.offsetWidth - 8)}px`;
    tip.style.top = `${Math.min(event.y + 16, box.height - tip.offsetHeight - 8)}px`;
    container.style.cursor = 'pointer';
    sigma.refresh({ skipIndexation: true });
  });
  sigma.on('leaveNode', () => {
    hovered = undefined;
    tip.hidden = true;
    container.style.cursor = '';
    sigma.refresh({ skipIndexation: true });
  });

  // A click pins the card with the link; a project with others built on it also narrows the graph to them.
  sigma.on('clickNode', ({ node }) => {
    pinned = node;
    describe(byKey.get(node)!, card, true);
    card.hidden = false;
    tip.hidden = true;
    if (childrenOf(node).length) {
      focus = { key: node, members: subtree(node) };
      fitViewportToNodes(sigma, [...focus.members], { animate: true });
    } else if (focus && !focus.members.has(node)) {
      focus = undefined;
    }
    sigma.refresh({ skipIndexation: true });
  });
  sigma.on('clickStage', () => {
    pinned = undefined;
    card.hidden = true;
    if (!focus) return;
    focus = undefined;
    sigma.refresh({ skipIndexation: true });
    sigma.getCamera().animatedReset();
  });
}
