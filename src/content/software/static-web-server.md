---
id: static-web-server
name: Static Web Server
urls:
  home: https://static-web-server.net
  repository: https://github.com/static-web-server/static-web-server
  docs: https://static-web-server.net/v2/
category:
  - web-server
description: Cross-platform web server written in Rust for serving static files, with TLS, compression and access controls configured from the command line or a TOML file.
status: active
maintainer: Jose Quintana
maintainerType: individual
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: binary-installer
licenseModel: open-source
license: MIT OR Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-07
githubStargazers: 2388
contributors: 54
social:
  discord: https://discord.gg/VWvtZeWAA7
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://static-web-server.net/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/static-web-server/static-web-server
    checkedAt: 2026-10-30
  - field: urls
    url: https://static-web-server.net/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/static-web-server/static-web-server/master/LICENSE-MIT
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/static-web-server/static-web-server/master/Cargo.toml
    checkedAt: 2026-10-30
  - field: category
    url: https://static-web-server.net/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/static-web-server/static-web-server
    checkedAt: 2026-10-30
  - field: runtime
    url: https://static-web-server.net/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://static-web-server.net/v2/features/windows-service
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/download-install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/download-install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/download-install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/download-install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/download-install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/features/docker
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/download-install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://static-web-server.net/v2/building-from-source
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/static-web-server/static-web-server/master/Cargo.toml
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/static-web-server/static-web-server/master/LICENSE-MIT
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/static-web-server/static-web-server/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/static-web-server/static-web-server/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/static-web-server/static-web-server/releases
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/static-web-server/static-web-server
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/static-web-server/static-web-server/contributors?per_page=1
    checkedAt: 2026-10-30
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

Static Web Server is a web server for serving a folder of static files, with TLS, compression and access controls configured from the command line or a TOML file. It is written in Rust and ships as a single binary with no runtime dependencies.

The [download and install page](https://static-web-server.net/v2/download-install) documents a binary installer script, several package managers, a WebAssembly runtime and a Docker image, and the project also documents a source build with Cargo. On Windows the binary can run in a Windows Service context, and one running instance can host more than one static website through virtual hosting.
