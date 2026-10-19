---
id: swetrix
name: Swetrix
urls:
  home: https://swetrix.com
  repository: https://github.com/Swetrix/swetrix
  docs: https://swetrix.com/docs
  pricing: https://swetrix.com/pricing
category:
  - analytics
description: Web analytics platform, self-hosted or offered as a hosted service.
status: active
maintainer: Swetrix Ltd
maintainerType: company
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-core
license: AGPL-3.0
currentMajor: "5"
latestReleaseDate: 2026-08-04
contributors: 36
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://swetrix.com
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/Swetrix/swetrix
    checkedAt: 2026-10-19
  - field: urls
    url: https://swetrix.com/docs
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://swetrix.com
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://swetrix.com
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/Swetrix/swetrix
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/Swetrix/swetrix/blob/v5.4.1/backend/package.json
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/Swetrix/swetrix/blob/v5.4.1/backend/package.json
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://swetrix.com/docs/selfhosting/how-to
    checkedAt: 2026-10-19
  - field: category
    url: https://swetrix.com
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/Swetrix/swetrix
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://swetrix.com/pricing
    checkedAt: 2026-10-19
  - field: urls
    url: https://swetrix.com/pricing
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/Swetrix/swetrix/releases/tag/v5.4.1
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/Swetrix/swetrix/releases/tag/v5.4.1
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/Swetrix/swetrix
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://swetrix.com/docs/selfhosting/how-to
    checkedAt: 2026-10-19
figure:
  emoji: 📈
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Analytics
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Swetrix is a web analytics platform, available as a hosted service and as a self-hosted Community Edition. The application is written in TypeScript and its backend runs on Node.js. Analytics data goes into ClickHouse, and Redis serves as a cache, so a self-hosted install runs both next to the application. The [self-hosting guide](https://swetrix.com/docs/selfhosting/how-to) brings the stack up with Docker Compose. Swetrix Ltd develops the software.
