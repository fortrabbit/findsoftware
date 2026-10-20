---
id: o3-shop
name: O3-Shop
urls:
  home: https://www.o3-shop.com/
  repository: https://github.com/o3-shop/shop-ce
  docs: https://docs.o3-shop.com/en/latest/
category:
  - e-commerce
description: Open-source e-commerce platform for B2B and B2C shops, built on PHP and Symfony.
status: active
maintainer: xt:Commerce GmbH and Eric Jankowfsky
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project
licenseModel: open-source
license: GPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-08
githubStargazers: 6
packagistDownloads: 1356
contributors: 15
social:
  forum: https://community.o3-shop.com/
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.o3-shop.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.o3-shop.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/o3-shop/shop-ce
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.o3-shop.com/en/latest/User/Installation/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/o3-shop/shop-ce/blob/v1.7.2/composer.json
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.o3-shop.com/en/latest/User/Installation/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.o3-shop.com/en/latest/User/Installation/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://www.o3-shop.com/
    checkedAt: 2026-10-20
  - field: category
    url: https://www.o3-shop.com/
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.o3-shop.com/en/latest/User/Installation/
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://www.o3-shop.com/installation.html
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.o3-shop.com/installation.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://www.o3-shop.com/installation.html
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://docs.o3-shop.com/en/latest/User/Installation/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.o3-shop.com/en/latest/User/Installation/
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/o3-shop/shop-ce
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.o3-shop.com/about.html
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/o3-shop/shop-ce/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/o3-shop/shop-ce/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/o3-shop/shop-ce
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/o3-shop/shop-ce/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/o3-shop/o3-shop.json
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.o3-shop.com/impressum.html
    checkedAt: 2026-10-20
figure:
  emoji: 🛒
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

O3-Shop is an e-commerce platform for B2B and B2C shops, forked from OXID Community Edition and built on Symfony. Composer installs it, and a web setup wizard follows. The shop keeps its data in a database and has an admin area under /admin. The [handbook](https://docs.o3-shop.com/en/latest/User/Installation/) documents migration from OXID eShop. The project describes itself as run by a community with no commercial operator.

## Worth knowing

The installation page and the handbook state different PHP and database requirements.
