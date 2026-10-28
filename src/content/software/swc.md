---
id: swc
name: SWC
urls:
  home: https://swc.rs/
  repository: https://github.com/swc-project/swc
  docs: https://swc.rs/docs/getting-started
category:
  - build-tool
description: Rust-based platform that compiles, bundles and minifies JavaScript and TypeScript, with npm packages for its JavaScript APIs.
status: active
maintainer: SWC contributors
maintainerType: community
firstRelease: 2019
language: rust
runtimeMin: node 10
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 34203
npmWeeklyDownloads: 53598249
contributors: 374
dependentRepos: 69112
dependentPackages: 7514
social:
  discord: https://discord.gg/GnHbXTdZz6
  forum: https://github.com/swc-project/swc/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://swc.rs/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/swc-project/swc
    checkedAt: 2026-10-28
  - field: urls
    url: https://swc.rs/docs/getting-started
    checkedAt: 2026-10-28
  - field: category
    url: https://swc.rs/
    checkedAt: 2026-10-28
  - field: category
    url: https://swc.rs/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/swc-project/swc
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://registry.npmjs.org/@swc/core/latest
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/swc-project/swc
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/swc-project/swc/main/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://swc.rs/docs/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://swc.rs/docs/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://swc.rs/docs/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://swc.rs/docs/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://swc.rs/docs/getting-started
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@swc/core
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/swc-project/swc/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/swc-project/swc/releases/latest
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/swc-project/swc/main/LICENSE
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://swc.rs/docs/usage/swc-loader
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/swc-project/swc
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/swc-project/swc/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@swc/core
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40swc%2Fcore
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40swc%2Fcore
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

SWC is a Rust-based platform that compiles JavaScript and TypeScript and bundles them. It is used from JavaScript through two npm packages: the command-line package @swc/cli and the core package @swc/core, which the install guide adds as development dependencies. The documentation presents the command-line tool as a drop-in replacement for Babel's, and it has a migration guide from the TypeScript compiler.

## Worth knowing

The bundling configuration page states that the bundling feature will be dropped in a later major version, in favor of other bundlers, so a project that depends on SWC's bundling should check that page first.
