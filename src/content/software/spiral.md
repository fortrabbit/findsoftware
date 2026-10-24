---
id: spiral
name: Spiral
urls:
  home: https://spiral.dev
  repository: https://github.com/spiral/framework
  docs: https://spiral.dev/docs
category:
  - framework
description: PHP framework for building web applications and services, which can run on the RoadRunner application server.
status: active
maintainer: Spiral Scout LLC
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
databases:
  - mysql
  - mariadb
  - postgres
  - sqlserver
  - sqlite
templating: stempler, twig
runsAs:
  - per-request
  - always-on
installMethod: composer create-project spiral/app
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-08-05
githubStargazers: 2067
packagistDownloads: 2612768
contributors: 52
social:
  x: https://twitter.com/spiralphp
  discord: https://discord.gg/V6EK4he
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://spiral.dev/
    checkedAt: 2026-10-21
  - field: urls
    url: https://spiral.dev/docs
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/spiral/framework
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://spiralscout.com/
    checkedAt: 2026-10-21
  - field: category
    url: https://spiral.dev/
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/spiral/framework
    checkedAt: 2026-10-21
  - field: runtime
    url: https://repo.packagist.org/p2/spiral/framework.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://repo.packagist.org/p2/spiral/framework.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://spiral.dev/docs/start-installation/current/en
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://spiral.dev/docs/start-installation/current/en
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://spiral.dev/docs/framework-lifecycle/current/en
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://spiral.dev/docs/framework-lifecycle/current/en
    checkedAt: 2026-10-21
  - field: databases
    url: https://spiral.dev/docs/basics-orm/current/en
    checkedAt: 2026-10-21
  - field: templating
    url: https://spiral.dev/docs/start-installation/current/en
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/spiral/framework
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/spiral/framework/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://api.github.com/repos/spiral/framework/releases/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/spiral/framework/releases/latest
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/spiral/framework.json
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/spiral/framework
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/spiral/framework/contributors
    checkedAt: 2026-10-21
ai: authored
npmWeeklyDownloads: null
---

Spiral is a PHP framework for building web applications and services. According to the [lifecycle guide](https://spiral.dev/docs/framework-lifecycle/current/en), it can run behind a traditional Nginx and PHP-FPM setup, or on RoadRunner, an application server that starts its workers once and then passes them requests, so the application stays loaded between requests.

The [installation guide](https://spiral.dev/docs/start-installation/current/en) creates a project with Composer and starts the server with the `rr` binary that RoadRunner provides. Spiral Scout LLC maintains the framework.

## Worth knowing

The database guide says that using SQLite with multiple workers can present significant challenges.
