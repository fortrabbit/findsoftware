---
id: diesel
name: Diesel
urls:
  home: https://diesel.rs
  repository: https://github.com/diesel-rs/diesel
  docs: https://diesel.rs/guides/getting-started
category:
  - library
description: Safe, extensible ORM and query builder for Rust.
status: active
maintainer: The Diesel Core Team
maintainerType: community
firstRelease: 2015
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlite
  - mariadb
installMethod: cargo dependency
licenseModel: open-source
license: MIT, Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-07
githubStargazers: 14222
contributors: 394
social:
  forum: https://github.com/diesel-rs/diesel/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://diesel.rs
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/diesel-rs/diesel
    checkedAt: 2026-11-04
  - field: urls
    url: https://diesel.rs/guides/getting-started
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://crates.io/api/v1/crates/diesel/versions
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://diesel.rs
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/diesel-rs/diesel/blob/master/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/diesel-rs/diesel
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/diesel-rs/diesel/blob/master/README.md
    checkedAt: 2026-11-04
  - field: databases
    url: https://github.com/diesel-rs/diesel/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/diesel-rs/diesel/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://diesel.rs/guides/getting-started
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://diesel.rs/guides/getting-started
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://diesel.rs/guides/getting-started
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/diesel-rs/diesel/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/diesel-rs/diesel/blob/master/README.md
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/diesel-rs/diesel/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/diesel-rs/diesel/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/diesel-rs/diesel
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/diesel-rs/diesel/contributors
    checkedAt: 2026-11-04
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Diesel is an ORM and query builder for Rust. It maps database rows to Rust structs, generates the mapping code from derive attributes and builds queries through a typed API. The crate is published on crates.io as `diesel` and is added to a project's `Cargo.toml` with a feature for the database it uses, as the [README](https://github.com/diesel-rs/diesel/blob/master/README.md) describes. The Diesel Core Team maintains it.

The CLI tool that helps manage a project is a separate binary, installed with cargo, and the [getting started guide](https://diesel.rs/guides/getting-started) walks through a project set up for each supported database.
