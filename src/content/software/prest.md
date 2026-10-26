---
id: prest
name: prest
urls:
  repository: https://github.com/edezhic/prest
category:
  - framework
description: Progressive RESTful framework for Rust, built on axum and tokio.
status: discontinued
maintainer: Egor Dezhic
maintainerType: individual
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - binary
basedOn:
  - axum
contentStore:
  - database
adminUi: true
templating: maud
runsAs:
  - always-on
renderingModes:
  - server
installMethod: cargo
licenseModel: open-source
license: MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2024-12-29
githubStargazers: 66
contributors: 1
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: status
    url: https://api.github.com/repos/edezhic/prest
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/edezhic/prest
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/edezhic/prest/main/Cargo.toml
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/edezhic/prest
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/edezhic/prest/main/Cargo.toml
    checkedAt: 2026-10-26
  - field: license
    url: https://crates.io/api/v1/crates/prest
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://raw.githubusercontent.com/edezhic/prest/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/prest
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/edezhic/prest/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/edezhic/prest/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/edezhic/prest
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/edezhic/prest/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

prest is a Rust framework that describes itself as a progressive RESTful framework and builds its server on axum. Its README describes routing, an `html!` templating macro forked from maud, an admin panel, and password and OAuth or OpenID sign-in. The built-in database is embedded and needs no separate database server. Applications are added to a Cargo project as a dependency.

## Worth knowing

The GitHub repository is archived, and the record is marked discontinued on that basis. The README calls the framework alpha and expects many breaking changes.
