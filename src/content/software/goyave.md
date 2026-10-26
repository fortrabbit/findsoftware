---
id: goyave
name: Goyave
urls:
  home: https://goyave.dev
  repository: https://github.com/go-goyave/goyave
  docs: https://goyave.dev/getting-started/installation.html
category:
  - framework
description: Go REST API framework with routing, validation, database access and a configuration system in one package.
status: active
maintainer: Jérémy LAMBERT
firstRelease: 2019
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
i18n: yes
runsAs:
  - always-on
installMethod: go get module, or template project install script
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-23
githubStargazers: 1783
contributors: 19
social:
  discord: https://discord.gg/mfemDMc
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://goyave.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/go-goyave/goyave
    checkedAt: 2026-10-26
  - field: urls
    url: https://goyave.dev/getting-started/installation.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/go-goyave/goyave/master/LICENSE
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/go-goyave/goyave/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/go-goyave/goyave
    checkedAt: 2026-10-26
  - field: runtime
    url: https://goyave.dev/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://goyave.dev/getting-started/installation.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://goyave.dev/getting-started/deployment.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://goyave.dev/basics/database.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://goyave.dev/basics/database.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://goyave.dev/basics/database.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://goyave.dev/basics/database.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://goyave.dev/basics/database.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://goyave.dev/basics/database.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://goyave.dev/advanced/localization.html
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/go-goyave/goyave/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/go-goyave/goyave
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/go-goyave/goyave/master/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/go-goyave/goyave/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/go-goyave/goyave/releases/latest
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/go-goyave/goyave/releases
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/go-goyave/goyave/contributors
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/go-goyave/goyave
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Goyave is a Go framework for REST APIs, described on its homepage as an opinionated all-in-one Golang web framework focused on REST APIs. A project starts from the Goyave template project or is set up by hand with `go get` on the `goyave.dev/goyave/v5` module. Database access goes through the drivers the database page lists: MySQL, PostgreSQL, SQLite, MSSQL, ClickHouse and BigQuery, each configured with its own connection options.

The application runs as a server process. The deployment guide has the team build it with `go build` and deploy the executable. The framework is MIT licensed and is maintained by Jérémy LAMBERT.

## Worth knowing

Because the application is a server process, the host has to run the executable and keep it up; serving static files is not enough.
