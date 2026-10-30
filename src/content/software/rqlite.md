---
id: rqlite
name: rqlite
urls:
  home: https://rqlite.io
  repository: https://github.com/rqlite/rqlite
  docs: https://rqlite.io/docs/
category:
  - database
description: Distributed relational database built on SQLite, replicated across nodes with the Raft consensus algorithm and reached over HTTP.
status: active
maintainer: Philip O'Toole
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - binary
basedOn:
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: install script (curl | sh, Linux)
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-10-28
githubStargazers: 17884
contributors: 65
social:
  forum: https://groups.google.com/g/rqlite
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://rqlite.io
    checkedAt: 2026-10-30
  - field: urls
    url: https://rqlite.io
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/rqlite/rqlite
    checkedAt: 2026-10-30
  - field: urls
    url: https://rqlite.io/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/rqlite/rqlite/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/rqlite/rqlite/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://rqlite.io/docs/features/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/rqlite/rqlite
    checkedAt: 2026-10-30
  - field: runtime
    url: https://rqlite.io/docs/features/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://rqlite.io/docs/install-rqlite/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rqlite.io/docs/install-rqlite/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rqlite.io/docs/install-rqlite/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rqlite.io/docs/install-rqlite/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rqlite.io/docs/install-rqlite/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rqlite.io/docs/install-rqlite/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://rqlite.io/docs/install-rqlite/building-from-source/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://rqlite.io/docs/ui/
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://rqlite.io/docs/features/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/rqlite/rqlite/releases/tag/v10.6.6
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/rqlite/rqlite/releases/tag/v10.6.6
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://rqlite.io/docs/design/
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/rqlite/rqlite/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/rqlite/rqlite/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/rqlite/rqlite
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/rqlite/rqlite/contributors?per_page=1
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

rqlite is a distributed relational database built on SQLite. The server joins a cluster with other nodes, and replication uses the Raft consensus algorithm. Applications query it over plain HTTP and JSON, and the node serves a built-in console app.

## Worth knowing

The FAQ says rqlite is not a drop-in replacement for SQLite, because writes must go through the HTTP API. The project is built for availability and fault tolerance rather than write throughput. The support page says the project has been maintained by the same developer since 2014, and it offers contracts, reviews and training as paid services.
