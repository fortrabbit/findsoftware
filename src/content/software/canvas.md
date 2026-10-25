---
id: canvas
name: Canvas
urls:
  home: https://trycanvas.app
  repository: https://github.com/austintoddj/canvas
  docs: https://github.com/austintoddj/canvas/blob/main/docs/installation.md
category:
  - cms
description: Publishing platform package for Laravel applications, with an admin interface for writing posts and an optional starter blog reader.
status: active
maintainer: Todd Austin
maintainerType: individual
firstRelease: 2016
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
contentStore:
  - database
adminUi: true
templating: blade
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-10-19
githubStargazers: 3357
packagistDownloads: 138150
packagistMonthlyDownloads: 3991
dependentRepos: 10
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://trycanvas.app/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/austintoddj/canvas
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/austintoddj/canvas/blob/main/docs/installation.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/austintoddj/canvas/blob/main/license
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/austintoddj/canvas/blob/main/readme.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/austintoddj/canvas/blob/main/readme.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/austintoddj/canvas
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/austintoddj/canvas/blob/v7.2.4/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/austintoddj/canvas/blob/v7.2.4/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/austintoddj/canvas/blob/main/docs/installation.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/austintoddj/canvas/blob/main/docs/content.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/austintoddj/canvas/blob/main/docs/content.md
    checkedAt: 2026-10-20
  - field: templating
    url: https://trycanvas.app/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/austintoddj/canvas/blob/main/readme.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://packagist.org/packages/austintoddj/canvas
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/austintoddj/canvas/releases/tag/v7.2.4
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://github.com/austintoddj/canvas/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/austintoddj/canvas
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/austintoddj/canvas
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/austintoddj%2Fcanvas
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/austintoddj/canvas/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Canvas adds a publishing admin to an existing Laravel application. It is installed with Composer, keeps published content in the application's database, and separates contributor, editor and admin roles in its admin interface. An optional starter reader frontend renders a public blog from Blade views that the site owner can customize. The [installation guide](https://github.com/austintoddj/canvas/blob/main/docs/installation.md) describes the setup.

## Worth knowing

The [content guide](https://github.com/austintoddj/canvas/blob/main/docs/content.md) calls Canvas headless, but its JSON routes serve only the admin interface and are not a public blog API. A public site reads posts through Canvas's Eloquent models or an API the site owner builds.
