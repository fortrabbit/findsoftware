---
id: paratest
name: ParaTest
urls:
  repository: https://github.com/paratestphp/paratest
category:
  - testing
description: Parallel test runner for PHPUnit that splits a test suite across several PHP processes.
status: active
maintainer: Brian Scaturro
firstRelease: 2012
language: php
runtime:
  - php
runtimeMin: php 8.4
basedOn:
  - phpunit
runsAs:
  - local
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-11-14
githubStargazers: 2518
packagistDownloads: 182134053
contributors: 126
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/paratestphp/paratest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/paratestphp/paratest/commits/e18a7b1f512cbfd4d1754710a636998ae410c608
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/paratestphp/paratest/blob/7.x/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/paratestphp/paratest/blob/7.x/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/paratestphp/paratest
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/paratestphp/paratest/blob/v7.29.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/paratestphp/paratest/blob/v7.29.0/composer.json
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/paratestphp/paratest/blob/7.x/README.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/paratestphp/paratest/blob/7.x/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/paratestphp/paratest/blob/7.x/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/paratestphp/paratest
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/paratestphp/paratest/releases/tag/v7.29.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/paratestphp/paratest/releases/tag/v7.29.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/paratestphp/paratest
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/paratestphp/paratest/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/brianium/paratest.json
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
npmWeeklyDownloads: null
---

ParaTest runs the tests of a PHPUnit suite in parallel, starting several PHP processes and dividing the tests among them. The [repository](https://github.com/paratestphp/paratest) is its only project site, so the [README](https://github.com/paratestphp/paratest/blob/7.x/README.md) on the default branch is the documentation.

## Worth knowing

The README says only the latest PHPUnit version is supported, and that ParaTest heavily relies on PHPUnit `@internal` classes.
