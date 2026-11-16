---
id: thirtyfour
name: thirtyfour
urls:
  home: https://stevepryde.github.io/thirtyfour/
  repository: https://github.com/stevepryde/thirtyfour
  docs: https://docs.rs/thirtyfour
category:
  - testing
description: Selenium and WebDriver client library for Rust that automates web browsers for website UI testing.
status: active
maintainer: Steve Pryde
maintainerType: individual
firstRelease: 2019
language: rust
runtime:
  - binary
runsAs:
  - local
installMethod: cargo
licenseModel: open-source
license: MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-11-14
githubStargazers: 1444
contributors: 39
dependentRepos: 157
dependentPackages: 20
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://stevepryde.github.io/thirtyfour/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/stevepryde/thirtyfour
    checkedAt: 2026-11-16
  - field: urls
    url: https://crates.io/api/v1/crates/thirtyfour
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/stevepryde/thirtyfour/blob/main/thirtyfour/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/thirtyfour
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/stevepryde/thirtyfour/v0.38.3/Cargo.toml
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/stevepryde/thirtyfour
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/stevepryde/thirtyfour/blob/main/thirtyfour/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/stevepryde/thirtyfour/blob/v0.38.3/Cargo.toml
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/stevepryde/thirtyfour
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://stevepryde.github.io/thirtyfour/getting-started/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://stevepryde.github.io/thirtyfour/getting-started/installation.html
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/stevepryde/thirtyfour
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/stevepryde/thirtyfour/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/thirtyfour
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/thirtyfour
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/stevepryde/thirtyfour/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/stevepryde/thirtyfour/releases/latest
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

thirtyfour is a Rust crate for automating web browsers through WebDriver and Selenium, so a Rust test can open pages, find elements, send input and check the result. The crate starts a driver for a browser on the local machine as a child process, or creates sessions through a Selenium standalone server or grid, and it adds typed support for the Chrome DevTools Protocol and WebDriver BiDi behind feature flags. It is added to a project through Cargo, and the README's example tests are async Rust functions.

## Worth knowing

A test run needs a supported browser installed on the machine that runs it. The crate downloads a matching webdriver for that browser.
