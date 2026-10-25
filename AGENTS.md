# AGENTS.md

## What this is

FindSoftware: a ratings-free tool search for web creators, across every language. It covers software to build websites, web apps and web-based services: CMSs, frameworks, static site generators, e-commerce, UI libraries, CSS frameworks, site search, services added to a site (analytics, comments, forms, consent), build and dev tools, server software, helper libraries, and the packages built on top of them. Overlap with FindHost is acceptable. A sibling of FindHost (`../findhost`), published by fortrabbit. Linear project [FindSoftware](https://linear.app/fortrabbit/project/findsoftware-9a404efbed62); scope in the knowledge-base note `Temporary/2026/MR-210 FindSoftware scope.md`.

**State: research, with a first local build.** MR-457 researches the whole space, and the schema (MR-409) is derived from what that research finds. The site is FindHost's Astro code, stripped down (MR-408), running on a provisional `src/data/fields.yml`. Records in `src/content/software/` are generated from `research/facts/` by `node scripts/import-facts.mjs <date>`: edit the fact files or the import maps, not the records. FindHost's unit tests still carry host fixtures and fail until they are rewritten.

## Layout

Present now:

```
AGENTS.md
.claude/skills/write-record/SKILL.md   research one candidate into a fact file
research/
  README.md                            what each research file means
  candidates-<area>.csv                the queue, one file per area
  notes-<area>.md                      what discovery saw per area
  visitor-questions.md                 what people ask and filter by
  facts/<id>.yml                       one fact file per candidate
```

Anticipated, after MR-409 and MR-408, following FindHost:

```
src/data/fields.yml                    the field dictionary, drives schema, rows and facets
src/content/software/<id>.md           records: frontmatter plus prose
src/content/notes/<facet>/<value>.md   one paragraph per facet value
scripts/                               validate, refresh, registry fetchers
```

A fact file turns into a record once `fields.yml` exists: its field names map to dictionary ids, its `sources` entries carry over unchanged. Write fact files so that conversion is mechanical.

## Rules that are not style preferences

Carried over from FindHost, and they apply to research data already:

- **Nothing may rank, score, boost, weight or order by quality.** The default order is alphabetical.
- **Adoption figures are data, never an order.** Stars, downloads and plugin counts are recorded, each with its date, and shown with the reasons they do not compare (About page, section "Adoption figures"). No sort, filter, facet or default order uses them. Validate fails an Adoption field with `facet` or `ordered`.
- **Absent means unknown.** Never guess, never infer, never default to a flattering value. A fact not found stays out of the file.
- **Every fact carries its source**: a URL and the date it was read. `checkedAt` is a claim that the source was read on that date.
- **Primary sources only.** The project's own site, repository, docs, or a registry API (GitHub, Packagist, npm, PyPI, RubyGems, endoflife.date). Directories, awesome lists and comparison sites are for discovering names, never a data source.
- **Status decides where a record appears.** Listed by default. `hosted-service` (SaaS headless CMSs, criterion 2 waived), `discontinued` and `stub` sit beside the register. Nothing is deleted: a rejected candidate keeps a row with the criterion it fails.
- **Software built on other software gets its own record**, with `basedOn` naming the parent: WooCommerce on WordPress, Filament on Laravel, a Hugo theme on Hugo. A plugin, module or extension is listed only when it turns its parent into another kind of software (e-commerce, static export, search, headless API, docs); general-purpose plugins (SEO, forms, galleries) stay out. An archived plugin is a `stub`, not `discontinued`.
- **fortrabbit is not in this dataset** unless it ships software that meets the criteria. Hostability on fortrabbit is never an inclusion filter and never a field that flatters fortrabbit.
- **No affiliate parameters in any URL.**

## Inclusion criteria

From the scope doc, mechanical so no listing is a judgement call:

1. Used to build or extend a website or web app: a creator builds their own site or app with it (framework, CMS, generator, library, UI kit, build or dev tool, server software), or adds it to one (analytics, comments, search, forms, consent, auth). A finished application that is only installed and used is out: social networks, event and ticketing apps, learning platforms, forums, wiki engines, chat, helpdesks, newsletter managers, status pages and uptime monitors, URL shorteners, document management. A static generator for wikis or notes builds a site and stays in
2. Installable by the user: source or a distributable is available. SaaS-only goes to `hosted-service`
3. Documented installation or deployment
4. Not declared ended. A record moves to `discontinued` only on a clear signal: the repository the project names as its source is archived, the registry flags the package abandoned (Packagist) or deprecated (npm), the project states it has ended or is unmaintained, or every version is past end of life on endoflife.date. Release age never makes a record `discontinued`. It decides listing instead: the register shows active projects, so the import moves a record with no release or pre-release in four years to `stub` (hidden, page kept, checked again), and a fact file sets `stub` when the project's own site no longer shows the software. A project that never tags a release is judged by the date of its last commit on the default branch instead; a record with neither date stays listed
5. A signal of use: a company behind it, or a public adoption figure. The threshold is open; record the figure

## Record prose

The same rules as FindHost's `AGENTS.md`, section "Record prose", with the subject changed from provider to software. The ones that matter most here:

- **Describe, never judge.** No "best for", no recommendation, no comparison except a factual relationship (built on, fork of, successor to).
- **No PHP lens.** Describe each software on its own terms.
- **Nothing that rots in prose.** Version numbers, prices and star counts go in fields with a date, and scripts refresh them.
- **US English.**
- `description`: one sentence naming what the software is.

## Conventions

- Fact field names are camelCase. Reuse a name from the starter list in the `write-record` skill before coining one, so the field inventory can count across files.
- Comments and notes explain a constraint, or they are deleted. No history, no ticket numbers.
- Do not hardcode a domain. The name and domain are open (MR-413).
