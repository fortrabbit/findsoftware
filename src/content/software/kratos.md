---
id: kratos
name: Kratos
urls:
  home: https://go-kratos.dev
  repository: https://github.com/go-kratos/kratos
  docs: https://go-kratos.dev/docs/
category:
  - framework
  - backend
description: Go framework for building HTTP and gRPC microservices, with application lifecycle, generated transports, middleware and configuration.
status: active
maintainer: go-kratos
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: git clone of the kratos-layout project template, then make init
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-06-26
githubStargazers: 25993
contributors: 289
social:
  discord: https://discord.gg/BWzJsUJ
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://go-kratos.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/go-kratos/kratos
    checkedAt: 2026-10-26
  - field: urls
    url: https://go-kratos.dev/docs/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/go-kratos/kratos/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/go-kratos/kratos/releases?per_page=100
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/go-kratos/kratos
    checkedAt: 2026-10-26
  - field: runtime
    url: https://go-kratos.dev/docs/getting-started/start/
    checkedAt: 2026-10-26
  - field: category
    url: https://go-kratos.dev/docs/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://go-kratos.dev/docs/getting-started/start/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://go-kratos.dev/docs/getting-started/start/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://go-kratos.dev/docs/devops/docker/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://go-kratos.dev/docs/component/application/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/go-kratos/kratos
    checkedAt: 2026-10-26
  - field: license
    url: https://go-kratos.dev/docs/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/go-kratos/kratos/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/go-kratos/kratos/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/go-kratos/kratos
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/go-kratos/kratos/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kratos is a Go framework for building HTTP and gRPC microservices. The core module, github.com/go-kratos/kratos/v3, provides the application lifecycle, generated transports, middleware and configuration. Integrations that depend on outside systems, such as JWT, OpenTelemetry, Consul and Sentry, are separate Go modules that the application adds itself, and the command-line tool is versioned apart from the core.

A new service starts from the project template, kratos-layout, which the [quick start](https://go-kratos.dev/docs/getting-started/start/) clones and prepares with make init. The template uses MySQL and Ent, but the framework does not require either, so the choice of storage stays with the application.

A service started from the template listens on HTTP and gRPC ports and keeps running until it is stopped. There is no runtime plugin loader: extensions are Go modules compiled into the program.
