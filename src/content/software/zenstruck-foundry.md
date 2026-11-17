---
id: zenstruck-foundry
name: Foundry
urls:
  repository: https://github.com/zenstruck/foundry
  docs: https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html
category:
  - testing
description: PHP library that builds model factories and on-demand fixtures for Symfony and Doctrine, used in tests and dev environments.
status: active
maintainer: Kevin Bond
firstRelease: 2020
language: php
runtime:
  - php
runtimeMin: php 8.1
basedOn:
  - symfony
runsAs:
  - local
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-09
githubStargazers: 805
packagistDownloads: 17207897
contributors: 87
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://api.github.com/repos/zenstruck/foundry
    checkedAt: 2026-11-17
  - field: urls
    url: https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/zenstruck/foundry/blob/2.x/LICENSE
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://api.github.com/repos/zenstruck/foundry/releases/tags/v1.0.0
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/zenstruck/foundry
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/zenstruck/foundry/blob/2.x/README.md
    checkedAt: 2026-11-17
  - field: basedOn
    url: https://github.com/zenstruck/foundry/blob/2.x/README.md
    checkedAt: 2026-11-17
  - field: runtime
    url: https://github.com/zenstruck/foundry/blob/v2.16.0/composer.json
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://github.com/zenstruck/foundry/blob/v2.16.0/composer.json
    checkedAt: 2026-11-17
  - field: runsAs
    url: https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/zenstruck/foundry
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://github.com/zenstruck/foundry/blob/2.x/LICENSE
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://github.com/zenstruck/foundry/releases/tag/v2.16.0
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://github.com/zenstruck/foundry/releases/tag/v2.16.0
    checkedAt: 2026-11-17
  - field: packagistDownloads
    url: https://packagist.org/packages/zenstruck/foundry.json
    checkedAt: 2026-11-17
  - field: packagistDownloads
    url: https://packagist.org/packages/zenstruck/foundry.json
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/zenstruck/foundry
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/zenstruck/foundry/contributors?per_page=1
    checkedAt: 2026-11-17
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

Foundry is a PHP library for creating test and development data with factory classes. A factory creates and persists an object, and any field the caller does not set gets random data. Stories extract a specific database state so tests and dev fixtures can reuse it, and the foundry:load-fixtures command loads stories marked with the AsFixture attribute into a database, mainly in dev mode. The README says it supports doctrine/orm and doctrine/mongodb-odm, alone or combined. The [documentation](https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html) also covers a PHPUnit extension and factories declared as services.

## Worth knowing

The docs say the library requires the database to be reset before each test, which the packaged ResetDatabase attribute handles. Without Symfony Flex, the bundle has to be enabled by hand in the test and dev environments, and the make:* commands need Symfony MakerBundle. The Behat integration is a separate package that the docs call experimental.
