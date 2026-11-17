---
id: valinor
name: Valinor
urls:
  home: https://valinor-php.dev
  repository: https://github.com/CuyZ/Valinor
  docs: https://valinor-php.dev/latest/getting-started/
category:
  - library
description: PHP library that maps raw input such as JSON or arrays into typed objects and validates it on the way.
status: active
maintainer: Romain Canon
firstRelease: 2021
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
i18n: error messages can be translated
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-12
githubStargazers: 1536
packagistDownloads: 22405548
contributors: 53
dependentRepos: 21
dependentPackages: 44
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://valinor-php.dev/latest/
    checkedAt: 2026-11-17
  - field: urls
    url: https://valinor-php.dev/latest/getting-started/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/CuyZ/Valinor
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://raw.githubusercontent.com/CuyZ/Valinor/master/LICENSE.md
    checkedAt: 2026-11-17
  - field: category
    url: https://raw.githubusercontent.com/CuyZ/Valinor/master/README.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/CuyZ/Valinor
    checkedAt: 2026-11-17
  - field: runtime
    url: https://raw.githubusercontent.com/CuyZ/Valinor/2.7.0/composer.json
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://raw.githubusercontent.com/CuyZ/Valinor/2.7.0/composer.json
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/CuyZ/Valinor
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://raw.githubusercontent.com/CuyZ/Valinor/master/LICENSE.md
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://github.com/CuyZ/Valinor/releases/tag/2.7.0
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://github.com/CuyZ/Valinor/releases/tag/2.7.0
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://github.com/CuyZ/Valinor/releases/tag/0.1.0
    checkedAt: 2026-11-17
  - field: packagistDownloads
    url: https://packagist.org/packages/cuyz/valinor.json
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/CuyZ/Valinor
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/CuyZ/Valinor/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/cuyz%2Fvalinor
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/cuyz%2Fvalinor
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://raw.githubusercontent.com/CuyZ/Valinor/master/README.md
    checkedAt: 2026-11-17
  - field: i18n
    url: https://valinor-php.dev/latest/how-to/customize-error-messages/
    checkedAt: 2026-11-17
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Valinor is a PHP library that builds typed objects from raw input such as JSON or plain arrays, and validates that input while it does so. The README says the mapper handles native PHP types and the advanced types that PHPStan and Psalm support, such as shaped arrays and generics, and reports human-readable errors for values that do not fit. The error messages can be translated. A normalization mechanism turns objects back into a data format such as JSON or CSV while keeping their structure.

The documentation names a Symfony bundle and a Mezzio package as separate framework integrations. Its alternatives page lists other mapping packages, among them laravel-data.
