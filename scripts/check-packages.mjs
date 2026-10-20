/**
 * Flags a Packagist package with no downloads in the last month, which is
 * nearly always a meta or abandoned sibling of the package people install.
 *
 *   node scripts/check-packages.mjs <id> [<id>...]
 */
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

const flagged = [];
for (const id of process.argv.slice(2)) {
  const research = parse(readFileSync(`research/facts/${id}.yml`, 'utf8'));
  const name = research.facts?.find((fact) => fact.field === 'packagistName')?.value;
  if (!name) continue;
  const response = await fetch(`https://packagist.org/packages/${name}.json`, { headers: { 'user-agent': 'FindSoftware research' } });
  if (!response.ok) {
    flagged.push(`${id}: ${name} answers ${response.status}`);
    continue;
  }
  const { package: pkg } = await response.json();
  if (pkg.abandoned) flagged.push(`${id}: ${name} is abandoned${typeof pkg.abandoned === 'string' ? `, replaced by ${pkg.abandoned}` : ''}`);
  else if (!pkg.downloads?.monthly) flagged.push(`${id}: ${name} has no downloads this month (${pkg.downloads?.total ?? 0} total)`);
}
for (const line of flagged) console.log(line);
console.log(`${flagged.length} packages to look at`);
