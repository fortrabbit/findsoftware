---
id: electric-sql
name: Electric
urls:
  home: https://electric-sql.com
  repository: https://github.com/electric-sql/electric
  docs: https://electric-sql.com/docs/sync/guides/installation
  pricing: https://electric-sql.com/pricing
category:
  - backend
description: Postgres sync engine that streams shaped subsets of Postgres tables over HTTP to client apps, self-hosted as a Docker image or run as Electric Cloud.
status: active
maintainer: Electric DB Inc.
maintainerType: company
firstRelease: 2022
hqCountry: US
language: elixir
runtime:
  - beam
hosting:
  - elixir
databases:
  - postgres
runsAs:
  - always-on
installMethod: Docker image electricsql/electric, with Docker Compose or docker run
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-09-07
githubStargazers: 10421
contributors: 75
social:
  x: https://x.com/ElectricSQL
  discord: https://discord.electric-sql.com
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/electric-sql/electric/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://electric-sql.com/about
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/electric-sql/electric
    checkedAt: 2026-11-03
  - field: urls
    url: https://electric-sql.com/docs/sync/guides/installation
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://electric-sql.com/about
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://registry.npmjs.org/electric-sql
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://electric-sql.com/about
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/electric-sql/electric/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://electric-sql.com/docs/sync/guides/deployment
    checkedAt: 2026-11-03
  - field: runtime
    url: https://electric-sql.com/docs/sync/guides/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://electric-sql.com/docs/sync/guides/deployment
    checkedAt: 2026-11-03
  - field: databases
    url: https://electric-sql.com/docs/sync/guides/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://electric-sql.com/docs/sync/guides/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://electric-sql.com/docs/sync/guides/installation
    checkedAt: 2026-11-03
  - field: urls
    url: https://electric-sql.com/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/electric-sql/electric
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://electric-sql.com/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/electric-sql/electric/releases/tag/@core/sync-service@1.8.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/electric-sql/electric/releases/tag/@core/sync-service@1.8.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/electric-sql/electric
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/electric-sql/electric/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Electric is a Postgres sync engine that streams subsets of Postgres tables over HTTP to client applications. The sync service is an Elixir web service packaged as a Docker image. The [installation guide](https://electric-sql.com/docs/sync/guides/installation) shows it running beside a new Postgres in Docker Compose or in front of an existing database, and the Postgres it reads must be version 14 or later.

## Worth knowing

The same sync engine is offered as Electric Cloud, a managed hosting service, according to the deployment guide.
