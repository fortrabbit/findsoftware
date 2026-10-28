---
id: sonic
name: Sonic
urls:
  repository: https://github.com/valeriansaliou/sonic
  docs: https://github.com/valeriansaliou/sonic/blob/master/README.md
category:
  - search
description: Schema-less search backend server written in Rust that indexes words against identifiers.
status: active
maintainer: Valerian Saliou
maintainerType: individual
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: download a release from GitHub
licenseModel: open-source
license: MPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-05
githubStargazers: 21370
contributors: 43
dependentRepos: 1
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/valeriansaliou/sonic
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/valeriansaliou/sonic/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/valeriansaliou/sonic/blob/v1.10.2/Cargo.toml
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/valeriansaliou/sonic
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/valeriansaliou/sonic/blob/v1.10.2/Cargo.toml
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/valeriansaliou/sonic
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/valeriansaliou/sonic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/valeriansaliou/sonic/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/valeriansaliou/sonic/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/valeriansaliou/sonic
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/valeriansaliou/sonic/contributors
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/sonic-server
    checkedAt: 2026-10-28
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

Sonic is a search backend server written in Rust that indexes words against identifiers.

Applications connect to Sonic over the Sonic Channel protocol. The server speaks that protocol alone and offers no HTTP endpoint. It installs from a binary release, a Debian package, the Rust crate sonic-server or a Docker image.

## Worth knowing

Clients need a library that speaks the Sonic Channel protocol, and the project lists official and community libraries in its README. The server is a long-running process that keeps its index in files on disk, so it cannot run from static files.
