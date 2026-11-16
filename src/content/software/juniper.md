---
id: juniper
name: Juniper
urls:
  home: https://graphql-rust.github.io/juniper/
  repository: https://github.com/graphql-rust/juniper
  docs: https://graphql-rust.github.io/juniper/
category:
  - backend
description: Rust library for building GraphQL servers, with separate crates that integrate it into Actix, Axum, Hyper, Rocket and Warp.
status: active
maintainer: Magnus Hallin and others
firstRelease: 2016
language: rust
installMethod: Cargo dependency
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "0"
latestReleaseDate: 2026-10-30
githubStargazers: 5974
contributors: 152
dependentRepos: 271
dependentPackages: 78
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://graphql-rust.github.io/juniper/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/graphql-rust/juniper
    checkedAt: 2026-11-16
  - field: urls
    url: https://graphql-rust.github.io/juniper/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/graphql-rust/juniper/juniper-v0.18.0/juniper/LICENSE
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/graphql-rust/juniper/juniper-v0.18.0/juniper/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/graphql-rust/juniper/juniper-v0.18.0/juniper/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/graphql-rust/juniper
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/graphql-rust/juniper/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://graphql-rust.github.io/juniper/quickstart.html
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/juniper
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/juniper
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/graphql-rust/juniper
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/graphql-rust/juniper/contributors
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/graphql-rust/juniper/releases/tags/juniper-v0.18.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/graphql-rust/juniper/releases/tags/juniper-v0.18.0
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/juniper
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Juniper is a Rust library for building GraphQL servers. It takes a code-first approach, in which the GraphQL schema is declared in Rust, and it executes queries against that schema. It does not include a web server. It provides the building blocks, and separate crates in the same repository connect it to the Actix, Axum, Hyper, Rocket and Warp web frameworks.

The library is added as a dependency in a Cargo project. The README lists automatic integrations with common Rust types such as uuid, chrono and time.

## Worth knowing

The README says the API has not reached 1.0, so some API instability should be expected. The schema-first alternative is a separate project, juniper-from-schema.
