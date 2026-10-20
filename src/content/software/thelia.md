---
id: thelia
name: Thelia
urls:
  home: https://thelia.net
  repository: https://github.com/thelia/thelia
  docs: https://doc.thelia.net
category:
  - e-commerce
  - cms
  - framework
description: Open-source e-commerce CMS and framework built on Symfony for online stores and web content.
status: active
maintainer: OpenStudio SAS
maintainerType: company
hqCountry: FR
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - symfony
databases:
  - mariadb
  - mysql
adminUi: true
headlessApi:
  - rest
templating: twig
runsAs:
  - per-request
installMethod: composer create-project thelia/thelia-project
licenseModel: open-source
license: GPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-10-18
githubStargazers: 881
packagistDownloads: 5744
contributors: 151
pluginCount: 300
social:
  discord: https://discord.gg/YgwpYEE3y3
  forum: https://forum.thelia.net/
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://thelia.net
    checkedAt: 2026-10-20
  - field: urls
    url: https://thelia.net
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: urls
    url: https://thelia.net
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://thelia.net/mentions-legales.html
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://thelia.net/mentions-legales.html
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://thelia.net/mentions-legales.html
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/thelia/thelia.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/thelia/thelia.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: templating
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/thelia/thelia-project
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/thelia/thelia
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/thelia/thelia.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/thelia/thelia/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/thelia/thelia
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/thelia/thelia/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/thelia/thelia.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/thelia/thelia.json
    checkedAt: 2026-10-20
  - field: pluginCount
    url: https://thelia.net
    checkedAt: 2026-10-20
figure:
  emoji: 🛒
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

Thelia is an e-commerce CMS and framework written in PHP and built on Symfony and API Platform. The back office and the front office use Twig, and API Platform provides the REST layer. The project is published by OpenStudio SAS, a French company.

A shop is started from the project skeleton with `composer create-project thelia/thelia-project`, and the [skeleton repository](https://github.com/thelia/thelia-project) describes the steps that follow. The database is MariaDB or MySQL, and the web server, Nginx or Apache, must serve the `public/` directory. The [main repository](https://github.com/thelia/thelia) holds the source of Thelia itself and is meant for work on the framework, not for starting a store.
