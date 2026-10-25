---
id: webman
name: webman
urls:
  home: https://webman.workerman.net/
  repository: https://github.com/walkor/webman
  docs: https://webman.workerman.net/doc/en/
category:
  - framework
description: PHP HTTP service framework built on the Workerman server, installed with Composer.
status: active
maintainer: walkor
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - workerman
runsAs:
  - always-on
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-02-24
githubStargazers: 2694
packagistDownloads: 99830
contributors: 28
packagistMonthlyDownloads: 2514
dependentRepos: 31
dependentPackages: 51
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: name
    url: https://webman.workerman.net/doc/en/
    checkedAt: 2026-10-21
  - field: urls
    url: https://webman.workerman.net/
    checkedAt: 2026-10-21
  - field: urls
    url: https://webman.workerman.net/doc/en/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/walkor/webman
    checkedAt: 2026-10-21
  - field: license
    url: https://webman.workerman.net/
    checkedAt: 2026-10-21
  - field: category
    url: https://webman.workerman.net/doc/en/
    checkedAt: 2026-10-21
  - field: language
    url: https://webman.workerman.net/doc/en/install.html
    checkedAt: 2026-10-21
  - field: runtime
    url: https://webman.workerman.net/doc/en/install.html
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://repo.packagist.org/p2/workerman/webman.json
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://repo.packagist.org/p2/workerman/webman.json
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/walkor/webman/releases/latest
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://webman.workerman.net/doc/en/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/walkor/webman/blob/master/composer.json
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://webman.workerman.net/doc/en/install.html
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://webman.workerman.net/doc/en/install.html
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/walkor/webman
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/walkor/webman/contributors
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/workerman/webman.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/workerman%2Fwebman
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/workerman%2Fwebman
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/workerman/webman/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

webman is a service framework for PHP, built on the Workerman server. The [install page](https://webman.workerman.net/doc/en/install.html) offers a debug mode that prints output to the terminal and stops with it, and a daemon mode, labeled for production, that keeps the service running after the terminal closes.

## Worth knowing

A production host needs to keep the daemon process running.
