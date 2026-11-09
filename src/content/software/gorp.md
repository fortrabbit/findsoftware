---
id: gorp
name: gorp
urls:
  repository: https://github.com/go-gorp/gorp
  docs: https://pkg.go.dev/github.com/go-gorp/gorp/v3
category:
  - library
description: Go library that maps structs to database tables and provides insert, update, delete and select helpers over database/sql.
status: stub
maintainer: James Cooper
firstRelease: 2013
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
  - oracle
  - sqlserver
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2019-11-27
githubStargazers: 3742
contributors: 71
social:
  forum: https://gitter.im/go-gorp/gorp
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/go-gorp/gorp
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/go-gorp/gorp/blob/main/README.md
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/go-gorp/gorp/blob/main/LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/go-gorp/gorp
    checkedAt: 2026-11-09
  - field: category
    url: https://api.github.com/repos/go-gorp/gorp
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/go-gorp/gorp/blob/main/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/go-gorp/gorp/blob/main/README.md
    checkedAt: 2026-11-09
  - field: databases
    url: https://github.com/go-gorp/gorp/blob/main/README.md
    checkedAt: 2026-11-09
  - field: databases
    url: https://github.com/go-gorp/gorp/blob/main/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/go-gorp/gorp
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/go-gorp/gorp/tags
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/go-gorp/gorp/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/go-gorp/gorp/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/go-gorp/gorp
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/go-gorp/gorp/contributors?per_page=1
    checkedAt: 2026-11-09
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

gorp is a Go library that binds struct fields to table columns, by tag or by API, and generates the insert, update, delete and get statements for them. It runs on `database/sql`, so a program supplies its own driver, and each database has a dialect that produces the statements in that database's syntax. Raw SQL can be bound to structs and slices, with positional or named parameters, and registered structs can create their tables for unit tests.

## Worth knowing

The README says its author hesitates to call gorp an ORM, because gorp does not know the relationships between structs. It also says development is not very active right now, and that Oracle and SQL Server support is not covered by CI.
