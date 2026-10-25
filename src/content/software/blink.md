---
id: blink
name: Blink
urls:
  repository: https://github.com/bixuehujin/blink
  docs: https://docs.rethinkphp.com/blink-framework/v0.4/en/
category:
  - framework
description: PHP micro web framework and application server built on the Swoole extension.
status: stub
maintainer: Jin Hu
maintainerType: individual
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.6
runsAs:
  - always-on
  - per-request
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2019-07-28
githubStargazers: 831
packagistDownloads: 45581
contributors: 16
packagistMonthlyDownloads: 580
dependentRepos: 5
dependentPackages: 3
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://github.com/bixuehujin/blink/blob/v1/README.md
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/bixuehujin/blink
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/bixuehujin/blink/blob/v1/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/bixuehujin/blink/blob/v1/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/bixuehujin/blink/blob/v1/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/bixuehujin/blink
    checkedAt: 2026-10-20
  - field: runtime
    url: https://api.github.com/repos/bixuehujin/blink
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/blink/blink.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/bixuehujin/blink/blob/v1/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/bixuehujin/blink/blob/v1/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/bixuehujin/blink/blob/v1/docs/en/5-3-deployment.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/bixuehujin/blink/blob/v1/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/blink/blink.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/bixuehujin/blink/releases/latest
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://api.github.com/repos/bixuehujin/blink/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/bixuehujin/blink
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/bixuehujin/blink/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/blink/blink.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/blink/blink.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/blink%2Fblink
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/blink%2Fblink
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/blink/blink/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Blink is a micro web framework and application server for PHP, built for long-running services. It can serve HTTP requests directly in PHP through the Swoole extension, without php-fpm or Apache's mod_php, and it can also be deployed under PHP-FPM or Apache. A project is created with Composer from the blink/seed package, as the [README](https://github.com/bixuehujin/blink/blob/v1/README.md) describes. The documentation is published in English and Chinese.

## Worth knowing

Running Blink as a server needs the Swoole PHP extension, according to the installation guide. The README states that the project is still in active development; the record shows the last release date and does not decide whether the project is active.
