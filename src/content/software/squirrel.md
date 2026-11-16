---
id: squirrel
name: Squirrel
urls:
  repository: https://github.com/Masterminds/squirrel
  docs: https://pkg.go.dev/github.com/Masterminds/squirrel
category:
  - library
description: Go library that builds SQL queries from composable parts and is not an ORM.
status: stub
maintainer: The Masterminds
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-03-17
githubStargazers: 7989
contributors: 42
dependentRepos: 6317
dependentPackages: 2247
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/Masterminds/squirrel
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/Masterminds/squirrel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/Masterminds/squirrel/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/Masterminds/squirrel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/Masterminds/squirrel
    checkedAt: 2026-11-16
  - field: runtime
    url: https://api.github.com/repos/Masterminds/squirrel
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/Masterminds/squirrel/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/Masterminds/squirrel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/Masterminds/squirrel/releases/tags/v1.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/Masterminds/squirrel/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/Masterminds/squirrel/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/Masterminds/squirrel
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/Masterminds/squirrel/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2FMasterminds%2Fsquirrel
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2FMasterminds%2Fsquirrel
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Squirrel is a Go library that builds SQL queries from composable parts. Its README shows SELECT and INSERT statements assembled step by step, with ToSql returning the query text and its arguments. The README says Squirrel is not an ORM and points to a separate table-struct mapper for that job. It can also run the queries it builds against a database handle, and it offers a statement cache and a placeholder format setting for PostgreSQL-style numbered placeholders.

## Worth knowing

The README opens with a maintenance statement: the maintainers call Squirrel complete, say bug fixes will still be merged slowly, and do not promise to respond to bug reports. The README gives only an import path and no install command.
