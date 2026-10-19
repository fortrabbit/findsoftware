// Turns research/facts/<id>.yml into src/content/software/<id>.md.
// Provisional until MR-409: the maps below fold the free research vocabulary into
// src/data/fields.yml, and a value nothing maps stays out of the record rather
// than being guessed into one.
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { parse, stringify } from 'yaml';

const factsDir = 'research/facts';
const outDir = 'src/content/software';
const today = process.argv[2] ?? new Date().toISOString().slice(0, 10);

const dictionary = parse(readFileSync('src/data/fields.yml', 'utf8'));
const vocab = (id) => new Set((dictionary.find((entry) => entry.id === id)?.values ?? []).map((value) => value.id));

const categoryMap = {
  '2d': 'graphics',
  '3d': 'graphics',
  accessibility: 'ui-library',
  'acme-client': 'web-server',
  admin: 'admin-panel',
  'analytics-engine': '',
  animation: 'graphics',
  api: 'backend',
  'api-client': 'dev-tool',
  'api-docs': 'ssg',
  'api-docs-generator': 'ssg',
  'api-framework': 'framework',
  'api-gateway': 'backend',
  'api-layer': 'backend',
  'api-mocking': 'testing',
  'api-server': 'backend',
  'api-testing': 'testing',
  apm: 'analytics',
  'app-server': 'web-server',
  'application-framework': 'framework',
  assertions: 'testing',
  'asset-optimizer': 'build-tool',
  'asset-pipeline': 'build-tool',
  async: 'library',
  'atomic-css-engine': 'css-framework',
  'auth-proxy': 'web-server',
  authorization: 'auth',
  automation: 'backend',
  baas: 'backend',
  'backend-as-a-service': 'backend',
  bdd: 'testing',
  billing: 'e-commerce',
  'block-editor': 'ui-library',
  blog: '',
  boilerplate: '',
  book: 'ssg',
  booking: 'e-commerce',
  'bootstrap-theme': '',
  'browser-automation': 'testing',
  'build-plugin': 'build-tool',
  bundler: 'build-tool',
  cache: '',
  calendar: 'library',
  canvas: 'graphics',
  captcha: 'forms',
  carousel: 'ui-library',
  charts: 'graphics',
  'class-utility': 'css-framework',
  'classless-css': 'css-framework',
  cli: 'dev-tool',
  'client-storage': 'library',
  'cms-toolkit': 'cms',
  'code-editor': 'ui-library',
  codegen: 'dev-tool',
  comments: 'community',
  commonmark: 'library',
  component: 'ui-library',
  'component-framework': 'framework',
  'component-library': 'ui-library',
  'component-workshop': 'dev-tool',
  components: '',
  consent: 'forms',
  'control-panel': 'web-server',
  'copy-paste': 'ui-library',
  coverage: 'testing',
  'css-custom-properties': 'css-framework',
  'css-in-js': 'css-framework',
  'css-inliner': 'build-tool',
  'css-preprocessor': 'css-framework',
  'css-processor': 'css-framework',
  'data-app-framework': 'framework',
  'data-backend': 'backend',
  'data-fetching': 'library',
  'data-grid': 'ui-library',
  'data-viz': 'graphics',
  'database-extension': 'database',
  'date-picker': 'ui-library',
  'db-admin': 'admin-panel',
  'db-proxy': 'database',
  'deploy-tool': 'dev-tool',
  'design-system': 'ui-library',
  'design-tokens': 'css-framework',
  'dev-server': 'dev-tool',
  'developer-tool': 'dev-tool',
  diagrams: 'graphics',
  dialog: 'ui-library',
  'digital-collections': 'wiki',
  'digital-library': 'wiki',
  docs: 'ssg',
  'docs-generator': 'ssg',
  document: 'media',
  'document-converter': 'media',
  'document-management': 'wiki',
  documentation: 'ssg',
  documents: 'media',
  dom: 'library',
  'drag-drop': 'ui-library',
  'durable-execution': 'backend',
  dxp: 'cms',
  'e-signature': 'media',
  e2e: 'testing',
  edge: 'web-server',
  editor: 'ui-library',
  'editor-extension': 'dev-tool',
  'editor-toolkit': 'ui-library',
  'email-editor': 'ui-library',
  'email-marketing': 'email',
  'email-templating': 'email',
  'email-testing': 'dev-tool',
  'error-tracking': 'analytics',
  events: 'community',
  'experience-management': '',
  'fake-data': 'testing',
  'feature-flags': 'dev-tool',
  fediverse: 'community',
  feedback: 'forms',
  'file-upload': 'media',
  fixtures: 'testing',
  'flat-file': 'cms',
  'flat-file-cms': 'cms',
  formatter: 'dev-tool',
  forum: 'community',
  'frontend-framework': 'framework',
  'full-stack': 'framework',
  'full-stack-framework': 'framework',
  fullstack: 'framework',
  'fuzzy-match': 'library',
  gallery: 'media',
  'game-server-website': 'cms',
  gettext: 'library',
  'git-cms': 'cms',
  'graph-viz': 'graphics',
  graphql: 'backend',
  'graphql-schema': 'backend',
  'graphql-server': 'backend',
  headless: 'cms',
  'headless-commerce': 'e-commerce',
  'headless-components': 'ui-library',
  'html-sanitizer': 'library',
  'html-to-pdf': 'media',
  'http-framework': 'framework',
  'http-server': 'web-server',
  'hugo-theme': '',
  i18n: 'library',
  'icon-set': 'graphics',
  'identity-provider': 'auth',
  'identity-server': 'auth',
  'image-processing': 'media',
  'image-server': 'media',
  'import-maps': 'build-tool',
  'ingress-controller': 'web-server',
  'instant-api': 'backend',
  'internal-tools': 'admin-panel',
  jobs: 'backend',
  'js-library': 'library',
  'json-schema': 'library',
  jwt: 'auth',
  'key-value': 'database',
  'knowledge-base': 'wiki',
  lightbox: 'ui-library',
  linter: 'dev-tool',
  'live-chat': 'community',
  lms: 'wiki',
  'load-balancer': 'web-server',
  'local-dev-env': 'dev-tool',
  logs: 'analytics',
  'low-code': 'admin-panel',
  'mailing-list': 'email',
  maps: 'graphics',
  markdown: 'library',
  'markdown-editor': 'ui-library',
  'material-design': 'ui-library',
  'media-player': 'media',
  'media-processing': 'media',
  membership: '',
  'message-broker': 'database',
  'message-queue': 'database',
  'meta-framework': 'framework',
  'micro-framework': 'framework',
  microservices: 'backend',
  'middleware-framework': 'framework',
  migrations: 'library',
  minifier: 'build-tool',
  'mobile-ui': 'ui-library',
  mocking: 'testing',
  mongodb: 'database',
  monitoring: 'analytics',
  'multi-vendor-marketplace': 'e-commerce',
  mvc: 'framework',
  mysql: 'database',
  newsletter: 'email',
  notifications: 'email',
  oauth: 'auth',
  'object-storage': 'database',
  observability: 'analytics',
  odm: 'library',
  'oidc-provider': 'auth',
  openapi: 'backend',
  orm: 'library',
  paas: 'dev-tool',
  'page-builder': 'cms',
  payments: 'e-commerce',
  pdf: 'library',
  'pdf-generation': 'media',
  'php-extension': 'web-server',
  'platform-cli': 'dev-tool',
  polls: 'forms',
  postgres: 'database',
  'process-manager': 'web-server',
  'product-analytics': 'analytics',
  'product-tour': 'ui-library',
  'project-template': '',
  'property-based': 'testing',
  proxy: 'web-server',
  publishing: 'cms',
  'q-and-a': 'community',
  'qr-code': 'media',
  'query-builder': 'library',
  realtime: 'backend',
  'realtime-database': 'database',
  redis: 'database',
  redux: 'library',
  repository: 'wiki',
  'reverse-proxy': 'web-server',
  'rich-text': 'ui-library',
  router: 'library',
  rpc: 'backend',
  's3-compatible': 'database',
  scheduling: 'library',
  schema: 'library',
  'schema-builder': 'library',
  scroll: 'ui-library',
  'search-index': 'search',
  'search-integration': 'search',
  'search-library': 'search',
  'search-server': 'search',
  'search-ui': 'search',
  secrets: 'auth',
  select: 'ui-library',
  serialization: 'library',
  'server-components': 'framework',
  'server-driven-ui': 'framework',
  'session-replay': 'analytics',
  'shop-system': 'e-commerce',
  'smtp-server': 'email',
  'social-network': 'community',
  spa: 'framework',
  'spa-framework': 'framework',
  'spam-protection': 'forms',
  sql: 'library',
  sqlite: 'database',
  sso: 'auth',
  ssr: 'framework',
  starter: '',
  state: 'library',
  static: 'ssg',
  'static-export': 'ssg',
  'static-site': 'ssg',
  'static-site-generator': 'ssg',
  'status-page': 'analytics',
  storage: 'database',
  storefront: 'e-commerce',
  streaming: '',
  surveys: 'forms',
  'sync-engine': 'backend',
  'syntax-highlight': 'library',
  'tailwind-plugin': 'css-framework',
  'task-runner': 'build-tool',
  templating: 'library',
  'test-runner': 'testing',
  theme: '',
  'theme-framework': '',
  ticketing: 'community',
  'time-series': 'database',
  tls: 'web-server',
  toolkit: 'library',
  tracing: 'analytics',
  'transactional-email': 'email',
  translation: 'library',
  transpiler: 'build-tool',
  'ui-dev-tool': 'dev-tool',
  'ui-framework': 'framework',
  unit: 'testing',
  'uptime-monitor': 'analytics',
  'url-shortener': 'web-server',
  'usage-based': 'e-commerce',
  'utility-css': 'css-framework',
  validation: 'library',
  'vector-database': 'database',
  'vector-search': 'search',
  'vector-tiles': 'graphics',
  'visual-cms': 'cms',
  waf: 'web-server',
  'web-analytics': 'analytics',
  'web-components': 'ui-library',
  'web-framework': 'framework',
  webgl: 'graphics',
  webhooks: 'backend',
  websocket: 'backend',
  websockets: 'backend',
  'wordpress-theme': '',
  'workflow-engine': 'backend',
};

