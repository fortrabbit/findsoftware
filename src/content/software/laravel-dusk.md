---
id: laravel-dusk
name: Laravel Dusk
urls:
  home: https://laravel.com/docs/dusk
  repository: https://github.com/laravel/dusk
  docs: https://laravel.com/docs/dusk
category:
  - testing
description: Browser automation and end-to-end testing API that drives Chrome through a standalone ChromeDriver.
status: active
maintainer: Taylor Otwell
firstRelease: 2017
language: php
runtime:
  - php
runtimeMin: php 8.2
runsAs:
  - local
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-10
githubStargazers: 1947
packagistDownloads: 45239461
contributors: 162
dependentRepos: 3876
dependentPackages: 222
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://laravel.com/docs/dusk
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/laravel/dusk
    checkedAt: 2026-11-16
  - field: urls
    url: https://laravel.com/docs/dusk
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/laravel/dusk/8.x/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://laravel.com/docs/dusk
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://laravel.com/docs/dusk
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://laravel.com/docs/dusk
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/laravel/dusk
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/laravel/dusk/v8.8.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/laravel/dusk/v8.8.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/laravel/dusk/8.x/LICENSE.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/laravel/dusk
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/laravel/dusk/8.x/LICENSE.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://laravel.com/docs/dusk
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/laravel/dusk/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/dusk/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/dusk.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/dusk
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/laravel/dusk/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/dusk.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fdusk
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fdusk
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

Laravel Dusk is a PHP package that provides a browser automation and testing API. It drives Google Chrome through a standalone ChromeDriver binary, which the dusk:install Artisan command installs, so no Java or Selenium server is needed by default. It is added with Composer as a development dependency, and the [Laravel documentation](https://laravel.com/docs/dusk) describes writing and running the tests.

## Worth knowing

The Laravel documentation recommends Pest for browser testing in new projects, citing the browser testing that Pest includes. The documentation says that a manually registered Dusk service provider must never be registered in a production environment.
