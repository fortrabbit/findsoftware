---
id: wink
name: Wink
urls:
  repository: https://github.com/themsaid/wink
  docs: https://github.com/themsaid/wink/blob/1.x/readme.md
category:
  - cms
description: Publishing package for Laravel that adds a back-end interface for managing posts, pages, tags and authors.
status: active
maintainer: Mohamed Said
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.3
basedOn:
  - laravel
contentStore:
  - database
adminUi: true
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-05-09
githubStargazers: 2925
packagistDownloads: 105784
packagistMonthlyDownloads: 654
dependentRepos: 32
dependentPackages: 3
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/themsaid/wink
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/themsaid/wink/blob/1.x/LICENSE.text
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/themsaid/wink
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/themsaid/wink/blob/1.x/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/themsaid/wink/blob/1.x/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/themsaid/wink
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/themsaid/wink/blob/1.x/readme.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/themsaid/wink/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/themsaid/wink/releases/latest
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/themsaid/wink
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/themsaid/wink
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/themsaid%2Fwink
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/themsaid%2Fwink
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/themsaid/wink/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Wink is a publishing package for Laravel that adds an admin interface for posts, pages, tags and authors. It is installed with Composer into an existing Laravel application, and the [installation steps](https://github.com/themsaid/wink/blob/1.x/readme.md) are in the readme. Wink keeps its content in the database through its own connection and login system, separate from the application's.

The admin interface is at `/wink` on the application's domain. Wink is faceless: the application decides how posts and pages are displayed.
