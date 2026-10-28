import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { momentumOf, type Thresholds } from './momentum.ts';

const t: Thresholds = {
  activeMonths: 12,
  commits: { last13Weeks: 13, trend: 1 },
  downloads: { growth: 0.1, npm28Floor: 4000, packagistDailyFloor: 33 },
  popularityBand: 5,
};
const day = '2026-10-28';

describe('momentumOf', () => {
  it('shows a record nobody has measured', () => {
    assert.deepEqual(momentumOf(undefined, {}, undefined, t), { shown: true, by: 'unmeasured' });
  });

  it('hides a record with no release or push in the window, whatever its band', () => {
    const verdict = momentumOf(
      { checkedAt: day, pushedAt: '2025-01-01', commits13: 50, commits26: 90, commitsPrior26: 10 },
      {},
      5,
      t,
    );
    assert.deepEqual(verdict, { shown: false, why: 'inactive' });
  });

  it('counts a release date as activity', () => {
    const verdict = momentumOf({ checkedAt: day }, { latestReleaseDate: new Date('2026-06-01') }, 5, t);
    assert.deepEqual(verdict, { shown: true, by: 'popularity' });
  });

  it('shows steady or rising commits above the floor', () => {
    const figures = { checkedAt: day, pushedAt: day, commits13: 20, commits26: 40, commitsPrior26: 40 };
    assert.deepEqual(momentumOf(figures, {}, 1, t), { shown: true, by: 'activity' });
  });

  it('does not count falling commits', () => {
    const figures = { checkedAt: day, pushedAt: day, commits13: 20, commits26: 40, commitsPrior26: 80 };
    assert.deepEqual(momentumOf(figures, {}, 1, t), { shown: false, why: 'flat' });
  });

  it('shows download growth above the floor only', () => {
    const base = { checkedAt: day, pushedAt: day };
    assert.equal(momentumOf({ ...base, npm28: 5500, npm28YearAgo: 5000 }, {}, 1, t).shown, true);
    assert.equal(momentumOf({ ...base, npm28: 40, npm28YearAgo: 20 }, {}, 1, t).shown, false);
    assert.equal(momentumOf({ ...base, packagistDaily: 80, packagistDailyYearAgo: 40 }, {}, 1, t).shown, true);
    // A young package that barely existed a year ago.
    assert.equal(momentumOf({ ...base, packagistDaily: 227, packagistDailyYearAgo: 19 }, {}, 1, t).shown, true);
    assert.equal(momentumOf({ ...base, npm28: 4400, npm28YearAgo: 4500 }, {}, 1, t).shown, false);
    // No year-ago figure is unknown growth, not growth from zero.
    assert.equal(momentumOf({ ...base, npm28: 90000 }, {}, 1, t).shown, false);
  });

  it('keeps popularity off when no band threshold is set', () => {
    const { popularityBand: _, ...without } = t;
    assert.deepEqual(momentumOf({ checkedAt: day, pushedAt: day }, {}, 5, without), { shown: false, why: 'flat' });
  });
});
