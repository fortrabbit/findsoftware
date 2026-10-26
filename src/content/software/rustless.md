---
id: rustless
name: Rustless
urls:
  repository: https://github.com/rustless/rustless
  docs: https://docs.rs/rustless/
category:
  - framework
description: REST-like API micro-framework for Rust, built on the Iron web framework.
status: stub
maintainer: Stanislav Panferov
firstRelease: 2014
language: rust
runtime:
  - binary
hosting:
  - binary
basedOn:
  - iron
runsAs:
  - always-on
installMethod: cargo
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2016-12-08
githubStargazers: 623
contributors: 15
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/rustless/rustless
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/rustless/rustless/master/Cargo.toml
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/rustless/rustless/master/Cargo.toml
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/rustless/rustless
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/rustless/rustless/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/rustless/rustless/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://raw.githubusercontent.com/rustless/rustless/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/rustless/rustless/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/rustless/rustless/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/rustless/rustless/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/rustless/rustless/master/Cargo.toml
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/rustless/rustless/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/rustless
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://crates.io/api/v1/crates/rustless
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/rustless
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/rustless/rustless
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/rustless/rustless/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Rustless is a REST-like API micro-framework for Rust, built on top of the Iron web framework. An application mounts its API on an Iron server bound to an address, and the crate is installed as a Cargo dependency. The project describes itself as a port of the Grape library from the Ruby world.

## Worth knowing

The README says the library is in the early stages of development and that its APIs may change. It also says Iron's underlying Hyper is synchronous and recommends an asynchronous reverse proxy such as Nginx in front of it. The API documentation site the README links does not answer.
