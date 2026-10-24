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
  // The tokens are hex; a canvas takes the same colour with an alpha for lines that overlap.
  const alpha = (hex: string, opacity: number) => {
    const [r, g, b] = [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16));
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const labelSize = 10;
  const labelFont = token('--font-data');

  const graph = new Graph();
  const byKey = new Map(nodes.map((node) => [node.key, node]));
  // The build lays the graph out on a square; widening it to the frame fills a screen of any shape.
  const aspect = container.clientWidth / container.clientHeight || 1;
  for (const node of nodes) {
    const language = node.kind === 'language';
    graph.addNode(node.key, {
      x: node.x * aspect,
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
  // Off by default: hundreds of names at once are unreadable and slow to paint. Languages stay named.
  let labels = false;

  const sigma = new Sigma(graph, container, {
    labelFont,
    labelSize,
    // A halo in the page colour keeps a label readable where lines cross it.
    defaultDrawNodeLabel: (context, data) => {
      if (!data.label) return;
      context.font = `${labelSize}px ${labelFont}`;
      const x = data.x + data.size + 3;
      const y = data.y + labelSize / 3;
      context.lineJoin = 'round';
      context.lineWidth = 3;
      context.strokeStyle = page;
      context.strokeText(data.label, x, y);
      context.fillStyle = ink;
      context.fillText(data.label, x, y);
    },
    // Sigma's label grid skips a name that would overlap another; zooming in reveals the rest.
    labelRenderedSizeThreshold: 3,
    defaultEdgeColor: quiet,
    zIndex: true,
    nodeReducer: (key, attributes) => {
      if (!focus || focus.members.has(key)) {
        const marked = key === hovered || key === pinned || key === focus?.key;
        const named = labels || focus || attributes.forceLabel || key === hovered;
        return {
          ...attributes,
          label: named ? attributes.label : '',
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

  // One tip for hover and click, under the node's own label. The name is the link, so hovering a node and
  // clicking its name opens the record; the tip lingers long enough for the pointer to reach it.
  const describe = (node: GraphNode) => {
    tip.replaceChildren();
    const line = (text: string) => tip.append(Object.assign(document.createElement('p'), { textContent: text }));
    const name = document.createElement('p');
    name.append(
      node.href
        ? Object.assign(document.createElement('a'), { href: node.href, textContent: node.label })
        : Object.assign(document.createElement('strong'), { textContent: node.label }),
    );
    tip.append(name);
    if (node.category?.length) line(node.category.join(', '));
    if (node.parents?.length) line(`Built on ${node.parents.join(', ')}`);
    if (node.status) line(node.status);
    const built = subtree(node.key).size - 1;
    if (node.kind === 'language') line(`${built} projects`);
    else if (built) line(`${built} built on it`);
  };

  let shown: string | undefined;
  const place = () => {
    if (!shown) return;
    const at = sigma.framedGraphToViewport(sigma.getNodeDisplayData(shown)!);
    tip.style.left = `${Math.max(4, Math.min(at.x - 6, container.clientWidth - tip.offsetWidth - 4))}px`;
    tip.style.top = `${Math.min(at.y + 10, container.clientHeight - tip.offsetHeight - 4)}px`;
  };
  const show = (key: string) => {
    shown = key;
    describe(byKey.get(key)!);
    tip.hidden = false;
    place();
  };
  let hiding: number | undefined;
  const hideSoon = () => {
    clearTimeout(hiding);
    hiding = window.setTimeout(() => {
      if (pinned) show(pinned);
      else {
        shown = undefined;
        tip.hidden = true;
      }
    }, 400);
  };
  tip.addEventListener('pointerenter', () => clearTimeout(hiding));
  tip.addEventListener('pointerleave', hideSoon);
  sigma.on('afterRender', place);

  sigma.on('enterNode', ({ node }) => {
    clearTimeout(hiding);
    hovered = node;
    show(node);
    container.style.cursor = 'pointer';
    sigma.refresh({ skipIndexation: true });
  });
  sigma.on('leaveNode', () => {
    hovered = undefined;
    container.style.cursor = '';
    hideSoon();
    sigma.refresh({ skipIndexation: true });
  });

  // A click keeps the tip open; a project with others built on it also narrows the graph to them.
  sigma.on('clickNode', ({ node }) => {
    pinned = node;
    show(node);
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
    shown = undefined;
    tip.hidden = true;
    if (!focus) return;
    focus = undefined;
    sigma.refresh({ skipIndexation: true });
    sigma.getCamera().animatedReset();
  });

  const camera = sigma.getCamera();
  const controls = root.querySelector<HTMLElement>('[data-graph-controls]')!;
  controls.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('button');
    if (!button) return;
    if (button.value === 'in') camera.animatedZoom({ duration: 200 });
    if (button.value === 'out') camera.animatedUnzoom({ duration: 200 });
    if (button.value === 'reset') camera.animatedReset({ duration: 200 });
    if (button.value === 'labels') {
      labels = !labels;
      button.setAttribute('aria-pressed', String(labels));
      sigma.refresh({ skipIndexation: true });
    }
  });
}
