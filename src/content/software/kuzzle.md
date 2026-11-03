---
id: kuzzle
name: Kuzzle
urls:
  home: https://kuzzle.io
  repository: https://github.com/kuzzleio/kuzzle
  docs: https://docs.kuzzle.io/core/2/guides/
category:
  - backend
description: Open-source backend server with a pre-built API, realtime notifications and data storage for web, mobile and IoT applications.
status: active
maintainer: Kuzzle SAS
maintainerType: company
firstRelease: 2015
hqCountry: FR
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
adminUi: true
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-29
githubStargazers: 1667
npmWeeklyDownloads: 2675
contributors: 52
social:
  x: https://x.com/kuzzleio
  discord: https://discord.com/invite/tAEtyDZ
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://kuzzle.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/kuzzleio/kuzzle
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.kuzzle.io/core/2/guides/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/kuzzleio/kuzzle/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://kuzzle.io/mentions-legales/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://kuzzle.io/mentions-legales/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://docs.kuzzle.io/core/2/guides/introduction/what-is-kuzzle/
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.kuzzle.io/core/2/guides/introduction/what-is-kuzzle/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/kuzzleio/kuzzle
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/kuzzleio/kuzzle
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/kuzzleio/kuzzle/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/kuzzleio/kuzzle/releases/tag/v2.60.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/kuzzleio/kuzzle
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/kuzzleio/kuzzle
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/kuzzle
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.kuzzle.io/core/2/guides/main-concepts/api/
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Kuzzle is a backend server, written in TypeScript and run on Node.js, that gives applications a pre-built API for storing data, managing users and rights, and sending realtime notifications. Applications reach it over HTTP, WebSocket and MQTT, and the officially supported SDKs cover JavaScript, Go, Java, C#, Dart and the JVM. The project describes it as a backend with ready-to-use features that can be extended in the same way as any other framework. Kuzzle uses Elasticsearch as its document storage, so the Node.js application runs beside Elasticsearch and Redis.

The [run guide](https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/) starts the stack with Docker Compose or installs the npm package `kuzzle`. The Admin Console is a Vue.js single page application for managing data and user permissions, and the project also hosts an online copy of it.

## Worth knowing

The run guide says Node.js 25 and later are not supported. The deployment guide recommends cluster mode for production, and the company offers support for those deployments.
