---
id: bagisto
name: Bagisto
urls:
  home: https://bagisto.com
  repository: https://github.com/bagisto/bagisto
  docs: https://devdocs.bagisto.com
  plugins: https://bagisto.com/en/extensions/
category:
  - e-commerce
description: Open-source Laravel eCommerce platform with a multi-vendor marketplace option.
status: active
maintainer: Webkul Software Pvt. Ltd.
maintainerType: company
language: php
runtime:
  - php
  - node
hosting:
  - php
  - node
runtimeMin: php 8.4
basedOn:
  - laravel
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
runsAs:
  - per-request
installMethod: composer create-project bagisto/bagisto; git clone with composer install; Docker image webkul/bagisto
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-06
githubStargazers: 28255
packagistDownloads: 180984
contributors: 100
social:
  x: https://x.com/BagistoShop
  forum: https://forums.bagisto.com
  youtube: https://www.youtube.com/c/Bagisto/
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://api.github.com/repos/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://webkul.com/about/
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://bagisto.com/en/
    checkedAt: 2026-10-19
  - field: category
    url: https://github.com/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://github.com/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: runtime
    url: https://devdocs.bagisto.com/getting-started/installation.html
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://repo.packagist.org/p2/bagisto/bagisto.json
    checkedAt: 2026-10-19
  - field: databases
    url: https://devdocs.bagisto.com/getting-started/installation.html
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://devdocs.bagisto.com/getting-started/installation.html
    checkedAt: 2026-10-19
  - field: adminUi
    url: https://bagisto.com/en/
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://github.com/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://api.github.com/repos/bagisto/bagisto/releases/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/bagisto/bagisto/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/bagisto/bagisto
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/bagisto/bagisto/contributors?anon=true&per_page=100
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/bagisto/bagisto.json
    checkedAt: 2026-10-19
  - field: urls
    url: https://bagisto.com/en/
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://devdocs.bagisto.com/getting-started/installation.html
    checkedAt: 2026-10-19
figure:
  emoji: 🛒
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

Bagisto is an open-source ecommerce platform built with Laravel and Vue.js, maintained by Webkul. Its admin panel is part of the application, and a multi-vendor marketplace is available as an option. The official Docker image bundles a web server, PHP, a database and sample products.

## Worth knowing

A production store needs a queue worker running next to the web server. The download page also promotes hosted stores and a multi-tenant SaaS offering, which are separate from the downloadable software.
