import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fieldOf, subjectOf } from './fields.ts';

const subject = (field: string, value: { id: string; label: string }, count: number) =>
  subjectOf(fieldOf.get(field)!, value, count);

describe('subjectOf', () => {
  // The bug this exists to stop: "1 project are written in PHP", live on
  // /languages/php/ and on every other facet value held by a single record.
  it('agrees with the count', () => {
    const one = { id: 'php', label: 'PHP' };
    assert.equal(subject('language', one, 1), 'is written in PHP');
    assert.equal(subject('language', one, 12), 'are written in PHP');
  });

  it('inflects a verb that takes -s', () => {
    const value = { id: 'node', label: 'Node.js' };
    assert.equal(subject('hosting', value, 1), 'needs Node.js to host');
    assert.equal(subject('hosting', value, 9), 'need Node.js to host');
  });

  it('swaps a whole word where -s would be wrong', () => {
    const value = { id: 'foundation', label: 'Foundation' };
    assert.equal(subject('maintainerType', value, 1), 'is maintained by a foundation');
    assert.equal(subject('maintainerType', value, 3), 'are maintained by a foundation');
  });

  // The fallback for a field with no phrase carries no marker, so it must come
  // back exactly as written in both numbers.
  it('leaves an unmarked phrase alone', () => {
    const value = { id: 'MIT', label: 'MIT' };
    assert.match(subject('license', value, 1), /^record license: /);
    assert.equal(subject('license', value, 1), subject('license', value, 4));
  });

  it('never leaves an inflection marker in the rendered phrase', () => {
    for (const field of fieldOf.values()) {
      for (const value of field.values) {
        for (const count of [1, 2]) {
          const phrase = subjectOf(field, value, count);
          assert.doesNotMatch(phrase, /[{}|]/, `${field.id}/${value.id}: ${phrase}`);
        }
      }
    }
  });
});
