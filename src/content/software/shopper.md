---
id: shopper
name: Shopper
urls:
  home: https://laravelshopper.dev
  repository: https://github.com/shopperlabs/shopper
  docs: https://docs.laravelshopper.dev/v2/installation
category:
  - e-commerce
  - admin-panel
description: Open-source e-commerce package for Laravel that adds a product catalog, orders and an admin panel to a Laravel application.
status: active
maintainer: Arthur Monney
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
  - filament
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-25
githubStargazers: 1259
packagistDownloads: 16885
contributors: 20
social:
  x: https://twitter.com/laravelshopper
  discord: https://discord.gg/hfrM66Yjq
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://laravelshopper.dev/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/shopperlabs/shopper
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.laravelshopper.dev/v2/installation
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://raw.githubusercontent.com/shopperlabs/shopper/main/LICENSE.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://docs.laravelshopper.dev/v2/getting-started
    checkedAt: 2026-10-20
  - field: category
    url: https://docs.laravelshopper.dev/v2/getting-started
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/shopperlabs/shopper
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.laravelshopper.dev/v2/requirements
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.laravelshopper.dev/v2/requirements
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.laravelshopper.dev/v2/requirements
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://docs.laravelshopper.dev/v2/installation
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://raw.githubusercontent.com/shopperlabs/shopper/main/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.laravelshopper.dev/v2/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/shopperlabs/shopper
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/shopperlabs/shopper/main/LICENSE.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/shopper/framework.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/shopperlabs/shopper/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/shopperlabs/shopper
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/shopperlabs/shopper/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/shopper/framework.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/shopper/framework.json
    checkedAt: 2026-10-20
figure:
  emoji: 🛒
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

Shopper adds an e-commerce admin panel and commerce logic to an existing Laravel application. It is a package rather than a standalone application, built on Laravel, Filament and Tailwind CSS, and installed into a project with Composer, as the [installation guide](https://docs.laravelshopper.dev/v2/installation) describes. The admin panel is a Filament interface, and the package's database tables carry the sh_ prefix.

The [user guide](https://docs.laravelshopper.dev/v2/user-guide/getting-started/introduction) describes staff roles that control who can access what in the admin panel.