const runtimeMap = { 'go binary': 'binary', 'rust binary': 'binary', 'beam (erlang/otp)': 'beam' };
const languageMap = { 'c#': 'csharp' };
const databaseMap = { mssql: 'sqlserver' };
const apiMap = { jsonapi: 'rest', 'admin-api': 'rest', 'store-api': 'rest', webservice: 'rest' };
const renderMap = { headless: 'api-only' };

// Categories are our classification, not a sourced fact: a fact file without them takes its candidate row's.
const rowCategories = new Map();
for (const file of readdirSync('research').filter((name) => /^candidates-.*\.csv$/.test(name))) {
  for (const line of readFileSync(`research/${file}`, 'utf8').split('\n').slice(1)) {
    const [id, , , , , categories] = line.split(',');
    if (id && categories && !rowCategories.has(id)) rowCategories.set(id, categories.split(';'));
  }
}

const facts = readdirSync(factsDir).filter((file) => file.endsWith('.yml'));
const ids = new Set(facts.map((file) => file.replace(/\.yml$/, '')));

const asList = (value) => (value === undefined || value === null ? [] : Array.isArray(value) ? value : [value]);
const text = (value) =>
  asList(value)
    .map((entry) => (typeof entry === 'object' ? Object.values(entry).filter(Boolean).join(' ') : String(entry)))
    .join(', ');
