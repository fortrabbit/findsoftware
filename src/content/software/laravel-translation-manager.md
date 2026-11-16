---
id: laravel-translation-manager
name: Laravel Translation Manager
urls:
  repository: https://github.com/barryvdh/laravel-translation-manager
category:
  - library
description: Laravel package that imports a project's translation files into a database, edits them in a web interface and exports them back.
status: active
maintainer: Barry vd. Heuvel
maintainerType: individual
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - laravel
contentStore:
  - database
adminUi: true
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-03-19
githubStargazers: 1703
packagistDownloads: 4224165
contributors: 75
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/barryvdh/laravel-translation-manager/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/barryvdh/laravel-translation-manager.json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/barryvdh/laravel-translation-manager/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/barryvdh/laravel-translation-manager/blob/v0.6.9/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/barryvdh/laravel-translation-manager/blob/v0.6.9/composer.json
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/barryvdh/laravel-translation-manager/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/barryvdh/laravel-translation-manager/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: contentStore
    url: https://github.com/barryvdh/laravel-translation-manager/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: adminUi
    url: https://github.com/barryvdh/laravel-translation-manager/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager/tags
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/barryvdh/laravel-translation-manager/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/barryvdh/laravel-translation-manager.json
    checkedAt: 2026-11-16
ai: authored
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Laravel Translation Manager is a Laravel package for managing a project's translation files through a database. It reads the translation files of a Laravel application into database rows, lets the strings be edited in a web interface inside the application, and writes the results back to the files. Translation keys can also be found by scanning the application's PHP and Twig sources. The package works alongside Laravel's own translation system and does not replace it.

## Worth knowing

The export step overwrites the translation files and removes their comments, so the README advises a backup first. The README describes the package as still very alpha, and its TODO list names features still missing.
