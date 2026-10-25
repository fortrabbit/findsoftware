#!/usr/bin/env node
// Adds or refreshes the adoption figures in research/facts/*.yml from public APIs.
// Usage: node scripts/adoption.mjs <YYYY-MM-DD>
// Edits the fact files as text so their layout stays as written; a figure with no source answer is left out.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

const [date, ...only] = process.argv.slice(2);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '')) {
  console.error('Usage: node scripts/adoption.mjs <YYYY-MM-DD> [record-id ...]');
  process.exit(1);
}

const FACTS = 'research/facts';
const DELAY_MS = 1000;
const HA_URL = 'https://cdn.httparchive.org/v1/technologies';
// Record id to HTTP Archive technology name, checked by hand: only exact name matches, and not where the names are common words for another product.
const HA_NAMES = {
  abp: 'ABP Framework',
  adonisjs: 'AdonisJS',
  aem: 'Adobe Experience Manager',
  alpine: 'Alpine.js',
  ambassador: 'Ambassador',
  amplience: 'Amplience',
  angular: 'Angular',
  apostrophe: 'ApostropheCMS',
  asciidoctor: 'Asciidoctor',
  'aspnet-boilerplate': 'ASP.NET Boilerplate',
  astro: 'Astro',
  aurelia: 'Aurelia',
  bigcommerce: 'BigCommerce',
  'bolt-cms': 'Bolt CMS',
  bootstrap: 'Bootstrap',
  builderio: 'Builder.io',
  bulma: 'Bulma',
  'butter-cms': 'ButterCMS',
  caddy: 'Caddy',
  caisy: 'Caisy',
  cakephp: 'CakePHP',
  cecil: 'Cecil',
  cherrypy: 'CherryPy',
  cloudrexx: 'Cloudrexx',
  'cms-made-simple': 'CMS Made Simple',
  'coaster-cms': 'Coaster CMS',
  codeigniter: 'CodeIgniter',
  commercetools: 'commercetools',
  'concrete-cms': 'Concrete CMS',
  contao: 'Contao',
  contensis: 'Contensis',
  contentful: 'Contentful',
  contentstack: 'Contentstack',
  cosmic: 'Cosmic',
  'craft-cms': 'Craft CMS',
  'craft-commerce': 'Craft Commerce',
  crownpeak: 'CrownPeak',
  crystallize: 'Crystallize',
  cubecart: 'CubeCart',
  d3: 'D3',
  daisyui: 'daisyUI',
  datocms: 'DatoCMS',
  directus: 'Directus',
  django: 'Django',
  docfx: 'DocFX',
  docsify: 'Docsify',
  docusaurus: 'Docusaurus',
  dojo: 'Dojo',
  dotclear: 'Dotclear',
  doxygen: 'Doxygen',
  'drupal-commerce': 'Drupal Commerce',
  drupal: 'Drupal',
  e107: 'e107',
  elasticpress: 'ElasticPress',
  elasticsearch: 'Elasticsearch',
  eleventy: 'Eleventy',
  ember: 'Ember.js',
  endurojs: 'enduro.js',
  express: 'Express',
  expressionengine: 'ExpressionEngine',
  'fat-free': 'Fat-Free Framework',
  flagsmith: 'FlagSmith',
  flask: 'Flask',
  flowbite: 'Flowbite',
  'fork-cms': 'Fork CMS',
  fresh: 'Fresh',
  frontity: 'Frontity',
  gatsby: 'Gatsby',
  getsimple: 'GetSimple CMS',
  ghost: 'Ghost',
  grapesjs: 'GrapesJS',
  'grav-cms': 'Grav',
  gridsome: 'Gridsome',
  gsap: 'GSAP',
  headlessui: 'Headless UI',
  hexo: 'Hexo',
  hono: 'Hono',
  htmx: 'Htmx',
  hugo: 'Hugo',
  ikiwiki: 'ikiwiki',
  impresscms: 'ImpressCMS',
  impresspages: 'ImpressPages',
  inertia: 'Inertia.js',
  jekyll: 'Jekyll',
  koa: 'Koa',
  'kontent-ai': 'Kontent.ai',
  laravel: 'Laravel',
  leaflet: 'Leaflet',
  livewire: 'Livewire',
  lume: 'Lume',
  'mage-os': 'Mage-OS',
  marko: 'Marko',
  mavo: 'Mavo',
  meilisearch: 'Meilisearch',
  meteor: 'Meteor',
  microcms: 'microCMS',
  mkdocs: 'MkDocs',
  modx: 'MODX',
  nextjs: 'Next.js',
  nextra: 'Nextra',
  nginx: 'Nginx',
  'october-cms': 'October CMS',
  octopress: 'Octopress',
  opencart: 'OpenCart',
  oscommerce: 'osCommerce',
  'oxid-eshop': 'OXID eShop Community Edition',
  pagekit: 'Pagekit',
  parcel: 'parcel',
  pelican: 'Pelican',
  phenomic: 'Phenomic',
  phoenix: 'Phoenix',
  'php-fusion': 'PHPFusion',
  'php-nuke': 'PHP-Nuke',
  pico: 'Pico',
  pimcore: 'Pimcore',
  plasmic: 'Plasmic',
  polymer: 'Polymer',
  preact: 'Preact',
  prestashop: 'PrestaShop',
  prismic: 'Prismic',
  processwire: 'ProcessWire',
  pyrocms: 'PyroCMS',
  quasar: 'Quasar',
  quintype: 'Quintype',
  qwik: 'Qwik',
  rails: 'Ruby on Rails',
  'react-bricks': 'React Bricks',
  'react-router': 'React Router',
  react: 'React',
  readme: 'ReadMe',
  redaxo: 'REDAXO',
  redis: 'Redis',
  redocly: 'ReDoc',
  redwoodjs: 'RedwoodJS',
  remix: 'Remix',
  retype: 'Retype',
  revealjs: 'Reveal.js',
  roadrunner: 'RoadRunner',
  saleor: 'Saleor',
  sanity: 'Sanity',
  sapper: 'Sapper',
  scrivito: 'Scrivito',
  scully: 'Scully',
  sentry: 'Sentry',
  serendipity: 'Serendipity',
  'shadcn-ui': 'shadcn/ui',
  shopify: 'Shopify',
  shopware: 'Shopware',
  slate: 'Slate',
  snipcart: 'Snipcart',
  solidstart: 'SolidStart',
  sphinx: 'Sphinx',
  spip: 'SPIP',
  spryker: 'Spryker',
  starlight: 'Starlight',
  statamic: 'Statamic',
  stencil: 'Stencil',
  stimulus: 'Stimulus',
  storyblok: 'Storyblok',
  storybook: 'Storybook',
  strapi: 'Strapi',
  subrion: 'Subrion',
  sulu: 'Sulu',
  suncel: 'Suncel',
  supabase: 'Supabase',
  svelte: 'Svelte',
  sveltekit: 'SvelteKit',
  swell: 'Swell',
  sylius: 'Sylius',
  symfony: 'Symfony',
  tailwindcss: 'Tailwind CSS',
  'tanstack-start': 'TanStack Start',
  thelia: 'Thelia',
  thinkphp: 'ThinkPHP',
  totaljs: 'total.js',
  turbopack: 'Turbopack',
  typecho: 'Typecho',
  umami: 'Umami',
  umbraco: 'Umbraco',
  varbase: 'Varbase',
  vite: 'Vite',
  vitepress: 'VitePress',
  vuepress: 'VuePress',
  wagtail: 'Wagtail',
  webpack: 'Webpack',
  websitebaker: 'WebsiteBaker',
  woocommerce: 'WooCommerce',
  wordpress: 'WordPress',
  xoops: 'XOOPS',
  'yii-framework': 'Yii',
  'zen-cart': 'Zen Cart',
};

