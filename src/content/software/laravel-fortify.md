---
id: laravel-fortify
name: Laravel Fortify
urls:
  home: https://laravel.com/framework/docs/fortify
  repository: https://github.com/laravel/fortify
  docs: https://laravel.com/framework/docs/fortify
category:
  - auth
description: Laravel package that registers the backend routes and controllers for authentication features such as login, registration and password reset, without a user interface.
status: active
maintainer: Taylor Otwell
firstRelease: 2020
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
currentMajor: "1"
latestReleaseDate: 2026-11-10
githubStargazers: 1763
packagistDownloads: 77013575
contributors: 137
dependentRepos: 8478
dependentPackages: 138
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://laravel.com/framework/docs/fortify
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/laravel/fortify
    checkedAt: 2026-11-16
  - field: urls
    url: https://laravel.com/framework/docs/fortify
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/laravel/fortify/blob/v1.42.0/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://laravel.com/framework/docs/fortify
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://laravel.com/framework/docs/fortify
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/laravel/fortify
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/laravel/fortify/blob/v1.42.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/laravel/fortify/blob/v1.42.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/laravel/fortify/blob/v1.42.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/laravel/fortify/blob/v1.42.0/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/laravel/fortify/blob/v1.42.0/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://laravel.com/framework/docs/fortify
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/laravel/fortify/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/fortify/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/fortify.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/fortify
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/laravel/fortify/contributors
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/fortify.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Ffortify
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Ffortify
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
---

Laravel Fortify is a Laravel package that registers the routes and controllers for authentication, including login, registration, password reset and email verification. The [Laravel documentation](https://laravel.com/framework/docs/fortify) calls it a headless authentication library and says it provides no user interface, so an application pairs it with its own screens that make requests to those routes.

Two-factor authentication with time-based codes and passkeys are among the features the documentation describes alongside the core routes.

## Worth knowing

The documentation says Laravel's starter kits use Fortify internally, and that Fortify and Laravel Sanctum are not mutually exclusive or competing packages.
