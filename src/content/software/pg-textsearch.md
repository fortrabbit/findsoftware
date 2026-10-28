---
id: pg-textsearch
name: pg_textsearch
urls:
  repository: https://github.com/timescale/pg_textsearch
  docs: https://github.com/timescale/pg_textsearch/blob/main/README.md
category:
  - search
  - database
description: PostgreSQL extension that adds BM25 relevance-ranked full-text search indexes to Postgres.
status: active
maintainer: Timescale, Inc.
maintainerType: company
firstRelease: 2025
language: c
databases:
  - postgres
runsAs:
  - always-on
installMethod: binary download
license: PostgreSQL
currentMajor: "1"
latestReleaseDate: 2026-10-02
githubStargazers: 4046
contributors: 12
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/timescale/pg_textsearch
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/timescale/pg_textsearch/blob/main/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.tigerdata.com/docs/use-timescale/latest/extensions/pg-textsearch
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/timescale/pg_textsearch/releases/tag/v0.0.1
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/timescale/pg_textsearch/main/NOTICE
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/timescale/pg_textsearch/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/timescale/pg_textsearch
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/timescale/pg_textsearch/blob/main/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/timescale/pg_textsearch/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/timescale/pg_textsearch/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/timescale/pg_textsearch/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/timescale/pg_textsearch/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/timescale/pg_textsearch/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/timescale/pg_textsearch/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/timescale/pg_textsearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/timescale/pg_textsearch/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

pg_textsearch is a PostgreSQL extension for ranked full-text search with BM25 scoring. It is written in C and loaded by the Postgres server, so the server has to be restarted after the extension is added. The [README](https://github.com/timescale/pg_textsearch/blob/main/README.md) names the PostgreSQL releases it supports and gives two install routes: prebuilt binaries from the releases page, and a build from source with make.

Timescale, Inc., which does business as Tiger Data, maintains the project.

## Worth knowing

Tiger Data also offers the extension on its managed service, Tiger Cloud.

The project was originally named Tapir, so its older name may still appear in other sources.
