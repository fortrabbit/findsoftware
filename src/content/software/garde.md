---
id: garde
name: garde
urls:
  repository: https://github.com/jprochazk/garde
  docs: https://docs.rs/garde/latest/garde/
category:
  - library
description: Validation library for Rust that checks struct fields and enum variants against rules declared with a derive macro.
status: active
maintainer: Jan Procházka
maintainerType: individual
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - binary
i18n: yes, error messages can be customized by implementing an I18n trait
installMethod: cargo
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "0"
latestReleaseDate: 2026-05-23
githubStargazers: 907
contributors: 22
dependentRepos: 6
dependentPackages: 10
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/jprochazk/garde
    checkedAt: 2026-11-08
  - field: urls
    url: https://github.com/jprochazk/garde/blob/main/README.md
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/jprochazk/garde/blob/main/LICENSE-MIT
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/jprochazk/garde/commits/v0.3.0
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/jprochazk/garde/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/jprochazk/garde
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/jprochazk/garde/blob/main/README.md
    checkedAt: 2026-11-08
  - field: i18n
    url: https://github.com/jprochazk/garde/blob/main/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://docs.rs/garde/latest/garde/
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/jprochazk/garde/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/jprochazk/garde/blob/main/README.md
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://api.github.com/repos/jprochazk/garde
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/jprochazk/garde/releases/tags/v0.23.0
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/jprochazk/garde/releases/tags/v0.23.0
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/jprochazk/garde
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/jprochazk/garde/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/garde
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/garde
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

garde is a validation library for Rust. A struct or enum takes the Validate derive, and each field carries garde attributes that name its rules, such as length, range, email or a custom function. Calling validate on a value reports the failed rules with their field paths. Error messages can be customized by implementing an I18n trait. The README names integration crates for the axum and actix-web web frameworks.

The README says garde is heavily inspired by the validator crate and is essentially a full rewrite of it.
