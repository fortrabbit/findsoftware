---
id: codeception
name: Codeception
urls:
  home: https://codeception.com/
  repository: https://github.com/Codeception/Codeception
  docs: https://codeception.com/docs/Introduction
  plugins: https://codeception.com/addons
category:
  - testing
description: Full-stack testing framework for PHP that writes acceptance, functional and unit tests in a BDD-inspired style.
status: active
maintainer: Michael Bodnarchuk
maintainerType: individual
firstRelease: 2011
language: php
runtime:
  - php
runtimeMin: php 8.2
basedOn:
  - phpunit
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-03
githubStargazers: 4852
packagistDownloads: 96824737
contributors: 346
packagistMonthlyDownloads: 1910687
dependentRepos: 17322
dependentPackages: 3110
social:
  x: https://twitter.com/codeception
  forum: https://github.com/Codeception/Codeception/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://codeception.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/Codeception/Codeception
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/Codeception/Codeception/blob/main/readme.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/Codeception/Codeception/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: maintainerType
    url: https://github.com/Codeception/Codeception/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/Codeception/Codeception
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/Codeception/Codeception/commits/1.0.1
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/Codeception/Codeception/blob/5.3.7/composer.json
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/Codeception/Codeception/blob/5.3.7/composer.json
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://codeception.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://codeception.com/addons
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://codeception.com/install
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://codeception.com/install
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/Codeception/Codeception
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://api.github.com/repos/Codeception/Codeception
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/Codeception/Codeception/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/Codeception/Codeception/releases/latest
    checkedAt: 2026-11-04
  - field: packagistDownloads
    url: https://packagist.org/packages/codeception/codeception.json
    checkedAt: 2026-11-04
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/codeception/codeception.json
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/Codeception/Codeception
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/Codeception/Codeception/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/codeception%2Fcodeception
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/codeception%2Fcodeception
    checkedAt: 2026-11-04
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

Codeception is a testing framework for PHP that covers acceptance, functional and unit tests, and describes tests in a BDD-inspired syntax. It is built on top of PHPUnit and can run PHPUnit tests. Its modules can drive a browser through Selenium WebDriver or send HTTP requests with PhpBrowser, and tests can run inside a PHP framework, so the application runs without a web server in front of it. The bootstrap command creates a test directory with default suites, and the suites run from the command line. The [documentation](https://codeception.com/docs/Introduction) describes the modules and the framework integrations.

## Worth knowing

The PHAR download line on the install page names a lower PHP minimum than the package manifest of the latest release requires.
