---
id: gofr
name: GoFr
urls:
  home: https://gofr.dev
  repository: https://github.com/gofr-dev/gofr
  docs: https://gofr.dev/docs
category:
  - framework
  - backend
description: Go framework for building microservices and REST APIs, with observability, datasource integrations and messaging built in.
status: active
maintainer: GoFr core team
maintainerType: community
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
  - mongodb
runsAs:
  - always-on
installMethod: go get -u gofr.dev/pkg/gofr
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-01
githubStargazers: 20840
contributors: 161
social:
  x: https://twitter.com/gofr_dev
  discord: https://discord.gg/wsaSkQTdgq
  subreddit: https://www.reddit.com/r/gofr/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://gofr.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/gofr-dev/gofr
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/gofr-dev/gofr/blob/development/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://gofr.dev/team
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/gofr-dev/gofr
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/gofr-dev/gofr/blob/development/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/gofr-dev/gofr/blob/development/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/gofr-dev/gofr/blob/development/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://gofr.dev/docs/guides/cloud-deployment
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/gofr-dev/gofr
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/gofr-dev/gofr/blob/development/LICENSE
    checkedAt: 2026-10-26
  - field: databases
    url: https://gofr.dev/docs/datasources/getting-started
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/gofr-dev/gofr/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/gofr-dev/gofr/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/gofr-dev/gofr/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/gofr-dev/gofr
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/gofr-dev/gofr/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

GoFr is a Go framework for microservices and REST APIs. A project adds the module with go get and runs it as a process that stays up; the cloud deployment guide describes a GoFr container as a stock Linux Go binary that listens on a configured HTTP port.

The framework's datasource documentation lists MySQL, Redis, PostgreSQL, MongoDB and other databases, and it offers role-based access control. The project publishes migration guides for moving code from other frameworks and comparison pages that set GoFr against Gin, Fiber, Echo and chi.