// Registry of each package-name fact, in the order that picks the one registry whose dependents are recorded.
const REGISTRY = {
  npmName: 'npmjs.org',
  packagistName: 'packagist.org',
  pypiName: 'pypi.org',
  rubygemsName: 'rubygems.org',
  crateName: 'crates.io',
};
const DEPENDENTS_ORDER = ['npmName', 'packagistName', 'pypiName', 'rubygemsName', 'crateName'];
// Only these registries publish a last-month download count through ecosyste.ms; the others report a total.
const MONTHLY_REGISTRIES = ['pypiName', 'rubygemsName', 'crateName'];
// Fields this script owns: a fact from another source for the same field is replaced.
const OWNED = new Set([
  'httpArchiveSites',
  'dependentRepos',
  'dependentPackages',
  'ecosystemsMonthlyDownloads',
  'packagistMonthlyDownloads',
  'wordpressActiveInstalls',
]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'findsoftware-adoption-script', Accept: 'application/json' },
    });
    if (res.status === 429 || res.status >= 500) {
      await sleep(15000 * attempt);
      continue;
    }
    if (!res.ok) return { error: `HTTP ${res.status}` };
    try {
      return { json: JSON.parse(await res.text()) };
    } catch {
      return { error: 'response is not JSON' };
    }
  }
  return { error: 'gave up after retries' };
}

