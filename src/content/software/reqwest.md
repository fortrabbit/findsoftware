---
id: reqwest
name: reqwest
urls:
  repository: https://github.com/seanmonstar/reqwest
  docs: https://docs.rs/reqwest
category:
  - library
description: HTTP client library for Rust with async and blocking clients, JSON and multipart bodies, and rustls TLS by default.
status: active
maintainer: Sean McArthur
maintainerType: individual
firstRelease: 2016
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: cargo
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "0"
latestReleaseDate: 2026-09-08
githubStargazers: 11927
contributors: 394
dependentRepos: 25229
dependentPackages: 9368
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/seanmonstar/reqwest
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/seanmonstar/reqwest
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/LICENSE-MIT
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/LICENSE-MIT
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/seanmonstar/reqwest
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/seanmonstar/reqwest/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/seanmonstar/reqwest/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/seanmonstar/reqwest/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/reqwest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/seanmonstar/reqwest
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/seanmonstar/reqwest/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/reqwest
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/reqwest
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

reqwest is an HTTP client library for Rust with async and blocking clients and support for JSON and multipart request bodies.

## Worth knowing

TLS runs on rustls by default. The native-tls feature switches to the operating system's TLS framework where one is available, and the crate can also be built for WASM.
