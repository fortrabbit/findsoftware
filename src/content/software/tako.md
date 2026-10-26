---
id: tako
name: Tako
urls:
  home: https://tako.rust-dd.com/
  repository: https://github.com/rust-dd/tako
  docs: https://tako.rust-dd.com/docs/getting-started/quickstart
category:
  - framework
description: Rust web framework that serves HTTP, WebSocket, gRPC and raw socket services from one router.
status: active
maintainer: Tako contributors
maintainerType: community
firstRelease: 2025
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: cargo add tako-rs
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-19
githubStargazers: 173
contributors: 2
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://tako.rust-dd.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/rust-dd/tako
    checkedAt: 2026-10-26
  - field: urls
    url: https://tako.rust-dd.com/docs/getting-started/quickstart
    checkedAt: 2026-10-26
  - field: description
    url: https://tako.rust-dd.com/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/rust-dd/tako/releases
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/rust-dd/tako/blob/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/rust-dd/tako
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/rust-dd/tako/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://tako.rust-dd.com/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/rust-dd/tako
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/rust-dd/tako/main/LICENSE
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://tako.rust-dd.com/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://tako.rust-dd.com/docs/deployment
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/rust-dd/tako/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/rust-dd/tako/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/rust-dd/tako
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/rust-dd/tako/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Tako is a Rust web framework for services that speak more than HTTP. One router serves HTTP, WebSocket, gRPC and raw socket services. The [comparison page](https://tako.rust-dd.com/docs/concepts/comparison) sets it against Axum and Actix Web, the two frameworks it names as alternatives, and the application is added with `cargo add tako-rs`.

## Worth knowing

The crates.io name `tako` belongs to a different package, the SDK for tako.sh, so the crate to add is `tako-rs`. The [deployment guide](https://tako.rust-dd.com/docs/deployment) describes the thread-per-core entry point as one that waits for Ctrl+C or SIGTERM, which makes it a process that keeps running on the host.
