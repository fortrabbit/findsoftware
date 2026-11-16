---
id: sqlboiler
name: SQLBoiler
urls:
  repository: https://github.com/aarondl/sqlboiler
category:
  - library
  - dev-tool
description: Go code generator that produces an ORM tailored to a database schema.
status: stub
maintainer: Aaron Lefkowitz
maintainerType: individual
firstRelease: 2016
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
installMethod: go install, go get
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2025-06-27
githubStargazers: 6981
contributors: 157
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/aarondl/sqlboiler
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/aarondl/sqlboiler/git/ref/tags/v1.0.0
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/aarondl/sqlboiler/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/aarondl/sqlboiler
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/aarondl/sqlboiler/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/aarondl/sqlboiler/blob/master/README.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/aarondl/sqlboiler/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/aarondl/sqlboiler/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/aarondl/sqlboiler/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/aarondl/sqlboiler/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/aarondl/sqlboiler/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/aarondl/sqlboiler/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/aarondl/sqlboiler/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/aarondl/sqlboiler
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/aarondl/sqlboiler/contributors?per_page=1
    checkedAt: 2026-11-16
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

SQLBoiler is a Go code generator that produces an ORM tailored to a database schema. The README describes it as database-first: the schema is created first, with a separate migration tool, and the generator then writes the Go models from it.

## Worth knowing

The README says the project is in maintenance mode and generally does not accept new features. It states that the older major versions are no longer maintained, and that the current major version is the only maintained one. It names Bob and sqlc as alternatives for users who want an actively maintained project.