const log = (id, message) => console.log(`${id}: ${message}`);

// Each fact is a block of lines starting at "  - field:" and ending before the next fact or top-level key.
function factBlocks(lines) {
  const start = lines.indexOf('facts:');
  if (start < 0) return { start: -1, end: -1, blocks: [] };
  let end = lines.findIndex((line, index) => index > start && /^\S/.test(line));
  if (end < 0) end = lines.length;
  const blocks = [];
  for (let index = start + 1; index < end; index++) {
    const match = lines[index].match(/^ {2}- field: (\S+)$/);
    if (!match) continue;
    let stop = index + 1;
    while (stop < end && !/^ {2}- /.test(lines[stop])) stop++;
    blocks.push({ field: match[1], from: index, to: stop });
    index = stop - 1;
  }
  return { start, end, blocks };
}

const yamlValue = (value) => (typeof value === 'number' ? String(value) : value);

function upsert(text, edit) {
  const lines = text.split('\n');
  const { blocks } = factBlocks(lines);
  // Owned fields: a fact from any other URL is stale once this source answers.
  for (const block of blocks.filter((b) => b.field === edit.field && OWNED.has(edit.field)).reverse()) {
    if (lines[block.from + 2] !== `    url: ${edit.url}`) lines.splice(block.from, block.to - block.from);
  }
  const current = factBlocks(lines);
  const same = current.blocks.find(
    (block) => block.field === edit.field && lines[block.from + 2] === `    url: ${edit.url}`,
  );
  if (same) {
    for (let index = same.from; index < same.to; index++) {
      if (lines[index].startsWith('    value: ')) lines[index] = `    value: ${yamlValue(edit.value)}`;
      if (lines[index].startsWith('    checkedAt: ')) lines[index] = `    checkedAt: ${date}`;
    }
  } else {
    let at = current.end;
    while (at > current.start + 1 && lines[at - 1] === '') at--;
    const block = [
      `  - field: ${edit.field}`,
      `    value: ${yamlValue(edit.value)}`,
      `    url: ${edit.url}`,
      `    checkedAt: ${date}`,
      '    via: api',
    ];
    lines.splice(at, 0, ...block);
  }
  return lines.join('\n');
}

const json = async (id, url) => {
  await sleep(DELAY_MS);
  const result = await getJson(url);
  if (result.error) log(id, `skip, ${result.error}: ${url}`);
  return result.json;
};

const counts = {};
const count = (field) => (counts[field] = (counts[field] ?? 0) + 1);

