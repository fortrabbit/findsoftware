import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildGraph, unknownLanguage, type GraphRecord } from './graph.ts';

const record = (id: string, extra: Partial<GraphRecord> = {}): GraphRecord => ({
  id,
  name: id,
  href: `/${id}/`,
  ...extra,
});
/* Fixtures rather than the register, so a record changing never breaks the rule. */
const records = [
  record('laravel', { language: 'php' }),
  record('livewire', { language: 'php', basedOn: ['laravel'] }),
  record('filament', { language: 'php', basedOn: ['laravel', 'livewire'] }),
  record('old', { language: 'php', status: 'stub' }),
  record('child', { language: 'php', basedOn: ['old'] }),
  record('mystery'),
];
const run = () =>
  buildGraph(
    records,
    (r) => r.status !== 'stub',
    (id) => ({ label: id.toUpperCase(), href: `/languages/${id}/` }),
  );

describe('built-on graph', () => {
  it('a drawn record brings its parents, whatever their status', () => {
    assert.ok(run().nodes.some((node) => node.key === 'old'));
  });

  it('roots hang off their language, projects off their parents', () => {
    const { edges } = run();
    assert.deepEqual(
      edges.filter(([, target]) => target === 'filament'),
      [
        ['laravel', 'filament'],
        ['livewire', 'filament'],
      ],
    );
    assert.ok(edges.some(([source, target]) => source === 'language:php' && target === 'laravel'));
    assert.ok(edges.some(([source, target]) => source === unknownLanguage && target === 'mystery'));
  });

  it('links a language to its facet page, and the unknown one nowhere', () => {
    const { nodes } = run();
    assert.equal(nodes.find((node) => node.key === 'language:php')!.href, '/languages/php/');
    assert.equal(nodes.find((node) => node.key === unknownLanguage)!.href, undefined);
  });

  it('the tree lists a project under each parent', () => {
    const php = run().tree.find((item) => item.key === 'language:php')!;
    const laravel = php.children.find((item) => item.key === 'laravel')!;
    assert.deepEqual(
      laravel.children.map((item) => item.key),
      ['filament', 'livewire'],
    );
    assert.deepEqual(
      laravel.children[1]!.children.map((item) => item.key),
      ['filament'],
    );
  });

  it('starts no two records on the same spot, so none end up stacked', () => {
    const many = Array.from({ length: 40 }, (_, i) => record(`r${i}`, { language: 'php' }));
    const { nodes } = buildGraph(
      many,
      () => true,
      (id) => ({ label: id, href: '' }),
    );
    assert.equal(new Set(nodes.map((node) => `${node.x},${node.y}`)).size, nodes.length);
  });

  it('positions are the same on every build', () => {
    assert.deepEqual(run().nodes, run().nodes);
  });

  it('a cycle neither loops nor drops the records in it', () => {
    const cyclic = [record('a', { language: 'go', basedOn: ['b'] }), record('b', { language: 'go', basedOn: ['a'] })];
    const { nodes } = buildGraph(
      cyclic,
      () => true,
      (id) => ({ label: id, href: '' }),
    );
    assert.deepEqual(nodes.map((node) => node.key).sort(), ['a', 'b']);
  });
});
