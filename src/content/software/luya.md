---
id: luya
name: LUYA
urls:
  home: https://luya.io
  repository: https://github.com/luyadev/luya
  docs: https://luya.io/guide/
  plugins: https://luya.io/packages
category:
  - cms
  - framework
description: PHP web framework and content management system for building websites and web applications.
status: active
maintainer: Zephir Software Design AG
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
basedOn:
  - yii-framework
databases:
  - mysql
adminUi: true
installMethod: composer create-project luyadev/luya-kickstarter:^1.0
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2024-02-07
githubStargazers: 802
packagistDownloads: 213423
contributors: 71
social:
  x: https://twitter.com/luyadev
  forum: https://github.com/orgs/luyadev/discussions
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://luya.io
    checkedAt: 2026-10-20
  - field: urls
    url: https://luya.io
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/luyadev/luya
    checkedAt: 2026-10-20
  - field: urls
    url: https://luya.io/guide/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/luyadev/luya/blob/master/LICENSE.md
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://github.com/luyadev/luya/blob/master/LICENSE.md
    checkedAt: 2026-10-20
  - field: category
    url: https://luya.io
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://luya.io
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/luyadev/luya
    checkedAt: 2026-10-20
  - field: runtime
    url: https://luya.io/guide/installation/
    checkedAt: 2026-10-20
  - field: databases
    url: https://luya.io/guide/installation/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://luya.io/guide/installation/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://luya.io/guide/installation/
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/luyadev/luya
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/luyadev/luya/blob/master/LICENSE.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/luyadev/luya-core.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/luyadev/luya/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/luyadev/luya
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/luyadev/luya
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/luyadev/luya-core.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://luya.io/guide/
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

LUYA is a PHP web framework and content management system built on the Yii 2 framework, with an admin module. A project is created with Composer from the `luyadev/luya-kickstarter` template, and the [installation guide](https://luya.io/guide/installation/) has the developer set the database connection in the configuration files.

Configuration is kept in versioned files, and a console command imports those filesystem configurations into the database. The guide notes that LUYA is not a one-click installation. A [package list](https://luya.io/packages) on the project's site covers public modules, extensions and blocks.