const lower = (value) => String(typeof value === 'object' ? (value.name ?? '') : value).toLowerCase().trim();
const number = (value) => {
  // The leading figure only: values carry a period after it ("86916550 for 2026-10-10 to 2026-10-16").
  const held = typeof value === 'number' ? value : Number(String(value).replace(/,/g, '').match(/\d+(?:\.\d+)?/)?.[0]);
  return Number.isFinite(held) && held > 0 ? Math.round(held) : undefined;
};
const https = (value) => (typeof value === 'string' && value.startsWith('https://') ? value : undefined);
const slug = (value) =>
  lower(value)
    .replace(/\s+[\^~>=<].*$/, '')
    .replace(/\.js$/, '')
    .replace(/^.*\//, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function mapped(values, map, allowed, pick = (value) => value) {
  const out = [];
  for (const raw of asList(values)) {
    const key = pick(lower(raw));
    const value = map[key] ?? key;
    if (allowed.has(value) && !out.includes(value)) out.push(value);
  }
  return out;
}

const palette = ['#f4d35e', '#9ad1d4', '#f6bd60', '#b8e0d2', '#f7a399', '#cdb4db', '#a3c4f3', '#c5e1a5'];
const emojiOf = {
  cms: '📝',
  'headless-cms': '🔌',
  ssg: '⚡',
  framework: '🧱',
  backend: '🏗️',
  'e-commerce': '🛒',
  wiki: '📚',
  community: '💬',
  'admin-panel': '🎛️',
  'ui-library': '🧩',
  'css-framework': '🎨',
  graphics: '📊',
  library: '📐',
  'build-tool': '📦',
  'dev-tool': '🧹',
  testing: '🧪',
  'web-server': '🖥️',
  database: '🗄️',
  search: '🔎',
  analytics: '📈',
  auth: '🔑',
  email: '✉️',
  media: '🖼️',
  forms: '📋',
};
const hash = (value) => [...value].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7);

