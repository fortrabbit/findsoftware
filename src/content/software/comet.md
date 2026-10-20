---
id: comet
name: Comet
urls:
  repository: https://github.com/gotzmann/comet
  docs: https://github.com/gotzmann/comet/blob/master/README.md
category:
  - framework
description: PHP framework for building REST APIs, CRUDs, admin panels and microservices, served by its own HTTP server.
status: active
maintainer: Serge Gotsuliak
maintainerType: individual
firstRelease: 2020
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.2
basedOn:
  - slim
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2025-08-18
githubStargazers: 684
packagistDownloads: 16739
contributors: 5
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/gotzmann/comet
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/gotzmann/comet/blob/master/LICENSE.md
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/gotzmann/comet.json
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/gotzmann/comet
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/gotzmann/comet/blob/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/gotzmann/comet
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/gotzmann/comet.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/gotzmann/comet.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/gotzmann/comet
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/gotzmann/comet/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/gotzmann/comet.json
    checkedAt: 2026-10-20
figure:
  emoji: 🧱
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Comet is a PHP framework for REST APIs, CRUDs, admin panels and microservices. The README says it is based on components from Guzzle, Slim and Workerman, and it is installed with Composer.

A Comet app starts its own HTTP server from the command line, and that server keeps running to answer requests. The [README](https://github.com/gotzmann/comet/blob/master/README.md) is the project's documentation. It also describes putting Nginx in front of a Comet app as a reverse proxy or load balancer.

## Worth knowing

Because a Comet app is a long-running process that listens on its own host and port, it needs a host that can run such a process.
