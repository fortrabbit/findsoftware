import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Facet, ProviderRow } from './facets.ts';
import { namedLimit, names, pairOpening, summarise, summarisePair, valueOpening } from './summarise.ts';

const facet = (id: string, field: string, values: string[]): Facet => ({
  id,
  label: id,
  field,
  multiple: false,
  values: values.map((value) => ({ id: value, label: value, slug: value, count: 0 })),
  unknown: 0,
  notApplicable: 0,
});

const facets: Facet[] = [
  // Slug and field differ here, as they do in the dictionary: a lookup by slug finds nothing.
  facet('categories', 'category', ['cms', 'headless-cms', 'ssg', 'framework']),
  facet('languages', 'language', ['php', 'go', 'rust']),
  facet('license', 'licenseModel', ['open-source', 'commercial', 'open-core']),
];

const row = (name: string, fields: Record<string, string | string[]>): ProviderRow => ({
  id: name.toLowerCase(),
  href: `/${name.toLowerCase()}/`,
  name,
  facets: fields,
  notApplicable: [],
});

describe('summarise', () => {
  it('opens with the count, the subject it was given and the order', () => {
    const summary = summarise([row('A', { category: 'cms' })], facets, 'runtimes', 'run Rust');
    assert.match(summary, /^1 project run Rust, listed alphabetically\./);
  });

  it('makes the noun agree', () => {
    const two = summarise([row('A', {}), row('B', {})], facets, 'runtimes', 'run Rust');
    assert.match(two, /^2 projects /);
  });

  // On /categories/cms/ the reader already knows the category. Restating it is
  // the padding this whole approach exists to avoid.
  it('never restates the page it is on', () => {
    const rows = [row('A', { category: 'cms' }), row('B', { category: 'cms' })];
    assert.doesNotMatch(summarise(rows, facets, 'categories', 'are platforms'), /split across|all of them/i);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /All of them cms/);
  });

  it('says "split across" when it names every category, and "mostly" when it does not', () => {
    const three = [
      row('A', { category: 'cms' }),
      row('B', { category: 'headless-cms' }),
      row('C', { category: 'ssg' }),
    ];
    assert.match(summarise(three, facets, 'runtimes', 'run Rust'), /Split across cms, headless-cms and ssg/);

    const four = [...three, row('D', { category: 'framework' })];
    assert.match(summarise(four, facets, 'runtimes', 'run Rust'), /Mostly .*, of 4 categories in all/);
  });

  // On /languages/php/ every record is written in PHP, so counting the languages
  // would be both trivially true and misleading about the spread.
  it('leaves out the language on a languages page', () => {
    const rows = [row('A', { language: 'php' }), row('B', { language: 'go' })];
    assert.doesNotMatch(summarise(rows, facets, 'languages', 'are written in PHP'), /written in \d|all written in/i);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /written in 2 languages/i);
  });

  it('says nothing about the license on the license pages', () => {
    const rows = [row('A', { licenseModel: 'open-source' })];
    assert.doesNotMatch(summarise(rows, facets, 'license', 'are open source'), /most of them/i);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /most of them open-source/i);
  });

  // Three facts about a page are read and six are skipped, so the second
  // sentence takes the two strongest and stops.
  it('never runs past two sentences', () => {
    const rows = [row('A', { category: 'cms', language: 'php', licenseModel: 'open-source' })];
    for (const id of ['runtimes', 'categories', 'languages', 'license']) {
      const summary = summarise(rows, facets, id, 'do a thing');
      assert.ok(summary.split('. ').length <= 2, `${id}: ${summary}`);
    }
  });

  // A page whose records hold nothing beyond the facet itself still needs a
  // first line, and an empty clause would read as a bug.
  it('degrades to the count alone when there is nothing else true', () => {
    const summary = summarise([row('A', {})], facets, 'runtimes', 'run Rust');
    assert.equal(summary, '1 project run Rust, listed alphabetically.');
  });

  it('never emits a dangling connector or a double space', () => {
    const rows = [row('A', { category: 'cms', language: 'php', licenseModel: 'open-source' })];
    for (const id of ['runtimes', 'categories', 'languages', 'license']) {
      const summary = summarise(rows, facets, id, 'do a thing');
      assert.doesNotMatch(summary, / {2}/, id);
      assert.doesNotMatch(summary, /,\./, id);
      assert.match(summary, /\.$/, id);
    }
  });
});

