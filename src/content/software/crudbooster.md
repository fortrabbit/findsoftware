---
id: crudbooster
name: CRUDBooster
urls:
  repository: https://github.com/crocodic-studio/crudbooster
  docs: https://github.com/crocodic-studio/crudbooster-doc
category:
  - admin-panel
description: Laravel package that generates CRUD admin pages for database tables, with role-based access and a developer area.
status: discontinued
maintainer: Crocodic Studio
firstRelease: 2016
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
basedOn:
  - laravel
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
adminUi: true
installMethod: composer require, then php artisan crudbooster:install
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2021-07-07
githubStargazers: 1759
packagistDownloads: 157499
contributors: 38
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://github.com/crocodic-studio/crudbooster
    checkedAt: 2026-10-23
  - field: status
    url: https://repo.packagist.org/p2/crocodicstudio/crudbooster.json
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/crocodic-studio/crudbooster
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/crocodic-studio/crudbooster-doc/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://api.github.com/orgs/crocodic-studio
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/crocodic-studio/crudbooster
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://packagist.org/packages/crocodicstudio/crudbooster.json
    checkedAt: 2026-10-23
  - field: runtime
    url: https://repo.packagist.org/p2/crocodicstudio/crudbooster.json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/crocodic-studio/crudbooster/blob/v5.6.2/composer.json
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/crocodic-studio/crudbooster/blob/v5.6.2/composer.json
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/crocodic-studio/crudbooster/blob/v5.6.2/composer.json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/crocodic-studio/crudbooster/blob/v5.6.2/composer.json
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/crocodic-studio/crudbooster/blob/v5.6.2/docs/en/installation.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/crocodic-studio/crudbooster-doc/master/6_0/installation.blade.php
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/crocodic-studio/crudbooster
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/crocodic-studio/crudbooster/releases?per_page=100&page=2
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/crocodic-studio/crudbooster/releases?per_page=100&page=1
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/crocodic-studio/crudbooster/releases?per_page=100&page=1
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/crocodic-studio/crudbooster
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/crocodic-studio/crudbooster/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: packagistDownloads
    url: https://packagist.org/packages/crocodicstudio/crudbooster.json
    checkedAt: 2026-10-23
ai: authored
npmWeeklyDownloads: null
---

CRUDBooster is a Laravel package that generates CRUD admin pages for the tables of a database and adds role-based access on top of them. Each user belongs to a role, and a role grants browse, create, read, update and delete privileges. Composer installs it, and `php artisan crudbooster:install` sets up the assets.

## Worth knowing

The GitHub repository is archived and read-only, and the Packagist package is marked abandoned. The README says v5.x "is no longer supported, move to v7.x", but no v7 release is published in the repository, the organization or on Packagist. The project's domain crudbooster.com is offered for sale, so the project's own site no longer serves the software. The documentation repository holds pages for the 6.0 beta.
