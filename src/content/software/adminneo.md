---
id: adminneo
name: AdminNeo
urls:
  home: https://www.adminneo.org
  repository: https://github.com/adminneo-org/adminneo
  docs: https://www.adminneo.org/configuration
category:
  - admin-panel
description: Database management tool written in PHP that is distributed as a single file and built on Adminer.
status: active
maintainer: AdminNeo.org
maintainerType: community
firstRelease: 2024
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
databases:
  - mysql
  - mariadb
  - postgres
  - sqlserver
  - sqlite
  - oracle
  - mongodb
adminUi: true
runsAs:
  - per-request
installMethod: single PHP file download
licenseModel: open-source
license: Apache-2.0 OR GPL-2.0-only
currentMajor: "5"
latestReleaseDate: 2026-09-16
githubStargazers: 371
packagistDownloads: 290
contributors: 164
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/adminneo-org/adminneo
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.adminneo.org/configuration
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: category
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/adminneo-org/adminneo
    checkedAt: 2026-10-28
  - field: runtime
    url: https://www.adminneo.org/download
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/adminneo-org/adminneo/blob/v5.8.0/composer.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.adminneo.org/download
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://www.adminneo.org/download
    checkedAt: 2026-10-28
  - field: databases
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: license
    url: https://repo.packagist.org/p2/adminneo-org/adminneo.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://www.adminneo.org/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/adminneo-org/adminneo/blob/main/CHANGELOG.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/adminneo-org/adminneo/releases/tag/v5.8.0
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/adminneo-org/adminneo/releases/tag/v5.8.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/adminneo-org/adminneo
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/adminneo-org/adminneo/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/adminneo-org/adminneo.json
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/adminneo-org/adminneo.json
    checkedAt: 2026-10-28
ai: authored
npmWeeklyDownloads: null
---

AdminNeo is a database management tool written in PHP. It is built on Adminer, which its homepage names as the project it is based on, and it is distributed as a single file. The file is installed by uploading it to a web server with PHP; it can also be added to a PHP project as a Composer package or run from an official Docker image. A modern web browser serves the interface. The homepage lists MySQL, MariaDB, PostgreSQL, MS SQL, SQLite, Oracle and MongoDB among its supported databases.

## Worth knowing

The download page gives a lower PHP minimum for running the release file than the Composer manifest of the release gives for the package.
