---
id: warp
name: warp
urls:
  repository: https://github.com/seanmonstar/warp
  docs: https://docs.rs/warp
category:
  - framework
description: Composable Rust web framework built on hyper, routing and extracting requests through a filter system.
status: active
maintainer: Sean McArthur
maintainerType: individual
firstRelease: 2018
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
renderingModes:
  - server
installMethod: Cargo dependency (warp = "0.4" in Cargo.toml)
licenseModel: open-source
license: MIT, MIT License text, Copyright (c) 2018-2025 Sean McArthur
currentMajor: "0"
latestReleaseDate: 2026-05-04
githubStargazers: 10381
contributors: 176
social:
  discord: https://discord.gg/RFsPjyt
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/seanmonstar/warp
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/seanmonstar/warp/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/warp/versions
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/seanmonstar/warp
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/seanmonstar/warp/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/seanmonstar/warp/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/seanmonstar/warp/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/seanmonstar/warp/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/warp/versions
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/seanmonstar/warp
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/seanmonstar/warp/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

warp is a web server framework for Rust, built on hyper. Its building block is the Filter, and filters can be combined to express requirements on requests. The README lists path routing, JSON and form bodies, static files, websockets and compression among what filters provide.

A server is started by passing a filter to warp::serve and running it on a socket address. Projects add the crate to their Cargo dependencies together with Tokio.
