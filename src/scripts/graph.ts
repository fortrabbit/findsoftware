/**
 * Draws the graph data the page embeds with Sigma. Positions come from the
 * build, so nothing here lays anything out: it paints, names on hover, opens a
 * leaf's record on click, and explains and narrows to a hub's subtree.
 */
import Graph from 'graphology';
import Sigma from 'sigma';
import { drawDiscNodeHover } from 'sigma/rendering';
import type { GraphNode } from '../lib/graph';

const root = document.querySelector<HTMLElement>('[data-graph]');
const data = document.querySelector<HTMLScriptElement>('[data-graph-data]');

if (root && data) {
  const { nodes, edges } = JSON.parse(data.textContent ?? '{}') as { nodes: GraphNode[]; edges: [string, string][] };
  const container = root.querySelector<HTMLElement>('[data-graph-canvas]')!;
  const tip = root.querySelector<HTMLElement>('[data-graph-tip]')!;
  root.hidden = false;

  // Sigma's WebGL edges ignore alpha, so a faint line is the colour mixed into the page colour up front.
  const mix = (hex: string, over: string, share: number) => {
    const rgb = (value: string) => [1, 3, 5].map((at) => parseInt(value.slice(at, at + 2), 16));
    const [top, base] = [rgb(hex), rgb(over)];
    return `rgb(${top.map((channel, at) => Math.round(channel * share + base[at] * (1 - share))).join(', ')})`;
  };
  type Tier = 'language' | 'root' | 'branch' | 'leaf';
  // Read from the tokens, and read again when the theme changes: canvas colours do not follow CSS on their own.
  const swatch = document.createElement('canvas').getContext('2d')!;
  const readColors = () => {
    const style = getComputedStyle(document.documentElement);
    // The minifier shortens #000000 to #000; a canvas hands any colour back as six-digit hex, which mix() reads.
    const token = (name: string) => {
      swatch.fillStyle = style.getPropertyValue(name).trim();
      return swatch.fillStyle;
    };
    const [ink, link, hub, page] = ['--color-ink', '--color-link', '--color-hub', '--color-page'].map(token);
    return {
      ink,
      page,
      quiet: token('--color-hover'),
      focusEdge: mix(link, page, 0.3),
      // Contrast follows depth: languages, then hubs on a language, then hubs on a hub, all named; leaves recede.
      tier: { language: ink, root: hub, branch: mix(hub, page, 0.7), leaf: mix(link, page, 0.55) } as Record<
        Tier,
        string
      >,
    };
  };
  let colors = readColors();
  const labelSize = 10;
  const labelFont = getComputedStyle(document.documentElement).getPropertyValue('--font-data').trim();

  // A hub has four or more projects built directly on it and gets the tip; fewer reads as a stray pair, so it stays a leaf and links.
  const outDegree = new Map<string, number>();
  for (const [source] of edges) outDegree.set(source, (outDegree.get(source) ?? 0) + 1);
  const isHub = (key: string) => (outDegree.get(key) ?? 0) >= 4;

  const graph = new Graph();
  const byKey = new Map(nodes.map((node) => [node.key, node]));
  // The build lays the graph out on a square; widening it to the frame fills a screen of any shape.
  const aspect = container.clientWidth / container.clientHeight || 1;
  for (const { key, kind, label, x, y } of nodes) {
    const shown = { x: x * aspect, y, label };
    if (kind === 'language') graph.addNode(key, { ...shown, tier: 'language', size: 7, forceLabel: true });
    else if (isHub(key))
      graph.addNode(key, {
        ...shown,
        tier: kind === 'root' ? 'root' : 'branch',
        size: kind === 'root' ? 5.5 : 5,
        forceLabel: true,
      });
    else graph.addNode(key, { ...shown, tier: 'leaf', size: 4, forceLabel: false });
  }
  graph.updateEachNodeAttributes((_, attributes) => ({ ...attributes, color: colors.tier[attributes.tier as Tier] }));
  for (const [source, target] of edges) graph.addEdge(source, target, { size: 1 });

  const childrenOf = (key: string) => graph.outNeighbors(key);
  const subtree = (key: string) => {
    const seen = new Set([key]);
    const queue = [key];
    for (let at = 0; at < queue.length; at++)
      for (const child of childrenOf(queue[at])) if (!seen.has(child) && seen.add(child)) queue.push(child);
    return seen;
  };

  let focus: { key: string; members: Set<string>; named: Set<string>; edges: Set<string> } | undefined;
  let pinned: string | undefined;
  // Off by default: hundreds of names at once overlap. Languages and hubs stay named; the toggle names every node.
  let labels = false;
  const teardown = new AbortController();

  const sigma = new Sigma(graph, container, {
    labelFont,
    labelSize,
    // Only forced names are drawn, so Sigma's label grid never picks some by A–Z order; the hover layer names the rest.
    labelRenderedSizeThreshold: Infinity,
    defaultEdgeColor: colors.quiet,
    // A halo in the page colour keeps a label readable where lines cross it.
    defaultDrawNodeLabel: (context, data) => {
      if (!data.label) return;
      context.font = `${labelSize}px ${labelFont}`;
      const x = data.x + data.size + 3;
      const y = data.y + labelSize / 3;
      context.lineJoin = 'round';
      context.lineWidth = 3;
      context.strokeStyle = colors.page;
      context.strokeText(data.label, x, y);
      context.fillStyle = colors.ink;
      context.fillText(data.label, x, y);
    },
    // Sigma draws its hover box for any node under the pointer; a node outside the focus is backdrop and gets none.
    defaultDrawNodeHover: (context, data, settings) => {
      if (!data.backdrop) drawDiscNodeHover(context, data, settings);
    },
    // Sigma hands the reducers a copy, so they change it in place.
    nodeReducer: (key, attributes) => {
      if (focus && !focus.members.has(key)) {
        attributes.backdrop = true;
        attributes.color = colors.quiet;
        attributes.size = 3;
        attributes.forceLabel = false;
        return attributes;
      }
      attributes.forceLabel = labels || attributes.forceLabel || Boolean(focus?.named.has(key));
      attributes.highlighted = key === pinned;
      return attributes;
    },
    edgeReducer: (key, attributes) => {
      if (!focus) return attributes;
      if (focus.edges.has(key)) attributes.color = colors.focusEdge;
      else attributes.hidden = true;
      return attributes;
    },
  });

  // One tip for hubs, in the corner of the frame so it covers no neighbours. Hovering shows it, clicking pins it.
  const projects = new Map<string, number>();
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
    if (!projects.has(node.key)) projects.set(node.key, subtree(node.key).size - 1);
    const built = projects.get(node.key)!;
    if (node.kind === 'language') line(`${built} projects`);
    else if (built) line(`${built} built on it`);
  };

  const show = (key: string | undefined) => {
    if (key) describe(byKey.get(key)!);
    tip.hidden = !key;
  };

  const outside = (key: string) => Boolean(focus && !focus.members.has(key));

  // Hovering only touches the cursor and the tip: Sigma names the node in its hover layer without redrawing the graph.
  sigma.on('enterNode', ({ node }) => {
    if (outside(node)) return;
    if (isHub(node)) show(node);
    container.style.cursor = 'pointer';
  });
  sigma.on('leaveNode', () => {
    container.style.cursor = '';
    show(pinned);
  });

  // Fits from the reset view's pixels: a fit from the current view zooms out on a subtree as wide as the graph.
  const fit = (keys: Set<string>) => {
    const cameraState = { x: 0.5, y: 0.5, ratio: 1, angle: 0 };
    let [left, right, top, bottom] = [Infinity, -Infinity, Infinity, -Infinity];
    let [minX, maxX, minY, maxY] = [Infinity, -Infinity, Infinity, -Infinity];
    for (const key of keys) {
      const point = sigma.getNodeDisplayData(key)!;
      const at = sigma.framedGraphToViewport(point, { cameraState });
      [left, right, top, bottom] = [
        Math.min(left, at.x),
        Math.max(right, at.x),
        Math.min(top, at.y),
        Math.max(bottom, at.y),
      ];
      [minX, maxX, minY, maxY] = [
        Math.min(minX, point.x),
        Math.max(maxX, point.x),
        Math.min(minY, point.y),
        Math.max(maxY, point.y),
      ];
    }
    const ratio = Math.min(
      1,
      Math.max((right - left) / container.clientWidth, (bottom - top) / container.clientHeight) * 1.15,
    );
    sigma.getCamera().animate({ x: (minX + maxX) / 2, y: (minY + maxY) / 2, ratio, angle: 0 }, { duration: 400 });
  };

  const narrow = (node: string) => {
    pinned = node;
    show(node);
    const members = subtree(node);
    // Past 80 (JavaScript, PHP, no language) the names would overlap: then only the hubs one level down are named, the rest on hover or with the toggle.
    const children = childrenOf(node).filter((child) => members.size <= 80 || isHub(child));
    const inside = graph.filterEdges((_, __, source, target) => members.has(source) && members.has(target));
    focus = { key: node, members, named: new Set([node, ...children]), edges: new Set(inside) };
    fit(members);
    sigma.refresh();
  };

  // A leaf opens its record, in a new tab with the usual modifier keys. A hub pins its tip and narrows to its subtree.
  sigma.on('clickNode', ({ node, event }) => {
    if (outside(node)) return;
    if (isHub(node)) return narrow(node);
    const href = byKey.get(node)?.href;
    if (!href) return;
    const { ctrlKey, metaKey, shiftKey } = event.original as MouseEvent;
    if (ctrlKey || metaKey || shiftKey) window.open(href, '_blank');
    else window.location.assign(href);
  });

  // The nearest hub above, through any parent; a language has none.
  const hubAbove = (key: string) => {
    const queue = graph.inNeighbors(key);
    const seen = new Set(queue);
    for (let at = 0; at < queue.length; at++) {
      if (isHub(queue[at])) return queue[at];
      for (const parent of graph.inNeighbors(queue[at])) if (!seen.has(parent) && seen.add(parent)) queue.push(parent);
    }
  };
  const unpin = () => {
    pinned = undefined;
    show(undefined);
  };
  const showAll = () => {
    unpin();
    focus = undefined;
    sigma.refresh();
    sigma.getCamera().animatedReset();
  };

  // A click on the empty stage lets go of the tip, and of the focus if there is one.
  sigma.on('clickStage', () => (focus ? showAll() : unpin()));
  // Escape steps up one hub at a time; from a language, or after a zoom by hand, it returns to the whole graph.
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key !== 'Escape') return;
      const up = focus && hubAbove(focus.key);
      if (up) narrow(up);
      else showAll();
    },
    { signal: teardown.signal },
  );

  const repaint = () => {
    colors = readColors();
    graph.updateEachNodeAttributes((_, attributes) => ({ ...attributes, color: colors.tier[attributes.tier as Tier] }));
    sigma.setSetting('defaultEdgeColor', colors.quiet);
  };
  // The theme switch sets data-theme on the root; the system setting changes the media query.
  const themeWatch = new MutationObserver(repaint);
  themeWatch.observe(document.documentElement, { attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', repaint, { signal: teardown.signal });

  // A dev-server reload runs this file again: the old graph lets go of its WebGL contexts first, or the browser runs out and drops layers.
  import.meta.hot?.dispose(() => {
    teardown.abort();
    themeWatch.disconnect();
    sigma.kill();
  });

  // Scrolling over the graph scrolls the page; a trackpad pinch arrives as a wheel event with ctrlKey and still zooms.
  root.addEventListener('wheel', (event) => event.ctrlKey || event.stopPropagation(), {
    capture: true,
    signal: teardown.signal,
  });

  const camera = sigma.getCamera();
  const controls = root.querySelector<HTMLElement>('[data-graph-controls]')!;
  controls.addEventListener(
    'click',
    (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('button');
      if (!button) return;
      if (button.value === 'in') camera.animatedZoom({ duration: 200 });
      if (button.value === 'out') camera.animatedUnzoom({ duration: 200 });
      if (button.value === 'reset') camera.animatedReset({ duration: 200 });
      if (button.value === 'labels') {
        labels = !labels;
        button.setAttribute('aria-pressed', String(labels));
        // Every name at once costs a frame per pan, so they step aside while the view moves.
        sigma.setSetting('hideLabelsOnMove', labels);
        sigma.refresh();
      }
    },
    { signal: teardown.signal },
  );
}
