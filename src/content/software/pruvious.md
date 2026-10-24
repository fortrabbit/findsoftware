---
id: pruvious
name: Pruvious
urls:
  home: https://pruvious.com
  repository: https://github.com/pruvious/pruvious
  docs: https://pruvious.com/docs
category:
  - cms
description: Nuxt module that adds a CMS to a Nuxt site, with collections, blocks, a dashboard and a REST API, storing data in SQLite or PostgreSQL.
status: active
maintainer: Muris Ceman
firstRelease: 2024
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
basedOn:
  - nuxt
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
templating: vue
i18n: yes
runsAs:
  - always-on
installMethod: npx pruvious@3 init (pnpm dlx or npm)
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-06-06
githubStargazers: 765
npmWeeklyDownloads: 14
contributors: 7
social:
  discord: https://discord.com/invite/6KWZfsbzN4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/pruvious/pruvious
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/pruvious/pruvious/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/pruvious/pruvious/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/pruvious/pruvious/languages
    checkedAt: 2026-10-23
  - field: category
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://pruvious.com/docs/installation
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pruvious.com/docs/installation
    checkedAt: 2026-10-23
  - field: databases
    url: https://pruvious.com/docs/database
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: templating
    url: https://pruvious.com/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pruvious.com/docs/deployment
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/pruvious/pruvious/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/pruvious/pruvious
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/pruvious/pruvious/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/pruvious/pruvious/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/pruvious/pruvious/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/pruvious/pruvious/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/pruvious/pruvious
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/pruvious/pruvious/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/pruvious
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Pruvious is a Nuxt module that adds a CMS to a Nuxt site. It provides blocks written as Vue components, a dashboard, a REST API generated for each collection, translations, and roles and permissions. Data is stored in SQLite or PostgreSQL, with Redis as an optional cache. A new project is created with `npx pruvious@3 init <dir>`, which installs Nuxt and Pruvious. The CLI deploys a site to a server and starts a Node.js process there.

## Worth knowing

The deployment command starts a Node.js process on the server, so a live site needs a host that runs one.
