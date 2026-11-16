---
id: sqlx-rust
name: SQLx
urls:
  repository: https://github.com/transact-rs/sqlx
  docs: https://docs.rs/sqlx
category:
  - library
description: Async Rust SQL toolkit with compile-time checked queries and no DSL, for PostgreSQL, MySQL, MariaDB and SQLite.
status: active
maintainer: LaunchBadge, LLC
maintainerType: company
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - mariadb
  - sqlite
installMethod: cargo
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "0"
latestReleaseDate: 2026-05-21
githubStargazers: 17677
contributors: 447
social:
  discord: https://discord.gg/uuruzJ7
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/transact-rs/sqlx
    checkedAt: 2026-11-16
  - field: urls
    url: https://crates.io/api/v1/crates/sqlx
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/transact-rs/sqlx/blob/main/LICENSE-MIT
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/sqlx/versions
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/transact-rs/sqlx
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/transact-rs/sqlx/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://crates.io/api/v1/crates/sqlx/versions
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/sqlx/versions
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/transact-rs/sqlx
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/transact-rs/sqlx/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

SQLx is an async SQL crate for Rust that checks queries at compile time without a domain-specific language. The README says it is not an ORM and points readers who want an asynchronous ORM to an ecosystem page. It works with PostgreSQL, MySQL, MariaDB and SQLite.

The [repository](https://github.com/transact-rs/sqlx) is the project's current home.

## Worth knowing

The compile-time checked query macros connect to a development database at build time, and an offline mode caches the query analysis for builds without one. The repository moved from another GitHub owner, and the crate's package page and the README still link the old address. The README says SQL Server support was removed pending a rewrite of its driver.
