---
id: infection
name: Infection
urls:
  home: https://infection.github.io
  repository: https://github.com/infection/infection
  docs: https://infection.github.io/guide/
category:
  - testing
description: Mutation testing tool for PHP that changes the source code and reports the changes the test suite does not catch.
status: active
maintainer: Maks Rafalko
maintainerType: individual
firstRelease: 2017
language: php
runtime:
  - php
runtimeMin: php 8.3
runsAs:
  - local
installMethod: PHAR download from the GitHub releases, Phive, composer global require infection/infection, Homebrew tap infection/homebrew-infection
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-11-15
githubStargazers: 2272
packagistDownloads: 36329042
contributors: 112
dependentRepos: 2099
dependentPackages: 1826
social:
  x: https://twitter.com/infection_php
  mastodon: https://mastodon.social/@infection_php
  discord: https://discord.gg/ZUmyHTJ
  forum: https://github.com/infection/infection/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://infection.github.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/infection/infection
    checkedAt: 2026-11-16
  - field: urls
    url: https://infection.github.io/guide/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/infection/infection/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/infection/infection/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/infection/infection
    checkedAt: 2026-11-16
  - field: category
    url: https://infection.github.io/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://infection.github.io/guide/
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/infection/infection/blob/0.35.11/composer.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://infection.github.io/guide/using-with-ci.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://infection.github.io/guide/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://infection.github.io/guide/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://infection.github.io/guide/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://infection.github.io/guide/installation.html
    checkedAt: 2026-11-16
  - field: license
    url: https://infection.github.io/
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://infection.github.io/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/infection/infection/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/infection/infection/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/infection/infection/releases
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/infection/infection.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/infection/infection
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/infection/infection/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/infection%2Finfection
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/infection%2Finfection
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

Infection mutates PHP source code through changes to its abstract syntax tree and reports the mutations the test suite still passes. The guide names PHPUnit, PhpSpec, Codeception and Testo as the test frameworks it supports, and the PHAR download bundles all of them.

## Worth knowing

Infection needs Xdebug, phpdbg or pcov enabled alongside PHP. The [CI guide](https://infection.github.io/guide/using-with-ci.html) describes using it in a continuous integration server together with other code quality tools.
