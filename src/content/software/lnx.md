---
id: lnx
name: lnx
urls:
  home: https://lnx.rs
  repository: https://github.com/lnx-search/lnx
  docs: https://docs.lnx.rs
category:
  - search
description: Open-source search server that serves a tantivy-based search index through a REST API, with typo-tolerant queries.
status: stub
maintainer: Harrison Burt
maintainerType: individual
firstRelease: 2021
language: rust
runtime:
  - binary
hosting:
  - binary
headlessApi:
  - rest
i18n: 17 Latin languages
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-06-25
githubStargazers: 1457
contributors: 2
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://lnx.rs/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/lnx-search/lnx
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.lnx.rs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/lnx-search/lnx/0.9.0/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/lnx-search/lnx/0.9.0/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://lnx.rs/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/lnx-search/lnx
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/lnx-search/lnx/0.9.0/Cargo.toml
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/lnx-search/lnx
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/lnx-search/lnx/0.9.0/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/lnx-search/lnx/0.9.0/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://lnx.rs/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://lnx.rs/
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://raw.githubusercontent.com/lnx-search/lnx/0.9.0/README.md
    checkedAt: 2026-10-28
  - field: i18n
    url: https://lnx.rs/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/lnx-search/lnx/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/lnx-search/lnx/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/lnx-search/lnx/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/lnx-search/lnx
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/lnx-search/lnx/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

lnx is an open-source search server written in Rust. The [README](https://github.com/lnx-search/lnx/blob/0.9.0/README.md) describes it as a deployment of the tantivy search engine that is reached through a REST API, built on tokio, hyper and tantivy. The [homepage](https://lnx.rs) describes its queries as typo tolerant and names 17 latin languages as supported.

The quick start runs the server from a Docker image on port 8000. The [API documentation](https://docs.lnx.rs) is an OpenAPI reference that is generated from the server's own OpenAPI document.

## Worth knowing

The README marks the repository's default branch as the active development branch and asks readers to use the latest stable release instead. Chinese, Japanese and Korean are listed on the homepage as planned, not supported.
