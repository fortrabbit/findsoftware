---
id: hypervel
name: Hypervel
urls:
  home: https://hypervel.org
  repository: https://github.com/hypervel/hypervel
  docs: https://hypervel.org/docs/introduction.html
category:
  - framework
description: Laravel-style PHP framework with native coroutine support, for web applications and APIs running on Swoole.
status: active
maintainer: Hypervel
firstRelease: 2025
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
runsAs:
  - always-on
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-08-14
githubStargazers: 631
packagistDownloads: 21617
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/hypervel/hypervel
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/hypervel/hypervel
    checkedAt: 2026-10-20
  - field: urls
    url: https://hypervel.org/docs/introduction.html
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/hypervel/hypervel/blob/0.4/LICENSE
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/hypervel/framework.json
    checkedAt: 2026-10-20
  - field: category
    url: https://hypervel.org/docs/introduction.html
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/hypervel/hypervel
    checkedAt: 2026-10-20
  - field: runtime
    url: https://hypervel.org/docs/deployment.html
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://hypervel.org/docs/deployment.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://hypervel.org/docs/installation.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://hypervel.org/docs/installation.html
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/hypervel/hypervel
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/hypervel/framework.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/hypervel/hypervel/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/hypervel/hypervel
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/hypervel/framework.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/hypervel/framework.json
    checkedAt: 2026-10-20
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Hypervel is a PHP framework that its [introduction](https://hypervel.org/docs/introduction.html) calls Laravel-style, with native coroutine support. It ports many core components from Laravel and keeps their familiar usage patterns. Applications run on the Swoole extension, and the [installation guide](https://hypervel.org/docs/installation.html) creates new projects with Composer from the hypervel/hypervel skeleton.

## Worth knowing

Files stay in memory after the server starts, so the process must be restarted after file changes. The project has not reached a 1.0 release.
