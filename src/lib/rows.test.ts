import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fieldOf } from './fields.ts';
import { byDate, countValues, toRow, type ProviderRow } from './rows.ts';

/*
 * The counting rules, which are the ones that decide what the register claims.
 * Every bug this file would have caught was found by eye instead: a derived
 * value that stopped matching arrays, a `*` source that matched nothing, a
 * `notApplicable` field counted as missing. They are pure functions of a
 * record's frontmatter — there is no excuse for reading them off a page.
 */

const record = (id: string, data: Record<string, unknown>) => ({ id, data: { name: id, ...data } });

describe('toRow', () => {
  it('keeps a scalar as a scalar and a list as a list', () => {
    const row = toRow(record('a', { language: 'php', runtime: ['php', 'node'] }));
    assert.equal(row.facets.language, 'php');
    assert.deepEqual(row.facets.runtime, ['php', 'node']);
  });

  it('leaves a field nobody answered out entirely', () => {
    const row = toRow(record('a', {}));
    assert.equal(row.facets.language, undefined);
    assert.deepEqual(row.notApplicable, []);
  });

  /*
   * Not the same as unknown, and the difference is the whole reason the field
   * accepts null: a CSS framework has no database to support, and counting that
   * as a gap inflates every facet.
   */
  it('separates "does not apply" from "not recorded"', () => {
    const row = toRow(record('a', { databases: null }));
    assert.deepEqual(row.notApplicable, ['databases']);
    assert.equal(row.facets.databases, undefined);
  });

  it('drops an empty list rather than recording an empty answer', () => {
    const row = toRow(record('a', { runtime: [] }));
    assert.equal(row.facets.runtime, undefined);
  });
});

describe('countValues', () => {
  const category = fieldOf.get('category')!;

  const rows = (...answers: (string | null | undefined)[]): ProviderRow[] =>
    answers.map((answer, index) => toRow(record(`r${index}`, answer === undefined ? {} : { category: answer })));

  it('counts each value against the records that hold it', () => {
    const facet = countValues(category, rows('cms', 'cms', 'framework'));
    assert.equal(facet.values.find((value) => value.id === 'cms')?.count, 2);
    assert.equal(facet.values.find((value) => value.id === 'framework')?.count, 1);
  });

  it('reports what nobody recorded rather than dropping it', () => {
    const facet = countValues(category, rows('cms', undefined, undefined));
    assert.equal(facet.unknown, 2);
    assert.equal(facet.notApplicable, 0);
  });

  /* Out of the denominator entirely: not known, and not missing either. */
  it('takes "does not apply" out of the unknown count', () => {
    const facet = countValues(category, rows('cms', null, undefined));
    assert.equal(facet.notApplicable, 1);
    assert.equal(facet.unknown, 1);
  });

  /*
   * Recorded and shown on the record, never a filter and so never a page. The
   * dictionary has no such value yet, so the field is built here.
   */
  it('leaves a noFilter value out of the rows', () => {
    const field = {
      ...category,
      values: [...category.values, { id: 'unfiltered', label: 'Unfiltered', noFilter: true }],
    };

    const facet = countValues(field, []);
    assert.ok(!facet.values.some((value) => value.id === 'unfiltered'));
    assert.equal(facet.values.length, category.values.length);
  });

  it('names the facet by its URL segment, not by its field', () => {
    const facet = countValues(category, []);
    assert.equal(facet.id, 'categories');
    assert.equal(facet.field, 'category');
  });
});

/*
 * The two dated orders beside the alphabetical one. Both are pure functions of
 * the rows, and both have a rule that is easy to get wrong by eye: a row with
 * no date is not oldest, it is undated, and it goes after every dated row in
 * the order the register already uses.
 */
describe('the dated orders', () => {
  const rows = [
    { id: 'b', name: 'Beta', checkedAt: new Date('2026-08-14'), addedAt: new Date('2026-07-20') },
    { id: 'a', name: 'Alpha', checkedAt: new Date('2026-09-01'), addedAt: new Date('2026-07-20') },
    { id: 'c', name: 'Charlie', addedAt: new Date('2026-09-05') },
    { id: 'd', name: 'Delta', checkedAt: new Date('2026-08-14'), addedAt: new Date('2026-08-30') },
  ] as ProviderRow[];

  it('puts the newest date first and the undated last, alphabetical within a day', () => {
    assert.deepEqual(
      [...rows].sort(byDate('checkedAt')).map((row) => row.id),
      ['a', 'b', 'd', 'c'],
    );
    assert.deepEqual(
      [...rows].sort(byDate('addedAt')).map((row) => row.id),
      ['c', 'd', 'a', 'b'],
    );
  });
});
