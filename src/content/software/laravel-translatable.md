---
id: laravel-translatable
name: Laravel Translatable
urls:
  home: https://spatie.be/docs/laravel-translatable
  repository: https://github.com/spatie/laravel-translatable
  docs: https://spatie.be/docs/laravel-translatable/v6/installation-setup
category:
  - library
description: Trait that makes Eloquent models translatable, storing the translations as JSON in the model's own columns.
status: active
maintainer: Spatie bvba
firstRelease: 2016
hqCountry: BE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
databases:
  - mysql
  - mariadb
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-19
githubStargazers: 2462
packagistDownloads: 33920496
contributors: 85
social:
  x: https://x.com/spatie_be
  bluesky: https://bsky.app/profile/spatie.be
  mastodon: https://phpc.social/@spatie
  youtube: https://www.youtube.com/channel/UCoBbei3S9JLTcS2VeEOWDeQ
  instagram: https://www.instagram.com/spatie_be
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://spatie.be/docs/laravel-translatable
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/spatie/laravel-translatable
    checkedAt: 2026-11-16
  - field: urls
    url: https://spatie.be/docs/laravel-translatable/v6/installation-setup
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/spatie/laravel-translatable/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://spatie.be/disclaimer
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/spatie/laravel-translatable/releases?per_page=100
    checkedAt: 2026-11-16
  - field: category
    url: https://spatie.be/docs/laravel-translatable/v6/introduction
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/spatie/laravel-translatable
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/spatie/laravel-translatable/blob/6.15.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/spatie/laravel-translatable/blob/6.15.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://spatie.be/docs/laravel-translatable/v6/installation-setup
    checkedAt: 2026-11-16
  - field: databases
    url: https://spatie.be/docs/laravel-translatable/v6/requirements
    checkedAt: 2026-11-16
  - field: databases
    url: https://spatie.be/docs/laravel-translatable/v6/basic-usage/querying-translations
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/spatie/laravel-translatable/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/spatie/laravel-translatable/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/spatie/laravel-translatable/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/spatie/laravel-translatable/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/spatie/laravel-translatable
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/spatie/laravel-translatable/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/spatie/laravel-translatable.json
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Laravel Translatable adds the HasTranslations trait to Eloquent models, so that chosen attributes keep one value per locale. The translations are stored as JSON in the model's own columns, and no table of its own is needed. A model declares its translatable attributes with the Translatable attribute or a $translatable property. The trait then writes and reads one locale with setTranslation and getTranslation, and filters records by locale with queries such as whereLocale. The package requires Laravel.

## Worth knowing

Each translatable column has to be a JSON column. The installation page says text columns can stand in where the database has no JSON type. Case-insensitive search across translations depends on the database, and SQLite converts only ASCII letters.
