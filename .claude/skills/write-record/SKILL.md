---
name: write-record
description: Research one FindSoftware candidate from primary sources and write its fact file to research/facts/<id>.yml, every fact cited. Use when asked to research, write up or fill a software candidate, or when a research batch runs over candidates-<area>.csv.
---

# Write a software record

Read `AGENTS.md` first. Three rules decide most of this skill: absent means unknown, every fact carries its source, primary sources only.

This can run unattended. Never ask a question. Where the procedure says stop, stop and report.

## Input

- One or more candidate ids, each with a row in a `research/candidates-<area>.csv`.
- Today's date, passed in. Use it for every `checkedAt`.

Take one candidate at a time, all the way through step 5, before starting the next.

## 1. Start from the row

Read the candidate's CSV row: homepage, repo, language, categories, status. A row with status `rejected` gets no fact file. A row with `boundary` gets one, and the boundary question goes in `notes`.

If `research/facts/<id>.yml` exists, extend it: keep every fact, re-date what you confirm, correct what a source now contradicts, add what is missing.

## 2. Read the machine sources first

They are exact and a refresh script can read them again. Mark these facts `via: api`.

```sh
gh api repos/<owner>/<repo>                    # stars, license.spdx_id, created_at, pushed_at, archived
gh api repos/<owner>/<repo>/releases/latest    # tag_name, published_at
curl -s https://packagist.org/packages/<vendor>/<pkg>.json      # downloads.total, monthly
curl -s https://repo.packagist.org/p2/<vendor>/<pkg>.json       # require.php of the latest version
curl -s https://registry.npmjs.org/<pkg>/latest                 # version, license, engines.node
curl -s https://api.npmjs.org/downloads/point/last-week/<pkg>
curl -s https://pypi.org/pypi/<pkg>/json                        # version, requires_python, license
curl -s https://rubygems.org/api/v1/gems/<gem>.json
curl -s https://endoflife.date/api/<product>.json               # supported versions, EOL dates
```

Cite a URL without query parameters where one exists: `github.com/<owner>/<repo>/blob/<tag>/composer.json`, not `contents/composer.json?ref=<tag>`. The build rejects `ref=` as an affiliate parameter.

Send a generic User-Agent such as `FindSoftware research`. Never put a name, email address or other personal data in a request.

Do not trust `releases/latest` for the version: monorepos return a sub-package and alphas are often not flagged. Take `currentMajor` from the registry's stable tag (npm `latest`, the highest stable Packagist version).

Keep temporary scripts in a scratch directory of your own, named after your first candidate id, never in a shared one.

Not every candidate is on every registry. Use what exists; record the registry id itself (`packagistName`, `npmName`, `endoflifeId`) so a script finds it again.

## 3. Read the project's own pages

Homepage, docs (installation, deployment, requirements, configuration), pricing or license page, about or company page, changelog. Load WebFetch and WebSearch with ToolSearch. WebSearch only finds the page; the fact comes from the page itself. Mark these facts `via: page`.

A page counts as read when it answers 200 with the page itself, not a bot challenge, login wall or empty JavaScript shell. Note unreadable pages in `unreadable`.

## 4. Collect facts

When the project's site or docs block the request (403, a bot check), look for the docs' source repository (often `<org>/docs` on GitHub) and read it there. The repository description is the project's own words too: a fork, a successor or an end is often stated there. Record nothing that changes more than once a year: the current major version, never a dot release (no `latestVersion`, no supported-version lists: endoflife.date holds those); the lowest supported runtime version (Node major, PHP or Python minor), never an exact dependency range. A rounded count is fine where a script cannot read it. Look for every kind in the starter list below. Record what the sources state, in their terms. Coin a new camelCase name for anything recurring that the list lacks, and say so in `notes`. Do not record a fact you could not check; list what you looked for and did not find under `notFound`.

