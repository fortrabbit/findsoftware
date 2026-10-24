---
id: adminer
name: Adminer
urls:
  home: https://www.adminer.org
  repository: https://github.com/vrana/adminer
category:
  - admin-panel
description: Web-based database management tool distributed as a single PHP file.
status: active
maintainer: Jakub Vrána
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
  - sqlserver
  - oracle
adminUi: true
runsAs:
  - per-request
installMethod: single PHP file download
licenseModel: open-source
license: Apache-2.0, GPL-2.0-only
currentMajor: "6"
latestReleaseDate: 2026-10-10
githubStargazers: 7919
packagistDownloads: 3061779
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/vrana/adminer
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://repo.packagist.org/p2/vrana/adminer.json
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://repo.packagist.org/p2/vrana/adminer.json
    checkedAt: 2026-10-19
  - field: category
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/vrana/adminer
    checkedAt: 2026-10-19
  - field: runtime
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://repo.packagist.org/p2/vrana/adminer.json
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: adminUi
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: databases
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: license
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: license
    url: https://repo.packagist.org/p2/vrana/adminer.json
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://www.adminer.org/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/vrana/adminer/releases/tag/v6.1.2
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/vrana/adminer/releases/tag/v6.1.2
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/vrana/adminer.json
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/vrana/adminer.json
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/vrana/adminer
    checkedAt: 2026-10-19
ai: authored
npmWeeklyDownloads: null
---

Adminer is a single PHP file placed on a web server and opened in the browser to manage databases. PHP runs the file for each request, and the [project page](https://www.adminer.org/) states that PHP sessions must be enabled.

## Worth knowing

The project page lists a lower minimum PHP version than the Packagist metadata of the latest release requires.
