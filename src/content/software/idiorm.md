---
id: idiorm
name: Idiorm
urls:
  home: https://j4mie.github.io/idiormandparis/
  repository: https://github.com/j4mie/idiorm
  docs: https://idiorm.readthedocs.io/en/latest/
category:
  - library
description: Lightweight object-relational mapper and fluent query builder for PHP, built on PDO.
status: stub
maintainer: Simon Holywell
maintainerType: individual
firstRelease: 2010
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.2
databases:
  - sqlite
  - mysql
  - postgres
installMethod: Packagist (Composer), copy idiorm.php into the project
licenseModel: open-source
license: BSD-2-Clause, BSD-3-Clause, BSD-4-Clause
currentMajor: "1"
latestReleaseDate: 2022-07-18
githubStargazers: 1976
packagistDownloads: 1619449
contributors: 41
dependentRepos: 384
dependentPackages: 41
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://j4mie.github.io/idiormandparis/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/j4mie/idiorm
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/j4mie/idiorm/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/j4mie/idiorm/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://j4mie.github.io/idiormandparis/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/j4mie/idiorm/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/j4mie/idiorm
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/j4mie/idiorm/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/j4mie/idiorm/blob/v1.5.8/composer.json
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/j4mie/idiorm/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://idiorm.readthedocs.io/en/latest/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://idiorm.readthedocs.io/en/latest/installation.html
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/j4mie/idiorm/blob/v1.5.8/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/j4mie/idiorm/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/j4mie/idiorm/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/j4mie/idiorm/releases
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/j4mie/idiorm.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/j4mie/idiorm
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/j4mie/idiorm/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/j4mie%2Fidiorm
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/j4mie%2Fidiorm
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

Idiorm maps database rows to PHP objects and builds SQL through chained method calls on top of PDO. It needs no model classes or code generation, and a connection string is enough to start. Queries use prepared statements, collections of records accept chained filters and actions, and each method can be called in camelCase or with the underscore names.

## Worth knowing

The project is in maintenance-only mode. The README says it is feature complete as of version 1.5.0, still receives bug fixes and security patches, and will not accept new features or breaking API changes. For new projects the README recommends the Eloquent database library from Laravel.
