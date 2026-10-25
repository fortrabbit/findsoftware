---
id: restler
name: Restler
urls:
  home: https://www.luracast.com/restler/
  repository: https://github.com/Luracast/Restler
  docs: https://github.com/Luracast/Restler/blob/6.0.3/SETUP.md
category:
  - framework
  - backend
description: PHP framework that exposes the public methods of PHP classes as REST API endpoints.
status: active
maintainer: Luracast
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
runsAs:
  - per-request
  - always-on
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-08-19
githubStargazers: 1386
packagistDownloads: 588089
contributors: 2
packagistMonthlyDownloads: 7748
dependentRepos: 52
dependentPackages: 6
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://www.luracast.com/restler/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/Luracast/Restler
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/Luracast/Restler/blob/6.0.3/SETUP.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/Luracast/Restler/blob/6.0.3/composer.json
    checkedAt: 2026-10-21
  - field: category
    url: https://www.luracast.com/restler/
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/Luracast/Restler
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/Luracast/Restler/blob/6.0.3/SETUP.md
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/Luracast/Restler/blob/6.0.3/SETUP.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/Luracast/Restler/blob/6.0.3/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/Luracast/Restler/blob/6.0.3/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/Luracast/Restler/blob/6.0.3/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/Luracast/Restler/blob/6.0.3/composer.json
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/Luracast/Restler/blob/6.0.3/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://repo.packagist.org/p2/luracast/restler.json
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/Luracast/Restler/releases/tags/6.0.3
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/Luracast/Restler
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/Luracast/Restler/contributors?anon=true
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/luracast/restler.json
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/luracast/restler.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/luracast%2Frestler
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/luracast%2Frestler
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/luracast/restler/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Restler is a PHP framework for building REST API servers. Developers write ordinary PHP classes, and the public methods of those classes become URLs. Luracast maintains the project.

With a traditional web server, PHP-FPM starts Restler for each request, as the [README's production deployment section](https://github.com/Luracast/Restler/blob/6.0.3/README.md) describes. The README also describes a second option: a persistent server process under the Swoole or OpenSwoole extension, which keeps connections open and includes its own HTTP server.

## Worth knowing

The Swoole and OpenSwoole mode is a long-running process, so it needs a host that keeps a process running.
