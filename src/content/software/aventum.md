---
id: aventum
name: Aventum
urls:
  home: https://aventum.org
  repository: https://github.com/TryAventum/server
  docs: https://aventum.org/docs/
category:
  - headless-cms
description: Open-source headless CMS and API builder with an Express server and a React dashboard.
status: stub
maintainer: Mohammed Al-Mahdawi
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
basedOn:
  - express
contentStore:
  - database
databases:
  - postgres
  - mysql
  - mariadb
  - mongodb
adminUi: true
i18n: yes, English and Arabic with RTL and LTR
installMethod: npm install @aventum/cli -g
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2021-02-11
githubStargazers: 2
npmWeeklyDownloads: 1
contributors: 1
social:
  discord: https://discord.gg/tmXT64N
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://aventum.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/TryAventum/server
    checkedAt: 2026-10-23
  - field: urls
    url: https://aventum.org/docs/getting-started/installation/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/TryAventum/server/blob/master/package.json
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/TryAventum/server
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/TryAventum/server/blob/master/CHANGELOG.md
    checkedAt: 2026-10-23
  - field: category
    url: https://aventum.org/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://aventum.org/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://aventum.org/docs/getting-started/installation/
    checkedAt: 2026-10-23
  - field: databases
    url: https://aventum.org/docs/getting-started/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://aventum.org/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://aventum.org/docs/getting-started/installation/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://aventum.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://aventum.org/docs/getting-started/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://aventum.org/docs/getting-started/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://aventum.org/docs/getting-started/installation/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/TryAventum/server/blob/master/package.json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://aventum.org/
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/TryAventum/server/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/TryAventum/server/commits/1.1.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/TryAventum/server
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/TryAventum/server/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@aventum/cli
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Aventum is a headless CMS in two parts: an Express server that holds the content and exposes it to frontends over HTTP, and a React dashboard that administrators use to manage content, users, roles and capabilities. The server keeps its data in PostgreSQL, MySQL, MariaDB or MongoDB, and the homepage says it caches content with Redis. The interface languages are English and Arabic, with right-to-left and left-to-right layouts. The install page describes three routes: the @aventum/cli npm package, a Docker Compose template, or a manual setup in which the server and the dashboard are fetched, built and started separately.
