---
id: workerman
name: Workerman
urls:
  home: https://www.workerman.net
  repository: https://github.com/walkor/workerman
  docs: https://www.workerman.net/doc/workerman/
category:
  - web-server
description: Asynchronous, event-driven PHP framework for building network servers that handle HTTP, WebSocket and custom socket protocols.
status: active
maintainer: 成都风禾网络科技有限公司
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
runsAs:
  - always-on
installMethod: composer require workerman/workerman
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-09
githubStargazers: 11543
packagistDownloads: 3779753
contributors: 129
packagistMonthlyDownloads: 165436
dependentRepos: 772
dependentPackages: 290
social:
  forum: https://www.workerman.net/questions
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://www.workerman.net/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/walkor/workerman
    checkedAt: 2026-10-21
  - field: urls
    url: https://www.workerman.net/doc/workerman/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://www.workerman.net/
    checkedAt: 2026-10-21
  - field: maintainerType
    url: https://www.workerman.net/
    checkedAt: 2026-10-21
  - field: category
    url: https://www.workerman.net/
    checkedAt: 2026-10-21
  - field: category
    url: https://repo.packagist.org/p2/workerman/workerman.json
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/walkor/workerman
    checkedAt: 2026-10-21
  - field: runtime
    url: https://repo.packagist.org/p2/workerman/workerman.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://repo.packagist.org/p2/workerman/workerman.json
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://www.workerman.net/doc/workerman/install/install.html
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://www.workerman.net/doc/workerman/install/start-and-stop.html
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/walkor/workerman
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://repo.packagist.org/p2/workerman/workerman.json
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/walkor/workerman/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/walkor/workerman
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/walkor/workerman/contributors
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/workerman/workerman.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/workerman%2Fworkerman
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/workerman%2Fworkerman
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/workerman/workerman/stats.json
    checkedAt: 2026-10-25
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Workerman is a PHP framework for building network servers. It handles TCP, UDP and UNIX socket connections, HTTP and HTTPS, WebSocket and WSS, and custom protocols. It is installed with Composer, and the [installation guide](https://www.workerman.net/doc/workerman/install/install.html) gives the command. The project's pages are in Chinese.

## Worth knowing

Workerman runs as a long-lived process. The [start and stop page](https://www.workerman.net/doc/workerman/install/start-and-stop.html) describes a daemon mode that keeps running after the terminal closes, so a host has to allow a PHP process to keep running.

On Linux and macOS the requirements page lists the pcntl and posix PHP extensions; for the Windows version it lists no extensions.
