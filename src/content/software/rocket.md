---
id: rocket
name: Rocket
urls:
  home: https://rocket.rs
  repository: https://github.com/rwf2/Rocket
  docs: https://rocket.rs/guide/
category:
  - framework
description: Async web framework for Rust with typed routes, request guards and built-in form and JSON handling.
status: active
maintainer: Sergio Benitez
firstRelease: 2016
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
  - mysql
  - mongodb
templating: handlebars, tera
runsAs:
  - always-on
installMethod: cargo
licenseModel: open-source
license: MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-23
githubStargazers: 25776
contributors: 279
social:
  forum: https://github.com/rwf2/Rocket/discussions/categories/questions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://rocket.rs/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/rwf2/Rocket
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/rwf2/Rocket/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/rwf2/Rocket/master/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/rwf2/Rocket/releases
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/rwf2/Rocket
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/rwf2/Rocket/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/rwf2/Rocket/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://rocket.rs/guide/v0.5/getting-started/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://rocket.rs/guide/deploying/
    checkedAt: 2026-10-26
  - field: databases
    url: https://rocket.rs/guide/v0.5/state/
    checkedAt: 2026-10-26
  - field: databases
    url: https://api.rocket.rs/v0.5/rocket_db_pools/
    checkedAt: 2026-10-26
  - field: databases
    url: https://api.rocket.rs/v0.5/rocket_db_pools/
    checkedAt: 2026-10-26
  - field: databases
    url: https://api.rocket.rs/v0.5/rocket_db_pools/
    checkedAt: 2026-10-26
  - field: templating
    url: https://rocket.rs/guide/v0.5/responses/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/rwf2/Rocket/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://crates.io/api/v1/crates/rocket
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/rwf2/Rocket/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/rwf2/Rocket/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/rwf2/Rocket/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/rwf2/Rocket
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/rwf2/Rocket/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Rocket is an async web framework for Rust. A Rocket project is a Cargo project that depends on Rocket, as the [getting-started guide](https://rocket.rs/guide/v0.5/getting-started/) describes. Templates render through Handlebars or Tera, and the [deployment guide](https://rocket.rs/guide/deploying/) covers running an application in production.

## Worth knowing

Once a Rocket application has started, it runs until a graceful shutdown is initiated, so a host has to keep a process running.
