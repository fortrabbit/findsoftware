---
id: tianji
name: Tianji
urls:
  home: https://tianji.dev
  repository: https://github.com/msgbyte/tianji
  docs: https://tianji.dev/docs/intro
  pricing: https://tianji.dev/pricing
category:
  - analytics
description: Self-hosted website analytics application that also runs uptime monitors and server status pages, with a tracker script and an OpenAPI interface.
status: active
maintainer: Tianji, Inc.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: translation files for the web client, extended by a translation command
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-27
githubStargazers: 3119
contributors: 16
social:
  x: https://twitter.com/moonrailgun
  discord: https://discord.gg/8Vv47wAEej
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://tianji.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://tianji.dev/docs/intro
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/msgbyte/tianji
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://tianji.dev/
    checkedAt: 2026-11-03
  - field: category
    url: https://tianji.dev/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/msgbyte/tianji
    checkedAt: 2026-11-03
  - field: runtime
    url: https://tianji.dev/docs/install/manual
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://tianji.dev/docs/install/manual
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/msgbyte/tianji/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://tianji.dev/docs/install/environment
    checkedAt: 2026-11-03
  - field: databases
    url: https://tianji.dev/docs/install/environment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tianji.dev/docs/intro
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tianji.dev/docs/install/kubernetes/helm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tianji.dev/docs/install/manual
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tianji.dev/docs/install/other/install-in-aapanel
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://tianji.dev/docs/install/manual
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://tianji.dev/docs/website/track-script
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/msgbyte/tianji/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/msgbyte/tianji/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/msgbyte/tianji/blob/master/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/msgbyte/tianji/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/msgbyte/tianji/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/msgbyte/tianji/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/msgbyte/tianji
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/msgbyte/tianji/contributors
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://tianji.dev/docs/api/getting-started
    checkedAt: 2026-11-03
  - field: urls
    url: https://tianji.dev/pricing
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
---

Tianji is a self-hosted application that combines website analytics with uptime monitors, server status and status pages in one product. A tracker script, added to a site with a website identifier, sends its events to the Tianji server. The server runs on Node.js with PostgreSQL as its database. The README gives Docker Compose as the first install route, and the manual install runs the server under pm2. Tianji, Inc. maintains the project, and a hosted version called Tianji Cloud runs in Frankfurt.
