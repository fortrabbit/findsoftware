---
id: ws
name: ws
urls:
  repository: https://github.com/websockets/ws
  docs: https://github.com/websockets/ws/blob/master/doc/ws.md
category:
  - backend
description: WebSocket client and server library for Node.js.
status: active
maintainer: Einar Otto Stangvik
maintainerType: individual
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 10
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-12
githubStargazers: 22830
npmWeeklyDownloads: 400586733
contributors: 194
dependentRepos: 900116
dependentPackages: 19475
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://api.github.com/repos/websockets/ws
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/websockets/ws/blob/master/README.md
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://raw.githubusercontent.com/websockets/ws/master/LICENSE
    checkedAt: 2026-11-17
  - field: maintainerType
    url: https://raw.githubusercontent.com/websockets/ws/master/LICENSE
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://registry.npmjs.org/ws
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/websockets/ws/blob/master/README.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/websockets/ws
    checkedAt: 2026-11-17
  - field: runtime
    url: https://github.com/websockets/ws/blob/master/README.md
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://github.com/websockets/ws/blob/8.23.0/package.json
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/websockets/ws
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/websockets/ws/blob/master/README.md
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/websockets/ws/releases/latest
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/websockets/ws/releases/latest
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/ws
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/websockets/ws
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/websockets/ws/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ws
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ws
    checkedAt: 2026-11-17
ai: authored
packagistDownloads: null
---

ws is a WebSocket client and server library for Node.js. It implements the protocol on both sides and supports the permessage-deflate compression extension.

## Worth knowing

The README states that the module does not work in the browser. Browser code uses the native WebSocket object, and the README names isomorphic-ws, an npm wrapper, for code that has to run in both places. Compression is disabled by default on the server, and the README notes that it adds overhead.
