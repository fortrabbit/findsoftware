---
id: phinx
name: Phinx
urls:
  home: https://phinx.org
  repository: https://github.com/cakephp/phinx
  docs: https://phinx.org/docs/
category:
  - library
description: PHP library and command-line tool for writing and running database migrations in PHP apps.
status: active
maintainer: Cake Software Foundation, Inc.
maintainerType: foundation
firstRelease: 2012
language: php
runtime:
  - php
runtimeMin: php 8.1
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
runsAs:
  - local
installMethod: composer, phar
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-03
githubStargazers: 4545
packagistDownloads: 53556343
contributors: 307
packagistMonthlyDownloads: 1263164
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://phinx.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/cakephp/phinx
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/cakephp/phinx/blob/0.x/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/cakephp/phinx/blob/0.x/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/cakephp/phinx/blob/0.x/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/cakephp/phinx
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/cakephp/phinx/blob/0.16.12/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/cakephp/phinx/blob/0.16.12/composer.json
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/cakephp/phinx/blob/0.x/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/cakephp/phinx/blob/0.x/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/cakephp/phinx/blob/0.x/README.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://phinx.org/
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/robmorgan/phinx.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/robmorgan/phinx.json
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/cakephp/phinx
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/cakephp/phinx/blob/0.x/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/cakephp/phinx/releases/tags/0.16.12
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/cakephp/phinx/releases/tags/0.16.12
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/robmorgan/phinx.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/cakephp/phinx
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/cakephp/phinx/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Phinx is a PHP library and command-line tool for writing and running database migrations. Migrations are written as database-agnostic PHP code or as SQL, run up and down, and can seed data after the database is created. The homepage says Phinx executes from the command line, so it fits into deploy, build and CI tools. The [docs](https://phinx.org/docs/) cover setup and use.

## Worth knowing

The README's Limitations section says the PostgreSQL adapter cannot set a unique constraint on a table.
