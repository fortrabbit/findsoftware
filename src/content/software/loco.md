---
id: loco
name: Loco
urls:
  home: https://loco.rs
  repository: https://github.com/loco-rs/loco
  docs: https://loco.rs/docs/
category:
  - framework
description: Rust web framework modelled on Rails that generates models, controllers, background jobs and mailers for web apps and JSON APIs.
status: active
maintainer: Dotan Nahum, Elad Kaplan
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - sqlite
templating: tera
runsAs:
  - always-on
renderingModes:
  - server
  - spa
installMethod: cargo install loco, then loco new
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-09-24
githubStargazers: 9525
contributors: 155
social:
  discord: https://discord.gg/fTvyBzwKS8
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://loco.rs/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/loco-rs/loco
    checkedAt: 2026-10-26
  - field: urls
    url: https://loco.rs/llms.txt
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/loco-rs
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/loco-rs/loco/master/LICENSE
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/loco-rs/loco/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/loco-rs/loco
    checkedAt: 2026-10-26
  - field: runtime
    url: https://loco.rs/docs/how-to/deploy/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/loco-rs/loco
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/loco-rs/loco/master/LICENSE
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/loco-rs/loco/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://loco.rs/docs/how-to/deploy/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://loco.rs/docs/how-to/render-views/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://loco.rs/docs/how-to/build-a-spa/
    checkedAt: 2026-10-26
  - field: templating
    url: https://loco.rs/llms.txt
    checkedAt: 2026-10-26
  - field: databases
    url: https://loco.rs/docs/reference/configuration/
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/loco-rs/loco
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/loco-rs/loco/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/loco-rs/loco/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/loco-rs/loco/releases
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Loco is a framework for web apps and JSON APIs written in Rust. The project describes itself as following Rails and adapting its concepts to Rust. Generators create models, controllers, background jobs and mailers, and the homepage names SeaORM and Axum as part of the stack.

The README installs the generator with `cargo install loco`, and `loco new` creates an app. Data is kept in PostgreSQL or SQLite, chosen in the database URI of the configuration file. Server-rendered HTML uses the Tera template engine, and a separate guide covers building a single-page app against the Loco backend.

## Worth knowing

A release build produces one binary, so the production host needs that binary and a config folder but no Rust toolchain. The [deployment guide](https://loco.rs/docs/how-to/deploy/) also covers a generated Dockerfile. The background workers and scheduler need an always-on host.
