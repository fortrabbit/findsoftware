---
id: askama
name: Askama
urls:
  home: https://askama.rs
  repository: https://github.com/askama-rs/askama
  docs: https://askama.rs/en/stable/
category:
  - library
description: Rust template engine based on Jinja that generates type-safe Rust code from templates at compile time.
status: active
maintainer: Dirkjan Ochtman
firstRelease: 2017
language: rust
runtime:
  - binary
hosting:
  - binary
templating: jinja2
installMethod: cargo add askama
licenseModel: open-source
license: MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-04
githubStargazers: 1250
contributors: 143
dependentRepos: 1065
dependentPackages: 179
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://askama.rs/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/askama-rs/askama
    checkedAt: 2026-11-04
  - field: urls
    url: https://raw.githubusercontent.com/askama-rs/askama/main/README.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/askama-rs/askama/v0.16.1/LICENSE-MIT
    checkedAt: 2026-11-04
  - field: category
    url: https://raw.githubusercontent.com/askama-rs/askama/main/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/askama-rs/askama
    checkedAt: 2026-11-04
  - field: templating
    url: https://raw.githubusercontent.com/askama-rs/askama/main/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://raw.githubusercontent.com/askama-rs/askama/main/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://raw.githubusercontent.com/askama-rs/askama/main/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://raw.githubusercontent.com/askama-rs/askama/v0.16.1/Cargo.toml
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/askama-rs/askama/releases/tag/v0.16.1
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/askama-rs/askama/releases/tag/v0.16.1
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://crates.io/api/v1/crates/askama
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/askama
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/askama
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/askama-rs/askama
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/askama-rs/askama/contributors
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Askama is a template engine for Rust with a syntax based on Jinja. Templates are compiled into the Rust crate that uses them, so the template code becomes part of that crate at build time. The crate is added with cargo.

The project was forked into Rinja and that fork was later merged back, so older references may use either name.
