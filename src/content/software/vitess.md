---
id: vitess
name: Vitess
urls:
  home: https://vitess.io/
  repository: https://github.com/vitessio/vitess
  docs: https://vitess.io/docs/
category:
  - database
description: Cloud-native, horizontally scalable distributed database system built around MySQL.
status: active
maintainer: Vitess
maintainerType: community
firstRelease: 2010
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: Apache-2.0
currentMajor: "24"
latestReleaseDate: 2026-10-13
githubStargazers: 21397
contributors: 330
social:
  x: https://twitter.com/vitessio
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://vitess.io/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/vitessio/vitess
    checkedAt: 2026-10-30
  - field: urls
    url: https://vitess.io/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://vitess.io/community/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://vitess.io/community/
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/vitessio/vitess/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/vitessio/vitess/languages
    checkedAt: 2026-10-30
  - field: runtime
    url: https://vitess.io/docs/get-started/local/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://vitess.io/docs/overview/architecture/
    checkedAt: 2026-10-30
  - field: databases
    url: https://vitess.io/docs/overview/supported-databases/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://vitess.io/docs/get-started/local/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://vitess.io/docs/get-started/operator/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://vitess.io/docs/24.0/get-started/vttestserver-docker-image/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://vitess.io/docs/24.0/reference/vtadmin/architecture/
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/vitessio/vitess/main/README.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://vitess.io/community/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/vitessio/vitess/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/vitessio/vitess/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://vitess.io/community/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/vitessio/vitess
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/vitessio/vitess/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Vitess is a distributed database system built around MySQL. Its homepage says it is compatible with MySQL while extending its scalability. Vitess supports the MySQL and Percona Server for MySQL databases, and its docs describe the platform as a number of server processes.

The project is written in Go. VTAdmin is its browser interface, with optional role-based access control. The [local install guide](https://vitess.io/docs/get-started/local/) uses pre-compiled binaries for Linux. PlanetScale provides a Kubernetes operator under the Apache 2.0 license, and a Docker image exists for testing.

## Worth knowing

Vitess describes itself as an independent open-source project that no single company controls. It joined the Cloud Native Computing Foundation in 2018, and the homepage calls it a graduated project there.
