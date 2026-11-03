---
id: unleash
name: Unleash
urls:
  home: https://www.getunleash.io/
  repository: https://github.com/Unleash/unleash
  docs: https://docs.getunleash.io/
  pricing: https://www.getunleash.io/pricing
category:
  - dev-tool
description: Open-source feature flag platform with a self-hostable server, a web admin UI and client SDKs, offered also as an Enterprise edition and a cloud service.
status: active
maintainer: Bricks Software AS
firstRelease: 2015
hqCountry: NO
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose up -d from a clone of the repository
licenseModel: open-core
license: AGPL-3.0
currentMajor: "8"
latestReleaseDate: 2026-10-29
githubStargazers: 13928
npmWeeklyDownloads: 27797
contributors: 234
social:
  x: https://x.com/getunleash
  youtube: https://www.youtube.com/channel/UCJjGVOc5QBbEje-r7nZEa4A
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.getunleash.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/Unleash/unleash
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.getunleash.io/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.getunleash.io/terms-of-service
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.getunleash.io/terms-of-service
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/Unleash/unleash
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.getunleash.io/deploy/getting-started
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.getunleash.io/get-started/unleash-overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.getunleash.io/deploy/getting-started
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/Unleash/unleash/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/unleash-server/latest
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/unleash-server
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/Unleash/unleash
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Unleash/unleash/releases/tag/v8.3.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/Unleash/unleash/releases/latest
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/Unleash/unleash/releases/tag/1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/Unleash/unleash
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/Unleash/unleash/graphs/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Unleash is an open-source feature flag platform. Its server is a TypeScript application that runs on Node.js, and the [README](https://github.com/Unleash/unleash/blob/main/README.md) describes running it either in Docker or as a Node.js process. It stores its data in PostgreSQL and serves a web admin UI. The same project is sold as Unleash Enterprise, a paid edition that is also available as a cloud service.

## Worth knowing

The open-source server is licensed under the AGPL. The README lists single sign-on, advanced segmentation and other features under its Pro and Enterprise plans, so those are not part of the open-source edition. For production, the README says the server needs a persistent host. Enterprise can also run on the user's own infrastructure, and the [self-hosting guide](https://docs.getunleash.io/deploy/getting-started) sets up either edition with Docker and a PostgreSQL container.
