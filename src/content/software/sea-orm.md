---
id: sea-orm
name: SeaORM
urls:
  home: https://www.sea-ql.org/SeaORM/
  repository: https://github.com/SeaQL/sea-orm
  docs: https://www.sea-ql.org/SeaORM/docs/index/
category:
  - library
description: Async, dynamic object-relational mapper for Rust that maps database tables to Rust entity types.
status: active
maintainer: Seafire Software Limited
maintainerType: company
firstRelease: 2021
language: rust
runtime:
  - binary
hosting:
  - binary
basedOn:
  - sea-query
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
installMethod: cargo, cargo install
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "2"
latestReleaseDate: 2026-09-27
githubStargazers: 9972
contributors: 293
social:
  x: https://twitter.com/sea_ql
  discord: https://discord.com/invite/uCPdDXzbdv
  forum: https://github.com/SeaQL/sea-orm/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://www.sea-ql.org/SeaORM/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/SeaQL/sea-orm
    checkedAt: 2026-11-16
  - field: urls
    url: https://www.sea-ql.org/SeaORM/docs/index/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/SeaQL/sea-orm/blob/master/LICENSE-MIT
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/sea-orm/versions
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/SeaQL/sea-orm/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/SeaQL/sea-orm
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/SeaQL/sea-orm/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://www.sea-ql.org/SeaORM/docs/internal-design/diesel/
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime/
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime/
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/SeaQL/sea-orm/blob/master/sea-orm-cli/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/SeaQL/sea-orm/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/SeaQL/sea-orm/blob/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/SeaQL/sea-orm/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/SeaQL/sea-orm/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/SeaQL/sea-orm
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/SeaQL/sea-orm/contributors?per_page=1
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

SeaORM is an object-relational mapper for Rust that maps database tables to entity types and runs queries against them through an async API. It is built on SeaQuery, the query builder that the project publishes as a separate crate, and its database drivers come from SQLx. The sea-orm-cli tool, installed with cargo, can generate entity files from an existing database.

## Worth knowing

The README says SeaORM's default features do not enable TLS. A TLS backend is chosen by adding a SQLx dependency with the desired TLS feature.

MS SQL Server support is offered as SeaORM X, a separate closed-beta product built on SeaORM.
