---
id: tantivy
name: Tantivy
urls:
  repository: https://github.com/quickwit-oss/tantivy
  docs: https://docs.rs/tantivy/
category:
  - search
description: Full-text search engine library written in Rust, with which programs build their own search engines.
status: active
maintainer: Paul Masurel
firstRelease: 2016
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: cargo
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-17
githubStargazers: 16355
contributors: 197
dependentRepos: 395
dependentPackages: 74
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/quickwit-oss/tantivy
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.rs/tantivy/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://crates.io/api/v1/crates/tantivy/versions
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/quickwit-oss/tantivy/blob/0.27.0/Cargo.toml
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/quickwit-oss/tantivy
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/quickwit-oss/tantivy
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/quickwit-oss/tantivy/blob/main/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/quickwit-oss/tantivy/blob/main/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/quickwit-oss/tantivy
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/quickwit-oss/tantivy/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/tantivy
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/tantivy
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/quickwit-oss/tantivy/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/tantivy/versions
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://crates.io/crates/tantivy
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

Tantivy is a Rust library for full-text search. A program links it in as a crate and builds its own search engine on it, because the project is a library and not a search server that runs on its own. The README names Quickwit, a distributed search engine built on Tantivy, as a separate project. Its FAQ lists bindings for Python and Ruby, which are separate records.

## Worth knowing

Tantivy has no server to install. A search built on it runs inside the program that links the library, so the host of that program is what runs the search.
