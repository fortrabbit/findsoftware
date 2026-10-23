---
id: atomic-server
name: Atomic Server
urls:
  home: https://docs.atomicdata.dev
  repository: https://github.com/ontola/atomic-server
  docs: https://docs.atomicdata.dev/atomicserver/installation
category:
  - headless-cms
  - database
description: Self-hostable server for storage, search, sharing and sync of Atomic Data, with a web app and a RESTful API.
status: active
maintainer: Joep Meindertsma
firstRelease: 2020
language: rust
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
adminUi: true
headlessApi:
  - rest
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-17
githubStargazers: 1623
contributors: 15
social:
  discord: https://discord.gg/a72Rv2P
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://docs.atomicdata.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/ontola/atomic-server
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.atomicdata.dev/atomicserver/installation
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ontola/atomic-server
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://docs.atomicdata.dev/
    checkedAt: 2026-10-23
  - field: category
    url: https://docs.atomicdata.dev/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.atomicdata.dev/atomicserver/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.atomicdata.dev/atomicserver/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.atomicdata.dev/atomicserver/installation
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/ontola/atomic-server/develop/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/ontola/atomic-server/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/ontola/atomic-server/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/ontola/atomic-server/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ontola/atomic-server
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ontola/atomic-server/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Rust · Headless CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Atomic Server is a graph database and headless CMS, the reference implementation of the Atomic Data specification. It is the self-hostable server behind atomic.place, a local-first workspace for documents, tables, files, chat and apps. It serves a RESTful API that uses JSON-AD and ships a web app for working with the data. Server, web app, search, database and automatic HTTPS come in one binary, which is installed with Docker, with `cargo install atomic-server`, or from a pre-compiled release.

## Worth knowing

The README marks the project as alpha, with breaking changes expected until 1.0. The hosted atomic.place service can sync with a self-hosted server.
