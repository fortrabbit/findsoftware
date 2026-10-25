---
id: typicms
name: TypiCMS
urls:
  home: https://typicms.org
  repository: https://github.com/typicms/typicms
category:
  - cms
description: Modular multilingual content management system built with Laravel for pages, news, events and other structured content.
status: active
maintainer: Samuel De Backer
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
basedOn:
  - laravel
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
i18n: yes, locale-prefixed URLs
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "17"
latestReleaseDate: 2026-10-02
githubStargazers: 1621
packagistDownloads: 230
contributors: 15
packagistMonthlyDownloads: 22
social:
  bluesky: https://typicms.bsky.social
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://typicms.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/typicms/typicms
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/typicms/typicms/blob/main/LICENCE.md
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://github.com/typicms/typicms/blob/main/LICENCE.md
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/typicms/typicms
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: i18n
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/typicms/typicms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/typicms/typicms
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/typicms/typicms.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/typicms/typicms/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/typicms/typicms
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/typicms/typicms/contributors?per_page=100&anon=true
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/typicms/typicms.json
    checkedAt: 2026-10-20
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/typicms/typicms/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

TypiCMS is a modular, multilingual content management system built with Laravel. It manages pages, events, news, menus and other content types through an admin panel, and each content type can be installed as a Composer module. A site is created with `composer create-project typicms/typicms` and keeps its content in a database. Pages are served with locale-prefixed URLs, and the project generates a sitemap, an llms.txt file and Markdown versions of public pages. Samuel De Backer, named in the license, maintains it.

## Worth knowing

Publishing a module copies its source into the project under `Modules/` and removes its Composer package, so the site then carries that module's code itself.
