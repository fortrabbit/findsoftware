/**
 * Draws the "built on" graph with Sigma. Positions come from the build, so
 * nothing here lays anything out: it paints, names on hover and opens a record
 * on click. One graph serves the whole visit: the router keeps it across page
 * loads, and each page tells it what to show through `show()`.
 */
import Graph from 'graphology';
import Sigma from 'sigma';
import { navigate } from 'astro:transitions/client';
import { prefetch } from 'astro:prefetch';
import type { GraphData } from '../lib/graph';
import { dotScale } from '../lib/usage';

export function mountGraph(root: HTMLElement, { nodes, edges }: GraphData) {
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
      // Inside a focus: what the page is about at full strength, what stands around it fainter, the rest fainter still.
      strong: link,
      context: mix(link, page, 0.3),
      // From the link colour, not the hover tint: in the dark theme that is near black, and its dots read as holes in the lines.
      backdrop: mix(link, page, 0.22),
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
  for (const { key, kind, label, x, y, href, band } of nodes) {
    const tier: Tier = kind === 'language' ? 'language' : !isHub(key) ? 'leaf' : kind === 'root' ? 'root' : 'branch';
    graph.addNode(key, {
      square: x,
      x: x * aspect(),
      y,
      label,
      href,
      tier,
      color: colors.tier[tier],
      size: { language: 7, root: 5.5, branch: 5, leaf: 4 }[tier] * dotScale(band),
      // Languages and hubs are named in the whole view; leaves on hover or with the toggle.
      forceLabel: tier !== 'leaf',
    });
  }
  for (const [source, target] of edges) graph.addEdge(source, target, { size: 1 });

  /*
   * One focus at a time: `core` is what the page is about, drawn strong;
   * `members` adds what stands around it, drawn faint; `named` carry their
   * names, `edges` are the lines kept, and `frame` is what the camera fits.
   */
  let focus:
    | {
        key: string;
        core: Set<string>;
        members: Set<string>;
        named: Set<string>;
        edges: Set<string>;
        frame: Set<string>;
      }
    | undefined;
  // Off by default: hundreds of names at once overlap. The toggle names every node.
  let labels = false;
  // Expanded, the graph covers the screen; it stays so across pages until Escape or its control.
  let expanded = false;
  // The dot of the row under the pointer in the list beside the graph.
  let marked: string | undefined;
  const teardown = new AbortController();
  const outside = (key: string) => Boolean(focus && !focus.members.has(key));

  const sigma = new Sigma(graph, container, {
    labelFont,
    labelSize,
    // Only forced names are drawn, so Sigma's label grid never picks some by A–Z order; the hover layer names the rest.
    labelRenderedSizeThreshold: Infinity,
    // A record zooms in close; dots keep their size there instead of swelling with the zoom.
    zoomToSizeRatioFunction: () => 1,
    // A page without the graph hides it, and a hidden container has no size.
    allowInvalidContainer: true,
    // The whole graph runs nearly to the frame's edges; the controls may sit over its top row.
    stagePadding: 8,
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
      // Drawn in the hover layer, named and boxed, in colour even when it is outside the focus.
      if (key === marked) {
        attributes.highlighted = true;
        return attributes;
      }
      if (outside(key)) {
        attributes.backdrop = true;
        attributes.color = colors.backdrop;
        attributes.size = 2.5;
        attributes.forceLabel = false;
        return attributes;
      }
      if (focus && !focus.core.has(key)) {
        attributes.color = colors.context;
        attributes.size = 3.5;
      } else if (focus && attributes.tier === 'leaf') attributes.color = colors.strong;
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

  const hrefOf = (key: string) => graph.getNodeAttribute(key, 'href') as string | undefined;
  const opens = (key: string) => !outside(key) && Boolean(hrefOf(key));

  // The row of a dot, where the page lists it.
  const rowOf = (key: string) => document.querySelector<HTMLElement>(`main li[data-record="${CSS.escape(key)}"]`);
  /*
   * Hovering a dot fetches its page ahead, so the click lands at once, and
   * marks its row in the list; Sigma names the dot in its hover layer without
   * redrawing the graph.
   */
  sigma.on('enterNode', ({ node }) => {
    if (!opens(node)) return;
    container.style.cursor = 'pointer';
    prefetch(hrefOf(node)!);
    rowOf(node)?.classList.add('graph-marked');
  });
  sigma.on('leaveNode', ({ node }) => {
    container.style.cursor = '';
    rowOf(node)?.classList.remove('graph-marked');
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
    /*
     * Names run to the right of their dots and keep their size at any zoom, so
     * the widest name is room the dots cannot have: the fit leaves it on the
     * right and shifts the view by half of it. Never closer than a fifth of the
     * whole: two dots alone would fill the frame.
     */
    const context = document.createElement('canvas').getContext('2d')!;
    context.font = `${labelSize}px ${labelFont}`;
    const names = [...keys].filter((key) => focus?.named.has(key) ?? true);
    const label = Math.min(
      container.clientWidth / 3,
      Math.max(0, ...names.map((key) => context.measureText(graph.getNodeAttribute(key, 'label') ?? '').width + 12)),
    );
    const ratio = Math.min(
      1,
      Math.max(
        0.2,
        (right - left) / Math.max(1, container.clientWidth * 0.9 - label),
        ((bottom - top) / container.clientHeight) * 1.2,
      ),
    );
    // Framed units per pixel at this ratio, to turn the name's room into a shift of the view.
    const unit =
      ratio /
      Math.max(
        1e-6,
        sigma.framedGraphToViewport({ x: 1, y: 0 }, { cameraState }).x -
          sigma.framedGraphToViewport({ x: 0, y: 0 }, { cameraState }).x,
      );
    // Never further than the dots leave free: zoomed out all the way, a wide set has no room to give the names.
    const free = Math.max(0, (container.clientWidth - (right - left) / ratio) / 2 - 8);
    const shift = Math.min(label / 2, free);
    const state = { x: (minX + maxX) / 2 + shift * unit, y: (minY + maxY) / 2, ratio, angle: 0 };
    if (duration) sigma.getCamera().animate(state, { duration });
    else sigma.getCamera().setState(state);
  };

  const camera = sigma.getCamera();
  const reset = (duration: number) =>
    duration ? camera.animatedReset({ duration }) : camera.setState({ x: 0.5, y: 0.5, ratio: 1, angle: 0 });

  // Colours change at once; with `wait` the camera follows once the changes stop, so three ticks move it once.
  let moving: ReturnType<typeof setTimeout> | undefined;
  const focusOn = (next: typeof focus, duration: number, wait = 0) => {
    focus = next;
    sigma.refresh();
    clearTimeout(moving);
    const move = () => (next?.frame.size ? fit(next.frame, duration) : reset(duration));
    if (wait) moving = setTimeout(move, wait);
    else move();
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
    focusOn({ key, core: members, members, named, edges: new Set(lines), frame: members }, duration);
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
    // A small family takes its language into the frame too, or two dots fill it with nothing around them.
    const frame = new Set([key, ...near, ...(near.length < 3 ? parents : [])]);
    focusOn({ key, core: family, members, named, edges: new Set(lines), frame }, duration);
  };

  /*
   * Records listed on the page, drawn as a language page draws its subtree:
   * the records strong, the parents they hang on named, a line from each parent
   * to each record. The records keep their names while the names still fit.
   * Most of the graph at once is the whole view, recoloured, with the camera
   * left where it is.
   */
  const highlight = (ids: string[], duration = 400, wait = 0) => {
    const shown = new Set(ids.filter((id) => graph.hasNode(id)));
    if (!shown.size) return focusOn(undefined, duration, wait);
    const parents = new Set([...shown].flatMap((id) => graph.inNeighbors(id)));
    const members = new Set([...shown, ...parents]);
    const named = new Set([...parents, ...[...shown].filter((id) => shown.size <= 60 || isHub(id))]);
    const lines = graph.filterEdges((_, __, source, target) => shown.has(target) && members.has(source));
    // The named parents are in the frame too, or their names run off its edge.
    const frame = shown.size > graph.order / 2 ? new Set<string>() : members;
    focusOn({ key: '', core: members, members, named, edges: new Set(lines), frame }, duration, wait);
  };

  // One click opens a dot's page, in the column and over the whole screen alike; the new page sets the focus.
  sigma.on('clickNode', ({ node, event }) => {
    if (!opens(node)) return;
    const href = hrefOf(node)!;
    const { ctrlKey, metaKey, shiftKey } = event.original as MouseEvent;
    if (ctrlKey || metaKey || shiftKey) return void window.open(href, '_blank');
    void navigate(href);
  });

  // What the page asked for.
  let state = 'all';
  // The records listed in the page: a row names its record, or a search result its page; a hidden row is not on show.
  const keyOf = new Map(nodes.filter((node) => node.href).map((node) => [node.href!, node.key]));
  const rows = () =>
    [...document.querySelectorAll<HTMLElement>('main li[data-record], main li[data-href]')]
      .filter((row) => !row.closest('[hidden]'))
      .map((row) => row.dataset.record ?? keyOf.get(row.dataset.href!))
      .filter((key): key is string => Boolean(key));
  const apply = (duration = 400, wait = 0) => {
    const [kind, ...rest] = state.split(':');
    const key = rest.join(':');
    if (kind === 'record' && graph.hasNode(key)) return around(key, duration);
    if (kind === 'hub' && graph.hasNode(key)) return narrow(key, duration);
    // A record outside the graph shows what it is built on: its nearest parent among its own, or its language.
    if (kind === 'absent' && graph.hasNode(key))
      return key.startsWith('language:') ? narrow(key, duration) : around(key, duration);
    if (kind === 'rows') return highlight(rows(), duration, wait);
    // The register unfiltered is the whole graph; a filter or another list in the address narrows it to the rows left.
    if (kind === 'register' && location.search) return highlight(rows(), duration, wait);
    focusOn(undefined, duration, wait);
  };
  // The filters and the search say when their rows change.
  document.addEventListener('find:results', () => (state === 'register' || state === 'rows') && apply(400, 300), {
    signal: teardown.signal,
  });

  const expandButton = root.querySelector<HTMLButtonElement>('button[value="expand"]');
  const setExpanded = (next: boolean) => {
    if (next === expanded) return;
    expanded = next;
    root.classList.toggle('expanded', next);
    expandButton?.setAttribute('aria-pressed', String(next));
    seal();
    if (next) expandButton?.focus();
    else apply(0);
  };
  // Over the whole screen, the page behind is out of reach for Tab and screen readers until it closes; a new page too.
  const seal = () => {
    for (const part of document.querySelectorAll<HTMLElement>('body > :not([data-graph-dock])')) part.inert = expanded;
  };

  document.addEventListener(
    'keydown',
    (event) => {
      // Escape in the site search belongs to the search.
      if (!expanded || event.key !== 'Escape' || event.defaultPrevented) return;
      if ((event.target as Element).closest('input, textarea, select, [contenteditable]')) return;
      setExpanded(false);
    },
    { signal: teardown.signal },
  );

  // A row hovered or focused in the list names its dot; the camera stays, so the list does not set the graph moving.
  const mark = (next: string | undefined) => {
    if (next === marked || (next && !graph.hasNode(next))) return;
    const previous = marked;
    marked = next;
    sigma.refresh({ partialGraph: { nodes: [previous, next].filter((key): key is string => Boolean(key)) } });
  };
  const rowAt = (target: EventTarget | null) =>
    (target as Element | null)?.closest?.<HTMLElement>('main li[data-record]')?.dataset.record;
  for (const [enter, leave] of [
    ['pointerover', 'pointerout'],
    ['focusin', 'focusout'],
  ] as const) {
    document.addEventListener(enter, (event) => mark(rowAt(event.target)), { signal: teardown.signal });
    document.addEventListener(leave, (event) => rowAt((event as FocusEvent).relatedTarget) || mark(undefined), {
      signal: teardown.signal,
    });
  }

  // Hidden, shown, expanded, docked or dragged: any new size of the frame is a resize, not only the window's.
  // Debounced: a dragged column resizes every frame, and the graph settles once the drag stops.
  let settling: ReturnType<typeof setTimeout> | undefined;
  const sized = new ResizeObserver(() => {
    clearTimeout(settling);
    settling = setTimeout(() => sigma.resize(), 150);
  });
  sized.observe(container);

  // A new frame shape re-widens the square layout to it, and the camera fits the focus again.
  sigma.on('resize', () => {
    const widen = aspect();
    graph.updateEachNodeAttributes((_, attributes) => ({ ...attributes, x: attributes.square * widen }));
    // The fit reads the drawn positions, so they are brought up to date first.
    sigma.refresh();
    if (focus?.frame.size) fit(focus.frame, 0);
  });

  const repaint = () => {
    colors = readColors();
    graph.updateEachNodeAttributes((_, attributes) => ({ ...attributes, color: colors.tier[attributes.tier as Tier] }));
    sigma.setSetting('defaultEdgeColor', colors.quiet);
  };
  // The theme switch sets data-theme on the root; the system setting changes the media query.
  // The router rewrites every <html> attribute on each page; only a theme that differs repaints.
  let theme = document.documentElement.dataset.theme;
  const themeWatch = new MutationObserver(() => {
    if (document.documentElement.dataset.theme === theme) return;
    theme = document.documentElement.dataset.theme;
    repaint();
  });
  themeWatch.observe(document.documentElement, { attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', repaint, { signal: teardown.signal });

  // Everything the graph holds: its listeners, observers, WebGL contexts and canvases.
  const destroy = () => {
    clearTimeout(moving);
    clearTimeout(settling);
    if (expanded) setExpanded(false);
    teardown.abort();
    themeWatch.disconnect();
    sized.disconnect();
    sigma.kill();
    container.replaceChildren();
    container.style.cursor = '';
    for (const row of document.querySelectorAll('.graph-marked')) row.classList.remove('graph-marked');
  };
  // A dev-server reload runs this file again: the old graph lets go of its WebGL contexts first, or the browser runs out and drops layers.
  import.meta.hot?.dispose(destroy);

  // Scrolling over the graph scrolls the page; a trackpad pinch arrives as a wheel event with ctrlKey and still zooms.
  root.addEventListener('wheel', (event) => event.ctrlKey || event.stopPropagation(), {
    capture: true,
    signal: teardown.signal,
  });

  root.querySelector<HTMLElement>('[data-graph-controls]')!.addEventListener(
    'click',
    (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('button');
      if (!button) return;
      if (button.value === 'in') camera.animatedZoom({ duration: 200 });
      if (button.value === 'out') camera.animatedUnzoom({ duration: 200 });
      if (button.value === 'expand') setExpanded(!expanded);
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

  return {
    /** What the page asks the graph to show: a value of `data-graph-show` on <main>. Moves there unless `first`. */
    show(next: string, first = false) {
      state = next;
      seal();
      mark(undefined);
      apply(first ? 0 : 400);
    },
    /** Takes the graph off the page for good; mounting again starts from the data. */
    destroy,
  };
}
