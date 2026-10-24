---
id: coaster-cms
name: Coaster CMS
urls:
  home: https://www.coastercms.org
  repository: https://github.com/CoasterCms/coastercms
  docs: https://www.coastercms.org/docs
category:
  - cms
description: Laravel-based PHP content management system that stores its content in MySQL.
status: stub
maintainer: Web-Feet Ltd
maintainerType: company
hqCountry: GB
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
basedOn:
  - laravel
contentStore:
  - database
databases:
  - mysql
adminUi: true
templating: blade
installMethod: composer create-project
licenseModel: open-source
license: GPL-3.0-or-later, GPL-3.0
currentMajor: "8"
latestReleaseDate: 2020-11-27
githubStargazers: 387
packagistDownloads: 654
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.coastercms.org/contact
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.coastercms.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/CoasterCms/coastercms
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.coastercms.org/docs
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.coastercms.org/contact
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://www.coastercms.org/contact
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/CoasterCms/coastercms/blob/8.x/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/CoasterCms/coastercms/blob/8.x/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/CoasterCms/coastercms
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/CoasterCms/coastercms/blob/8.x/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/CoasterCms/coastercms/blob/8.x/composer.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/CoasterCms/coastercms/blob/8.x/README.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://www.coastercms.org/blog/where-data-is-stored-in-coaster-cms/
    checkedAt: 2026-10-20
  - field: templating
    url: https://www.coastercms.org
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.coastercms.org/docs
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/CoasterCms/coastercms/blob/8.x/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/coastercms/coastercms.json
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/CoasterCms/coastercms
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/CoasterCms/coastercms/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/CoasterCms/coastercms/releases/latest
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/coastercms/coastercms.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/CoasterCms/coastercms
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Coaster CMS is a content management system built on the Laravel framework, with templates in Laravel's Blade engine and content in MySQL. The [developer post on data storage](https://www.coastercms.org/blog/where-data-is-stored-in-coaster-cms/) describes the tables that hold each page's blocks, global blocks and repeater rows. Editors add and change pages in the browser, and permissions are assigned to user groups.

## Worth knowing

The Composer package moved from web-feet/coastercms to coastercms/coastercms. The Windows install page on the project's site still names the old package, which Packagist marks abandoned.
