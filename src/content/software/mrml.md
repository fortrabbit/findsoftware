---
id: mrml
name: MRML
urls:
  repository: https://github.com/jdrouet/mrml
category:
  - email
description: Rust implementation of the MJML markup language that renders MJML templates to HTML.
status: active
maintainer: Jérémie Drouet
maintainerType: individual
firstRelease: 2020
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: cargo (Cargo.toml dependency)
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-04-25
githubStargazers: 515
contributors: 27
dependentRepos: 11
dependentPackages: 5
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/jdrouet/mrml
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/jdrouet/mrml/blob/mrml-v6.0.1/Cargo.toml
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/mrml/versions
    checkedAt: 2026-11-16
  - field: language
    url: https://raw.githubusercontent.com/jdrouet/mrml/main/packages/mrml-core/readme.md
    checkedAt: 2026-11-16
  - field: category
    url: https://mjml.io/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/jdrouet/mrml/main/packages/mrml-core/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jdrouet/mrml/main/packages/mrml-core/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jdrouet/mrml/main/packages/mrml-core/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jdrouet/mrml/main/packages/mrml-cli/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/jdrouet/mrml/blob/mrml-v6.0.1/Cargo.toml
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/jdrouet/mrml/blob/mrml-v6.0.1/Cargo.toml
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://crates.io/api/v1/crates/mrml
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/mrml/versions
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/jdrouet/mrml
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/jdrouet/mrml/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/mrml
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/mrml
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
---

MRML reimplements MJML, the responsive email framework, in Rust. The crate parses MJML templates and renders them to HTML from Rust code. The same repository also publishes a command-line tool, a WebAssembly package and a Python binding, and the README says the Rust and WebAssembly builds can run in the browser where the JavaScript implementation cannot.

## Worth knowing

The README's missing-implementations list names `mj-style` with inline set, and `mj-include`, the latter tied to loading remote templates in WebAssembly.
