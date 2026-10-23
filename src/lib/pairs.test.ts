import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fieldOf, fields as dictionary } from './fields.ts';
import { countValues } from './rows.ts';
import { narrowing, pagesOf, pairCeiling, pairFloor, pairings, pairPath } from './pairs.ts';
import type { ProviderRow } from './rows.ts';

/**
 * Fixtures rather than the register: the gate is arithmetic, and arithmetic
 * checked against live data stops being a test the first time a record changes.
 */
const row = (id: string, facets: Record<string, string | string[]>): ProviderRow =>
  ({ id, name: id, facets, notApplicable: [] }) as unknown as ProviderRow;

const field = (id: string) => dictionary.find((entry) => entry.id === id)!;

/*
 * The dictionary declares no pairing yet, and a page needs a `titleWith` to name
 * itself, so both are supplied here. Test files run in their own process.
 */
const fields = dictionary.map((entry) =>
  entry.id === 'runtime' ? { ...entry, pairs: [{ with: 'languages' }] } : entry,
);
fieldOf.get('language')!.titleWith = 'written in {label}';

/** n records running on Node.js, of which `both` are also written in Go. */
const sample = (node: number, go: number, both: number) => [
  ...Array.from({ length: both }, (_, i) => row(`both-${i}`, { runtime: ['node'], language: 'go' })),
  ...Array.from({ length: node - both }, (_, i) => row(`node-${i}`, { runtime: ['node'], language: 'javascript' })),
  ...Array.from({ length: go - both }, (_, i) => row(`go-${i}`, { runtime: ['php'], language: 'go' })),
];

const pairingFor = (providers: ProviderRow[]) => {
  const facets = [countValues(field('runtime'), providers), countValues(field('language'), providers)];
  return {
    pairing: pairings(facets, fields).find((entry) => entry.a.id === 'runtimes' && entry.b.id === 'languages')!,
  };
};

describe('the pairing gate', () => {
  it('measures narrowing against the smaller side', () => {
    assert.equal(narrowing(10, 20, 100), 0.5);
    // One value entirely inside the other: the second says nothing.
    assert.equal(narrowing(20, 20, 100), 1);
  });

  it('builds a combination that narrows', () => {
    const providers = sample(40, 30, 12);
    const { pairing } = pairingFor(providers);
    const pages = pagesOf(pairing, providers);

    const go = pages.find((page) => page.av.id === 'node' && page.bv.id === 'go');
    assert.ok(go, 'Node.js and Go should be a page');
    assert.equal(go.matches.length, 12);
    assert.equal(pairPath(go), '/runtimes/node/languages/go/');
  });

  it('refuses one that lists too few', () => {
    const providers = sample(40, 30, pairFloor - 1);
    const { pairing } = pairingFor(providers);

    assert.equal(
      pagesOf(pairing, providers).some((page) => page.av.id === 'node' && page.bv.id === 'go'),
      false,
    );
  });

  it('refuses one that narrows nothing, however many it lists', () => {
    // Every Go record also runs on Node.js, so the pair page is the Go page.
    const providers = sample(80, 40, 40);
    const { pairing } = pairingFor(providers);
    const page = pagesOf(pairing, providers).find((entry) => entry.av.id === 'node' && entry.bv.id === 'go');

    assert.equal(narrowing(40, 80, 40), 1);
    assert.equal(page, undefined);
  });

  it('holds the two gates where they were set', () => {
    assert.ok(pairFloor >= 5, 'a page below five records lists nothing');
    assert.ok(pairCeiling <= 0.8, 'above this a combination repeats the page it narrows');
  });
});

describe('what the dictionary declares', () => {
  it('names each pairing once, in one direction', () => {
    const providers = sample(40, 30, 12);
    const facets = [countValues(field('runtime'), providers), countValues(field('language'), providers)];
    const both = pairings(facets, fields).map((pairing) => [pairing.a.id, pairing.b.id].sort().join('+'));

    assert.deepEqual(both, ['languages+runtimes']);
  });
});
