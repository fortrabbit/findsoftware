---
id: dqlite
name: dqlite
urls:
  home: https://dqlite.io
  repository: https://github.com/canonical/dqlite
  docs: https://dqlite.io/docs/
category:
  - database
description: Embeddable, replicated SQL database library in C that extends SQLite across a cluster of machines using Raft consensus.
status: active
maintainer: Canonical Ltd
maintainerType: company
parent: Canonical Group Limited
firstRelease: 2018
language: c
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
installMethod: Ubuntu PPA (development release)
licenseModel: open-source
license: LGPL-3.0 with a static linking exception
currentMajor: "1"
latestReleaseDate: 2026-07-02
githubStargazers: 4418
contributors: 32
social:
  forum: https://discourse.dqlite.io
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://dqlite.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/canonical/dqlite
    checkedAt: 2026-10-28
  - field: urls
    url: https://dqlite.io/docs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://dqlite.io/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://dqlite.io/
    checkedAt: 2026-10-28
  - field: parent
    url: https://canonical.com/legal/data-privacy
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/canonical/dqlite/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://dqlite.io/docs/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/canonical/dqlite
    checkedAt: 2026-10-28
  - field: runtime
    url: https://dqlite.io/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://dqlite.io/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/canonical/dqlite/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/canonical/dqlite/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://dqlite.io/
    checkedAt: 2026-10-28
  - field: databases
    url: https://dqlite.io/docs/
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/canonical/dqlite/releases/latest
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/canonical/dqlite/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/canonical/dqlite
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/canonical/dqlite/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

dqlite is an embeddable SQL database library written in C. The [docs](https://dqlite.io/docs/) describe it as an extension of SQLite across a cluster of machines, with failover between them, and the [repository](https://github.com/canonical/dqlite) describes a C library that implements an embeddable and replicated SQL database engine. An application links the library, and the cluster replicates the data with the Raft algorithm. The site names a development archive for Ubuntu as an install route, and the README builds the library from source with autotools.

## Worth knowing

The library is licensed under LGPL-3.0 with an exception that allows static linking, so a binary built with it can be released under other terms. The README states that dqlite runs on Linux and needs a kernel with native asynchronous I/O support.
