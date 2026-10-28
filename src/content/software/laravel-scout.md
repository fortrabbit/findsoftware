---
id: laravel-scout
name: Laravel Scout
urls:
  home: https://laravel.com/docs/scout
  repository: https://github.com/laravel/scout
  docs: https://laravel.com/docs/scout
category:
  - search
description: Laravel package that adds full-text search to Eloquent models and keeps search indexes in sync with model changes through database and third-party engines.
status: active
maintainer: Taylor Otwell
firstRelease: 2016
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
basedOn:
  - laravel
databases:
  - mysql
  - postgres
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-10-06
githubStargazers: 1680
packagistDownloads: 65542706
contributors: 184
dependentRepos: 3000
dependentPackages: 453
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://laravel.com/docs/scout
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/laravel/scout
    checkedAt: 2026-10-28
  - field: urls
    url: https://laravel.com/docs/scout
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/laravel/scout/v11.9.0/LICENSE.md
    checkedAt: 2026-10-28
  - field: category
    url: https://laravel.com/docs/scout
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://laravel.com/docs/scout
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/laravel/scout
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/laravel/scout/v11.9.0/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/laravel/scout/v11.9.0/composer.json
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/laravel/scout/v11.9.0/composer.json
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/laravel/scout/v11.9.0/LICENSE.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/laravel/scout/v11.9.0/LICENSE.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://laravel.com/docs/scout
    checkedAt: 2026-10-28
  - field: databases
    url: https://laravel.com/docs/scout
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/laravel/scout/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/scout/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/scout.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/scout
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/laravel/scout/contributors
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/scout.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fscout
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fscout
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Laravel Scout is a PHP package that adds full-text search to the Eloquent models of a Laravel application. It is installed with Composer and documented on the [Laravel documentation site](https://laravel.com/docs/scout) alongside the framework.

Scout ships with a database engine that searches the application's own tables on MySQL or PostgreSQL, so no separate search service is needed to start. The docs also describe engines for third-party search services, including Algolia, Meilisearch, Typesense and Turbopuffer, plus a collection engine for prototypes and tests.
