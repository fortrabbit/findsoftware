---
id: rouille
name: rouille
urls:
  repository: https://github.com/tomaka/rouille
  docs: https://docs.rs/rouille
category:
  - framework
description: Synchronous Rust web micro-framework library that serves HTTP requests from a listening socket.
status: stub
maintainer: Pierre Krieger
maintainerType: individual
firstRelease: 2016
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
licenseModel: open-source
license: Apache-2.0 OR MIT, MIT/Apache-2.0, Apache-2.0
currentMajor: "3"
latestReleaseDate: 2023-04-24
githubStargazers: 1242
contributors: 44
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/tomaka/rouille
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/tomaka/rouille/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/tomaka/rouille/master/Cargo.toml
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/tomaka/rouille
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/tomaka/rouille/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/tomaka/rouille/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.rs/rouille/latest/rouille/
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/tomaka/rouille/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/tomaka/rouille/master/Cargo.toml
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/tomaka/rouille
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/tomaka/rouille/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/rouille
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/tomaka/rouille/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/tomaka/rouille/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/tomaka/rouille
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/tomaka/rouille/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Rouille is a synchronous web micro-framework library for Rust. It creates a listening socket and parses incoming HTTP requests from clients, and the crate's API reference is published on docs.rs.

## Worth knowing

Each request is handled on its own dedicated thread with synchronous I/O. Database handling and templating are not handled by the library directly, according to its README.
