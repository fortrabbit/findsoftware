---
id: rethinkdb
name: RethinkDB
urls:
  home: https://rethinkdb.com
  repository: https://github.com/rethinkdb/rethinkdb
  docs: https://rethinkdb.com/docs/
category:
  - database
description: Open-source document database that pushes query results to applications in realtime.
status: active
maintainer: The Linux Foundation
maintainerType: foundation
firstRelease: 2011
language: cpp
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2023-12-11
githubStargazers: 27006
contributors: 142
social:
  x: https://twitter.com/rethinkdb
  discord: https://discord.gg/tvz4sMP
  forum: https://groups.google.com/forum/#!forum/rethinkdb
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://rethinkdb.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://rethinkdb.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/rethinkdb/rethinkdb
    checkedAt: 2026-10-30
  - field: urls
    url: https://rethinkdb.com/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/rethinkdb/rethinkdb/blob/main/COPYRIGHT
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/rethinkdb/rethinkdb/blob/main/COPYRIGHT
    checkedAt: 2026-10-30
  - field: category
    url: https://rethinkdb.com/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/rethinkdb/rethinkdb
    checkedAt: 2026-10-30
  - field: runtime
    url: https://rethinkdb.com/docs/install/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/rethinkdb/rethinkdb/releases/tag/v2.4.4
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/rethinkdb/rethinkdb/releases/tag/v2.4.4
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/rethinkdb/rethinkdb/releases/tag/v0.1
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/rethinkdb/rethinkdb/blob/main/COPYRIGHT
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rethinkdb.com/docs/install/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/rethinkdb/rethinkdb/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rethinkdb.com/docs/install/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://rethinkdb.com/docs/start-on-startup/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://rethinkdb.com/docs/administration-tools/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/rethinkdb/rethinkdb
    checkedAt: 2026-10-30
  - field: contributors
    url: https://github.com/rethinkdb/rethinkdb
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

RethinkDB is an open-source document database built for realtime web applications. It is C++ software that the project distributes as official packages, as an official Docker image and as source to build with make.

The server runs as a long-lived process, and the [documentation](https://rethinkdb.com/docs/start-on-startup/) describes setting it up as a system service. A web interface manages the cluster, and access is controlled through users, permissions and scopes. The Linux Foundation holds the copyright in the code.

## Worth knowing

The project's website and documentation date from an earlier period than the repository, which has recent commits. The docs may describe older behavior than the current code.
