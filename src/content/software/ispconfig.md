---
id: ispconfig
name: ISPConfig
urls:
  home: https://www.ispconfig.org
  repository: https://git.ispconfig.org/ispconfig/ispconfig3
  docs: https://www.ispconfig.org/documentation/
category:
  - web-server
description: Open source hosting control panel for managing websites, MySQL databases and cron jobs on Linux servers from a web browser.
status: active
maintainer: ISPConfig UG
maintainerType: company
firstRelease: 2010
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
databases:
  - mariadb
  - mysql
adminUi: true
i18n: translated into more than 20 languages
installMethod: official autoinstaller script (Perfect Server)
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-09-21
contributors: 84
social:
  x: https://twitter.com/ispconfig
  forum: https://www.howtoforge.com/community/#ispconfig-3.23
  facebook: https://www.facebook.com/ispconfig
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://www.ispconfig.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://git.ispconfig.org/api/v4/projects/ispconfig%2Fispconfig3
    checkedAt: 2026-10-29
  - field: urls
    url: https://www.ispconfig.org/documentation/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://www.ispconfig.org/
    checkedAt: 2026-10-29
  - field: language
    url: https://git.ispconfig.org/api/v4/projects/ispconfig%2Fispconfig3/languages
    checkedAt: 2026-10-29
  - field: runtime
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/README.md
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.ispconfig.org/ispconfig/download/
    checkedAt: 2026-10-29
  - field: license
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/LICENSE
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://git.ispconfig.org/api/v4/projects/ispconfig%2Fispconfig3/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://git.ispconfig.org/api/v4/projects/ispconfig%2Fispconfig3/releases
    checkedAt: 2026-10-29
  - field: contributors
    url: https://git.ispconfig.org/api/v4/projects/ispconfig%2Fispconfig3/repository/contributors
    checkedAt: 2026-10-29
  - field: databases
    url: https://git.ispconfig.org/ispconfig/ispconfig3/-/raw/3.3.2p1/README.md
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://www.ispconfig.org/
    checkedAt: 2026-10-29
  - field: i18n
    url: https://www.ispconfig.org/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://sourceforge.net/projects/ispconfig/files/ISPConfig%203/
    checkedAt: 2026-10-29
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
---

ISPConfig is a PHP control panel for managing websites, databases and cron jobs on Linux servers from a web browser. It has separate administrator, reseller and client logins, and its homepage states that the panel is translated into more than 20 languages.

The project offers an official autoinstaller for a "Perfect Server" setup with ISPConfig, and a tar.gz download from the project's site for installing the panel itself. The panel supports Apache2 and nginx for web serving and MariaDB or MySQL for databases. A separate migration tool imports data from ISPConfig 2, Plesk, cPanel and Confixx.
