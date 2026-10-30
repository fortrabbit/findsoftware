---
id: proxysql
name: ProxySQL
urls:
  home: https://proxysql.com/
  repository: https://github.com/sysown/proxysql
  docs: https://proxysql.com/documentation
category:
  - database
description: Protocol-aware proxy for MySQL and PostgreSQL databases.
status: active
maintainer: ProxySQL
maintainerType: company
firstRelease: 2013
language: cpp
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - mariadb
  - postgres
runsAs:
  - always-on
installMethod: deb and rpm packages from GitHub releases or package repositories
licenseModel: open-core
license: GPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-10-20
githubStargazers: 6936
contributors: 125
social:
  x: https://twitter.com/proxysql
  forum: https://groups.google.com/forum/#!forum/proxysql/
  facebook: https://www.facebook.com/proxysql
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://proxysql.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/sysown/proxysql
    checkedAt: 2026-10-30
  - field: urls
    url: https://proxysql.com/documentation
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://proxysql.com/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://proxysql.com/company
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/sysown/proxysql
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: databases
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://proxysql.com/documentation/installing-proxysql
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/sysown/proxysql
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/sysown/proxysql/v3.0/LICENSE
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://proxysql.com/company
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/sysown/proxysql/releases
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/sysown/proxysql/releases
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/sysown/proxysql
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/sysown/proxysql/contributors?per_page=1
    checkedAt: 2026-10-30
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

ProxySQL sits between applications and MySQL, MariaDB or PostgreSQL servers. It runs as a service that the operating system's service manager controls. Packages come from GitHub releases and package repositories; the README also names a generic Linux tarball, a FreeBSD package and a git clone that builds from source, and the [installation guide](https://proxysql.com/documentation/installing-proxysql) names a Docker image on Docker Hub.

The project was started with René Cannaò's initial release in 2013, and the company behind it now also sells support.

## Worth knowing

The Web UI Administration feature appears on the paid Professional and Enterprise plans, while the Community plan lists the core features only.
