import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { priceBands } from './price.ts';

describe('the price scale', () => {
  it('has seven bands and no free one', () => {
    assert.equal(priceBands.length, 7);
    // Free is what a project gives away; this records what it charges.
    assert.equal(
      priceBands.some((band) => /free/i.test(band.label)),
      false,
    );
  });

  it('runs cheap to expensive, which is what makes it a scale', () => {
    assert.deepEqual(
      priceBands.map((band) => band.id),
      ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    );
  });

  /*
   * The ids were once free-tier, under-5, 5-15 and so on. A record still
   * carrying one has to fail the schema rather than file itself under nothing.
   */
  it('does not recognise the ids it replaced', () => {
    for (const old of ['free-tier', 'under-5', '5-15']) {
      assert.ok(!priceBands.some((band) => band.id === old), `${old} should be gone`);
    }
  });
});
