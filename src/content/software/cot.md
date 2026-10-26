---
id: cot
name: Cot
urls:
  home: https://cot.rs
  repository: https://github.com/cot-rs/cot
  docs: https://cot.rs/guide/
category:
  - framework
description: Rust web framework for building web applications, with an ORM, forms, an admin panel, templates and a command line tool.
status: active
maintainer: Cot contributors
maintainerType: community
firstRelease: 2025
language: rust
runtime:
  - binary
hosting:
  - binary
basedOn:
  - axum
contentStore:
  - database
databases:
  - sqlite
  - postgres
  - mysql
adminUi: true
templating: askama
installMethod: cargo install of cot-cli, then cot new
licenseModel: open-source
license: MIT OR Apache-2.0, Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-07-13
githubStargazers: 1087
contributors: 28
social:
  bluesky: https://bsky.app/profile/cot.rs
  discord: https://discord.cot.rs/
  forum: https://github.com/cot-rs/cot/discussions/categories/q-a
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://cot.rs/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/cot-rs/cot
    checkedAt: 2026-10-26
  - field: urls
    url: https://cot.rs/guide/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://cot.rs/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/cot-rs/cot
    checkedAt: 2026-10-26
  - field: category
    url: https://cot.rs/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://cot.rs/guide/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://cot.rs/guide/
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://cot.rs/guide/latest/framework-comparison/
    checkedAt: 2026-10-26
  - field: databases
    url: https://cot.rs/guide/latest/databases/overview/
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://cot.rs/guide/latest/databases/overview/
    checkedAt: 2026-10-26
  - field: templating
    url: https://cot.rs/guide/latest/templates/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://cot.rs/guide/latest/admin-panel/
    checkedAt: 2026-10-26
  - field: license
    url: https://cot.rs/licenses/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/cot-rs/cot
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://cot.rs/licenses/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/cot-rs/cot/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/cot-rs/cot/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/cot-rs/cot/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/cot-rs/cot
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/cot-rs/cot/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Cot is a web framework for Rust that brings an ORM, form handling, an admin panel and templating into one project. It is built on top of Axum, and the project describes its approach as inspired by Django. A new project starts from the `cot` command line tool, which Cargo installs from the cot-cli package.

Content lives in a database: the ORM works with SQLite, PostgreSQL and MySQL. Templates use Askama, and the admin panel is an automatic interface for managing the models.
