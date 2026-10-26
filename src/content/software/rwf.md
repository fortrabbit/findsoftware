---
id: rwf
name: Rwf
urls:
  home: https://rustwebframework.org/
  repository: https://github.com/levkk/rwf
  docs: https://rustwebframework.org/
category:
  - framework
description: Rust Web Framework, an MVC framework for building web applications in Rust, with an ORM, background jobs and an admin panel.
status: active
maintainer: Lev Kokotov
maintainerType: individual
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: cargo
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-12-05
githubStargazers: 1063
contributors: 7
social:
  discord: https://discord.gg/Q62HmJegPY
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://rustwebframework.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/levkk/rwf
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/levkk/rwf/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/levkk/rwf/main/rwf/Cargo.toml
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/levkk/rwf
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/levkk/rwf/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/levkk/rwf/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/levkk/rwf/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://rustwebframework.org/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://rustwebframework.org/configuration/
    checkedAt: 2026-10-26
  - field: databases
    url: https://rustwebframework.org/models/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://rustwebframework.org/user-guides/admin/
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://raw.githubusercontent.com/levkk/rwf/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/levkk/rwf/main/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/levkk/rwf/main/rwf/Cargo.toml
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/levkk/rwf/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/rwf
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/levkk/rwf/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/levkk/rwf/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/levkk/rwf
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/levkk/rwf/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Rwf is a Rust framework for web applications that follows the model-view-controller pattern. Its object-relational mapper builds PostgreSQL queries, and its admin panel ships as a separate crate. Applications are added with cargo add and launched from their own main function, and the project's command-line tool can package a release build for bare metal servers.

## Worth knowing

The README describes the framework as in beta. The migration paths from Python and Rails are experimental: the WSGI server is still experimental, and the Rack server is described as highly experimental.
