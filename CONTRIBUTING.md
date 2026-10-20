# Contributing

The repository is private until launch. Records are generated, so a correction goes into the research data, not the record.

## Correct a record

Records in `src/content/software/` are written by `scripts/import-facts.mjs` from `research/facts/<id>.yml`. Change the fact file, then run `node scripts/import-facts.mjs <date>`.

- **Absent means unknown.** A fact not found stays out of the file. Never guess.
- **Every fact carries its source:** `url`, `checkedAt`, and a `quote` copied from the page. `node scripts/check-quotes.mjs <id>` confirms the quote is still there.
- **Primary sources only:** the project's own site, repository, docs, or a registry API. Directories and comparison sites are for finding names, never for facts.
- **Nothing volatile:** the current major version, never a dot release; no prices.

## Add a candidate

Add a row to the matching `research/candidates-<area>.csv`, then research it with the `write-record` skill. The inclusion criteria are in [AGENTS.md](./AGENTS.md). A rejected candidate keeps its row with the criterion it fails. Nothing is deleted.

## Never merged

- Ratings, scores, "best for" badges, or a field implying one. The build rejects a field named rank, score, boost, or weight.
- Adoption figures used to sort, filter or order.
- Affiliate or tracking parameters in a URL.
- Any order but alphabetical.

## Run it locally

```sh
pnpm install
pnpm dev              # localhost:4322
pnpm run validate     # the guards the schema cannot express
pnpm run check        # types
pnpm run test         # unit tests
```

CI runs these on every pull request. There are no preview deploys.

## License

Record data and prose are [CC BY 4.0](./LICENSE-DATA), code is [MIT](./LICENSE-CODE). Opening a pull request accepts those terms. Do not paste text from a project's site or anyone else's.
