---
id: quickwit
name: Quickwit
urls:
  home: https://quickwit.io
  repository: https://github.com/quickwit-oss/quickwit
  docs: https://quickwit.io/docs
category:
  - search
description: Open-source search engine for logs and traces that indexes data on object storage and runs as a single binary or a cluster.
status: active
maintainer: Quickwit, Inc.
maintainerType: company
parent: Datadog
firstRelease: 2021
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-22
githubStargazers: 11747
contributors: 120
social:
  x: https://twitter.com/quickwit_inc
  discord: https://discord.gg/MT27AG5EVE
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://quickwit.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/quickwit-oss/quickwit
    checkedAt: 2026-10-28
  - field: urls
    url: https://quickwit.io/docs
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://quickwit.io/blog/quickwit-joins-datadog
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://quickwit.io/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://quickwit.io/
    checkedAt: 2026-10-28
  - field: parent
    url: https://quickwit.io/blog/quickwit-joins-datadog
    checkedAt: 2026-10-28
  - field: category
    url: https://quickwit.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/quickwit-oss/quickwit
    checkedAt: 2026-10-28
  - field: runtime
    url: https://quickwit.io/docs/get-started/installation
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/quickwit-oss/quickwit
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/quickwit-oss/quickwit/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/quickwit-oss/quickwit/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/quickwit-oss/quickwit/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/quickwit-oss/quickwit
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/quickwit-oss/quickwit/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://quickwit.io/docs/get-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://quickwit.io/docs/get-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://quickwit.io/docs/get-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://quickwit.io/docs/deployment/deployment-modes
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://quickwit.io/docs/get-started/installation
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://quickwit.io/docs/deployment/deployment-modes
    checkedAt: 2026-10-28
  - field: databases
    url: https://quickwit.io/docs/deployment/deployment-modes
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://quickwit.io/docs/deployment/deployment-modes
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://quickwit.io/docs/reference/rest-api
    checkedAt: 2026-10-28
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Quickwit is a search engine for logs and traces, written in Rust and built on the Tantivy search library. In cluster mode its index data sits on shared object storage such as Amazon S3 or MinIO, and a single node keeps index data in local files. The metastore that holds index metadata uses a PostgreSQL-compatible database.

Every node runs as an always-on server that serves the REST API and a search and admin UI. The project ships as one binary, with install routes for a Linux or macOS download, a Docker image and a Helm chart for Kubernetes. Linux is the only officially supported platform.

## Worth knowing

The project's homepage states that Quickwit is joining Datadog.
