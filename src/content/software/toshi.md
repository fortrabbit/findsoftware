---
id: toshi
name: Toshi
urls:
  home: https://toshi.rs
  repository: https://github.com/toshi-search/Toshi
  docs: https://github.com/toshi-search/Toshi/blob/master/README.md
category:
  - search
description: Full-text search server written in Rust that serves a JSON query API over indexes built with Tantivy.
status: stub
maintainer: Stephen Carman
firstRelease: 2018
language: rust
runtime:
  - binary
hosting:
  - binary
basedOn:
  - tantivy
runsAs:
  - always-on
installMethod: cargo build from source
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2018-10-18
githubStargazers: 4253
contributors: 17
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: status
    url: https://crates.io/api/v1/crates/toshi
    checkedAt: 2026-10-28
  - field: urls
    url: https://toshi.rs/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/toshi-search/Toshi
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/toshi-search/Toshi/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/toshi-search/Toshi/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/toshi-search/Toshi/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/toshi-search/Toshi
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/toshi-search/Toshi/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/toshi-search/Toshi/blob/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://toshi.rs/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/toshi-search/Toshi/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/toshi-search/Toshi/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://crates.io/api/v1/crates/toshi/versions
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/toshi/versions
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://crates.io/api/v1/crates/toshi
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/toshi-search/Toshi
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/toshi-search/Toshi/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Toshi is a full-text search server written in Rust that builds its indexes with Tantivy. The repository's README builds it with cargo and runs the resulting binary, which listens on a configured port and writes its data and indices under a configured data path. Its description on the project site calls it a full-text search engine written in Rust.

## Worth knowing

The README and the project site both describe Toshi as experimental and not ready for production use. Its only published crate is a single early version, and the project has no GitHub releases or tags.
