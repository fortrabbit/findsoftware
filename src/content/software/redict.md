---
id: redict
name: Redict
urls:
  home: https://redict.io
  repository: https://codeberg.org/redict/redict
  docs: https://redict.io/docs/
category:
  - database
description: Distributed key/value store, an independent LGPL-licensed fork of Redis.
status: active
maintainer: Redict project
maintainerType: community
firstRelease: 2024
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: system package manager
licenseModel: open-source
license: LGPL-3.0-only, BSD-3-Clause
currentMajor: "7"
latestReleaseDate: 2025-10-08
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://redict.io/
    checkedAt: 2026-10-30
  - field: urls
    url: https://redict.io/
    checkedAt: 2026-10-30
  - field: urls
    url: https://codeberg.org/redict/redict
    checkedAt: 2026-10-30
  - field: urls
    url: https://redict.io/docs/install/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://redict.io/docs/community/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://redict.io/docs/license/
    checkedAt: 2026-10-30
  - field: category
    url: https://redict.io/
    checkedAt: 2026-10-30
  - field: language
    url: https://codeberg.org/redict/redict/raw/branch/main/README.md
    checkedAt: 2026-10-30
  - field: runtime
    url: https://redict.io/docs/install/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://codeberg.org/redict/redict/releases/tag/7.3.6
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://codeberg.org/redict/redict/releases/tag/7.3.6
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://redict.io/posts/
    checkedAt: 2026-10-30
  - field: license
    url: https://redict.io/
    checkedAt: 2026-10-30
  - field: license
    url: https://redict.io/docs/license/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://redict.io/docs/install/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://redict.io/docs/install/containers/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://redict.io/docs/install/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://redict.io/docs/usage/admin/
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

Redict is a distributed key/value store that its project describes as an independent fork of Redis. The source is hosted on Codeberg, and the project names itself, the Redict project, as the maintainer.

The server is C software started with `redict-server`. The [installation guide](https://redict.io/docs/install/) lists three routes: a distribution's package manager, a container image from the project's own registry, and a source build with GNU make. The compatibility guide describes switching from Redis by installing Redict in its place, with the existing configuration file and database.

## Worth knowing

Redict is designed as a long-running process on a server, so the host has to keep it running.
