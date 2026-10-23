---
id: icejs
name: ice.js
urls:
  home: https://v3.ice.work
  repository: https://github.com/alibaba/ice
  docs: https://v3.ice.work/docs/guide/start
category:
  - framework
description: React-based application framework for building single-page, server-rendered and statically built apps.
status: active
maintainer: Alibaba Inc.
maintainerType: company
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 14
basedOn:
  - react
i18n: yes, through the official i18n plugin
runsAs:
  - static
renderingModes:
  - spa
  - server
  - static
installMethod: npm create ice ice-app
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2025-07-24
githubStargazers: 18602
npmWeeklyDownloads: 847
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://v3.ice.work/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/alibaba/ice
    checkedAt: 2026-10-21
  - field: urls
    url: https://v3.ice.work/
    checkedAt: 2026-10-21
  - field: category
    url: https://v3.ice.work/
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://github.com/alibaba/ice
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/alibaba/ice
    checkedAt: 2026-10-21
  - field: runtime
    url: https://v3.ice.work/docs/guide/start
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://v3.ice.work/docs/guide/start
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://v3.ice.work/docs/guide/start
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://v3.ice.work/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://v3.ice.work/docs/guide/advanced/deploy
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/alibaba/ice
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/alibaba/ice/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/@ice/app
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@ice/app
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/alibaba/ice
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@ice/app
    checkedAt: 2026-10-21
  - field: i18n
    url: https://v3.ice.work/docs/guide/advanced/i18n
    checkedAt: 2026-10-21
figure:
  emoji: 🧱
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

ice.js is a React application framework maintained by Alibaba Inc. It supports single-page apps, server rendering (SSR) and static builds (SSG). Server rendering runs a Node.js program on the server that generates the HTML, while the static build writes files to a `build` directory that the documentation says can be deployed to a server or published to a CDN. An official plugin adds multilingual routing.

## Worth knowing

The documentation is written in Chinese. Server rendering uses a Node.js program on the server, whereas the static build output is files alone.
