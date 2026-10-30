---
id: pgdog
name: PgDog
urls:
  home: https://pgdog.dev
  repository: https://github.com/pgdogdev/pgdog
  docs: https://docs.pgdog.dev
category:
  - database
description: PostgreSQL connection pooler, load balancer and database sharder written in Rust.
status: active
maintainer: PgDog, Inc.
maintainerType: company
firstRelease: 2025
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: helm chart
licenseModel: open-core
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-10-16
githubStargazers: 5589
contributors: 81
social:
  discord: https://discord.gg/CcBZkjSJdd
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://pgdog.dev/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/pgdogdev/pgdog
    checkedAt: 2026-10-30
  - field: urls
    url: https://pgdog.dev/blog/our-funding-announcement/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://pgdog.dev/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://pgdog.dev/tos
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/pgdogdev/pgdog
    checkedAt: 2026-10-30
  - field: runtime
    url: https://docs.pgdog.dev/installation/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/pgdogdev/pgdog/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/pgdogdev/pgdog/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/pgdogdev/pgdog/releases/tags/v0.1.0
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/pgdogdev/pgdog/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://docs.pgdog.dev/about/
    checkedAt: 2026-10-30
  - field: category
    url: https://pgdog.dev/
    checkedAt: 2026-10-30
  - field: databases
    url: https://pgdog.dev/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://docs.pgdog.dev/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pgdog.dev/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pgdog.dev/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pgdog.dev/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pgdog.dev/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pgdog.dev/installation/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/pgdogdev/pgdog
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/pgdogdev/pgdog/contributors?per_page=1
    checkedAt: 2026-10-30
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

PgDog is a connection pooler, load balancer and database sharder for PostgreSQL, written in Rust. The [installation guide](https://docs.pgdog.dev/installation/) covers a Helm chart for Kubernetes, a Docker image, a Terraform module for AWS ECS, pre-built binaries and a build from source. A single instance is multithreaded and can serve many clients, and the docs' comparison page sets PgDog beside PgBouncer and PgCat. PgDog, Inc. maintains it.
