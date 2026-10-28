---
id: bayard
name: Bayard
urls:
  repository: https://github.com/mosuka/bayard
  docs: https://github.com/mosuka/bayard/tree/main/docs
category:
  - search
description: Full-text search and indexing server written in Rust, with cluster membership discovery and gRPC and REST endpoints.
status: stub
maintainer: Minoru Osuka
maintainerType: individual
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: compile from source with cargo build
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-08-03
githubStargazers: 1868
contributors: 13
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/mosuka/bayard
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/mosuka/bayard/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/mosuka/bayard/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/mosuka/bayard
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/mosuka/bayard/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/mosuka/bayard/main/docs/build.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/mosuka/bayard/main/docs/build.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/mosuka/bayard/main/docs/getting_started.md
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://raw.githubusercontent.com/mosuka/bayard/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/mosuka/bayard
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/mosuka/bayard/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/mosuka/bayard/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/mosuka/bayard/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/mosuka/bayard/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/mosuka/bayard
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/mosuka/bayard/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Bayard is a full-text search and indexing server written in Rust. It serves its API over gRPC and a RESTful interface, and it lets indexes be defined with a JSON schema and analyzers, sharded and replicated across nodes. Nodes find each other through gossip-based membership discovery, so a cluster has no master node. The project builds from source with cargo, and the build needs protoc. The [project docs](https://github.com/mosuka/bayard/tree/main/docs) cover the build, the schema, the query DSL and the REST API.
