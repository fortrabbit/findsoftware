/*
 * May the refresh Action merge this push on its own?
 *
 *   node scripts/refresh-guard.ts <base> <head>
 *   node scripts/refresh-guard.ts HEAD --staged     # the index against HEAD
 *
 * Exit 0 when every changed file is the refresh log or a fact file that moved only
 * dates and sourced facts. Exit 1 otherwise, naming the file and the reason, so a
 * person reads it.
 * The refresh routine runs the same check on its own diff to choose between the
 * `claude/refresh` and `claude/refresh-review` branches,
 * and the Action runs it again before merging: the routine choosing wrongly is
 * caught, and the rule lives in one place, src/lib/confirmation.ts.
 */
import { execFileSync } from 'node:child_process';
import { confirmationFiles, isFactFile, reviewReasons } from '../src/lib/confirmation.ts';

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

for (const path of changed) {
  if (confirmationFiles.has(path)) continue;
  if (!isFactFile(path)) {
    problems.push(`${path}: not a fact file`);
    continue;
  }
  const before = at(base, path);
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
