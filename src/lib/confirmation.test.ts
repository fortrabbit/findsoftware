import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { isFactFile, keepProof, newFileProblem, reviewReasons } from './confirmation.ts';

const isSelfMerging = (before: string, after: string) => reviewReasons(before, after).length === 0;

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

  it('merges a value moved under an old date', () => {
    assert.equal(isSelfMerging(file, file.replace('value: 5', 'value: 6')), true);
  });

  it('merges a value moved while the file date stays', () => {
    const after = file
      .replace('value: 5', 'value: 6')
      .replace('    checkedAt: 2026-10-22\n    via: api', '    checkedAt: 2026-11-20\n    via: api');
    assert.deepEqual(reviewReasons(file, after), []);
  });

  it('merges a page fact without its quote', () => {
    const after = redated(file)
      .replace('value: npm create astro', 'value: pnpm create astro')
      .replace(/\n    quote: .*/, '');
    assert.deepEqual(reviewReasons(file, after), []);
  });

  it('merges a page value changed under its old quote', () => {
    const after = redated(file).replace('value: npm create astro', 'value: pnpm create astro');
    assert.deepEqual(reviewReasons(file, after), []);
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

  it('merges a moved source url', () => {
    const after = redated(file).replace('astro/latest', 'astro');
    assert.deepEqual(reviewReasons(file, after), []);
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

  it('merges a release moved to another repository', () => {
    const pinned = file.replace('registry.npmjs.org/astro/latest', 'github.com/withastro/astro/releases/tag/v5');
    const after = redated(pinned).replace('withastro/astro/releases', 'other/astro/releases');
    assert.deepEqual(reviewReasons(pinned, after), []);
  });

  it('is not a removed fact covered only by a re-dated one of the same field', () => {
    const second = [
      '  - field: currentMajor',
      '    value: 5',
      '    url: https://api.github.com/repos/withastro/astro/releases/latest',
      '    checkedAt: 2026-10-22',
      '    via: api',
    ].join('\n');
    const before = addFact(file, second);
    const after = redated(file);
    assert.match(reviewReasons(before, after).join(), /removes currentMajor/);
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

  it('is not discontinued when built on another project, which a person curates', () => {
    const plugin = addFact(
      file,
      '  - field: basedOn\n    value: [wordpress]\n    url: https://astro.build/\n    checkedAt: 2026-10-22\n    via: page\n    quote: "for WordPress"',
    );
    const after = addFact(redated(plugin), ended).replace('status: accepted', 'status: discontinued');
    assert.match(reviewReasons(plugin, after).join(), /built on another project/);
  });

  it('merges discontinued without a status fact', () => {
    assert.equal(isSelfMerging(file, redated(file).replace('status: accepted', 'status: discontinued')), true);
  });

  it('merges discontinued on an old status fact', () => {
    const before = addFact(file, ended.replace('2026-11-20', '2026-10-22'));
    const after = before.replace('status: accepted', 'status: discontinued');
    assert.equal(isSelfMerging(before, after), true);
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

describe('a fact file the discovery adds', () => {
  it('merges an accepted record whose facts carry their sources', () => {
    assert.equal(newFileProblem('astro', file), '');
  });

  it('is not a file whose id differs from its name', () => {
    assert.match(newFileProblem('other', file), /not a fact file for other/);
  });

  it('is never a stub or discontinued record', () => {
    assert.match(newFileProblem('astro', file.replace('status: accepted', 'status: stub')), /status stub/);
    assert.match(newFileProblem('astro', file.replace('status: accepted', 'status: discontinued')), /discontinued/);
  });

  it('is not a fact without its source', () => {
    assert.match(newFileProblem('astro', file.replace('    via: api\n', '')), /currentMajor without its source/);
  });
});

describe('taking back what has no proof', () => {
  it('returns a quote not on its page to the old one', () => {
    const after = redated(file).replace('"npm create astro@latest"', '"npm create astro now"');
    const { text, notes } = keepProof(file, after, ['npm create astro now']);
    assert.equal(text, redated(file));
    assert.match(notes.join(), /installMethod quote not on its page, old quote kept/);
  });

  it('drops a quote not on its page from a fact that had none', () => {
    const fact =
      '  - field: forum\n    value: x\n    url: https://astro.build/\n    checkedAt: 2026-11-20\n    via: page\n    quote: "Join"';
    const after = addFact(redated(file), fact);
    const { text } = keepProof(file, after, ['Join']);
    assert.equal(text, addFact(redated(file), fact.replace('\n    quote: "Join"', '')));
  });

  it('keeps the old status for a discontinued without a status fact', () => {
    const after = redated(file).replace('status: accepted', 'status: discontinued');
    const { text, notes } = keepProof(file, after, []);
    assert.equal(text, redated(file));
    assert.match(notes.join(), /status kept at accepted/);
  });

  it('leaves a discontinued with a fresh status fact', () => {
    const ended =
      '  - field: status\n    value: discontinued\n    url: https://api.github.com/repos/withastro/astro\n    checkedAt: 2026-11-20\n    via: api';
    const after = addFact(redated(file), ended).replace('status: accepted', 'status: discontinued');
    assert.equal(keepProof(file, after, []).text, after);
  });
});
