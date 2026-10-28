---
id: tinysearch
name: tinysearch
urls:
  repository: https://github.com/tinysearch/tinysearch
  docs: https://github.com/tinysearch/tinysearch/blob/master/README.md
category:
  - search
description: Full-text search engine for static websites that compiles a Rust-built search index into WebAssembly for the browser.
status: active
maintainer: Matthias Endler
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
  - static
runsAs:
  - browser
  - static
  - local
installMethod: cargo install
licenseModel: open-source
license: Apache-2.0 OR MIT
currentMajor: "0"
latestReleaseDate: 2026-09-14
githubStargazers: 2978
contributors: 22
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/tinysearch/tinysearch
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://crates.io/api/v1/crates/tinysearch/versions
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/tinysearch/tinysearch
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/tinysearch/tinysearch/blob/v0.11.1/Cargo.toml
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/tinysearch/tinysearch/blob/master/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/tinysearch/tinysearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/tinysearch/tinysearch/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/tinysearch/tinysearch/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/tinysearch/tinysearch/releases/latest
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

tinysearch is a full-text search engine for static websites. It is written in Rust and compiled to WebAssembly, so the search runs in the visitor's browser, and its index ships as static files alongside the rest of the site. The README says it can be seen as an alternative to elasticlunr, and that it is used together with static site generators. Matthias Endler is named first among its maintainers.

## Worth knowing

The site needs no search server, because the index is bundled into the WebAssembly output. The tool that builds that output is run on a developer's machine, and it is installed through Cargo, as a library crate or from a Docker image.
