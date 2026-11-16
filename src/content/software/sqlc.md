---
id: sqlc
name: sqlc
urls:
  home: https://sqlc.dev
  repository: https://github.com/sqlc-dev/sqlc
  docs: https://docs.sqlc.dev
category:
  - dev-tool
description: Command-line tool that generates type-safe code from SQL queries.
status: active
maintainer: Riza, Inc.
maintainerType: company
firstRelease: 2019
language: go
runtime:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
runsAs:
  - local
installMethod: homebrew, snap, go install, docker, download
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-04-22
githubStargazers: 18461
contributors: 242
social:
  discord: https://discord.gg/EcXzGe5SEs
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/sqlc-dev/sqlc
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/sqlc-dev/sqlc
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/sqlc-dev/sqlc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/sqlc-dev/sqlc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/sqlc-dev/sqlc/git/refs/tags/v0.0.0-devel
    checkedAt: 2026-11-16
  - field: category
    url: https://sqlc.dev/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/sqlc-dev/sqlc
    checkedAt: 2026-11-16
  - field: runtime
    url: https://docs.sqlc.dev/en/latest/overview/install.html
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/sqlc-dev/sqlc
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/sqlc-dev/sqlc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/sqlc-dev/sqlc/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/sqlc-dev/sqlc/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sqlc-dev/sqlc
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sqlc-dev/sqlc/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlc.dev/en/latest/overview/install.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlc.dev/en/latest/overview/install.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlc.dev/en/latest/overview/install.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlc.dev/en/latest/overview/install.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlc.dev/en/latest/overview/install.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlc.dev/en/latest/reference/language-support.html
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://docs.sqlc.dev/en/latest/howto/ci-cd.html
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

sqlc is a command-line tool that turns SQL queries into type-safe code. You write queries in SQL, run sqlc to generate code with typed interfaces to them, and call that generated code from your application.

The tool ships as a single binary. The docs suggest running it as part of a CI/CD pipeline, so it stays on the developer side and never runs on the live site.

## Worth knowing

The go install route needs a recent Go toolchain, which the install page states.
