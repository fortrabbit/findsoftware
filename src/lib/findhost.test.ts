import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { hostsFor, publisherId } from './findhost.ts';
import type { Host } from './findhost.ts';

/** Fixtures rather than FindHost's register, so a host joining FindHost does not change a test. */
const host = (id: string, software: string[], runtimes: string[] = ['php'], specialisation: string[] = []): Host => ({
  id,
  name: id,
  url: `https://${id}.example`,
  path: `/${id}/`,
  software,
  runtimes,
  specialisation,
});

const base = 'https://findhost.test';
const many = Array.from({ length: 12 }, (_, index) => host(`host-${index}`, ['wordpress']));
const pool = [
  ...many,
  host(publisherId, ['wordpress', 'kirby']),
  host('wp-only', ['wordpress'], ['php'], ['wordpress']),
];

describe('hostsFor', () => {
  it('shows nothing without a FindHost address', () => {
    assert.equal(hostsFor(undefined, 'wordpress', ['php'], pool), undefined);
  });

  it('caps the hosts at four, beside the publisher slot', () => {
    const picked = hostsFor(base, 'wordpress', ['php'], pool)!;
    assert.equal(picked.hosts.length, 4);
    assert.equal(picked.publisher?.name, publisherId);
    assert.ok(!picked.hosts.some((entry) => entry.name === publisherId));
    assert.equal(picked.total, pool.length);
    assert.equal(picked.all, `${base}/software/wordpress/`);
  });

  it('picks the same hosts on every call, listed alphabetically', () => {
    const first = hostsFor(base, 'wordpress', ['php'], pool)!.hosts.map((entry) => entry.name);
    const second = hostsFor(base, 'wordpress', ['php'], [...pool].reverse())!.hosts.map((entry) => entry.name);
    assert.deepEqual(first, second);
    assert.deepEqual(
      first,
      [...first].sort((a, b) => a.localeCompare(b, 'en')),
    );
  });

  it('picks a host built for the software first', () => {
    const picked = hostsFor(base, 'wordpress', ['php'], pool)!;
    assert.ok(picked.hosts.some((entry) => entry.name === 'wp-only'));
  });

  it('falls back to the runtime when FindHost has no page for the software', () => {
    const picked = hostsFor(base, 'some-php-cms', ['php'], pool)!;
    assert.equal(picked.all, `${base}/runtimes/php/`);
    assert.equal(picked.publisher?.name, publisherId);
  });

  it('leaves the publisher out where FindHost does not list it', () => {
    const picked = hostsFor(base, 'some-node-app', ['node'], [host('node-host', [], ['node'])])!;
    assert.equal(picked.publisher, undefined);
    assert.equal(picked.hosts.length, 1);
  });

  it('shows nothing for a record with no hosting need', () => {
    assert.equal(hostsFor(base, 'some-library', [], pool), undefined);
  });
});
