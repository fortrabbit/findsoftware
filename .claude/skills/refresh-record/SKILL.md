---
name: refresh-record
description: Re-read the facts of one or more FindSoftware fact files against their sources, re-date what still holds, correct what a source now contradicts, set `discontinued` on a clear end signal, and push the result to the rolling `claude/refresh` branch. Use when asked to refresh, re-check or re-verify software records, or when running as the scheduled refresh routine.
---

# Refresh a software record

Read `AGENTS.md` first. Every rule in it applies here, and three decide most of what this skill does: absent means unknown, `checkedAt` is a claim that the source was read on that date, primary sources only.

This runs unattended. Never ask a question. Where the procedure says stop, stop and report.

A refresh confirms and corrects. It does not research: no new fields, no new sources, no web search.

## Input

- `N`, how many records to reach. Default 10.
- `K`, how many unreachable records to pass over before the run gives up. Default 3.
- Optionally, explicit ids. Then `N` and `K` are ignored and the pick step is skipped.

## 1. Branch

Start on main, up to date:

```sh
git fetch origin
git checkout --no-track -B work origin/main
pnpm install --frozen-lockfile
```

Scratch files (pages, commit bodies) go in `${TMPDIR:-/tmp}`, never in the repository. `refresh-api.ts` finds the GitHub token itself, from `GITHUB_TOKEN` or `gh auth token`.

Two lanes, decided per record in step 8: **`claude/refresh`** merges on its own, **`claude/refresh-review`** waits for a person. The rule between them is `src/lib/confirmation.ts`. Never push to `main`.

## 2. Pick

```sh
node scripts/refresh-pick.mjs --n <N plus K>
```

It prints a queue of ids, the fact file read longest ago first, skipping ids in `research/refresh-log.tsv` from the last sixty days and files waiting on the review branch. Do not pick by hand.

The queue is attempts, not a batch. Take one id at a time, all the way through step 8, before starting the next. Stop when `N` records have been **reached** (step 4), when `K` records were not reached, or when the queue runs out. The ids left in the queue come up again tomorrow.

## 3. API facts, by script

```sh
node scripts/refresh-api.ts <id>
```

It re-reads every `via: api` fact it has a reader for, writes the file, and prints one line per thing it did not decide. No tokens go into these facts. Act on its report:

- `changed:` is written already. Copy the line into the commit body as it is.
- `archived:`, `deprecated:` or `abandoned:` is a criterion 4 signal; see step 6.
- `differs: runtimeMin` means the registry now states another minimum. Write that value in the old value's form (`node >=22.23.4` stays `node >=22.23.4`, not `>=22.23.4`), with today's `checkedAt`. It stays `via: api`.
- Any other `differs:`, `goes back:`, `gone:`, `no release:`, `no answer:` or `no source to move to:` goes into the commit body and the report as it is. Do not edit those facts.
- `skipped N <why>` on the summary line needs nothing.
- `GitHub limit reached` means the token is missing or spent. Report it and carry on with the pages; the API facts come up again next year.
- Exit 1 with `not a fact file` or `not written` means the file needs a person: log it `stopped` (step 8) with that line as the note.

## 4. Read the pages

The pages are every distinct `url` of the `via: page` facts. Fetch each one raw, with a generic User-Agent and redirects followed:

```sh
curl -sL -A 'FindSoftware refresh' -o "${TMPDIR:-/tmp}/<id>-page.html" -w '%{http_code} %{url_effective}\n' '<url>'
```

A page counts as read only when it answers 200 with the page itself, not a bot challenge, a login wall or an empty shell waiting for JavaScript. A shell can often be read through the docs' source repository on GitHub, but only when the fact's URL is that repository; otherwise the page is **unreadable**. Note which and why, and read on.

A record is **reached** when at least one page on the project's own domains was read: the homepage's domain and its subdomains, the docs' domain, or the project's repository (raw.githubusercontent.com of that repository included). A registry or a parent project's directory, such as wordpress.org/plugins, is not the project's own. A record with no page facts is reached when step 3 confirmed or changed at least one fact.

A record that was not reached gets nothing: go to step 8 and log it `unreadable`, which undoes what step 3 wrote, so the file keeps the date that brings it back.

Do not search for a replacement page. A redirect within the same domain is followed and read; the fact keeps its URL unless the old one no longer answers, and then the new URL is written and the record goes to review. A redirect to another domain is read for what it says (step 6) and never becomes a source.

## 5. Compare

First run `node scripts/check-quotes.mjs <id>`. It fetches every quoted fact's URL and prints one line per quote the page does not contain, then a count; it exits 1 when any is missing, which is not an error. A quoted fact it does not list still holds. Read the pages for the rest: the facts without a quote and the listed ones.

A `via: api` fact with a quote and no reader in step 3 (a README or LICENSE read) is compared here like a page fact.

