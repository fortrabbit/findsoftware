---
name: discover-software
description: Check a short list of software the research files do not know yet against the inclusion criteria, add a candidates row for each, write fact files for at most five that pass, and push them to `claude/discover`. Use when asked to discover or propose new software, or when running as the weekly discovery routine.
---

# Discover new software

Read `AGENTS.md` first, above all the inclusion criteria. This runs unattended: never ask a question.

Five new records is a ceiling, not a goal. The register should not grow by much: accept only what clearly meets every criterion, and a run that accepts nothing is a good run. Never look for more finds than the script gives.

## 1. Branch

```sh
git fetch origin
git checkout --no-track -B work origin/main
pnpm install --frozen-lockfile
```

Scratch files go in `${TMPDIR:-/tmp}`, never in the repository.

## 2. The list

```sh
node scripts/discover.ts
```

It prints up to ten finds, one per line: repository, stars, created, homepage, source, description. These are the only candidates. No web search, no other source, no second call for more. An empty list ends the run: report it and stop. Exit 1 means every call failed: report its message as an error, not as a quiet week.

## 3. Check each find

In order, until five are accepted or the list ends. To decide, read only the README (`curl -sL https://raw.githubusercontent.com/<owner>/<repo>/HEAD/README.md`) and the homepage. Decide by criteria 1 to 5 in `AGENTS.md`:

- **accepted**: every criterion clearly holds.
- **hosted-service**: SaaS only, the other criteria hold.
- **rejected**: a criterion fails, or you cannot tell that it holds. Put the criterion's number in `criterion`.

Never set `stub`, `discontinued` or any other status: a find that has ended is rejected under criterion 4.

Most finds fail criterion 1: apps, agent tools, vector databases and media servers are not software to build a website with. When unsure, reject.

## 4. Add a row for every find

Every find checked gets a row, rejected ones too, so it never comes back. Append it to the candidates CSV of its area (`research/README.md` lists the areas and columns). The `id` is the project's name in lowercase with hyphens; if `research/facts/<id>.yml` exists, add the owner (`<owner>-<name>`). Add the row's line at the end of the file; never edit or reorder other rows.

## 5. Write the accepted ones

For each accepted or hosted-service row, follow `.claude/skills/write-record/SKILL.md` with today's date (`date -u +%F`). Then check the build:

```sh
node scripts/import-facts.mjs "$(date -u +%F)" && pnpm run validate
git checkout -- src/content
```

When validate fails on a new file, delete that fact file and set its row to `boundary` with `criterion` "fact file failed validate".

## 6. Push

One commit for the run, only when a row was added:

```sh
git add research/candidates-*.csv research/facts/
git commit -m "Discover new software, $(date -u +%F)" -m "<one line per find: id, status, criterion>" -m "Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin HEAD:refs/heads/claude/discover
```

The Action on `claude/discover` checks, builds and merges into `main`. Never push to `main`, never force a push. If the push fails, report the exact message.

## 7. Report

A table, one row per find: id, status, criterion, area. Nothing else.
