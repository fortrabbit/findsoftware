import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { applyChanges, goesBack, majorOf, readerFor, restate, same, type Reader } from './api-facts.ts';

const reader = (fact: Parameters<typeof readerFor>[0]) => readerFor(fact) as Reader;
const api = (field: string, url: string, value?: unknown) => ({ field, url, value, via: 'api' });

describe('the major of a version', () => {
  for (const [tag, major] of [
    ['v8.1.4.1', 8],
    ['release-36.3.0', 36],
    ['2.8.3', 2],
    ['1.0.0-beta.1', 1],
    ['0.21.0', 0],
    ['v5', 5],
  ] as const) {
    it(`is ${major} for ${tag}`, () => assert.equal(majorOf(tag), major));
  }

  it('is none for a monorepo tag or a calendar version', () => {
    assert.equal(majorOf('@astrojs/react@4.2.1'), undefined);
    assert.equal(majorOf('2026.8'), undefined);
  });
});

describe('a reader', () => {
  it('reads stars off the repository', () => {
    const r = reader(api('githubStargazers', 'https://github.com/mirego/accent', 1493));
    assert.equal(r.call, 'https://api.github.com/repos/mirego/accent');
    assert.equal(r.read({ status: 200, json: { stargazers_count: 1500 } }, api('x', ''), ''), 1500);
  });

  it('counts contributors by the last page, anonymous ones when the source did', () => {
    const r = reader(api('contributors', 'https://api.github.com/repos/withastro/astro/contributors?anon=true'));
    assert.match(r.call, /per_page=1&anon=1$/);
    const link =
      '<https://api.github.com/x?per_page=1&page=2>; rel="next", <https://api.github.com/x?per_page=1&page=1277>; rel="last"';
    assert.equal(r.read({ status: 200, json: [{}], link }, api('x', ''), ''), 1277);
  });

  it('moves a pinned release to the latest one', () => {
    const r = reader(api('currentMajor', 'https://github.com/rails/rails/releases/tag/v8.1.4.1', 8));
    const answer = {
      status: 200,
      json: { tag_name: 'v9.0.0', html_url: 'https://github.com/rails/rails/releases/tag/v9.0.0' },
    };
    assert.equal(r.call, 'https://api.github.com/repos/rails/rails/releases/latest');
    assert.equal(r.read(answer, api('x', ''), ''), 9);
    assert.equal(r.move?.(answer), 'https://github.com/rails/rails/releases/tag/v9.0.0');
  });

  it('moves a pinned download week to last week, dates in the value too', () => {
    const fact = api(
      'npmWeeklyDownloads',
      'https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/ace-builds',
      '2282373 for 2026-10-26 to 2026-11-01',
    );
    const r = reader(fact);
    const answer = { status: 200, json: { downloads: 2300000, start: '2026-11-09', end: '2026-11-15' } };
    assert.equal(r.read(answer, fact, ''), '2300000 for 2026-11-09 to 2026-11-15');
    assert.equal(r.move?.(answer), 'https://api.npmjs.org/downloads/range/2026-11-09:2026-11-15/ace-builds');
  });

  it('moves a week named by its first date and the last day', () => {
    const fact = api(
      'npmWeeklyDownloads',
      'https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/accent-cli',
      '8459 (2026-10-23..29)',
    );
    const answer = { status: 200, json: { downloads: 9000, start: '2026-11-09', end: '2026-11-15' } };
    assert.equal(reader(fact).read(answer, fact, ''), '9000 (2026-11-09..15)');
  });

  it('reads a Packagist name with a dot', () => {
    const fact = api('packagistDownloads', 'https://packagist.org/packages/daux/daux.io.json', '5 (monthly)');
    assert.equal(reader(fact).call, 'https://packagist.org/packages/daux/daux.io.json');
  });

  it('leaves a bare figure whose period is unknown', () => {
    const fact = api('packagistDownloads', 'https://packagist.org/packages/acquia/acquia_cms.json', '462103');
    const answer = { status: 200, json: { package: { downloads: { total: 462000, monthly: 9000 } } } };
    assert.equal(reader(fact).read(answer, fact, ''), undefined);
  });

  it('says a repository went private', () => {
    const fact = api('sourcePublic', 'https://api.github.com/repos/a/b', true);
    assert.equal(reader(fact).read({ status: 200, json: { private: true } }, fact, ''), false);
  });

  it('re-reads each period of a figure kept per period', () => {
    const fact = api('packagistDownloads', 'https://packagist.org/packages/laravel/framework.json', {
      total: 1,
      monthly: 2,
    });
    const answer = { status: 200, json: { package: { downloads: { total: 10, monthly: 20, daily: 1 } } } };
    assert.deepEqual(reader(fact).read(answer, fact, ''), { total: 10, monthly: 20 });
  });

  it('picks the period the old figure names', () => {
    const fact = api('packagistDownloads', 'https://packagist.org/packages/vrana/adminer.json', '20423 (monthly)');
    const answer = { status: 200, json: { package: { downloads: { total: 900000, monthly: 21000, daily: 700 } } } };
    assert.equal(reader(fact).read(answer, fact, ''), 21000);
  });

  it('skips a stable fact and a host it does not know', () => {
    assert.deepEqual(readerFor(api('firstRelease', 'https://api.github.com/repos/a/b/tags')), { skip: 'kept' });
    assert.deepEqual(readerFor(api('nugetName', 'https://azuresearch-usnc.nuget.org/query')), { skip: 'no reader' });
    assert.deepEqual(readerFor({ ...api('language', 'https://github.com/a/b'), via: 'page' }), {
      skip: 'not an api fact',
    });
  });
});

