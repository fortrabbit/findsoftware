---
id: tide
name: Tide
urls:
  repository: https://github.com/http-rs/tide
  docs: https://docs.rs/tide
category:
  - framework
description: Minimal Rust web application framework for building async HTTP servers and APIs.
status: stub
maintainer: Yoshua Wuyts
firstRelease: 2018
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: cargo, with the tide crate added to Cargo.toml
licenseModel: open-source
license: Apache-2.0, MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2021-01-29
githubStargazers: 5094
contributors: 115
social:
  discord: https://discord.gg/x2gKzst
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/http-rs/tide
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: description
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/tide
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/http-rs/tide/main/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/http-rs/tide
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/http-rs/tide
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/http-rs/tide/blob/main/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/http-rs/tide/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/http-rs/tide/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/http-rs/tide
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/http-rs/tide/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Tide is a Rust web application framework for async HTTP servers and APIs. An application creates a server with `tide::new()`, registers handlers by path and HTTP method, and calls `listen` to run the server inside the same process. The [README](https://github.com/http-rs/tide/blob/main/README.md) shows JSON request bodies being parsed into typed structs, and the crate is published on crates.io as `tide`.

## Worth knowing

The README's dependency example names a version that exists only as a pre-release on crates.io, newer than the latest stable one.
