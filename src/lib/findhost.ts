/**
 * Links from a record to FindHost's filter pages, built from facts the record
 * already holds: what the host has to run, the software itself where FindHost
 * lists hosts that support it, and the databases it can use. Nothing here is a
 * recommendation; each link is a filter over FindHost's whole register.
 *
 * `src/data/findhost.yml` lists the pages a FindHost build has, so a value
 * FindHost has no page for gets no link instead of a 404.
 */
import { readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';
import { labelOf } from './fields.ts';

type Facet = 'runtimes' | 'software' | 'databases';
const pages = parseYaml(readFileSync('src/data/findhost.yml', 'utf8')) as Record<Facet, string[]>;

// Where a record's id and FindHost's software value differ.
const softwareId: Record<string, string> = {
  'grav-cms': 'grav',
  'magento-open-source': 'magento',
  'typo3-cms': 'typo3',
};

export interface FindhostRow {
  label: string;
  cells: { text: string; href: string }[];
}

export function findhostRows(
  base: string | undefined,
  id: string,
  name: string,
  data: { hosting?: string[] | null; databases?: string[] | null },
): FindhostRow[] {
  if (!base) return [];
  const url = (facet: Facet, value: string) =>
    pages[facet].includes(value) ? `${base.replace(/\/$/, '')}/${facet}/${value}/` : undefined;
  const linked = (facet: Facet, values: string[], text: (value: string) => string) =>
    values.flatMap((value) => {
      const href = url(facet, value);
      return href ? [{ text: text(value), href }] : [];
    });

  const rows: FindhostRow[] = [
    { label: 'Hosts that run', cells: linked('runtimes', data.hosting ?? [], (value) => labelOf('hosting', value)) },
    { label: 'Hosts that support', cells: linked('software', [softwareId[id] ?? id], () => name) },
    {
      label: 'Managed databases',
      cells: linked('databases', [...(data.databases ?? []), id], (value) =>
        value === id ? name : labelOf('databases', value),
      ),
    },
  ];
  return rows.filter((row) => row.cells.length > 0);
}
