---
id: wikijs
name: Wiki.js
urls:
  home: https://js.wiki
  repository: https://github.com/requarks/wiki
  docs: https://docs.js.wiki
category:
  - wiki
description: Open-source wiki software built on Node.js, with an admin area and a choice of SQL databases.
status: active
maintainer: Requarks.io
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
  - mysql
  - mariadb
  - sqlserver
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: Docker or Kubernetes container (recommended), Node.js on host from release tarball
licenseModel: open-source
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-09-21
githubStargazers: 29054
contributors: 169
social:
  discord: https://discord.gg/rcxt9QS2jd
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: urls
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/requarks/wiki
    checkedAt: 2026-10-19
  - field: urls
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: urls
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: category
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: runtime
    url: https://docs.requarks.io/install/requirements
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://docs.requarks.io/install/requirements
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://docs.js.wiki/setup/requirements
    checkedAt: 2026-10-19
  - field: databases
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: databases
    url: https://docs.js.wiki/setup/requirements
    checkedAt: 2026-10-19
  - field: adminUi
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.js.wiki/setup/installation
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.js.wiki/setup/installation
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/requarks/wiki
    checkedAt: 2026-10-19
  - field: license
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://js.wiki/
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/requarks/wiki/releases
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/requarks/wiki
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/requarks/wiki/contributors
    checkedAt: 2026-10-19
ai: authored
---

Wiki.js is a wiki with an admin area for all its settings, and its server runs as a long-lived Node.js process. Data goes into an SQL database: the homepage names PostgreSQL, MySQL, MariaDB, MS SQL Server and SQLite. The [installation guide](https://docs.js.wiki/setup/installation) recommends a Docker or Kubernetes container and also covers running a release on a host with Node.js.

## Worth knowing

The stable line and the beta line have separate documentation with different requirements. The beta requires PostgreSQL and a newer Node.js, while the stable requirements page calls PostgreSQL highly recommended. The installation guide linked above belongs to the beta line.
