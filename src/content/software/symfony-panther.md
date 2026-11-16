---
id: symfony-panther
name: Panther
urls:
  home: https://symfony.com/packages/panther
  repository: https://github.com/symfony/panther
  docs: https://symfony.com/doc/current/testing/end_to_end.html
category:
  - testing
description: PHP library that runs end-to-end tests and web scraping in real browsers through the W3C WebDriver protocol.
status: active
maintainer: Kévin Dunglas
firstRelease: 2018
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
latestReleaseDate: 2026-01-08
githubStargazers: 3073
packagistDownloads: 18970597
contributors: 109
packagistMonthlyDownloads: 721445
dependentRepos: 1889
dependentPackages: 152
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://symfony.com/packages/panther
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/packages/panther
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/symfony/panther
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/doc/current/testing/end_to_end.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/symfony/panther/blob/v2.4.0/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/symfony/panther.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/symfony/panther
    checkedAt: 2026-11-16
  - field: category
    url: https://symfony.com/packages/panther
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://symfony.com/packages/panther
    checkedAt: 2026-11-16
  - field: runtime
    url: https://symfony.com/packages/panther
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/symfony/panther/blob/v2.4.0/composer.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://symfony.com/doc/current/testing/end_to_end.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://symfony.com/packages/panther
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/symfony/panther/blob/v2.4.0/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/symfony/panther
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/symfony/panther/releases/tags/v2.4.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/panther/releases/tags/v2.4.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/panther
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/symfony/panther/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/panther.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/symfony/panther.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fpanther
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fpanther
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

Panther is a PHP library for end-to-end tests and web scraping in real browsers. It drives Chrome or Firefox through the W3C WebDriver protocol, so a test can take screenshots, run JavaScript on a page and check real-time features such as WebSockets. Its test case starts the application with the built-in PHP web server and extends PHPUnit's test case, and for a Symfony application it extends the framework's web test case. The library is built on PHP WebDriver.

## Worth knowing

The browsers need a matching ChromeDriver or geckodriver on the machine that runs the tests. The docs have the setup install them with a browser driver installer or the system package manager.
