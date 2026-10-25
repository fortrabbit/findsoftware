---
id: sulu
name: Sulu
urls:
  home: https://sulu.io
  repository: https://github.com/sulu/sulu
  docs: https://docs.sulu.io/3.x/
category:
  - cms
  - headless-cms
description: Open-source digital experience platform and content management system built on Symfony.
status: active
maintainer: Sulu GmbH
maintainerType: company
parent: Schönberger Holding GmbH
hqCountry: AT
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - rest
templating: twig
i18n: yes
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-01
githubStargazers: 1361
packagistDownloads: 1488376
contributors: 198
packagistMonthlyDownloads: 38855
httpArchiveSites: 691
dependentRepos: 126
dependentPackages: 86
social:
  x: https://x.com/sulu
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: urls
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/sulu/sulu
    checkedAt: 2026-10-20
  - field: urls
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://sulu.io/imprint
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://sulu.io/imprint
    checkedAt: 2026-10-20
  - field: parent
    url: https://sulu.io/imprint
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://sulu.io/imprint
    checkedAt: 2026-10-20
  - field: category
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/sulu/sulu
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/sulu/sulu.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/sulu/sulu.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://docs.sulu.io/3.x/book/getting-started.html
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.sulu.io/3.x/book/deployment.html
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://docs.sulu.io/3.x/book/getting-started.html
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://sulu.io/headless--api-first
    checkedAt: 2026-10-20
  - field: templating
    url: https://docs.sulu.io/3.x/book/twig.html
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: i18n
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.sulu.io/3.x/book/getting-started.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.sulu.io/3.x/book/deployment.html
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/sulu/sulu
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://sulu.io
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/sulu/sulu.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/sulu/sulu/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/sulu/sulu
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/sulu/sulu/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/sulu/sulu.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/sulu/sulu.json
    checkedAt: 2026-10-20
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/sulu%2Fsulu
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/sulu%2Fsulu
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/sulu/sulu/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Sulu is a content management system and digital experience platform built on Symfony and written in PHP. Content is kept in a database, and pages render on the server with Twig. The same content is also served through REST and JSON:API, so one installation can run traditional rendering, headless delivery or both. Multiple sites and languages are supported.

A project is created with `composer create-project sulu/skeleton` and runs behind a web server such as Nginx or Apache. The [deployment guide](https://docs.sulu.io/3.x/book/deployment.html) walks through a first deployment with Git and SSH.

## Worth knowing

Sulu GmbH, which publishes the software, also offers Sulu.cloud, a hosted version on SymfonyCloud, and names a separate product, Sulu.ai, on the [project homepage](https://sulu.io).
