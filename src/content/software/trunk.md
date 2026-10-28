---
id: trunk
name: Trunk
urls:
  home: https://trunk-rs.github.io/trunk/
  repository: https://github.com/trunk-rs/trunk
  docs: https://trunk-rs.github.io/trunk/guide/print.html
category:
  - build-tool
description: Bundler that builds a Rust WebAssembly application and its HTML, CSS and JavaScript assets for the web.
status: active
maintainer: Trunk Maintainers
firstRelease: 2020
language: rust
runsAs:
  - static
  - local
installMethod: cargo
licenseModel: open-source
license: MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-26
githubStargazers: 4418
contributors: 132
dependentRepos: 3
social:
  discord: https://discord.gg/JEPdBujTDr
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://trunk-rs.github.io/trunk/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/trunk-rs/trunk
    checkedAt: 2026-10-28
  - field: urls
    url: https://trunk-rs.github.io/trunk/guide/print.html
    checkedAt: 2026-10-28
  - field: category
    url: https://trunk-rs.github.io/trunk/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/trunk-rs/trunk
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://trunk-rs.github.io/trunk/guide/getting-started/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://trunk-rs.github.io/trunk/guide/getting-started/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://trunk-rs.github.io/trunk/guide/getting-started/installation.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://trunk-rs.github.io/trunk/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://trunk-rs.github.io/trunk/guide/print.html
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/trunk-rs/trunk/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/trunk-rs/trunk/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/trunk-rs/trunk/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/trunk-rs/trunk/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://trunk-rs.github.io/trunk/
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/trunk-rs/trunk
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/trunk-rs/trunk/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/trunk
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
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Trunk is a bundler for Rust applications compiled to WebAssembly. It reads a source index.html file, compiles the Rust crate, and bundles the WebAssembly, the JavaScript loader and other assets such as SCSS and images into a dist folder. The dist output is static files that a web server can serve. Trunk is installed with `cargo install --locked trunk`, from a GitHub release binary, or with Homebrew. The `trunk serve` command starts a built-in development server.

## Worth knowing

Trunk is a build step, so no Trunk process runs for the live site.