// Kinds whose records store, render or serve content; for every other kind the content fields do not apply.
const contentKinds = new Set(['cms', 'headless-cms', 'ssg', 'framework', 'e-commerce', 'wiki', 'community', 'admin-panel', 'backend']);
const contentFields = ['contentStore', 'databases', 'adminUi', 'headlessApi', 'templating', 'i18n', 'renderingModes'];

const statusOf = { accepted: 'active', 'hosted-service': 'hosted-service', boundary: 'boundary', discontinued: 'discontinued' };

let written = 0;
// A theme or starter has no category of its own; it takes the one of the software it is built on.
const ownCategories = new Map();
const parentOf = new Map();
for (const file of facts) {
  const research = parse(readFileSync(`${factsDir}/${file}`, 'utf8'));
  const values = (field) => (research.facts ?? []).filter((fact) => fact.field === field).flatMap((fact) => asList(fact.value));
  const raw = values('categories').length ? values('categories') : rowCategories.get(research.id) ?? [];
  ownCategories.set(research.id, mapped(raw, categoryMap, vocab('category')));
  parentOf.set(research.id, values('basedOn').map(slug).find((id) => ids.has(id) && id !== research.id));
}

for (const file of facts) {
  const research = parse(readFileSync(`${factsDir}/${file}`, 'utf8'));
  const byField = new Map();
  for (const fact of research.facts ?? []) {
    if (!byField.has(fact.field)) byField.set(fact.field, []);
    byField.get(fact.field).push(fact);
  }
  const first = (field) => byField.get(field)?.[0]?.value;
  const all = (field) => (byField.get(field) ?? []).flatMap((fact) => asList(fact.value));

  const record = { id: research.id, name: research.name ?? first('name') ?? research.id };

  const urls = {
    home: https(first('homepage')),
    repository: https(first('repository')),
    docs: https(first('docs')),
    pricing: https(first('pricingPage')),
    plugins: https(first('pluginDirectory')),
  };
  record.urls = Object.fromEntries(Object.entries(urls).filter(([, value]) => value));

  const parent = parentOf.get(research.id);
  const category = ownCategories.get(research.id).length ? ownCategories.get(research.id) : (ownCategories.get(parent) ?? []);
  if (category.length) record.category = category;
  if (research.description) record.description = String(research.description).slice(0, 200);
  record.status = statusOf[research.status] ?? 'active';

  if (first('maintainer')) record.maintainer = text(first('maintainer'));
  const maintainerType = mapped(first('maintainerType'), {}, vocab('maintainerType'))[0];
  if (maintainerType) record.maintainerType = maintainerType;
  if (first('parent')) record.parent = text(first('parent'));
  const firstRelease = number(first('firstRelease'));
  if (firstRelease && firstRelease > 1980 && firstRelease < 2100) record.firstRelease = firstRelease;
  const country = String(first('hqCountry') ?? '').toUpperCase();
  if (vocab('hqCountry').has(country)) record.hqCountry = country;

  const language = mapped(first('language'), languageMap, vocab('language'))[0];
  if (language) record.language = language;
  const runtime = mapped(all('runtime'), runtimeMap, vocab('runtime'));
  if (runtime.length) record.runtime = runtime;
  const hostingOf = { jvm: 'java', beam: 'elixir' };
  // A build tool, test runner or client-side library never runs on the live server, so it has no hosting need.
  const buildOnly = new Set(['build-tool', 'dev-tool', 'testing', 'ui-library', 'css-framework', 'graphics']);
  const deployed = !record.category?.length || record.category.some((value) => !buildOnly.has(value));
  if (record.status !== 'hosted-service' && deployed) {
    const modes = all('renderingModes').map((mode) => lower(mode));
    const servesLive = modes.some((mode) => /server|hybrid|isr|ssr/.test(mode));
    const buildsStatic = modes.some((mode) => mode.startsWith('static'));
    const hosting = buildsStatic && !servesLive ? [] : runtime.map((value) => hostingOf[value] ?? value);
    if (buildsStatic) hosting.push('static');
    const allowed = vocab('hosting');
    const held = [...new Set(hosting)].filter((value) => allowed.has(value));
    if (held.length) record.hosting = held;
  }
  // The lowest version named, cut to what changes at most yearly: Node majors, PHP and Python minors.
  const runtimeMin = String(first('runtimeMin') ?? '').match(/(\d+)(?:\.(\d+))?/);
  if (runtimeMin) {
    const name = String(first('runtimeMin')).match(/^[a-z]+/i)?.[0]?.toLowerCase() ?? runtime[0];
    const minor = runtimeMin[2] !== undefined && name !== 'node' ? `.${runtimeMin[2]}` : '';
    // Only a runtime the dictionary knows: a bare number, a Go or Rust toolchain or an ES level is not a runtime minimum.
    if (name && name !== 'binary' && vocab('runtime').has(name)) record.runtimeMin = `${name} ${runtimeMin[1]}${minor}`;
  }
  // A relation names records; what is not a record yet (Vue, React) waits for one.
  const basedOn = [...new Set(all('basedOn').map(slug))].filter((id) => ids.has(id) && id !== research.id);
  if (basedOn.length) record.basedOn = basedOn;

  const contentStore = mapped(all('contentStore'), { 'flat-file themes': '' }, vocab('contentStore'));
  if (contentStore.length) record.contentStore = contentStore;
  const databases = mapped(all('databases'), databaseMap, vocab('databases'), (value) => value.split(/[\s(]/)[0]);
  if (databases.length) record.databases = databases;
  const adminUi = first('adminUi');
  if (adminUi !== undefined) record.adminUi = /^(yes|true)/i.test(String(adminUi)) || adminUi === true;
  const headlessApi = mapped(all('headlessApi'), apiMap, vocab('headlessApi'), (value) => value.split(/[\s(,]/)[0]);
  if (headlessApi.length) record.headlessApi = headlessApi;
  if (byField.has('templating')) record.templating = text(all('templating'));
  if (first('i18n') !== undefined) record.i18n = text(first('i18n')).slice(0, 120);

  const runsAs = mapped(all('runsAs'), {}, vocab('runsAs'));
  if (runsAs.length) record.runsAs = runsAs;
  // Hybrid is two facts, static pages and server-rendered ones, so it is recorded as both.
  const modes = all('renderingModes').flatMap((mode) => (/^hybrid/.test(lower(mode)) ? ['static', 'server'] : [mode]));
  const renderingModes = mapped(modes, renderMap, vocab('renderingModes'), (value) =>
    value.startsWith('none') ? 'api-only' : value,
  );
  if (renderingModes.length) record.renderingModes = renderingModes;
  if (first('installMethod')) record.installMethod = text(first('installMethod'));

  const licenseModel = mapped(first('licenseModel'), {}, vocab('licenseModel'))[0];
  if (licenseModel) record.licenseModel = licenseModel;
  if (byField.has('license')) record.license = text(all('license'));

  // A dot release goes stale within weeks; the major holds for a year or more. Under 1.0 the minor is the major.
  let version = String(first('latestVersion') ?? first('currentMajor') ?? '').match(/(\d+)(?:\.(\d+))?/);
  // A calendar version (2026.8) moves monthly, so it has no major worth recording.
  if (version && Number(version[1]) >= 2000) version = null;
  if (version) record.currentMajor = version[1] === '0' && version[2] !== undefined ? `0.${version[2]}` : version[1];
  if (first('latestReleaseDate')) record.latestReleaseDate = String(first('latestReleaseDate')).slice(0, 10);

  const adoption = { githubStars: 'githubStargazers', packagistDownloads: 'packagistDownloads', npmWeeklyDownloads: 'npmWeeklyDownloads', contributors: 'contributors', pluginCount: 'pluginCount' };
  for (const [field, id] of Object.entries(adoption)) {
    const held = number(first(field));
    if (held !== undefined) record[id] = held;
  }

  const social = {};
  for (const key of ['x', 'bluesky', 'mastodon', 'discord', 'forum', 'subreddit', 'youtube']) {
    const url = https(first(key));
    if (url) social[key] = url;
  }
  if (Object.keys(social).length) record.social = social;
  const wikidata = String(first('wikidata') ?? '').match(/Q\d+/)?.[0];
  if (wikidata) record.wikidata = wikidata;

  const target = `${outDir}/${record.id}.md`;
  const previous = existsSync(target) ? parse(readFileSync(target, 'utf8').split('---')[1] ?? '') : undefined;
  record.addedAt = previous?.addedAt ?? today;
  if (research.checkedAt) record.checkedAt = String(research.checkedAt).slice(0, 10);

  const renamed = {
    homepage: 'urls',
    repository: 'urls',
    docs: 'urls',
    pricingPage: 'urls',
    pluginDirectory: 'urls',
    categories: 'category',
    x: 'social',
    bluesky: 'social',
    mastodon: 'social',
    discord: 'social',
    forum: 'social',
    subreddit: 'social',
    youtube: 'social',
    githubStars: 'githubStargazers',
  };
  // A record cites only what it carries; the fact file keeps the rest for MR-409.
  const carried = (field) => (renamed[field] ?? field) in record || field === 'description';
  record.sources = [...byField.values()]
    .flat()
    .filter((fact) => https(fact.url) && carried(fact.field) && renamed[fact.field] !== 'social')
    .map((fact) => ({
      field: renamed[fact.field] ?? fact.field,
      url: fact.url,
      checkedAt: String(fact.checkedAt ?? research.checkedAt ?? today).slice(0, 10),
    }));

  const kind = record.category?.[0] ?? 'framework';
  const labels = Object.fromEntries((dictionary.find((entry) => entry.id === 'language')?.values ?? []).map((v) => [v.id, v.label]));
  const short = Object.fromEntries((dictionary.find((entry) => entry.id === 'category')?.values ?? []).map((v) => [v.id, v.short]));
  record.figure = {
    emoji: emojiOf[kind] ?? '🧩',
    color: palette[hash(record.id) % palette.length],
    textColor: '#1a1a1a',
    text: [labels[record.language], short[kind]].filter(Boolean).join(' · ') || record.name,
  };
  record.ai = 'authored';

  // Prose is written beside the facts and carried in as the record body.
  // A question a record's kind cannot answer is `null`, not unknown: it leaves the page and the facet's unknown count.
  const notApplicable = [];
  const holdsContent = record.category?.some((value) => contentKinds.has(value));
  if (record.category?.length && !holdsContent) notApplicable.push(...contentFields);
  if (record.category?.length && !deployed) notApplicable.push('hosting', 'runtimeMin');
  if (record.language && record.language !== 'php') notApplicable.push('packagistDownloads');
  if (record.language && !['javascript', 'typescript'].includes(record.language)) notApplicable.push('npmWeeklyDownloads');
  // A library runs as part of the application that imports it.
  const embedded = record.category?.length && record.category.every((value) => ['library', 'ui-library', 'graphics'].includes(value));
  if (embedded && record.status !== 'hosted-service') notApplicable.push('runsAs');
  for (const field of notApplicable) if (record[field] === undefined) record[field] = null;

  const proseFile = `research/prose/${record.id}.md`;
  const prose = existsSync(proseFile) ? `\n${readFileSync(proseFile, 'utf8').trim()}\n` : '';
  writeFileSync(target, `---\n${stringify(record, { lineWidth: 0 })}---\n${prose}`);
  written++;
}

console.log(`${written} records written to ${outDir}`);