**Identity**: `name`, `homepage` (the project's own website; never the repository URL, and absent when the project has none), `repository`, `docs`, `description` (one sentence, what it is), `firstRelease` (year), `maintainer` (the legal name as the legal notice, imprint, terms or LICENSE copyright line states it, with its legal form: "Tailwind Labs Inc.", not "Tailwind"; when no page gives a legal form, record the name as the project states it, and never leave the maintainer out for want of one), `maintainerType` (company, foundation, community, individual; the import derives it from the maintainer's name and `repoOwnerType`, so record yours only as a fallback), `repoOwnerType` (user or organization, from `https://api.github.com/users/<owner>` `type`), `sourcePublic` (false only when the repository holds no source code, such as a README and an issue tracker; cite its contents listing), `hqCountry` (of the company, ISO alpha-2), `parent` (owning company), `forkOf`, `successorOf`, `alternativeTo` (only where the project's own pages name it, such as a migration guide or a comparison page), `wikidata`

**Kind**: `categories` (own words: cms, framework, ssg, headless-cms, e-commerce, docs-generator, blog, admin-panel, ui-library, css-framework, search...), `basedOn` (the software it builds on or extends: framework, CMS, UI library), `language`, `runtime` (php, node, deno, bun, python, ruby, go binary, jvm, dotnet...), `runtimeMin` (minimum version of the latest release)

**Content**: `contentStore` (where the software itself keeps content: database, flat-file, git; leave it out when it only reads content from another service), `databases` (mysql, postgres, sqlite, mongodb...), `adminUi` (yes or no, and what kind), `headlessApi` (rest, graphql, none), `templating` (twig, blade, jsx, vue, liquid, go templates...), `i18n`, `multisite`, `livePreview` (editor sees unsaved changes on the site), `userRoles`, `sso` (SAML, OIDC, LDAP), `importsFrom` (documented migration or import from other software, by name)

**Rendering and deploy**: `renderingModes` (static, server, spa, isr; a framework that mixes static and server routes gets both), `installMethod` (composer create-project, npm create, binary download, docker...), `runsAs` (what the live site needs from the host, every value that applies: `static` the output is files any web space serves; `per-request` the web server starts it for each request and nothing stays running, as with PHP; `always-on` a process that keeps running and serves requests; `scheduled` cron or a timer starts it, it does its job and exits; `browser` it runs in the visitor's browser only; `local` used on a developer's machine or in CI, never on the live site. Cite the install, deployment or getting-started page that shows it)

**License**: `license` (SPDX id), `licenseModel` (open-source, open-core, source-available, commercial, saas; the import derives it from every `license` statement, so record each statement as the source words it, including the parts under another license), `paidEdition` (a page showing an edition with features the open version lacks, under a paid or non-open license, with a quote; hosting plans and paid support are not editions), `pricingPage` (the link only, no prices: they change more than yearly)

**Releases**: `currentMajor`, `latestReleaseDate` (from a registry or the releases API, refreshed by script), `latestPrereleaseDate` (the newest alpha, beta or RC, only when newer than the latest release), `endoflifeId` (supported versions and their dates come from endoflife.date, not typed in)

**Adoption**: `githubStargazers`, `contributors`, `packagistDownloads`, `npmWeeklyDownloads`, `pypiDownloads`, `usageShare` (W3Techs or similar, as a third-party figure), `reportedInstalls` (a count of sites, shops or installs the project or its registry states, such as "over 175,000 websites" or drupal.org's usage figure, recorded as stated with its source; use this name, never coin another), `packagistName`, `npmName`. A package with no monthly downloads while a sibling has many is the wrong one. Take registry figures from the package the project's install docs tell users to install, or its core package, never a meta or sibling package (`concrete5/core`, not `concrete5/concrete5`); when a package was replaced, record the current one and name the old one in notes. Record each figure as the source states it, with its period (week, month, total). They are never compared or ordered, so do not convert or normalize them. Never record ratings, review scores or rating counts from any directory.

**Ecosystem and community**: `pluginDirectory` (URL), `pluginCount`, `forum`, `discord`, `subreddit`, `mastodon`, `bluesky`, `x`, `newsletter`

**Hosted services only**: `apiLimits`, `regions` (data regions; name EU hosting where offered), `selfHostOption` (any installable part, such as a studio)

## 5. Write the fact file

`research/facts/<id>.yml`. The `facts` entries use FindHost's `sources` shape plus the value, so they convert into a record and its `sources` list without rework.

```yaml
id: nuxt
name: Nuxt
status: accepted            # copied from the CSV row
checkedAt: 2026-10-18       # the date this file was last researched
description: Vue-based framework for building server-rendered, static and hybrid websites and web apps.
facts:
  - field: license
    value: MIT
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
    via: api
  - field: renderingModes
    value: [server, static, spa]
    url: https://nuxt.com/docs/guide/concepts/rendering
    checkedAt: 2026-10-18
    via: page
    quote: "Nuxt supports different rendering modes"    # optional, 20 words at most, copied verbatim from raw page text (curl), never from a WebFetch summary
notFound: [pricingPage, hqCountry]
unreadable: []
notes: >
  One paragraph: anything that does not fit a field, a boundary question, a fact kind coined here.
```

- One entry per field. A list value is a YAML list in one entry.
- Two sources for one field: two entries with the same `field`.
- Prices keep their currency and period exactly as the page states them, plus the `url` of the pricing page.
- `description` follows the prose rules in `AGENTS.md`: what it is, no version, no judgement.

Check the file parses before moving on:

```sh
node -e "require('yaml')" 2>/dev/null && node -e "const y=require('yaml');y.parse(require('fs').readFileSync('research/facts/<id>.yml','utf8'))" || python3 -c "import yaml,sys;yaml.safe_load(open('research/facts/<id>.yml'))"
```

## Signals that a project has ended

Check each one; release age is not one of them (the import moves a record with no release or pre-release in four years to `stub` on its own, so record `latestReleaseDate` and leave the status alone). Any signal found sets `status: discontinued` in the fact file, with a `status` fact citing it, and the file is written as usual:

- `archived: true` from `gh api repos/<owner>/<repo>`, for the repository the project's own site names as its source. A GitHub repo archived because development moved elsewhere is no signal: record the new repository instead
- `abandoned` on the Packagist package (`https://repo.packagist.org/p2/<vendor>/<name>.json`)
- `deprecated` on the npm package (`https://registry.npmjs.org/<name>`, latest version)
- the README or homepage says the project has ended, is unmaintained or is replaced by another (quote it). A successor named while the README still describes the project as usable, or listed among forks, is no signal: record it as a fact
- every version is past end of life on endoflife.date

A signal counts only for the project's current repository and package. An archived repository or a deprecated package that names a new home for the same project (a new repository, `@scope/name`, a successor package) is a move, not an end: record the new home and keep the status.

## 6. Stop instead of writing

Write no file and report the candidate when:

- The homepage no longer answers: report it as a candidate for `rejected`, with what was seen.
- The project's own pages contradict each other on status.

A license stated two ways is not a stop: "GPL-2.0" and "GPL v2 or later", or MIT for the code and LGPL for one bundled part. Record each statement as its own `license` entry with its source and explain the difference in `notes`.

## 7. Report

End with a table, one row per candidate: id, facts written, `via: api` count, `notFound` count, unreadable pages. Below it, the new field names coined and the stopped candidates. Nothing else.
