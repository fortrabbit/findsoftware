# FindSoftware

A ratings-free register of software to build websites, web apps and web-based services, in every language: CMSs, frameworks, static site generators, e-commerce, UI and CSS libraries, site search, services, build tools, server software and the packages built on top of them. Published by fortrabbit. Sibling of [FindHost](https://www.findhost.app). "FindSoftware" is a working title.

## Run locally

```sh
pnpm install
pnpm dev                    # localhost:4322 (FindHost keeps 4321)
pnpm build                  # astro build, then the search index
pnpm run check              # types
pnpm run test               # unit tests
pnpm run validate           # guards zod cannot express
pnpm run linkcheck:internal # internal links and the sitemap
```

Copy `.env.example` to `.env`; nothing in it is needed to develop. Astro, static output, no database, deployed to fortrabbit: a push to `main` deploys.

## Where the data lives

| | |
| --- | --- |
| `research/candidates-<area>.csv` | the queue, one row per candidate, with its status and the criterion a rejected one fails |
| `research/facts/<id>.yml` | one fact file per researched candidate, every fact with its URL and the date it was read |
| `src/content/software/` | records, generated from the fact files — do not edit by hand |
| `src/data/fields.yml` | the field dictionary — every field, value and facet |
| `src/content/notes/` | one paragraph introducing a facet or one of its values |
| `scripts/import-facts.mjs` | turns fact files into records: `node scripts/import-facts.mjs <date>` |
| `scripts/check-quotes.mjs` | re-fetches every quoted source and reports quotes the page no longer holds |

Edit a fact file or the import, then re-run the import. A record edited by hand is overwritten on the next import.

[AGENTS.md](./AGENTS.md) for the full brief: the rules, the inclusion criteria, the prose style. The `write-record` skill in `.claude/skills/` researches one candidate.

## Licences

Code [MIT](./LICENSE-CODE), data and prose [CC BY 4.0](./LICENSE-DATA). Credit: **FindSoftware, CC BY 4.0**.

Agents gather the facts and wrote much of the code; the editorial decisions are human. Each record carries an `ai` value saying how much of its description a machine wrote.
