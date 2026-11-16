---
id: insta
name: insta
urls:
  home: https://insta.rs/
  repository: https://github.com/mitsuhiko/insta
  docs: https://insta.rs/docs/quickstart/
category:
  - testing
description: Snapshot testing library for Rust that stores expected values as snapshot files and shows the diff when a test output changes.
status: active
maintainer: Armin Ronacher
maintainerType: individual
firstRelease: 2019
language: rust
runtime:
  - binary
runsAs:
  - local
installMethod: cargo add --dev insta (crates.io), cargo-insta installer script (curl or PowerShell), cargo install cargo-insta
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-03
githubStargazers: 2987
contributors: 83
dependentRepos: 1542
dependentPackages: 851
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://insta.rs/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mitsuhiko/insta
    checkedAt: 2026-11-16
  - field: urls
    url: https://insta.rs/docs/quickstart/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mitsuhiko/insta/blob/1.49.0/insta/Cargo.toml
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/mitsuhiko/insta/blob/1.49.0/insta/Cargo.toml
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mitsuhiko/insta
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mitsuhiko/insta/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/mitsuhiko/insta/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://insta.rs/docs/quickstart/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://insta.rs/docs/quickstart/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://insta.rs/docs/cli/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://insta.rs/docs/cli/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mitsuhiko/insta/blob/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mitsuhiko/insta/blob/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mitsuhiko/insta/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mitsuhiko/insta/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/insta
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mitsuhiko/insta
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mitsuhiko/insta/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/insta
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/insta
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

insta is a snapshot testing library for Rust. A test compares a value against a reference snapshot that the library stores and manages, either in separate snapshot files or inline in the source file, and the companion cargo-insta tool reviews the snapshots that have changed. A VS Code extension in the same repository lets snapshots be reviewed from the editor.

The [quickstart](https://insta.rs/docs/quickstart/) says tests run with cargo test as usual, and that insta behaves differently in CI environments.