describe('a reading', () => {
  it('keeps the words after a figure, and moves a date in them to the run date', () => {
    assert.equal(
      restate('380807 total (aimeos/aimeos-core)', 400000, '2026-11-20'),
      '400000 total (aimeos/aimeos-core)',
    );
    assert.equal(restate('6112866 (2026-10-31)', 6200000, '2026-11-20'), '6200000 (2026-11-20)');
    assert.equal(restate(3, '4', ''), 4);
    assert.equal(restate('3', 4, ''), '4');
  });

  it('is the same major whatever the form', () => {
    assert.equal(same('currentMajor', '3', 3), true);
    assert.equal(same('currentMajor', 'v5.2', 5), true);
    assert.equal(same('githubStargazers', '1,200', 1200), true);
    assert.equal(same('npmName', 'Astro', 'astro'), true);
    assert.equal(same('license', 'GPL-2.0-or-later', 'GPL-2.0'), true);
    assert.equal(same('license', 'GPL-2.0', 'GPL-3.0'), false);
    assert.equal(same('homepage', 'https://www.getzola.org/', 'https://www.getzola.org'), true);
    assert.equal(same('homepage', 'https://www.yiiframework.com', 'http://www.yiiframework.com'), true);
  });

  it('never moves a date or major back', () => {
    assert.equal(goesBack('latestReleaseDate', '2026-10-01', '2026-09-01'), true);
    assert.equal(goesBack('currentMajor', 5, 4), true);
    assert.equal(goesBack('currentMajor', 5, 6), false);
    assert.equal(goesBack('contributors', 386, 332), true);
  });
});

describe('writing a fact file', () => {
  const file = [
    'id: astro',
    'checkedAt: 2026-10-18',
    'facts:',
    '  - field: githubStargazers',
    '    value: 63303',
    '    url: https://api.github.com/repos/withastro/astro',
    '    checkedAt: 2026-10-18',
    '    via: api',
    '  - field: packagistDownloads',
    '    value: {total: 1, monthly: 2}',
    '    url: "https://packagist.org/packages/a/b.json"',
    '    checkedAt: 2026-10-18',
    '    via: api',
    '  - field: latestReleaseDate',
    '    value: "2026-10-15"',
    '    url: https://github.com/withastro/astro/releases/tag/astro@5.1.0',
    '    checkedAt: 2026-10-18',
    '    via: api',
    'notFound: []',
    '',
  ].join('\n');

  it('moves the dates, writes the values and keeps the layout', () => {
    const out = applyChanges(
      file,
      [
        { index: 0, value: 64000 },
        { index: 1, value: { total: 10, monthly: 20 } },
        { index: 2, value: '2026-11-18', url: 'https://github.com/withastro/astro/releases/tag/astro@5.2.0' },
      ],
      '2026-11-20',
    );
    assert.equal(
      out,
      file
        .replaceAll('2026-10-18', '2026-11-20')
        .replace('63303', '64000')
        .replace('{total: 1, monthly: 2}', '{ total: 10, monthly: 20 }')
        .replace('"2026-10-15"', '"2026-11-18"')
        .replace('astro@5.1.0', 'astro@5.2.0'),
    );
  });

  it('re-dates a confirmed fact and the file only', () => {
    const out = applyChanges(file, [{ index: 0 }], '2026-11-20');
    assert.equal(
      out,
      file
        .replace('checkedAt: 2026-10-18', 'checkedAt: 2026-11-20')
        .replace('astro\n    checkedAt: 2026-10-18', 'astro\n    checkedAt: 2026-11-20'),
    );
  });

  it('refuses a file whose facts it cannot line up', () => {
    assert.equal(
      applyChanges(file.replace('  - field: latestReleaseDate', '  - field: latest release date'), [{ index: 0 }], 'x'),
      null,
    );
  });
});

describe('a block value', () => {
  it('is written back as one line', () => {
    const text = [
      'id: a',
      'checkedAt: 2026-10-01',
      'facts:',
      '  - field: packagistDownloads',
      '    value:',
      '      total: 141',
      '      monthly: 5',
      '    url: https://packagist.org/packages/a/a.json',
      '    checkedAt: 2026-10-01',
      '    via: api',
      '  - field: language',
      '    value: PHP',
      '    url: https://api.github.com/repos/a/a',
      '    checkedAt: 2026-10-01',
      '    via: api',
      '',
    ].join('\n');
    const result = applyChanges(text, [{ index: 0, value: { total: 150, monthly: 9 } }, { index: 1 }], '2026-11-21');
    assert.match(result ?? '', /value: \{ total: 150, monthly: 9 \}\n/);
    assert.match(result ?? '', /value: PHP\n.*\n    checkedAt: 2026-11-21/);
  });
});
