---
id: trillium
name: Trillium
urls:
  home: https://trillium.rs
  repository: https://github.com/trillium-rs/trillium
  docs: https://docs.trillium.rs
category:
  - framework
description: Modular async Rust web framework whose features are separate opt-in crates composed around one Handler trait.
status: active
maintainer: Jacob Rothstein
firstRelease: 2021
language: rust
runtime:
  - binary
hosting:
  - binary
templating: askama, tera, handlebars
runsAs:
  - always-on
installMethod: cargo add of the trillium crate and a runtime adapter
licenseModel: open-source
license: MIT OR Apache-2.0, Apache-2.0, MIT
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 379
contributors: 11
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/trillium-rs/trillium
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/trillium-rs/trillium
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/trillium-rs/trillium/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/trillium-rs/trillium/blob/main/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/trillium-rs/trillium
    checkedAt: 2026-10-26
  - field: category
    url: https://trillium.rs/guide/welcome
    checkedAt: 2026-10-26
  - field: runtime
    url: https://trillium.rs/guide/welcome
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://trillium.rs/guide/welcome
    checkedAt: 2026-10-26
  - field: templating
    url: https://trillium.rs/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://trillium.rs/guide/welcome
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/trillium-rs/trillium/blob/main/trillium/Cargo.toml
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/trillium-rs/trillium
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/trillium-rs/trillium/blob/main/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/trillium-rs/trillium/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/trillium/versions
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://crates.io/api/v1/crates/trillium
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/trillium/versions
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/trillium-rs/trillium
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/trillium-rs/trillium/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Trillium is a modular async web framework for Rust. Routing, sessions, compression, WebSockets, templates and an HTTP client are separate crates that compose around one `Handler` trait, so an application compiles only the crates it adds. The runtime is chosen with an adapter crate, and the project lists Tokio, smol, async-std and AWS Lambda; TLS comes from rustls, native-tls or OpenSSL.

The guide covers the same pieces, and the [Rustdocs](https://docs.trillium.rs) document each crate's interfaces. Template support covers Askama, Tera and Handlebars.

## Worth knowing

Trillium is published as a set of crates, and the crates carry different version numbers, so a release list on GitHub mixes the umbrella crate with others. The copyright holder is one named individual, and the homepage offers commercial support and consulting.
