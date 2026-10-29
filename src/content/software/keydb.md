---
id: keydb
name: KeyDB
urls:
  repository: https://github.com/Snapchat/KeyDB
  docs: https://github.com/Snapchat/KeyDB-docs
category:
  - database
description: Multithreaded, Redis-compatible key-value database and cache server, a fork of Redis.
status: active
maintainer: Snap Inc.
maintainerType: company
parent: Snap Inc.
firstRelease: 2019
hqCountry: US
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: build from source (make)
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "6"
latestReleaseDate: 2023-10-30
githubStargazers: 12498
contributors: 340
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://api.github.com/repos/Snapchat/KeyDB
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/Snapchat/KeyDB-docs
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/Snapchat/KeyDB/main/README.md
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/Snapchat/KeyDB/main/README.md
    checkedAt: 2026-10-29
  - field: parent
    url: https://raw.githubusercontent.com/Snapchat/KeyDB/main/README.md
    checkedAt: 2026-10-29
  - field: hqCountry
    url: https://www.snap.com/terms
    checkedAt: 2026-10-29
  - field: category
    url: https://github.com/Snapchat/KeyDB-docs/blob/master/docs/intro.md
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/Snapchat/KeyDB
    checkedAt: 2026-10-29
  - field: runtime
    url: https://raw.githubusercontent.com/Snapchat/KeyDB/main/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://github.com/Snapchat/KeyDB-docs/blob/master/docs/intro-admin.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/Snapchat/KeyDB/main/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/Snapchat/KeyDB-docs/blob/master/docs/docker-basics.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/Snapchat/KeyDB-docs/blob/master/docs/ppa-deb.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/Snapchat/KeyDB-docs/blob/master/docs/rpm.md
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/Snapchat/KeyDB/main/README.md
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/Snapchat/KeyDB/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/Snapchat/KeyDB/releases
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/Snapchat/KeyDB/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/Snapchat/KeyDB
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/Snapchat/KeyDB/contributors
    checkedAt: 2026-10-29
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

KeyDB is a key-value database and cache server written in C++, and a fork of Redis that focuses on multithreading. It keeps compatibility with the Redis protocol and client libraries. Snap Inc. maintains it, and the README says Snap uses it as part of its caching infrastructure.

KeyDB runs as a long-running server process. It can be compiled from source with make, which the README describes as tested for use on Linux, installed from the project's Debian and RPM packages, or started from its Docker image. The documentation lives in a separate GitHub repository, and the project's own domain now points to it.

## Worth knowing

The README says there is no separate commercial product and no paid support option, so the open source release holds every feature the project offers.
