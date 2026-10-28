---
id: grass
name: grass
urls:
  repository: https://github.com/connorskees/grass
  docs: https://docs.rs/grass/
category:
  - css-framework
description: Sass compiler written in Rust that turns Sass stylesheets into plain CSS, as a library and a command-line binary.
status: active
maintainer: Connor Skees
maintainerType: individual
firstRelease: 2020
language: rust
runtime:
  - binary
runsAs:
  - local
installMethod: cargo install grass
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-08-04
githubStargazers: 594
contributors: 19
dependentRepos: 49
dependentPackages: 29
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/connorskees/grass
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/connorskees/grass/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/connorskees/grass
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/connorskees/grass/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/connorskees/grass/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/connorskees/grass
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/connorskees/grass/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://api.github.com/repos/connorskees/grass
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/connorskees/grass/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.rs/grass/latest/grass/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://crates.io/api/v1/crates/grass/versions
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://crates.io/api/v1/crates/grass
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/grass
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/grass
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/grass
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/connorskees/grass
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/connorskees/grass/contributors
    checkedAt: 2026-10-28
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

grass is a Sass compiler written in Rust that turns Sass stylesheets into plain CSS. It is offered as a library for Rust code and as a binary that stands in for the Sass command-line executable. The README says the project aims for complete feature parity with dart-sass, the reference implementation, and that a deviation counts as a bug except in error messages and error spans. It names `@forward` and more complex uses of `@use` as its rough edges, and tracks its known gaps in one issue.

## Worth knowing

grass is not a drop-in replacement for libsass. A stylesheet moved from libsass may need the same changes it would need for dart-sass.
