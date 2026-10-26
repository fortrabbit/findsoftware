---
id: yokai
name: Yokai
urls:
  home: https://ankorstore.github.io/yokai/
  repository: https://github.com/ankorstore/yokai
  docs: https://ankorstore.github.io/yokai/
category:
  - framework
description: Go framework for backend applications, with built-in logging, tracing, metrics and health checks and a dependency injection system.
status: active
maintainer: Ankorstore
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
  - sqlserver
templating: HTML templates
runsAs:
  - always-on
renderingModes:
  - server
installMethod: Application template from the GitHub template repository
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-13
githubStargazers: 840
contributors: 14
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://github.com/ankorstore/yokai/blob/main/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/ankorstore/yokai
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/ankorstore/yokai/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/ankorstore/yokai/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/ankorstore/yokai
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/ankorstore/yokai/blob/fxcore/v1.17.0/fxcore/go.mod
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/ankorstore/yokai/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://ankorstore.github.io/yokai/modules/fxorm/
    checkedAt: 2026-10-26
  - field: databases
    url: https://ankorstore.github.io/yokai/modules/fxorm/
    checkedAt: 2026-10-26
  - field: databases
    url: https://ankorstore.github.io/yokai/modules/fxorm/
    checkedAt: 2026-10-26
  - field: databases
    url: https://ankorstore.github.io/yokai/modules/fxorm/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ankorstore.github.io/yokai/getting-started/http-application/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ankorstore.github.io/yokai/getting-started/http-application/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ankorstore.github.io/yokai/modules/fxcron/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://ankorstore.github.io/yokai/modules/fxcore/
    checkedAt: 2026-10-26
  - field: templating
    url: https://ankorstore.github.io/yokai/modules/fxhttpserver/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://ankorstore.github.io/yokai/modules/fxhttpserver/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/ankorstore/yokai
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/ankorstore/yokai/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/ankorstore/yokai/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://proxy.golang.org/github.com/ankorstore/yokai/fxcore/@v/v1.0.0.info
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://proxy.golang.org/github.com/ankorstore/yokai/fxcore/@latest
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://proxy.golang.org/github.com/ankorstore/yokai/fxcore/@latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ankorstore/yokai
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ankorstore/yokai/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Yokai is a Go framework for backend applications, split into modules that a project composes. The docs name Echo, gRPC-go, Viper, OpenTelemetry and Fx as the libraries the stack is built with, and its core module is fxcore. A project starts from an application template, fetched from GitHub or created with gonew. The HTTP server module can render HTML templates, and the database module drives SQLite, MySQL, PostgreSQL and SQL Server. The repository holds each module as a separate Go module with its own tags.

## Worth knowing

The README badge says Go 1.20 or later, but the core module's go.mod at the release tag states Go 1.26, and that line is the minimum a build needs.
