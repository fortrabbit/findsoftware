---
id: medoo
name: Medoo
urls:
  home: https://medoo.in
  repository: https://github.com/catfan/Medoo
  docs: https://medoo.in/doc
category:
  - library
description: PHP database framework with a query API for MySQL, MariaDB, PostgreSQL, SQLite, SQL Server and Oracle.
status: active
maintainer: Angel Lai
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.3
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
  - sqlserver
  - oracle
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-19
githubStargazers: 4947
packagistDownloads: 1667579
contributors: 16
packagistMonthlyDownloads: 33159
dependentRepos: 679
dependentPackages: 214
social:
  x: https://x.com/MedooPHP
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://medoo.in/
    checkedAt: 2026-11-16
  - field: urls
    url: https://medoo.in/doc
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/catfan/Medoo
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/catfan/Medoo/blob/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/catfan/Medoo/commits/8ac0badbeaf384d177e9af5cdd40a81c7f42198f
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/catfan/Medoo/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/catfan/Medoo
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/catfan/Medoo/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/catfan/Medoo/blob/v2.6.1/composer.json
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/catfan/Medoo/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/catfan/Medoo
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/catfan/Medoo/blob/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/catfan/Medoo/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/catfan/Medoo/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://medoo.in/api/new
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/catfan/Medoo/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/catfan/Medoo/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/catfan/Medoo
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/catfan/Medoo/contributors?per_page=1&anon=false
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/catfan/medoo.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/catfan/medoo.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/catfan%2Fmedoo
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/catfan%2Fmedoo
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

Medoo is a PHP library that acts as a middle layer between application code and an SQL database. Code creates a connection object from a configuration array and calls methods such as insert and select on it.
Medoo works through PHP's PDO extension, so the PDO driver for the chosen database has to be installed and enabled on the server. The README says Medoo fits into Laravel, CodeIgniter, Yii, Slim and other PHP frameworks; it is not built on any of them.