// HTTP Archive: the mobile origin count per technology (the desktop count is the same kind of figure, one per site).
const haList = await getJson(HA_URL);
const haByName = new Map((haList.json ?? []).map((tech) => [tech.technology.toLowerCase(), tech]));
if (!haList.json) console.log(`httpArchive: skip all, ${haList.error}`);

for (const file of readdirSync(FACTS)
  .filter((name) => name.endsWith('.yml') && (only.length === 0 || only.includes(name.replace(/\.yml$/, ''))))
  .sort()) {
  const path = `${FACTS}/${file}`;
  const original = readFileSync(path, 'utf8');
  const doc = parse(original);
  const id = doc.id ?? file.replace(/\.yml$/, '');
  const facts = doc.facts ?? [];
  const first = (field) => facts.find((fact) => fact.field === field)?.value;
  const edits = [];

  if (HA_NAMES[id]) {
    const tech = haByName.get(HA_NAMES[id].toLowerCase());
    if (tech) edits.push({ field: 'httpArchiveSites', value: tech.origins.mobile, url: HA_URL });
    else log(id, `skip httpArchiveSites, no technology named "${HA_NAMES[id]}"`);
  }

  const packages = Object.fromEntries(Object.keys(REGISTRY).map((key) => [key, first(key)]));
  const dependentsFrom = DEPENDENTS_ORDER.find((key) => packages[key]);
  for (const key of Object.keys(REGISTRY).filter((key) => packages[key])) {
    const name = String(packages[key]);
    if (key !== dependentsFrom && !MONTHLY_REGISTRIES.includes(key)) continue;
    const url = `https://packages.ecosyste.ms/api/v1/registries/${REGISTRY[key]}/packages/${encodeURIComponent(name)}`;
    const body = await json(id, url);
    if (!body) continue;
    if (key === dependentsFrom) {
      if (typeof body.dependent_repos_count === 'number')
        edits.push({ field: 'dependentRepos', value: body.dependent_repos_count, url });
      if (typeof body.dependent_packages_count === 'number')
        edits.push({ field: 'dependentPackages', value: body.dependent_packages_count, url });
    }
    if (MONTHLY_REGISTRIES.includes(key)) {
      if (body.downloads_period === 'last-month' && typeof body.downloads === 'number')
        edits.push({ field: 'ecosystemsMonthlyDownloads', value: body.downloads, url });
      else log(id, `skip ecosystemsMonthlyDownloads, ${REGISTRY[key]} reports "${body.downloads_period}"`);
    }
  }

  if (packages.packagistName) {
    const url = `https://packagist.org/packages/${packages.packagistName}/stats.json`;
    const body = await json(id, url);
    const monthly = body?.downloads?.monthly;
    if (typeof monthly === 'number') edits.push({ field: 'packagistMonthlyDownloads', value: monthly, url });
    else if (body) log(id, 'skip packagistMonthlyDownloads, no monthly figure');
  }

  // The slug comes from a WordPress.org plugin page the file names; the count is the plugin registry's.
  const slug =
    first('wordpressPluginSlug') ??
    facts
      .flatMap((fact) => [fact.value, fact.url])
      .map((value) => String(value ?? '').match(/^https:\/\/wordpress\.org\/plugins\/([a-z0-9-]+)\/?$/)?.[1])
      .find(Boolean);
  if (slug) {
    const url = `https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=${slug}`;
    const body = await json(id, url.replace('request[slug]', 'request%5Bslug%5D'));
    if (typeof body?.active_installs === 'number')
      edits.push({ field: 'wordpressActiveInstalls', value: body.active_installs, url });
    else if (body) log(id, `skip wordpressActiveInstalls, no active_installs for "${slug}"`);
  }

  let text = original;
  for (const edit of edits) {
    text = upsert(text, edit);
    count(edit.field);
  }
  if (text !== original) writeFileSync(path, text);
}

console.log('Figures written, by field:');
for (const [field, total] of Object.entries(counts).sort()) console.log(`  ${field}: ${total}`);
