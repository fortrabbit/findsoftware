---
id: dispatch
name: Dispatch
urls:
  repository: https://github.com/noodlehaus/dispatch
  docs: https://github.com/noodlehaus/dispatch/blob/master/README.markdown
category:
  - framework
  - library
description: Micro-routing library for PHP that maps HTTP requests to handler functions.
status: active
maintainer: noodlehaus
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
installMethod: dispatch.php as a standalone PHP file
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2023-04-11
githubStargazers: 537
packagistDownloads: 1538
packagistMonthlyDownloads: 42
dependentRepos: 2
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/noodlehaus/dispatch
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/noodlehaus/dispatch/blob/master/README.markdown
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: category
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/noodlehaus/dispatch
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://raw.githubusercontent.com/noodlehaus/dispatch/master/README.markdown
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/noodlehaus/dispatch/blob/master/README.markdown
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/noodlehaus/dispatch/blob/master/README.markdown
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/noodlehaus/dispatch.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/noodlehaus/dispatch
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/noodlehaus%2Fdispatch
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/noodlehaus/dispatch/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Dispatch is a PHP library of global functions for routing HTTP requests. A script registers handlers with `route()` for an HTTP method and path, adds middleware with `apply()`, and calls `dispatch()` to run the matching handler. The [README](https://github.com/noodlehaus/dispatch/blob/master/README.markdown) also lists helpers for named route parameters, responses, redirects, values shared within a request, and PHP templates through `phtml()`.

The library is a single `dispatch.php` file that the application requires.
