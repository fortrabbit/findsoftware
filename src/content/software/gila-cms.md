---
id: gila-cms
name: Gila CMS
urls:
  home: https://gilacms.com
  repository: https://github.com/GilaCMS/gila
  docs: https://gila-cms.readthedocs.io/en/latest/
category:
  - cms
  - ssg
description: Content management system written in PHP on MySQL or MariaDB, with an installer that runs in the browser.
status: stub
maintainer: Vasileios Zoumpourlis
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
runsAs:
  - per-request
installMethod: composer create-project, browser installer
licenseModel: open-source
license: BSD-3-Clause
githubStargazers: 46
packagistDownloads: 31
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://gilacms.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/GilaCMS/gila
    checkedAt: 2026-10-20
  - field: urls
    url: https://gila-cms.readthedocs.io/en/latest/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/GilaCMS/gila/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: language
    url: https://raw.githubusercontent.com/GilaCMS/gila/master/composer.json
    checkedAt: 2026-10-20
  - field: category
    url: https://gilacms.com
    checkedAt: 2026-10-20
  - field: runtime
    url: https://raw.githubusercontent.com/GilaCMS/gila/master/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://raw.githubusercontent.com/GilaCMS/gila/master/composer.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://raw.githubusercontent.com/GilaCMS/gila/master/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://gila-cms.readthedocs.io/en/latest/install.html
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://gila-cms.readthedocs.io/en/latest/install.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/GilaCMS/gila/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://gila-cms.readthedocs.io/en/latest/install.html
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/GilaCMS/gila/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/GilaCMS/gila
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/gilacms/gila.json
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Gila CMS is a content management system written in PHP that keeps its content in MySQL or MariaDB. The [install guide](https://gila-cms.readthedocs.io/en/latest/install.html) has the installer run in the browser: it asks for the database details and the administrator account, and the admin panel is available after it finishes. The files are unzipped into a public web folder, or the project is installed with Composer's `create-project` command.
