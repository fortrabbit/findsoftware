---
id: actix-web
name: Actix Web
urls:
  home: https://actix.rs
  repository: https://github.com/actix/actix-web
  docs: https://actix.rs/docs/getting-started
category:
  - framework
description: Rust web framework for building HTTP servers and web applications, with routing, middleware, WebSocket support and an async runtime.
status: active
maintainer: The Actix Team
maintainerType: community
firstRelease: 2017
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: cargo (Cargo.toml dependency)
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "4"
latestReleaseDate: 2026-10-23
githubStargazers: 24880
contributors: 386
social:
  discord: https://discord.gg/NWpN5mmg3x
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://actix.rs
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/actix/actix-web
    checkedAt: 2026-10-24
  - field: urls
    url: https://actix.rs/docs/getting-started
    checkedAt: 2026-10-24
  - field: category
    url: https://docs.rs/crate/actix-web/latest/source/README.md
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/actix/actix-web
    checkedAt: 2026-10-24
  - field: runtime
    url: https://docs.rs/crate/actix-web/latest/source/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://actix.rs/docs/getting-started
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/actix/actix-web
    checkedAt: 2026-10-24
  - field: license
    url: https://docs.rs/crate/actix-web/latest/source/README.md
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://docs.rs/crate/actix-web/latest/source/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://actix.rs
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://crates.io/api/v1/crates/actix-web/versions
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://crates.io/api/v1/crates/actix-web
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/actix/actix-web/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/actix/actix-web
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/actix/actix-web/contributors
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://actix.rs/docs/server
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Rust · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Actix Web is a web framework for Rust. A project adds it as a Cargo dependency, registers handlers on an App, and an HttpServer serves that App. The result is a native executable that runs until it receives a shutdown signal, either behind another HTTP server such as nginx or on its own.

The repository holds several crates, and actix-web is one of them. The Actix Team maintains it, and its community page points to a Discord server.

## Worth knowing

The getting-started guide and the README state different minimum Rust versions, and both are recorded on the record.
