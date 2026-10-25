---
id: tastyigniter
name: TastyIgniter
urls:
  home: https://tastyigniter.com
  repository: https://github.com/tastyigniter/TastyIgniter
  docs: https://tastyigniter.com/docs
  plugins: https://tastyigniter.com/marketplace
category:
  - e-commerce
description: Open-source online ordering and table reservation system for restaurants, built on Laravel.
status: active
maintainer: Igniter Labs Ltd
maintainerType: company
hqCountry: GB
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
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - rest
templating: blade
runsAs:
  - per-request
  - scheduled
installMethod: setup wizard, composer create-project tastyigniter/tastyigniter, composer require tastyigniter/core
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-12
githubStargazers: 3803
packagistDownloads: 47725
contributors: 33
packagistMonthlyDownloads: 6130
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://tastyigniter.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://tastyigniter.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/tastyigniter/TastyIgniter
    checkedAt: 2026-10-20
  - field: urls
    url: https://tastyigniter.com
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://tastyigniter.com/terms-and-conditions
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://tastyigniter.com/terms-and-conditions
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://tastyigniter.com/terms-and-conditions
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/tastyigniter/TastyIgniter
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://tastyigniter.com
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/tastyigniter/TastyIgniter
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/tastyigniter/tastyigniter.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/tastyigniter/tastyigniter.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://tastyigniter.com/docs/installation
    checkedAt: 2026-10-20
  - field: databases
    url: https://tastyigniter.com/docs/installation
    checkedAt: 2026-10-20
  - field: databases
    url: https://tastyigniter.com/docs/installation
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://tastyigniter.com/docs/customize/permissions
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://tastyigniter.com/docs/extensions/api
    checkedAt: 2026-10-20
  - field: templating
    url: https://tastyigniter.com/docs/customize/markup-guide
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://tastyigniter.com/docs/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://tastyigniter.com/docs/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://tastyigniter.com/docs/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/tastyigniter/TastyIgniter
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/tastyigniter/core.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/tastyigniter/TastyIgniter/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/tastyigniter/TastyIgniter
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/tastyigniter/TastyIgniter/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/tastyigniter/core.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/tastyigniter/core.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://tastyigniter.com/marketplace
    checkedAt: 2026-10-20
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/tastyigniter/core/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

TastyIgniter is an online ordering and table reservation system for restaurants, written in PHP and built on Laravel. Its admin panel grants access through staff roles and their permissions, and a REST API is provided as an extension. Views use Blade templates.

The [installation guide](https://tastyigniter.com/docs/installation) describes three paths: a setup wizard for shared hosting, a stand-alone install with Composer, and a package install inside an existing Laravel application. Data is stored in a database, which the guide names as MySQL, MariaDB or PostgreSQL depending on the path.

Scheduled tasks run from a cron entry that starts the Laravel scheduler, and the guide describes a queue worker for production.

## Worth knowing

The [marketplace](https://tastyigniter.com/marketplace) offers free and premium extensions and themes beyond the core.
