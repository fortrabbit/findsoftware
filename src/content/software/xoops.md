---
id: xoops
name: XOOPS
urls:
  home: https://xoops.org
  repository: https://github.com/XOOPS/XoopsCore27
  docs: https://xoops.gitbook.io/xoops-install-upgrade/
  plugins: https://github.com/XoopsModules25x
category:
  - cms
description: Modular content management system written in PHP, stored in MySQL and extended with modules and themes.
status: active
maintainer: XOOPS Project
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
contentStore:
  - database
databases:
  - mysql
  - mariadb
templating: smarty
i18n: multi-lingual
runsAs:
  - per-request
installMethod: archive upload
licenseModel: open-source
license: GPL-2.0, GPL version 2
currentMajor: "2"
latestReleaseDate: 2026-10-17
social:
  x: https://twitter.com/XoopsProject
  forum: https://xoops.org/modules/newbb/
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://xoops.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/XOOPS/XoopsCore27
    checkedAt: 2026-10-20
  - field: urls
    url: https://xoops.gitbook.io/xoops-install-upgrade/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://xoops.gitbook.io/xoops-install-upgrade/
    checkedAt: 2026-10-20
  - field: category
    url: https://xoops.gitbook.io/xoops-install-upgrade/introduction
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/XOOPS/XoopsCore27
    checkedAt: 2026-10-20
  - field: runtime
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/requirements
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/requirements
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/requirements
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/installation
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://xoops.org/
    checkedAt: 2026-10-20
  - field: databases
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/requirements
    checkedAt: 2026-10-20
  - field: databases
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/requirements
    checkedAt: 2026-10-20
  - field: templating
    url: https://xoops.gitbook.io/xoops-install-upgrade/installation/installation
    checkedAt: 2026-10-20
  - field: i18n
    url: https://xoops.org/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/XOOPS/XoopsCore27
    checkedAt: 2026-10-20
  - field: license
    url: https://xoops.gitbook.io/xoops-install-upgrade/introduction
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/XOOPS/XoopsCore27/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/XOOPS/XoopsCore27/releases/latest
    checkedAt: 2026-10-20
  - field: urls
    url: https://xoops.gitbook.io/xoops-install-upgrade/introduction
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

XOOPS is a content management system and web application platform written in PHP. It stores its data in a relational database and uses Smarty templates. Modules provide the application functionality, and the project keeps its modules in a [separate GitHub organization](https://github.com/XoopsModules25x). The [install and upgrade guide](https://xoops.gitbook.io/xoops-install-upgrade/) describes copying the archive's files to a server, making the listed directories writable and running the web installer.

The system is multi-lingual, so its modules can be used in all major languages, per the project's homepage.
