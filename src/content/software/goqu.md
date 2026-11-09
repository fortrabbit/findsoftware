---
id: goqu
name: goqu
urls:
  home: https://doug-martin.github.io/goqu/
  repository: https://github.com/doug-martin/goqu
  docs: https://github.com/doug-martin/goqu/tree/master/docs
category:
  - library
description: Go SQL builder and executor with an expressive query DSL that generates SQL for several database dialects.
status: active
maintainer: Doug Martin
maintainerType: individual
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
installMethod: go modules
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-11-05
githubStargazers: 2675
contributors: 55
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://doug-martin.github.io/goqu/
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/doug-martin/goqu
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/doug-martin/goqu/blob/master/README.md
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/doug-martin/goqu/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/doug-martin/goqu
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/doug-martin/goqu/blob/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/doug-martin/goqu/blob/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/doug-martin/goqu/blob/master/README.md
    checkedAt: 2026-11-09
  - field: databases
    url: https://github.com/doug-martin/goqu/blob/master/docs/dialect.md
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/doug-martin/goqu
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/doug-martin/goqu/tags
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/doug-martin/goqu/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/doug-martin/goqu/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/doug-martin/goqu
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/doug-martin/goqu/contributors?per_page=1
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

goqu is a Go SQL builder that builds SELECT, INSERT, UPDATE and DELETE statements from a query DSL and can execute them. Each database has a dialect that the program imports to register it, and the dialect controls the SQL a dataset generates; a package-level default dialect can be set once at startup. The dialects that ship with goqu cover MySQL, PostgreSQL, SQLite and SQL Server.

## Worth knowing

The README says goqu is not intended to be used as an ORM when a program needs associations or hooks, and it points to ORM libraries for those features.
