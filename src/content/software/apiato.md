---
id: apiato
name: Apiato
urls:
  home: https://apiato.io/
  repository: https://github.com/apiato/apiato
  docs: https://apiato.io/docs/getting-started/introduction
category:
  - framework
  - backend
description: PHP framework built on Laravel for creating API-centric applications, organized with the Porto architecture pattern.
status: active
maintainer: Mahmoud Zalt
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
databases:
  - mysql
  - sqlite
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2025-10-25
githubStargazers: 3103
packagistDownloads: 387334
contributors: 65
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://apiato.io/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/apiato/apiato
    checkedAt: 2026-10-20
  - field: urls
    url: https://apiato.io/docs/getting-started/introduction
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://apiato.io/
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/apiato/apiato/blob/13.x/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://apiato.io/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/apiato/apiato
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/apiato/apiato/blob/13.x/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/apiato/apiato/blob/13.x/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/apiato/apiato/blob/13.x/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://apiato.io/docs/getting-started/installation
    checkedAt: 2026-10-20
  - field: databases
    url: https://apiato.io/docs/getting-started/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/apiato/apiato
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/apiato/core.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/apiato/core.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/apiato/apiato
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/apiato/apiato/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/apiato/core.json
    checkedAt: 2026-10-20
figure:
  emoji: 🧱
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Apiato is a PHP framework built on Laravel for creating API-centric applications, organized with the Porto architectural pattern. A project is created with `composer create-project apiato/apiato`, and the [installation guide](https://apiato.io/docs/getting-started/installation) describes the Laravel configuration it inherits, with MySQL as the default database and SQLite as an option.

## Worth knowing

The project skeleton requires the apiato/core package, which holds the framework code. The skeleton also requires laravel/passport for OAuth 2.0 authentication.
