---
id: php-msf
name: PHP-MSF
urls:
  repository: https://github.com/pinguo/php-msf
  docs: https://pinguo.gitbooks.io/php-msf-docs/
category:
  - framework
description: PHP microservice framework that runs on the Swoole extension as a long-running coroutine HTTP server.
status: stub
maintainer: Chengdu PinGuo Technology Co., Ltd.
maintainerType: company
hqCountry: CN
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.0
databases:
  - mysql
  - mongodb
runsAs:
  - always-on
installMethod: composer
licenseModel: open-source
license: GPL-2.0
currentMajor: "3"
latestReleaseDate: 2018-06-13
githubStargazers: 1722
packagistDownloads: 4239
contributors: 20
packagistMonthlyDownloads: 48
dependentRepos: 1
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://api.github.com/repos/pinguo/php-msf
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/pinguo
    checkedAt: 2026-10-21
  - field: hqCountry
    url: https://github.com/pinguo
    checkedAt: 2026-10-21
  - field: databases
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/pinguo/php-msf/blob/3.0.6/composer.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/pinguo/php-msf/blob/3.0.6/composer.json
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/pinguo/php-msf
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/pinguo/php-msf/blob/master/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://api.github.com/repos/pinguo/php-msf/releases/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/pinguo/php-msf/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/pinguo/php-msf
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/pinguo/php-msf/contributors
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/pinguo/php-msf.json
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/pinguo/php-msf.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/pinguo%2Fphp-msf
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/pinguo/php-msf/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

PHP-MSF is a microservice framework for PHP built on the Swoole extension. Its code stays resident in memory, and the application is an HTTP server that keeps running and serving requests.

## Worth knowing

The README lists the Swoole extension as a requirement, so the framework cannot run where that extension is unavailable.
