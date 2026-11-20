import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { changedFields, isFactFile, isSelfMerging, reviewReasons, withoutDates } from './confirmation.ts';

const file = [
  'id: astro',
  'name: Astro',
  'status: accepted',
  'checkedAt: 2026-10-22',
  'description: Web framework for content-driven websites.',
  'facts:',
  '  - field: currentMajor',
  '    value: 5',
  '    url: https://registry.npmjs.org/astro/latest',
  '    checkedAt: 2026-10-22',
  '    via: api',
  '  - field: installMethod',
  '    value: npm create astro',
  '    url: https://docs.astro.build/en/install-and-setup/',
  '    checkedAt: 2026-10-20',
  '    via: page',
  '    quote: "npm create astro@latest"',
  'notFound: [hqCountry, forum]',
  'unreadable: []',
  'notes: >',
  '  The framework is maintained by The Astro Technology Company.',
  '',
].join('\n');

const redated = (text: string) => text.replaceAll('2026-10-22', '2026-11-20').replace('2026-10-20', '2026-11-20');
const addFact = (text: string, fact: string) => text.replace('notFound:', `${fact}\nnotFound:`);

describe('a confirmation', () => {
  it('moves only checkedAt dates, and merges', () => {
    assert.deepEqual(reviewReasons(file, redated(file)), []);
  });

  it('may confirm some facts and leave others', () => {
    assert.equal(isSelfMerging(file, file.replaceAll('2026-10-22', '2026-11-20')), true);
  });

  it('never moves a date back', () => {
    assert.equal(isSelfMerging(file, file.replace('checkedAt: 2026-10-20', 'checkedAt: 2026-10-01')), false);
  });
});