For every such fact whose page was read:

- **The page still says it.** Set the fact's `checkedAt` to today. Leave its quote, unless check-quotes listed it: then the quote was never verbatim, so replace it with the page's exact words for the same statement.
- **The page says something else.** Write the value the page states now, in the form the old value used (the same list shape, the same vocabulary: `categories`, `runtime`, `runsAs` and the other mapped fields keep their words), set `checkedAt` to today, and replace `quote` with the words that say it: 20 at most, copied verbatim from the raw page text, never from a summary. A changed page fact without a fresh quote goes to review.
- **The page no longer mentions it.** Leave the fact as it is and report it as stale.

When a page now names a higher stable `currentMajor` than an API fact holds, do not change the API fact; note it for the report as a new major. A pre-release (alpha, beta, rc) does not count.

Then set the file's top-level `checkedAt` to today, unless step 3 already did.

Edit fact files with the Edit tool. To re-date many facts, replace the exact two-line pair `    checkedAt: <old>` and `    via: page` with `replace_all`. Never run Prettier or a YAML dumper over them: the layout stays as written.

## 6. Status

`status` changes to `discontinued` only on a clear signal from criterion 4 in `AGENTS.md`: a flag from step 3, the project's own pages stating it has ended or is unmaintained, or every version past end of life on endoflife.date.

A plugin is never `discontinued`: an archived plugin is a `stub`, which is curation. Step 3 marks any record with `basedOn` `(built on another project: a person decides)`; report it and open an issue (step 7), and leave `status` alone. The guard sends a `discontinued` on such a record to review anyway.

A move is not an end: an archived repository or deprecated package that names a new home for the same project keeps the status. Report the new home.

On a signal, set `status: discontinued` and add a `status` fact with value `discontinued`, the URL that shows it, today's `checkedAt`, and either `via: api` with the API URL step 3 printed (the repository for archived, the package for abandoned or deprecated) or `via: page` with the quote. Without that fact the change goes to review. When `notes` says something the new status contradicts, report it under status changes: notes are a person's to edit.

Release age is never the routine's business: the import stubs a record with no release in four years.

Never set `stub` or any other status. When the project's own site no longer shows the software, or the pages point to a curation question, report it and open an issue (step 7).

A domain that does not answer is not evidence of anything. Leave `status` alone and report it.

## 7. Never touch, and when to stop

Never touch `id`, `name`, `description`, `notes`, `unreadable`, `notFound`, anything under `research/prose/`, or the fields `scripts/adoption.mjs` owns (its `OWNED` set). A `description` that reads outdated is reported, not edited.

Stop work on the record, log it `stopped` (step 8 undoes the file), and open a Linear issue when:

- more than five page facts on the record would change, status not counted,
- the pages contradict each other on a question that decides `status`,
- step 6 calls for a person.

The issue goes to team Marketing, project FindSoftware+, title `FindSoftware: <name>, <what happened>`, body: the URL, what was seen, the quote. Search Linear first, and comment on an open issue for the same record instead of opening a second. If Linear is not reachable, put the same text in the run report.

## 8. Write

One record, one commit, and every record attempted gets one, even one that was not reached. Write the commit body to `${TMPDIR:-/tmp}/<id>-body.txt`: a status change first, with the quote and the URL; then the step 3 lines; then one line per changed page fact, `field: old → new`, with the quote; then stale facts, unreadable pages and new majors, one line each. Do not count facts: the script adds the counts. Then:

```sh
node scripts/refresh-commit.ts <id> confirmed "${TMPDIR:-/tmp}/<id>-body.txt"
node scripts/refresh-commit.ts <id> unreadable "<one clause, such as: Cloudflare challenge on docs>"
node scripts/refresh-commit.ts <id> stopped "<one clause>"
```

It undoes the file for `unreadable` and `stopped`, checks that a changed file builds (a failing `validate` turns it into `stopped`), lets the guard pick the lane, carries the file onto that lane by itself with its log line, commits, pushes and returns to `work`. It prints `<id>: <outcome>, <lane>`; the commit body's first line holds the counts per kind of fact, which the log line repeats.

Exit 1 means git refused something, such as a rejected push. Stop the run and report the message. Never force a push.

## 9. Pull request

Only for the review lane. If no open pull request runs from `claude/refresh-review` to `main`, open one titled `Refresh for review: <today>` with the run report as its body; otherwise add the report as a comment. Status changes go first. If `gh` is missing or unauthenticated, skip this; the commits carry the same.

## 10. Report

A table, one row per record attempted: id, pages read of total, the counts line from its commit, stale facts, status change, lane. Below it:

- **New majors**: software whose `currentMajor` moved, or whose pages name a newer major than the file holds, one line each with the old and new major. These are candidates for the fortrabbit specs.
- **Status changes**, with their quotes.
- **Escalations**: the issues opened.

Nothing else.
