---
id: laravel-valet
name: Laravel Valet
urls:
  repository: https://github.com/laravel/valet
  docs: https://laravel.com/docs/valet
category:
  - dev-tool
description: Development environment for Laravel sites on macOS that serves each site on a .test domain through Nginx and DnsMasq.
status: active
maintainer: Taylor Otwell
firstRelease: 2016
language: php
runtime:
  - php
runtimeMin: php 7.1
runsAs:
  - local
installMethod: composer global require
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-03-10
githubStargazers: 2606
packagistDownloads: 926431
contributors: 202
dependentRepos: 33
dependentPackages: 13
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/laravel/valet
    checkedAt: 2026-10-28
  - field: urls
    url: https://laravel.com/docs/valet
    checkedAt: 2026-10-28
  - field: category
    url: https://laravel.com/docs/valet
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/laravel/valet
    checkedAt: 2026-10-28
  - field: runtime
    url: https://laravel.com/docs/valet
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/laravel/valet/blob/v4.12.0/composer.json
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://laravel.com/docs/valet
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://laravel.com/docs/valet
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/laravel/valet
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/laravel/valet/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/laravel/valet/releases/tag/v4.12.0
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/laravel/valet/releases/tag/v4.12.0
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/laravel/valet/releases/tag/v1.1.3
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/laravel/valet/main/composer.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/valet
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/laravel/valet/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/valet.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel/valet
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel/valet
    checkedAt: 2026-10-28
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

Laravel Valet is a development environment for Laravel applications on macOS. It runs Nginx in the background when the Mac starts and uses DnsMasq to point requests for the .test domain at sites on the developer's own machine. Valet is installed as a global Composer package, and its docs say it requires macOS and Homebrew.

## Worth knowing

The docs also point to Laravel Herd, which includes Valet, PHP and Composer, for developers who want the same setup on macOS or Windows.
