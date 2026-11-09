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
const softwareId = parseYaml(readFileSync('src/data/findhost-ids.yml', 'utf8')) as Record<string, string>;

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
    {
      label: 'Hosts that support',
      cells: linked('software', [Object.hasOwn(softwareId, id) ? softwareId[id] : id], () => name),
    },
    {
      label: 'Managed databases',
      cells: linked('databases', [...(data.databases ?? []), id], (value) =>
        value === id ? name : labelOf('databases', value),
      ),
    },
  ];
  return rows.filter((row) => row.cells.length > 0);
}

export interface Host {
  id: string;
  name: string;
  url: string;
  path: string;
  software: string[];
  runtimes: string[];
  specialisation: string[];
}

export interface HostLink {
  name: string;
  url: string;
  findhost: string;
}

export interface HostSuggestions {
  publisher?: HostLink;
  hosts: HostLink[];
  total: number;
  all: string;
}

const listed = parseYaml(readFileSync('src/data/findhost-hosts.yml', 'utf8')) as Host[];

// The publisher's own slot: shown first and labeled, never drawn by the hash below.
export const publisherId = 'fortrabbit';
const shown = 4;

// FNV-1a: the same pair always lands on the same number, so a record shows the same hosts on every build.
function hash(text: string): number {
  let value = 0x811c9dc5;
  for (const char of text) value = Math.imul(value ^ char.charCodeAt(0), 0x01000193) >>> 0;
  return value;
}

/**
 * Up to four hosts from FindHost for one record. Hosts that list the software
 * itself come first; a record FindHost has no software page for falls back to
 * the hosts that run its runtime. Hosts built for that one software are picked
 * before the rest, the rest by a stable hash of record and host, never by any
 * measure of quality. The ones shown are listed alphabetically.
 */
export function hostsFor(
  base: string | undefined,
  id: string,
  hosting: string[] | null | undefined,
  pool: Host[] = listed,
): HostSuggestions | undefined {
  if (!base) return undefined;
  const software = Object.hasOwn(softwareId, id) ? softwareId[id] : id;
  const runtime = (hosting ?? []).find((value) => pages.runtimes.includes(value));
  const [facet, value] = pages.software.includes(software)
    ? (['software', software] as const)
    : runtime
      ? (['runtimes', runtime] as const)
      : [];
  if (!facet || !value) return undefined;

  const matching = pool.filter((host) => (facet === 'software' ? host.software : host.runtimes).includes(value));
  if (matching.length === 0) return undefined;

  const root = base.replace(/\/$/, '');
  const link = (host: Host): HostLink => ({ name: host.name, url: host.url, findhost: `${root}${host.path}` });
  const publisher = matching.find((host) => host.id === publisherId);
  const rest = matching.filter((host) => host.id !== publisherId);
  const picked = [...rest]
    .sort(
      (a, b) =>
        Number(b.specialisation.includes(value)) - Number(a.specialisation.includes(value)) ||
        hash(`${id}:${a.id}`) - hash(`${id}:${b.id}`),
    )
    .slice(0, shown)
    .sort((a, b) => a.name.localeCompare(b.name, 'en'));

  return {
    publisher: publisher && link(publisher),
    hosts: picked.map(link),
    total: matching.length,
    all: `${root}/${facet}/${value}/`,
  };
}
