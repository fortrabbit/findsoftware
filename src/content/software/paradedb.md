---
id: paradedb
name: ParadeDB
urls:
  home: https://paradedb.com
  repository: https://github.com/paradedb/paradedb
  docs: https://www.paradedb.com/docs/start/introduction
  pricing: https://www.paradedb.com/pricing
category:
  - database
  - search
description: Distribution of the pg_search Postgres extension, which adds full-text, vector and hybrid search to a Postgres database.
status: active
maintainer: ParadeDB, Inc.
maintainerType: company
firstRelease: 2023
hqCountry: US
language: rust
databases:
  - postgres
runsAs:
  - always-on
installMethod: curl install script
licenseModel: open-core
license: AGPL-3.0, commercial (ParadeDB Enterprise)
currentMajor: "0"
latestReleaseDate: 2026-10-22
githubStargazers: 9453
contributors: 150
social:
  x: https://x.com/paradedb
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://paradedb.com
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/paradedb/paradedb
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.paradedb.com/docs/start/introduction
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/paradedb/paradedb/releases/tag/v0.1.8
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.paradedb.com/terms
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.paradedb.com/terms
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/paradedb/paradedb/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/paradedb/paradedb/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/paradedb/paradedb
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/paradedb/paradedb/blob/main/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/paradedb/paradedb/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.paradedb.com/docs/start/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.paradedb.com/docs/start/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.paradedb.com/docs/start/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.paradedb.com/docs/start/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.paradedb.com/docs/operate/deploy/overview
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.paradedb.com/docs/operate/deploy/overview
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/paradedb/paradedb/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/paradedb/paradedb/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/paradedb/paradedb
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/paradedb/paradedb/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.paradedb.com/pricing
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

ParadeDB is a distribution of the pg_search extension for PostgreSQL. The extension adds a custom index for full-text and vector search to a Postgres database, and it is written in Rust. The [introduction](https://www.paradedb.com/docs/start/introduction) says ParadeDB accelerates these queries with a custom index, delivered through the pg_search Postgres extension.

ParadeDB can be started locally with a curl install script, Docker, or Postgres.app on macOS. The [deployment overview](https://www.paradedb.com/docs/operate/deploy/overview) also lists Kubernetes with CloudNativePG and installing the extension into a Postgres cluster the operator already controls.

The Community edition is open source. ParadeDB Enterprise adds commercial licensing, support and physical replication, and ParadeDB Cloud is the managed platform for it, currently in private preview.

## Worth knowing

The Community edition supports single-node deployments. High availability and read replicas are Enterprise features.
