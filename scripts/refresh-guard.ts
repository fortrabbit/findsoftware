/*
 * May this diff merge without a person? The rule is src/lib/confirmation.ts.
 *
 *   node scripts/refresh-guard.ts <base> <head>
 *   node scripts/refresh-guard.ts HEAD --staged     # the index against HEAD
 *
 * Exit 0 with `merge`, or exit 1 with `review:` and the reasons.
 */
import { execFileSync } from 'node:child_process';
import { isFactFile, reviewReasons } from '../src/lib/confirmation.ts';

const [base, head] = process.argv.slice(2);
if (!base || !head) {
  console.error('usage: node scripts/refresh-guard.ts <base> <head>');
  process.exit(2);
}

const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8' });
const at = (ref: string, path: string) => {
  try {
    return git('show', `${ref}:${path}`);
  } catch {
    return '';
  }
};

const staged = head === '--staged';
const changed = (staged ? git('diff', '--cached', '--name-only') : git('diff', '--name-only', `${base}...${head}`))
  .split('\n')
  .filter(Boolean);
const problems: string[] = [];
/* A fact file a person changed on the base after the lane branched is judged against what the lane saw. */
const from = staged ? base : git('merge-base', base, head).trim();

for (const path of changed) {
  if (path === 'research/refresh-log.tsv') continue;
  if (!isFactFile(path)) {
    problems.push(`${path}: not a fact file`);
    continue;
  }
  const before = at(from, path);
  const after = at(staged ? '' : head, path);
  if (!before || !after) problems.push(`${path}: added or removed`);
  else {
    const reasons = reviewReasons(before, after);
    if (reasons.length) problems.push(`${path}: ${reasons.join(', ')}`);
  }
}

if (problems.length) {
  console.log(`review: ${problems.join('; ')}`);
  process.exit(1);
}
console.log(`merge: ${changed.length} file${changed.length === 1 ? '' : 's'}`);