describe('a sourced change', () => {
  it('moves a value with the run date, and merges', () => {
    assert.equal(isSelfMerging(file, redated(file).replace('value: 5', 'value: 6')), true);
  });

  it('is not a value moved under an old date', () => {
    assert.equal(isSelfMerging(file, file.replace('value: 5', 'value: 6')), false);
  });

  it('is not a value moved while the file date stays', () => {
    const after = file
      .replace('value: 5', 'value: 6')
      .replace('    checkedAt: 2026-10-22\n    via: api', '    checkedAt: 2026-11-20\n    via: api');
    assert.match(reviewReasons(file, after).join(), /without the run's checkedAt/);
  });

  it('is not a page fact without its quote', () => {
    const after = redated(file)
      .replace('value: npm create astro', 'value: pnpm create astro')
      .replace(/\n    quote: .*/, '');
    assert.match(reviewReasons(file, after).join(), /without a quote/);
  });

  it('moves a page fact with a new quote', () => {
    const after = redated(file)
      .replace('value: npm create astro', 'value: pnpm create astro')
      .replace('"npm create astro@latest"', '"pnpm create astro@latest"');
    assert.equal(isSelfMerging(file, after), true);
  });

  it('adds a sourced fact and drops it from notFound', () => {
    const fact = [
      '  - field: forum',
      '    value: https://astro.build/chat',
      '    url: https://astro.build/',
      '    checkedAt: 2026-11-20',
      '    via: page',
      '    quote: "Join our Discord"',
    ].join('\n');
    const after = addFact(redated(file), fact).replace('[hqCountry, forum]', '[hqCountry]');
    assert.deepEqual(reviewReasons(file, after), []);
  });

  it('is not a dropped notFound entry without a fact', () => {
    assert.match(reviewReasons(file, redated(file).replace('[hqCountry, forum]', '[hqCountry]')).join(), /drops forum/);
  });

  it('is not an added notFound entry', () => {
    assert.match(
      reviewReasons(file, redated(file).replace('[hqCountry, forum]', '[hqCountry, forum, x]')).join(),
      /adds x/,
    );
  });

  it('is not a removed fact', () => {
    const after = redated(file).replace(/  - field: currentMajor\n(    .*\n){4}/, '');
    assert.match(reviewReasons(file, after).join(), /removes currentMajor/);
  });

  it('is not a moved source url', () => {
    const after = redated(file).replace('astro/latest', 'astro');
    assert.match(reviewReasons(file, after).join(), /removes currentMajor/);
  });

  it('moves a pinned release to a newer tag of the same repository', () => {
    const pinned = file.replace(
      'registry.npmjs.org/astro/latest',
      'github.com/withastro/astro/releases/tag/astro@5.1.0',
    );
    const after = redated(pinned).replace('value: 5', 'value: 6').replace('astro@5.1.0', 'astro@6.0.0');
    assert.deepEqual(reviewReasons(pinned, after), []);
  });

  it('moves a pinned download week to a newer week', () => {
    const week = file.replace(
      'registry.npmjs.org/astro/latest',
      'api.npmjs.org/downloads/range/2026-10-12:2026-10-18/astro',
    );
    const after = redated(week).replace('2026-10-12:2026-10-18', '2026-11-09:2026-11-15');
    assert.deepEqual(reviewReasons(week, after), []);
  });

  it('is not a release moved to another repository', () => {
    const pinned = file.replace('registry.npmjs.org/astro/latest', 'github.com/withastro/astro/releases/tag/v5');
    const after = redated(pinned).replace('withastro/astro/releases', 'other/astro/releases');
    assert.match(reviewReasons(pinned, after).join(), /removes currentMajor/);
  });

  it('tells two facts of the same field apart by their url', () => {
    const second = [
      '  - field: currentMajor',
      '    value: 5',
      '    url: https://api.github.com/repos/withastro/astro/releases/latest',
      '    checkedAt: 2026-10-22',
      '    via: api',
    ].join('\n');
    const before = addFact(file, second);
    const after = redated(before).replace('value: 5\n    url: https://registry', 'value: 6\n    url: https://registry');
    assert.equal(isSelfMerging(before, after), true);
  });
});

describe('a status change', () => {
  const ended = [
    '  - field: status',
    '    value: discontinued',
    '    url: https://api.github.com/repos/withastro/astro',
    '    checkedAt: 2026-11-20',
    '    via: api',
  ].join('\n');

  it('merges to discontinued with a fresh status fact', () => {
    const after = addFact(redated(file), ended).replace('status: accepted', 'status: discontinued');
    assert.deepEqual(reviewReasons(file, after), []);
  });

  it('is not discontinued without a status fact', () => {
    assert.equal(isSelfMerging(file, redated(file).replace('status: accepted', 'status: discontinued')), false);
  });

  it('is not discontinued on an old status fact', () => {
    const before = addFact(file, ended.replace('2026-11-20', '2026-10-22'));
    const after = before.replace('status: accepted', 'status: discontinued');
    assert.equal(isSelfMerging(before, after), false);
  });

  it('is never stub, which is curation', () => {
    const after = addFact(redated(file), ended.replace('discontinued', 'stub')).replace(
      'status: accepted',
      'status: stub',
    );
    assert.match(reviewReasons(file, after).join(), /changes status to stub/);
  });
});

describe('what the routine never writes', () => {
  for (const [key, from, to] of [
    ['id', 'id: astro', 'id: astro-build'],
    ['name', 'name: Astro', 'name: Astro Framework'],
    ['description', 'for content-driven websites', 'for content sites'],
    ['notes', 'maintained by', 'built by'],
    ['unreadable', 'unreadable: []', 'unreadable: [docs]'],
  ]) {
    it(`is a changed ${key}`, () => {
      assert.deepEqual(reviewReasons(file, redated(file).replace(from, to)), [`changes ${key}`]);
    });
  }

  it('is a file that does not parse', () => {
    assert.deepEqual(reviewReasons(file, 'facts: [\n'), ['not a fact file']);
  });
});

describe('what counts as a fact file', () => {
  it('is a yaml file directly under research/facts', () => {
    assert.equal(isFactFile('research/facts/astro.yml'), true);
    assert.equal(isFactFile('research/facts/old/astro.yml'), false);
    assert.equal(isFactFile('src/content/software/astro.md'), false);
  });
});

describe('the record helpers', () => {
  const record = [
    '---',
    'id: astro',
    'firstRelease: 2021',
    'languages:',
    '  - js',
    'checkedAt: 2026-08-01',
    '---',
    '',
  ].join('\n');

  it('blank the dates and nothing else', () => {
    assert.equal(withoutDates(record).includes('2026'), false);
    assert.equal(withoutDates(record).includes('firstRelease: 2021'), true);
  });

  it('take a list as one field', () => {
    assert.deepEqual(changedFields(record, record.replace('  - js', '  - ts').replace('08-01', '09-01')), [
      'languages',
    ]);
  });
});
