---
id: laravel-lang
name: Laravel Lang
urls:
  home: https://laravel-lang.com/packages-lang.html
  repository: https://github.com/Laravel-Lang/lang
  docs: https://laravel-lang.com/packages-lang.html
category:
  - library
description: Composer package of translation files for the language keys of Laravel Framework and its official packages, updated with an Artisan command.
status: active
maintainer: Laravel Lang Team
maintainerType: community
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
installMethod: composer require --dev
licenseModel: open-source
license: MIT
currentMajor: "15"
latestReleaseDate: 2026-11-13
githubStargazers: 7783
packagistDownloads: 14131110
contributors: 370
dependentRepos: 866
dependentPackages: 37
social:
  forum: https://github.com/orgs/Laravel-Lang/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://laravel-lang.com/packages-lang.html
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/Laravel-Lang/lang
    checkedAt: 2026-11-16
  - field: urls
    url: https://laravel-lang.com/packages-lang.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/Laravel-Lang/lang/blob/15.38.0/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://laravel-lang.com/packages-lang.html
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://laravel-lang.com/packages-lang.html
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/Laravel-Lang/lang
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/Laravel-Lang/lang/blob/15.38.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/Laravel-Lang/lang/blob/15.38.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/Laravel-Lang/lang/blob/15.38.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/Laravel-Lang/lang/blob/15.38.0/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/Laravel-Lang/lang/blob/15.38.0/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://laravel-lang.com/packages-lang.html
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/Laravel-Lang/lang/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/Laravel-Lang/lang/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel-lang/lang.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/Laravel-Lang/lang
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/Laravel-Lang/lang/contributors
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel-lang/lang.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel-lang%2Flang
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel-lang%2Flang
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

Laravel Lang is a Composer package of translations for the language keys used by Laravel Framework and the official Laravel packages, among them Jetstream, Fortify, Cashier, Breeze, Nova and UI. It is installed as a development dependency, and an Artisan command, lang:update, updates the localizations an application already has.

The [documentation page](https://laravel-lang.com/packages-lang.html) suggests calling that command from the post-update-cmd section of composer.json, so the translations follow dependency updates.