describe('summarisePair', () => {
  /** Twelve of the forty running on Node.js are also written in TypeScript; eight of those are frameworks. */
  const matches = [
    ...Array.from({ length: 8 }, (_, i) =>
      row(`Both${i}`, { runtime: 'node', language: 'typescript', category: 'framework' }),
    ),
    ...Array.from({ length: 4 }, (_, i) =>
      row(`Rest${i}`, { runtime: 'node', language: 'typescript', category: 'headless-cms' }),
    ),
  ];
  const wider = [
    ...matches,
    ...Array.from({ length: 28 }, (_, i) =>
      row(`Node${i}`, { runtime: 'node', language: 'javascript', category: 'headless-cms' }),
    ),
  ];

  const page = {
    aId: 'runtimes',
    bId: 'languages',
    aSubject: 'run on Node.js',
    bSubject: 'are written in TypeScript',
    matches,
    aTotal: 40,
    bTotal: 20,
    widerRows: wider,
  };

  it('opens with both halves and the order', () => {
    assert.match(
      summarisePair(page, facets),
      /^12 projects run on Node\.js and are written in TypeScript, listed alphabetically\./,
    );
  });

  it('measures the intersection against the wider parent', () => {
    assert.match(summarisePair(page, facets), /That is 12 of the 40 that run on Node\.js\./);
  });

  /*
   * The clause the whole file exists for. Without it every page of a pairing
   * reads the same, because pinning the second facet flattens what varied.
   */
  it('names what this intersection has that its parent does not', () => {
    assert.match(summarisePair(page, facets), /framework on 8 of them, against 8 of the 40\./);
  });

  it('says nothing about a third facet that is no more common here than there', () => {
    const flat = { ...page, matches: matches.slice(0, 8), widerRows: matches.slice(0, 8), aTotal: 8, bTotal: 8 };
    assert.equal(summarisePair(flat, facets).includes(' against '), false);
  });

  it('never speaks about either of its own facets', () => {
    const summary = summarisePair(page, facets);
    assert.equal(summary.split('. ').slice(2).join(' ').includes('typescript'), false);
  });
});

describe('names', () => {
  it('names one project on its own', () => {
    assert.equal(names([row('Laravel', {})]), 'It is Laravel.');
  });

  it('names every project under the limit, alphabetically whatever order they came in', () => {
    assert.equal(names([row('Zeta', {}), row('alpha', {}), row('Beta', {})]), 'They are alpha, Beta and Zeta.');
  });

  it('names none over the limit rather than the first few', () => {
    const many = Array.from({ length: namedLimit + 1 }, (_, i) => row(`P${i}`, {}));
    assert.equal(names(many), undefined);
    assert.ok(names(many.slice(0, namedLimit)));
  });

  it('names nobody on an empty page', () => {
    assert.equal(names([]), undefined);
  });
});

describe('openings', () => {
  const rows = [row('Beta', { category: 'cms' }), row('Alpha', { category: 'ssg' })];

  it('puts the names after the count and before the comparison', () => {
    const opening = valueOpening(rows, facets, 'runtimes', 'run Rust');
    const summary = summarise(rows, facets, 'runtimes', 'run Rust');
    const [first, ...rest] = summary.split('. ');
    assert.equal(opening, `${first}. They are Alpha and Beta. ${rest.join('. ')}`);
  });

  it('is the summary unchanged when there are too many to name', () => {
    const many = Array.from({ length: namedLimit + 1 }, (_, i) => row(`P${i}`, { category: 'cms' }));
    assert.equal(valueOpening(many, facets, 'runtimes', 'run Rust'), summarise(many, facets, 'runtimes', 'run Rust'));
  });

  it('names a pair page the same way', () => {
    const page = {
      aId: 'runtimes',
      bId: 'languages',
      aSubject: 'run on Node.js',
      bSubject: 'are written in TypeScript',
      matches: rows,
      aTotal: 10,
      bTotal: 5,
      widerRows: rows,
    };
    assert.match(
      pairOpening(page, facets),
      /^2 projects run on Node\.js and are written in TypeScript, listed alphabetically\. They are Alpha and Beta\. That is 2 of the 10/,
    );
  });
});
