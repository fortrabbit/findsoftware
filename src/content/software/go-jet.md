---
id: go-jet
name: Jet
urls:
  repository: https://github.com/go-jet/jet
  docs: https://github.com/go-jet/jet/wiki
category:
  - library
description: Type-safe SQL builder for Go with code generation from a database schema and automatic query result mapping.
status: active
maintainer: Goran Bjelanovic
maintainerType: individual
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlite
installMethod: Go modules
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-06
githubStargazers: 3829
contributors: 60
dependentRepos: 13
dependentPackages: 37
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/go-jet/jet
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://github.com/go-jet/jet/releases/tag/v1.0.0
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/go-jet/jet
    checkedAt: 2026-11-08
  - field: runtime
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: category
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: databases
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/README.md
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://raw.githubusercontent.com/go-jet/jet/v2.16.1/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://github.com/go-jet/jet/releases/tag/v2.16.1
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://github.com/go-jet/jet/releases/tag/v2.16.1
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/go-jet/jet
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/go-jet/jet/contributors
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fgo-jet%2Fjet%2Fv2
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fgo-jet%2Fjet%2Fv2
    checkedAt: 2026-11-08
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

Jet is a Go SQL builder: a program writes SQL statements as Go expressions built from generated packages, and query results map to Go types automatically. The jet generator reads the schema of a running database and writes those Go packages. The README states that Jet is not an ORM.

## Worth knowing

Beyond the engines it lists, the README says CockroachDB and MariaDB are tested and known to work through the PostgreSQL and MySQL wire protocols. The project has no website of its own; its documentation is the GitHub wiki.
