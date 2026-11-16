---
id: rbatis
name: Rbatis
urls:
  home: https://rbatis.github.io/rbatis.io/
  repository: https://github.com/rbatis/rbatis
  docs: https://rbatis.github.io/rbatis.io/
category:
  - library
description: ORM framework for Rust with separate database driver crates.
status: active
maintainer: ce
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
  - sqlserver
  - oracle
installMethod: cargo
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-11-13
githubStargazers: 2489
contributors: 26
dependentRepos: 34
dependentPackages: 22
social:
  forum: https://github.com/rbatis/rbatis/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://rbatis.github.io/rbatis.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/rbatis/rbatis/master/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/rbatis/rbatis
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/rbatis/rbatis/git/refs/tags/v0.0.1
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/rbatis/rbatis/v4.9.11/Cargo.toml
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/rbatis/rbatis
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/rbatis/rbatis/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/rbatis/rbatis/master/README.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/rbatis/rbatis/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/rbatis/rbatis.io/master/src/views/Home.vue
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/rbatis/rbatis/master/Cargo.toml
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/rbatis/rbatis/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/rbatis/rbatis/releases/tag/v4.9.11
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/rbatis/rbatis/releases/tag/v4.9.11
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/rbatis/rbatis
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/rbatis/rbatis/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/rbatis
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/rbatis
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Rbatis is a compile-time ORM for Rust, added to a project as a crate with cargo. It is based on the Tokio async model.

The databases it talks to are reached through separate driver crates. The project keeps its main drivers in one repository and links an Oracle driver that lives under another GitHub account.
