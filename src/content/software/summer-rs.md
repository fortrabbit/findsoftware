---
id: summer-rs
name: summer-rs
urls:
  home: https://summer-rs.github.io/
  repository: https://github.com/summer-rs/summer-rs
  docs: https://summer-rs.github.io/docs/getting-started/introduction/
  plugins: https://summer-rs.github.io/docs/plugins/
category:
  - framework
description: Rust application framework inspired by Spring Boot, with plugins for web, database, scheduling and other integrations.
status: active
maintainer: Holmofy
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
installMethod: cargo (Cargo.toml dependency)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-17
githubStargazers: 1025
contributors: 12
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://summer-rs.github.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/summer-rs/summer-rs
    checkedAt: 2026-10-26
  - field: urls
    url: https://summer-rs.github.io/docs/getting-started/introduction/
    checkedAt: 2026-10-26
  - field: category
    url: https://summer-rs.github.io/docs/getting-started/introduction/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/summer-rs/summer-rs
    checkedAt: 2026-10-26
  - field: runtime
    url: https://summer-rs.github.io/docs/getting-started/quick-start/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://summer-rs.github.io/docs/getting-started/quick-start/
    checkedAt: 2026-10-26
  - field: databases
    url: https://summer-rs.github.io/docs/plugins/summer-sqlx/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/summer-rs/summer-rs/blob/master/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://summer-rs.github.io/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/summer-rs/summer-rs/blob/master/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://summer-rs.github.io/blog/spring-rs-initial-version/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/summer-rs/summer-rs/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/summer
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/summer-rs/summer-rs
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/summer-rs/summer-rs/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://summer-rs.github.io/docs/plugins/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

summer-rs is a Rust application framework inspired by Spring Boot. Its web plugin, summer-web, is built on Axum, and its SQL plugin, summer-sqlx, supports MySQL, PostgreSQL and SQLite, each selected through a Cargo feature. Other functionality comes from plugins, listed in the project's [plugin directory](https://summer-rs.github.io/docs/plugins/). A project adds the crates it needs to its Cargo.toml and runs with cargo.

## Worth knowing

The project was published as spring-rs until it was renamed to summer-rs in 2026, so older tutorials and crate names use the spring-* prefix.
