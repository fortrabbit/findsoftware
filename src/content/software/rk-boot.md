---
id: rk-boot
name: rk-boot
urls:
  home: https://rk.mofcloud.com/
  repository: https://github.com/rookie-ninja/rk-boot
  docs: https://rkdocs.mofcloud.com/
category:
  - framework
  - backend
description: Go library that starts and manages a microservice's backend components, such as web frameworks, databases and middleware, from a YAML file.
status: active
maintainer: rookie ninja
firstRelease: 2020
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
  - mongodb
runsAs:
  - always-on
installMethod: go get
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2024-04-09
githubStargazers: 567
contributors: 8
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://rk.mofcloud.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/rookie-ninja/rk-boot
    checkedAt: 2026-10-26
  - field: urls
    url: https://rk.mofcloud.com/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://rkdocs.mofcloud.com/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/rookie-ninja/rk-boot
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/rookie-ninja/rk-boot/blob/v2.2.22/go.mod
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/rookie-ninja/rk-boot/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/rookie-ninja/rk-boot
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/rookie-ninja/rk-boot/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/rookie-ninja/rk-boot/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/rookie-ninja/rk-boot/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://rkdocs.mofcloud.com/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/rookie-ninja/rk-boot/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/rookie-ninja/rk-boot/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/rookie-ninja/rk-boot/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/rookie-ninja/rk-boot
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/rookie-ninja/rk-boot/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

rk-boot is a Go library that starts a microservice's backend components from a YAML file. The YAML names each component, such as a web framework entry with its port, and the application registers its own handlers on the entries it defines. The README's example starts a gin server this way and then waits for a shutdown signal.

The docs describe plugins for the web frameworks gin, gRPC, echo, gf, fiber, gorilla/mux and go-zero, and for database clients for MySQL, PostgreSQL, SQLite, SQL Server, MongoDB, ClickHouse and Redis.

## Worth knowing

The official website address in the README does not resolve, so the project's landing page and the rk-docs documentation site are the pages that remain.
