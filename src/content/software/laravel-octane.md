---
id: laravel-octane
name: Laravel Octane
urls:
  home: https://laravel.com/framework/docs/octane
  repository: https://github.com/laravel/octane
  docs: https://laravel.com/framework/docs/octane
category:
  - web-server
description: Laravel package that boots a Laravel application once and serves it through FrankenPHP, RoadRunner or Swoole application servers.
status: active
maintainer: Taylor Otwell
maintainerType: individual
firstRelease: 2021
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - laravel
runsAs:
  - always-on
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-14
githubStargazers: 4051
packagistDownloads: 36604932
contributors: 130
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://laravel.com/framework/docs/octane
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/laravel/octane
    checkedAt: 2026-10-29
  - field: urls
    url: https://laravel.com/framework/docs/octane
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/laravel/octane/blob/2.x/LICENSE.md
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://github.com/laravel/octane/blob/2.x/LICENSE.md
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/octane.json
    checkedAt: 2026-10-29
  - field: category
    url: https://github.com/laravel/octane/blob/2.x/README.md
    checkedAt: 2026-10-29
  - field: language
    url: https://github.com/laravel/octane
    checkedAt: 2026-10-29
  - field: runtime
    url: https://github.com/laravel/octane/blob/v2.22.0/composer.json
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://github.com/laravel/octane/blob/v2.22.0/composer.json
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/laravel/octane/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/laravel/octane/releases/tag/v2.22.0
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/laravel/octane
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/laravel/octane/blob/2.x/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://laravel.com/framework/docs/octane
    checkedAt: 2026-10-29
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/octane.json
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://github.com/laravel/octane
    checkedAt: 2026-10-29
  - field: contributors
    url: https://github.com/laravel/octane/graphs/contributors
    checkedAt: 2026-10-29
  - field: basedOn
    url: https://github.com/laravel/octane/blob/v2.22.0/composer.json
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://laravel.com/framework/docs/octane
    checkedAt: 2026-10-29
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

Laravel Octane is a Laravel package that serves a Laravel application through a high-powered application server. It boots the application once and keeps it in memory, then passes requests to it. The package is installed with Composer. Its README names FrankenPHP, Open Swoole, Swoole and RoadRunner as the servers it can run on, and each of them is a separate project.

## Worth knowing

The docs advise running a process monitor such as Supervisor in production, so that the Octane server stays running rather than starting for each request.
