---
id: neon
name: Neon
urls:
  home: https://neon.com
  repository: https://github.com/neondatabase/neon
  docs: https://neon.com/docs
  pricing: https://neon.com/pricing
category:
  - database
description: Open source serverless Postgres database platform that separates storage and compute.
status: active
maintainer: Neon
parent: Databricks
firstRelease: 2022
language: rust
databases:
  - postgres
runsAs:
  - local
installMethod: build from source
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2025-07-29
githubStargazers: 23284
contributors: 153
social:
  x: https://x.com/neondatabase
  discord: https://neon.com/discord
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://raw.githubusercontent.com/neondatabase/neon/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://neon.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/neondatabase/neon
    checkedAt: 2026-10-30
  - field: urls
    url: https://neon.com/docs
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://neon.com/about
    checkedAt: 2026-10-30
  - field: parent
    url: https://neon.com/about
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/neondatabase/neon/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/neondatabase/neon
    checkedAt: 2026-10-30
  - field: databases
    url: https://raw.githubusercontent.com/neondatabase/neon/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/neondatabase/neon/main/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://raw.githubusercontent.com/neondatabase/neon/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://neon.com/pricing
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/neondatabase/neon/releases
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://neon.com/about
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/neondatabase/neon
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/neondatabase/neon/main/LICENSE
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/neondatabase/neon
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/neondatabase/neon/contributors?per_page=1
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

Neon is an open source serverless Postgres database platform that separates storage from compute. Its compute nodes are stateless PostgreSQL nodes backed by the Neon storage engine, as the [README](https://raw.githubusercontent.com/neondatabase/neon/main/README.md) explains. The repository can be compiled and run on a workstation. A hosted service under the same name runs the database for apps and is billed by usage. Databricks acquired Neon.

## Worth knowing

The README limits the local setup to small experiments and to testing code changes. The repository keeps receiving commits, but its GitHub release list has stopped.
