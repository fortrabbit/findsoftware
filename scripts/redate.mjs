/**
 * Re-dates the page facts the refresh read again, as text so the fact file
 * keeps its layout, and the file's own checkedAt with them.
 *
 *   node scripts/redate.mjs <id> <url>... [--skip <field>...]
 *
 * Every `via: page` fact whose url is one of the given pages gets today's
 * checkedAt, except the fields after --skip: the stale ones, which keep their date.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const split = args.includes('--skip') ? args.indexOf('--skip') : args.length;
const [id, ...urls] = args.slice(0, split);
const skip = new Set(args.slice(split + 1));
if (!id || !urls.length) {
  console.error('usage: node scripts/redate.mjs <id> <url>... [--skip <field>...]');
  process.exit(2);
}

const date = new Date().toISOString().slice(0, 10);
const path = `research/facts/${id}.yml`;
const lines = readFileSync(path, 'utf8').split('\n');
const value = (line) => line.slice(line.indexOf(':') + 1).trim();

let block;
const blocks = [];
let inFacts = false;
for (const [index, line] of lines.entries()) {
  if (/^\S/.test(line)) {
    inFacts = line === 'facts:';
    if (line.startsWith('checkedAt:')) lines[index] = `checkedAt: ${date}`;
  } else if (inFacts && line.startsWith('  - ')) blocks.push((block = { field: value(line) }));
  else if (inFacts && block) {
    if (line.startsWith('    url:')) block.url = value(line);
    if (line.startsWith('    via:')) block.via = value(line);
    if (line.startsWith('    checkedAt:')) block.dateLine = index;
  }
}

let redated = 0;
for (const fact of blocks) {
  if (fact.via !== 'page' || !urls.includes(fact.url) || skip.has(fact.field) || fact.dateLine === undefined) continue;
  lines[fact.dateLine] = `    checkedAt: ${date}`;
  redated++;
}
writeFileSync(path, lines.join('\n'));
console.log(`${id}: ${redated} page facts re-dated to ${date}`);
