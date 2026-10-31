---
id: whodb
name: WhoDB
urls:
  home: https://whodb.com
  repository: https://github.com/clidey/whodb
  docs: https://docs.whodb.com/
  pricing: https://whodb.com/pricing/
category:
  - admin-panel
description: Web-based workspace for exploring, editing and querying data in several databases, with a self-hosted Community edition under Apache-2.0.
status: active
maintainer: Clidey, Inc.
maintainerType: company
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - mariadb
  - sqlite
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: docker run with the clidey/whodb image
licenseModel: open-core
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-28
githubStargazers: 5048
npmWeeklyDownloads: 372
contributors: 26
social:
  forum: https://github.com/clidey/whodb/discussions
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://whodb.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/clidey/whodb
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.whodb.com/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://whodb.com/privacy/
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://whodb.com/privacy/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/clidey/whodb/releases/tag/0.32.0
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/clidey/whodb
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.whodb.com/installation
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.whodb.com/installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.whodb.com/installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.whodb.com/installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/clidey/whodb
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/clidey/whodb/blob/main/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://whodb.com/
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/clidey/whodb/releases/tag/0.138.0
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/clidey/whodb/releases/tag/0.138.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/clidey/whodb
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/clidey/whodb/contributors?per_page=1
    checkedAt: 2026-10-31
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/@clidey/whodb
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
---

WhoDB lets users browse and edit records, run queries and follow how a schema fits together, across several databases, from a browser. The open-source WhoDB Community edition is a Go server with a React and TypeScript frontend, and the [README](https://github.com/clidey/whodb) lists PostgreSQL, MySQL, MariaDB, SQLite, MongoDB and other engines among the systems it connects to.

It can be installed as a Docker image, a release binary, a desktop app, a command-line tool or a build from source. The [documentation](https://docs.whodb.com/) covers each route.

## Worth knowing

The Community edition shares its connection profiles with everyone who can reach the instance, according to the [installation guide](https://docs.whodb.com/installation).

WhoDB Cloud is offered as a hosted service under the same name.
