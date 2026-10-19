// Lists records whose yearly review is due, oldest checkedAt first. Usage: node scripts/review-due.mjs [months-ahead]
import { readdirSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';

const dir = 'src/content/software';
const ahead = Number(process.argv[2] ?? 0);
const cutoff = new Date();
cutoff.setFullYear(cutoff.getFullYear() - 1);
cutoff.setMonth(cutoff.getMonth() + ahead);

const due = readdirSync(dir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => {
    const data = parse(readFileSync(`${dir}/${file}`, 'utf8').split('---')[1] ?? '') ?? {};
    return { id: data.id ?? file.slice(0, -3), checkedAt: data.checkedAt ? String(data.checkedAt).slice(0, 10) : '' };
  })
  .filter((record) => !record.checkedAt || new Date(record.checkedAt) < cutoff)
  .sort((a, b) => a.checkedAt.localeCompare(b.checkedAt));

for (const record of due) console.log(`${record.checkedAt || 'never'}  ${record.id}`);
console.log(`${due.length} due${ahead ? ` within ${ahead} months` : ''}`);
