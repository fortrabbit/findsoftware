---
id: chubbyphp
name: chubbyphp-framework
urls:
  repository: https://github.com/chubbyphp/chubbyphp-framework
  docs: https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md
category:
  - framework
description: PSR-15 middleware microframework for PHP, built on PSR-7 and PSR-17 HTTP interfaces.
status: active
maintainer: Dominik Zogg
firstRelease: 2019
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-09-05
githubStargazers: 136
packagistDownloads: 48254
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/chubbyphp/chubbyphp-framework
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/chubbyphp/chubbyphp-framework/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/chubbyphp/chubbyphp-framework.json
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/chubbyphp/chubbyphp-framework
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/chubbyphp/chubbyphp-framework
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/chubbyphp/chubbyphp-framework.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/chubbyphp/chubbyphp-framework.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/chubbyphp/chubbyphp-framework
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/chubbyphp/chubbyphp-framework.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

chubbyphp-framework is a PHP microframework that handles HTTP through PSR-7 messages, PSR-15 request handlers and middleware, and PSR-17 factories. An application is a middleware pipe: the [README](https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md) example passes an exception middleware, a route matcher middleware and a callback request handler to the application, then emits the response built from the global request. An optional `ApplicationBuilder` facade wires the same pipe.

Routing sits in a separate package. The README names chubbyphp-framework-router-fastroute and chubbyphp-framework-router-symfony as routers that implement the framework's route matcher interface, and it lists several PSR-7 implementations that can be installed alongside.

## Worth knowing

The README's Server section lists Nginx, ReactPHP, RoadRunner, Swoole and Workerman, and marks the built-in PHP server as development only. It links migration guides between major versions and one from Slim.
