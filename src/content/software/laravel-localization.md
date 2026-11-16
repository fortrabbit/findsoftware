---
id: laravel-localization
name: Laravel Localization
urls:
  repository: https://github.com/mcamara/laravel-localization
  docs: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
category:
  - library
description: Laravel package that adds locale-prefixed routes, locale detection and redirects, and helpers for localized URLs and language selectors.
status: active
maintainer: mcamara
maintainerType: individual
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-08-24
githubStargazers: 3559
packagistDownloads: 10787238
contributors: 114
dependentRepos: 1874
dependentPackages: 115
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/mcamara/laravel-localization
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mcamara/laravel-localization
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mcamara/laravel-localization/blob/v2.4.2/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mcamara/laravel-localization/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mcamara/laravel-localization/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/mcamara/laravel-localization.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mcamara/laravel-localization
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mcamara/laravel-localization/contributors
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/mcamara/laravel-localization.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/mcamara%2Flaravel-localization
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/mcamara%2Flaravel-localization
    checkedAt: 2026-11-16
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

Laravel Localization is a Laravel package for applications that serve the same content in several languages. According to its README it detects the language from the browser, saves the chosen locale in a session or cookie and redirects accordingly, supports translatable routes, can hide the default locale in the URL, and provides helpers such as a language selector.

## Worth knowing

The README says the package is by default not compatible with Laravel's route caching, so localized routes need its trait and a separate caching command to work with a cached route list.

The README also names a successor package for new projects and links a migration guide for switching to it. It says this package remains actively maintained, with compatibility updates continuing.
