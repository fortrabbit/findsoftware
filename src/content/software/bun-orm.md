---
id: bun-orm
name: Bun
urls:
  home: https://bun.uptrace.dev
  repository: https://github.com/uptrace/bun
  docs: https://bun.uptrace.dev/guide/
category:
  - library
description: SQL-first object-relational mapper for Go that builds queries on database/sql.
status: active
maintainer: Vladimir Mihailenco
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlserver
  - sqlite
  - oracle
installMethod: go get github.com/uptrace/bun
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "1"
latestReleaseDate: 2026-10-03
githubStargazers: 5004
contributors: 132
social:
  discord: https://discord.gg/rWtp5Aj
  forum: https://github.com/uptrace/bun/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://bun.uptrace.dev/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/uptrace/bun
    checkedAt: 2026-11-04
  - field: urls
    url: https://bun.uptrace.dev/guide/
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/uptrace/bun/blob/master/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/uptrace/bun
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/uptrace/bun/blob/master/README.md
    checkedAt: 2026-11-04
  - field: databases
    url: https://github.com/uptrace/bun/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/uptrace/bun/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/uptrace/bun
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/uptrace/bun/master/LICENSE
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/uptrace/bun/master/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://proxy.golang.org/github.com/uptrace/bun/@v/v0.1.0.info
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/uptrace/bun/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/uptrace/bun/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/uptrace/bun
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/uptrace/bun/contributors
    checkedAt: 2026-11-04
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Bun is a Go ORM whose queries stay close to the SQL a developer would write. The project calls it SQL-first, and the README names PostgreSQL, MySQL, MSSQL, SQLite and Oracle as the databases it works with. The Go module is installed with `go get`, and the [guide](https://bun.uptrace.dev/guide/) is the documentation the README links.

## Worth knowing

Oracle needs a separate driver module, which the README's driver table names, so an Oracle connection adds that module next to the ORM.
