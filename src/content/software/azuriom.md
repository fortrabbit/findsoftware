---
id: azuriom
name: Azuriom
urls:
  home: https://azuriom.com
  repository: https://github.com/Azuriom/Azuriom
  docs: https://azuriom.com/docs
  plugins: https://market.azuriom.com
category:
  - cms
description: Open-source PHP web platform for websites that serve game server communities, extended with add-ons.
status: active
maintainer: Azuriom
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
databases:
  - mysql
  - mariadb
  - sqlite
  - sqlserver
adminUi: true
runsAs:
  - per-request
installMethod: release archive with web installer; Docker (docker-compose up -d from the release folder)
licenseModel: open-source
license: GPL-3.0-or-later, GPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-08-07
githubStargazers: 732
contributors: 52
social:
  x: https://x.com/Azuriom
  discord: https://azuriom.com/discord
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://api.github.com/repos/Azuriom/Azuriom
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/Azuriom/Azuriom
    checkedAt: 2026-10-19
  - field: urls
    url: https://azuriom.com/docs
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://azuriom.com/docs/installation
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://azuriom.com
    checkedAt: 2026-10-19
  - field: category
    url: https://azuriom.com
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://api.github.com/repos/Azuriom/Azuriom/contents/composer.json?ref=v1.2.13
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/Azuriom/Azuriom
    checkedAt: 2026-10-19
  - field: runtime
    url: https://azuriom.com/docs/installation
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://api.github.com/repos/Azuriom/Azuriom/contents/composer.json?ref=v1.2.13
    checkedAt: 2026-10-19
  - field: databases
    url: https://azuriom.com/docs/installation
    checkedAt: 2026-10-19
  - field: adminUi
    url: https://azuriom.com
    checkedAt: 2026-10-19
  - field: urls
    url: https://azuriom.com/docs
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/Azuriom/Azuriom/contents/composer.json
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/Azuriom/Azuriom
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://azuriom.com
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://api.github.com/repos/Azuriom/Azuriom/releases/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/Azuriom/Azuriom/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/Azuriom/Azuriom
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/Azuriom/Azuriom/contributors?anon=true&per_page=100
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://azuriom.com/docs/installation
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Azuriom is an open-source PHP platform built on Laravel for websites that serve game server communities. It includes an admin dashboard, from which extensions can be installed. Extensions come from a separate marketplace, and the README lists the games the platform supports.

## Worth knowing

The project recommends MySQL, MariaDB or PostgreSQL and states that SQLite and SQL Server work but are not recommended. The scheduler needs a cron entry that runs every minute.
