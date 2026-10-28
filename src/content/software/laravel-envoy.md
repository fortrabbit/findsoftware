---
id: laravel-envoy
name: Laravel Envoy
urls:
  home: https://laravel.com/docs/envoy
  repository: https://github.com/laravel/envoy
  docs: https://laravel.com/docs/envoy
category:
  - dev-tool
  - build-tool
description: Task runner that executes shell commands on remote servers over SSH, with tasks written in Blade-style syntax and run from a PHP project.
status: active
maintainer: Taylor Otwell
firstRelease: 2014
language: php
runtime:
  - php
runtimeMin: php 7.2
templating: blade
runsAs:
  - local
installMethod: composer require laravel/envoy --dev
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-04-01
githubStargazers: 1613
packagistDownloads: 6446194
contributors: 76
dependentRepos: 248
dependentPackages: 21
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://laravel.com/docs/envoy
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/laravel/envoy
    checkedAt: 2026-10-28
  - field: urls
    url: https://laravel.com/docs/envoy
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/laravel/envoy/blob/2.x/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/envoy.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/laravel/envoy/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/envoy/releases/latest
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/laravel/envoy
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/laravel/envoy/blob/v2.12.2/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/laravel/envoy/blob/v2.12.2/composer.json
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/laravel/envoy/blob/2.x/README.md
    checkedAt: 2026-10-28
  - field: templating
    url: https://laravel.com/docs/envoy
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://laravel.com/docs/envoy
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://laravel.com/docs/envoy
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/laravel/envoy
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/laravel/envoy/blob/2.x/LICENSE.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/envoy
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/laravel/envoy/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/envoy.json
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/envoy.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fenvoy
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fenvoy
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
npmWeeklyDownloads: null
---

Laravel Envoy is a task runner for PHP projects that executes shell commands on remote servers over SSH. The package is added to a project with Composer as a development dependency, and tasks are written in Blade-style syntax. Once installed, the envoy binary is run from the project's vendor/bin directory, so the commands run from the developer's machine against the servers the tasks name. Taylor Otwell holds the copyright and the project is released under the MIT license; the repository belongs to the Laravel organization on GitHub.

## Worth knowing

The project states that it supports macOS and Linux, and that Windows is possible through WSL2. Its composer.json states a PHP constraint of ^7.2 or ^8.0, while its illuminate and symfony requirements list newer major releases; the record keeps the stated constraint.
