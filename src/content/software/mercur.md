---
id: mercur
name: Mercur
urls:
  home: https://www.mercurjs.com
  repository: https://github.com/mercurjs/mercur
  docs: https://docs.mercurjs.com
category:
  - e-commerce
description: Open-source headless platform for building multi-vendor marketplaces, built on the Medusa commerce core.
status: active
maintainer: Rigby sp. z o. o.
firstRelease: 2025
hqCountry: PL
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 20
basedOn:
  - medusa
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
  - static
installMethod: bun create mercur-app
licenseModel: open-core
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-08
githubStargazers: 1865
npmWeeklyDownloads: 10351
contributors: 14
social:
  x: https://x.com/Mercurjs
  discord: https://discord.gg/hnZBzc4NJU
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://www.mercurjs.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.mercurjs.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/mercurjs/mercur
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.mercurjs.com
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/mercurjs/mercur
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://docs.mercurjs.com/learn/architecture.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.mercurjs.com/privacy-policy
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://www.mercurjs.com/privacy-policy
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/mercurjs/mercur/releases/tag/v0.9.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/mercurjs/mercur/releases/tag/v2.3.7
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/mercurjs/mercur/releases/tag/v2.3.7
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://docs.mercurjs.com/resources/deployment/self-host.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/mercurjs/mercur/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.mercurjs.com/resources/deployment/self-host.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.mercurjs.com/resources/deployment/self-host.md
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/mercurjs/mercur
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mercurjs/mercur/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@mercurjs/core
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Mercur is a headless platform for multi-vendor marketplaces, built as a Medusa application with a marketplace layer on top, as its [architecture guide](https://docs.mercurjs.com/learn/architecture.md) describes. Marketplace operators use an admin panel and sellers use a vendor panel. Each store's members hold roles that are resolved per store, and PostgreSQL stores all data.

The [self-host guide](https://docs.mercurjs.com/resources/deployment/self-host.md) runs the API in server mode, which serves the admin panel, and deploys the vendor panel as a separate static app.

## Worth knowing

The repository is MIT-licensed, but the Mercur Enterprise modules are a separately licensed suite that comes with a support contract. Medusa Cloud is named as a managed deployment target next to self-hosting. The README lists Redis next to Node.js and PostgreSQL as a prerequisite.
