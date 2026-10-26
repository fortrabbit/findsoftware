---
id: salvo
name: Salvo
urls:
  home: https://salvo.rs
  repository: https://github.com/salvo-rs/salvo
  docs: https://salvo.rs/guide/
category:
  - framework
description: Rust web framework for building HTTP servers and web applications.
status: active
maintainer: Salvo Team
maintainerType: community
firstRelease: 2020
language: rust
runtime:
  - binary
hosting:
  - binary
templating: askama
runsAs:
  - always-on
installMethod: cargo add salvo
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "1"
latestReleaseDate: 2026-10-04
githubStargazers: 4454
contributors: 95
social:
  discord: https://discord.gg/G8KfmS6ByH
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://salvo.rs/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/salvo-rs/salvo
    checkedAt: 2026-10-26
  - field: urls
    url: https://salvo.rs/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://salvo.rs/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/salvo-rs/salvo
    checkedAt: 2026-10-26
  - field: category
    url: https://api.github.com/repos/salvo-rs/salvo
    checkedAt: 2026-10-26
  - field: runtime
    url: https://salvo.rs/guide/quick-start
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://salvo.rs/guide/quick-start
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://salvo.rs/guide/topics/deployment
    checkedAt: 2026-10-26
  - field: templating
    url: https://salvo.rs/guide/topics/use-template-engine
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/salvo-rs/salvo
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/salvo-rs/salvo/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://salvo.rs/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/salvo-rs/salvo/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/salvo
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/salvo-rs/salvo/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/salvo-rs/salvo/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/salvo-rs/salvo
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/salvo-rs/salvo/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Salvo is a web framework written in Rust and built on Hyper and Tokio. A project is added with `cargo add salvo`, and the guide's [deployment page](https://salvo.rs/guide/topics/deployment) says a compiled project becomes an executable that is uploaded to the server, with a Docker container as one way to run it. For templates, the guide shows askama as one engine that works with it.

## Worth knowing

The homepage says the project is MIT licensed, while the repository's README and LICENSE file say Apache License 2.0, so the license is stated two ways. The documentation states a minimum supported Rust version.
