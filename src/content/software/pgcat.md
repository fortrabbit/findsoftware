---
id: pgcat
name: PgCat
urls:
  repository: https://github.com/postgresml/pgcat
  docs: https://github.com/postgresml/pgcat/blob/main/CONFIG.md
category:
  - database
description: PostgreSQL pooler and proxy with sharding, load balancing, failover and mirroring support, written in Rust.
status: active
maintainer: PgCat Contributors
maintainerType: community
firstRelease: 2022
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2024-08-30
githubStargazers: 4025
contributors: 55
social:
  discord: https://discord.gg/DmyJP3qJ7U
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://api.github.com/repos/postgresml/pgcat
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/postgresml/pgcat/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/postgresml/pgcat/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/postgresml/pgcat
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/postgresml/pgcat/releases/tags/v1.2.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/postgresml/pgcat/releases/tags/v1.2.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/postgresml/pgcat/releases/tags/v0.1.0-alpha
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/postgresml/pgcat/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/postgresml/pgcat/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/postgresml/pgcat/blob/main/README.md
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/postgresml/pgcat
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/postgresml/pgcat/contributors?per_page=1
    checkedAt: 2026-10-30
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

PgCat is a Rust pooler and proxy that sits between clients and PostgreSQL servers and adds sharding, load balancing, failover and mirroring. The README gives a Docker image and a build from source with Cargo as ways to run it, and it names PgBouncer as the pooler it resembles.

The README's deployment section sets the pooler to spawn four workers, a number that can be adjusted. Its configuration is described in [CONFIG.md](https://github.com/postgresml/pgcat/blob/main/CONFIG.md).

## Worth knowing

No separate project website is named, so the repository and its README are the project's own pages.
