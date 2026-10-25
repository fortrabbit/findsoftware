import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { dotScale, figuresOf, usageBands } from './usage.ts';

describe('figuresOf', () => {
  it('reads packagist monthly in place of the total', () => {
    const figures = figuresOf({ packagistDownloads: 900, packagistMonthlyDownloads: 40 });
    assert.deepEqual(figures, { packagistDownloads: 40 });
  });

  it('falls back to the packagist total when no monthly count is held', () => {
    assert.deepEqual(figuresOf({ packagistDownloads: 900 }), { packagistDownloads: 900 });
  });

  it('leaves out plugin counts and anything not a non-negative number', () => {
    const figures = figuresOf({ pluginCount: 12, githubStargazers: '5,000', contributors: -1, npmWeeklyDownloads: 7 });
    assert.deepEqual(figures, { npmWeeklyDownloads: 7 });
  });
});

describe('usageBands', () => {
  it('gives no band to a record that holds no figure', () => {
    const bands = usageBands([
      { id: 'a', figures: {} },
      { id: 'b', figures: { contributors: 10 } },
    ]);
    assert.equal(bands.has('a'), false);
    assert.equal(bands.has('b'), true);
  });

  it('places a larger figure in a higher band', () => {
    const records = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => ({
      id: `r${value}`,
      figures: { githubStargazers: value * 100 },
    }));
    const bands = usageBands(records);
    assert.equal(bands.get('r1'), 1);
    assert.equal(bands.get('r10'), 5);
    assert.ok(bands.get('r5')! <= bands.get('r6')!);
  });

  it('cuts ten records into five bands of two', () => {
    const records = Array.from({ length: 10 }, (_, index) => ({
      id: `r${index}`,
      figures: { contributors: index + 1 },
    }));
    const counts = [0, 0, 0, 0, 0, 0];
    for (const band of usageBands(records).values()) counts[band]++;
    assert.deepEqual(counts.slice(1), [2, 2, 2, 2, 2]);
  });

  it('gives tied records the same band', () => {
    const bands = usageBands([
      { id: 'a', figures: { contributors: 5 } },
      { id: 'b', figures: { contributors: 5 } },
      { id: 'c', figures: { contributors: 50 } },
    ]);
    assert.equal(bands.get('a'), bands.get('b'));
  });

  it('averages the places of the figures a record holds, skipping the ones it lacks', () => {
    // Only one record holds the second figure, so it places at the middle of its own set.
    const bands = usageBands([
      { id: 'low', figures: { contributors: 1, dependentRepos: 1 } },
      { id: 'high', figures: { contributors: 9 } },
      { id: 'mid', figures: { contributors: 5 } },
    ]);
    assert.equal(bands.get('high'), 5);
    assert.equal(bands.get('low'), 1);
  });

  it('places a record alone in the middle band', () => {
    assert.equal(usageBands([{ id: 'only', figures: { contributors: 3 } }]).get('only'), 3);
  });
});

describe('dotScale', () => {
  it('keeps the default size for a record without a band', () => {
    assert.equal(dotScale(undefined), 1);
  });

  it('grows the dot from band 1 to band 5', () => {
    assert.ok(dotScale(1) < dotScale(3));
    assert.equal(dotScale(3), 1);
    assert.ok(dotScale(5) > dotScale(3));
  });
});
