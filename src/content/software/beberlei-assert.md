---
id: beberlei-assert
name: beberlei/assert
urls:
  repository: https://github.com/beberlei/assert
  docs: https://github.com/beberlei/assert/blob/master/README.md
category:
  - library
description: PHP library of assertions and guard methods for input validation.
status: active
maintainer: Benjamin Eberlei
maintainerType: individual
firstRelease: 2012
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
installMethod: composer require beberlei/assert
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "3"
latestReleaseDate: 2026-06-10
githubStargazers: 2426
packagistDownloads: 110672846
contributors: 69
dependentRepos: 4626
dependentPackages: 667
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/beberlei/assert
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/beberlei/assert/blob/master/README.md
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/beberlei/assert/tags
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/beberlei/assert/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/beberlei/assert
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/beberlei/assert/blob/v3.3.4/composer.json
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/beberlei/assert/blob/v3.3.4/composer.json
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/beberlei/assert/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/beberlei/assert/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/beberlei/assert/blob/v3.3.4/composer.json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/beberlei/assert/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/beberlei/assert/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/beberlei/assert
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/beberlei/assert/contributors
    checkedAt: 2026-11-04
  - field: packagistDownloads
    url: https://packagist.org/packages/beberlei/assert.json
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/beberlei%2Fassert
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/beberlei%2Fassert
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

beberlei/assert is a PHP library of assertions and guard methods for checking input. Each assertion, such as `Assertion::integer()` or `Assertion::notEmpty()`, throws an exception when the value does not hold, so the code does not need an if-clause for the same condition. The library validates input and does not filter it. A fluent `Assert::that()` API chains several checks on one value, and lazy assertions collect every failure and throw one combined exception. A project can subclass the assertion class to change the exception it throws and to add its own assertions.
