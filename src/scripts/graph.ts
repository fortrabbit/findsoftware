/**
 * Draws the "built on" graph with Sigma. Positions come from the build, so
 * nothing here lays anything out: it paints, names on hover, opens a record on
 * click, and on /graph/ narrows to a hub's subtree before opening it.
 *
 * A record page mounts the same graph on one record: its family named, its
 * siblings as dots, the rest of the register behind them. There every dot opens
 * its record at once, and nothing narrows.
 */
import Graph from 'graphology';
import Sigma from 'sigma';
import type { GraphData } from '../lib/graph';

export function mountGraph(root: HTMLElement, { nodes, edges }: GraphData, { record: page }: { record?: string } = {}) {
  const container = root.querySelector<HTMLElement>('[data-graph-canvas]')!;

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
      focusEdge: mix(link, page, 0.45),
      // Contrast follows depth: languages, then hubs on a language, then hubs on a hub; leaves recede.
      tier: { language: ink, root: hub, branch: mix(hub, page, 0.7), leaf: mix(link, page, 0.55) } as Record<
        Tier,
        string
      >,
    };
  };
  let colors = readColors();
  const labelSize = 10;
  const labelFont = getComputedStyle(document.documentElement).getPropertyValue('--font-data').trim();

  // A hub has four or more projects built directly on it; fewer reads as a stray pair, so it stays a leaf.
  const outDegree = new Map<string, number>();
  for (const [source] of edges) outDegree.set(source, (outDegree.get(source) ?? 0) + 1);
  const isHub = (key: string) => (outDegree.get(key) ?? 0) >= 4;

  // The build lays the graph out on a square; widening it to the frame fills a screen of any shape.
  const aspect = () => container.clientWidth / container.clientHeight || 1;
  const graph = new Graph();
  for (const { key, kind, label, x, y, href } of nodes) {
    const tier: Tier = kind === 'language' ? 'language' : !isHub(key) ? 'leaf' : kind === 'root' ? 'root' : 'branch';
    graph.addNode(key, {
      square: x,
      x: x * aspect(),
      y,
      label,
      href,
      tier,
      color: colors.tier[tier],
      size: { language: 7, root: 5.5, branch: 5, leaf: 4 }[tier],
      // Languages and hubs are named in the whole view; leaves on hover or with the toggle.
      forceLabel: tier !== 'leaf',
    });
  }
  for (const [source, target] of edges) graph.addEdge(source, target, { size: 1 });

  /*
   * One focus at a time: `members` are drawn in colour, `named` carry their
   * names, `edges` are the lines kept, and `frame` is what the camera fits.
   */
  let focus:
    { key: string; members: Set<string>; named: Set<string>; edges: Set<string>; frame: Set<string> } | undefined;
  // Off by default: hundreds of names at once overlap. The toggle names every node.
  let labels = false;
  const teardown = new AbortController();
  const outside = (key: string) => Boolean(focus && !focus.members.has(key));

  const sigma = new Sigma(graph, container, {
    labelFont,
    labelSize,
    // Only forced names are drawn, so Sigma's label grid never picks some by A–Z order; the hover layer names the rest.
    labelRenderedSizeThreshold: Infinity,
    // A record page zooms in close; dots keep their size there instead of swelling with the zoom.
    ...(page ? { zoomToSizeRatioFunction: () => 1 } : {}),
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
    // The name under the pointer, boxed in the page's own colours; Sigma's default box is white in either theme.
    defaultDrawNodeHover: (context, data) => {
      if (data.backdrop || !data.label) return;
      context.font = `${labelSize}px ${labelFont}`;
      const left = data.x - data.size - 2;
      const width = data.size * 2 + 7 + context.measureText(data.label).width;
      const height = labelSize + 6;
      context.fillStyle = colors.page;
      context.fillRect(left, data.y - height / 2, width, height);
      context.lineWidth = 1;
      context.strokeStyle = colors.ink;
      context.strokeRect(left, data.y - height / 2, width, height);
      context.fillStyle = colors.ink;
      context.fillText(data.label, data.x + data.size + 3, data.y + labelSize / 3);
    },
    // Sigma hands the reducers a copy, so they change it in place.
    nodeReducer: (key, attributes) => {
      if (outside(key)) {
        attributes.backdrop = true;
        attributes.color = colors.quiet;
        attributes.size = 3;
        attributes.forceLabel = false;
        return attributes;
      }
      // Within a focus only its chosen names show; the whole view names languages and hubs.
      attributes.forceLabel = labels || (focus ? focus.named.has(key) : attributes.forceLabel);
      if (key === focus?.key) {
        attributes.highlighted = true;
        attributes.size = Math.max(attributes.size, 6);
      }
      return attributes;
    },
    edgeReducer: (key, attributes) => {
      if (!focus) return attributes;
      if (focus.edges.has(key)) attributes.color = colors.focusEdge;
      else attributes.hidden = true;
      return attributes;
    },
  });

  // On /graph/ a hub narrows to its subtree first and opens its page on the second click; elsewhere a click opens.
  const narrows = (key: string) => !page && isHub(key) && focus?.key !== key;
  const opens = (key: string) => !outside(key) && (narrows(key) || Boolean(graph.getNodeAttribute(key, 'href')));

  // Hovering only touches the cursor: Sigma names the node in its hover layer without redrawing the graph.
  sigma.on('enterNode', ({ node }) => {
    if (opens(node)) container.style.cursor = 'pointer';
  });
  sigma.on('leaveNode', () => {
    container.style.cursor = '';
  });

  // Fits from the reset view's pixels: a fit from the current view zooms out on a subtree as wide as the graph.
  const fit = (keys: Set<string>, duration = 400) => {
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
    // Room for the outer names, and never closer than a fifth of the whole: two dots alone would fill the frame.
    const ratio = Math.min(
      1,
      Math.max(0.2, Math.max((right - left) / container.clientWidth, (bottom - top) / container.clientHeight) * 1.25),
    );
    const state = { x: (minX + maxX) / 2, y: (minY + maxY) / 2, ratio, angle: 0 };
    if (duration) sigma.getCamera().animate(state, { duration });
    else sigma.getCamera().setState(state);
  };

  // On /graph/ the address follows the view, so it can be copied and shared; replaceState fires no hashchange.
  const remember = (key: string | undefined) => {
    if (page) return;
    if (key) history.replaceState(null, '', `#${encodeURI(key)}`);
    else if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  };

  const focusOn = (next: NonNullable<typeof focus>, duration: number) => {
    focus = next;
    remember(next.key);
    fit(next.frame, duration);
    sigma.refresh();
  };

  // A hub and everything built on it. Past 80 (JavaScript, PHP, no language) the names would overlap: then only
  // the hubs one level down are named, the rest on hover or with the toggle.
  const narrow = (key: string, duration = 400) => {
    const members = new Set([key]);
    const queue = [key];
    for (let at = 0; at < queue.length; at++)
      for (const child of graph.outNeighbors(queue[at]))
        if (!members.has(child) && members.add(child)) queue.push(child);
    const named = new Set([key, ...graph.outNeighbors(key).filter((child) => members.size <= 80 || isHub(child))]);
    const lines = graph.filterEdges((_, __, source, target) => members.has(source) && members.has(target));
    focusOn({ key, members, named, edges: new Set(lines), frame: members }, duration);
  };

  /*
   * A record among its own: every ancestor back to the language and what is
   * built on it, named and joined; its siblings on the same parents as dots, so
   * a record with no relations still sits in its cluster. The camera frames the
   * record, its parents and its nearer children; the language and the farthest
   * children may run off the edge rather than pull the family into a strip.
   */
  const around = (key: string, duration = 400) => {
    const parents = graph.inNeighbors(key);
    const children = graph.outNeighbors(key);
    const family = new Set([key, ...children]);
    const queue = [...parents];
    for (let at = 0; at < queue.length; at++)
      if (!family.has(queue[at])) {
        family.add(queue[at]);
        queue.push(...graph.inNeighbors(queue[at]));
      }
    const members = new Set([...family, ...parents.flatMap((parent) => graph.outNeighbors(parent))]);
    // Past sixty the children's names would collide, so only the hubs among them keep theirs.
    const named = new Set([...family].filter((node) => family.size <= 60 || !graph.hasEdge(key, node) || isHub(node)));
    // Lines only within the family; a language's hundreds of siblings would bury it.
    const lines = graph.filterEdges((_, __, source, target) => family.has(source) && family.has(target));
    const at = (node: string) => graph.getNodeAttributes(node);
    const distance = (node: string) => Math.hypot(at(node).x - at(key).x, at(node).y - at(key).y);
    const nearer = [...children]
      .sort((a, b) => distance(a) - distance(b))
      .slice(0, Math.max(8, Math.ceil(children.length * 0.85)));
    const near = [...parents.filter((parent) => !parent.startsWith('language:')), ...nearer];
    const frame = new Set([key, ...(near.length ? near : parents)]);
    focusOn({ key, members, named, edges: new Set(lines), frame }, duration);
  };

  sigma.on('clickNode', ({ node, event }) => {
    if (!opens(node)) return;
    if (narrows(node)) return narrow(node);
    const href = graph.getNodeAttribute(node, 'href') as string;
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
  const showAll = () => {
    focus = undefined;
    remember(undefined);
    sigma.refresh();
    sigma.getCamera().animatedReset();
  };
  // Escape and the step-out button: up one hub at a time; from a language, or after a zoom by hand, the whole graph.
  const stepUp = () => {
    const up = focus && hubAbove(focus.key);
    if (up) narrow(up);
    else showAll();
  };

  if (!page) {
    sigma.on('clickStage', () => focus && showAll());
    document.addEventListener(
      'keydown',
      (event) => {
        // Escape in the site search belongs to the search.
        if (event.key !== 'Escape' || event.defaultPrevented) return;
        if ((event.target as Element).closest('input, textarea, select, [contenteditable]')) return;
        stepUp();
      },
      { signal: teardown.signal },
    );
  }

  // A new frame shape re-widens the square layout to it, and the camera fits the focus again.
  sigma.on('resize', () => {
    const widen = aspect();
    graph.updateEachNodeAttributes((_, attributes) => ({ ...attributes, x: attributes.square * widen }));
    if (focus) fit(focus.frame, 0);
  });

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
  root.querySelector<HTMLElement>('[data-graph-controls]')!.addEventListener(
    'click',
    (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('button');
      if (!button) return;
      if (button.value === 'in') camera.animatedZoom({ duration: 200 });
      if (button.value === 'out') camera.animatedUnzoom({ duration: 200 });
      if (button.value === 'step') stepUp();
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

  if (page) {
    if (graph.hasNode(page)) around(page, 0);
    return;
  }
  // /graph/#<id> opens on that record, as a hub's subtree when it is one; a record page's whole-graph link lands here,
  // and a hash changed in an open tab moves the view without a reload. A hash naming nothing shows the whole graph.
  const land = (duration: number) => {
    let key = '';
    try {
      key = decodeURIComponent(location.hash.slice(1));
    } catch {}
    if (!graph.hasNode(key)) return focus && showAll();
    if (isHub(key)) narrow(key, duration);
    else around(key, duration);
  };
  land(0);
  window.addEventListener('hashchange', () => land(400), { signal: teardown.signal });
}
