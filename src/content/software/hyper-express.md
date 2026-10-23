---
id: hyper-express
name: HyperExpress
urls:
  repository: https://github.com/kartikk221/hyper-express
  docs: https://github.com/kartikk221/hyper-express/blob/master/README.md
category:
  - framework
  - backend
description: Node.js web server for HTTP and WebSocket endpoints, powered by uWebSockets.js, with limited compatibility with the Express API.
status: active
maintainer: Kartik Kumar
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
runsAs:
  - always-on
installMethod: npm i hyper-express
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-07-20
githubStargazers: 2033
npmWeeklyDownloads: 3444
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: name
    url: https://github.com/kartikk221/hyper-express/blob/master/README.md
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/kartikk221/hyper-express
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/kartikk221/hyper-express/blob/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://github.com/kartikk221/hyper-express/blob/master/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://github.com/kartikk221/hyper-express/blob/master/LICENSE
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://github.com/kartikk221/hyper-express/blob/master/LICENSE
    checkedAt: 2026-10-22
  - field: maintainerType
    url: https://github.com/kartikk221/hyper-express/blob/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://github.com/kartikk221/hyper-express
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/kartikk221/hyper-express
    checkedAt: 2026-10-22
  - field: runtime
    url: https://github.com/kartikk221/hyper-express/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://github.com/kartikk221/hyper-express/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://github.com/kartikk221/hyper-express/blob/master/docs/Server.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://github.com/kartikk221/hyper-express/blob/master/README.md
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/hyper-express/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/hyper-express/latest
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/hyper-express
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://github.com/kartikk221/hyper-express
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

HyperExpress is a Node.js web server for HTTP and WebSocket endpoints, powered by uWebSockets.js. Its API is mostly compatible with Express, according to the [README](https://github.com/kartikk221/hyper-express/blob/master/README.md), so some middleware may not work out of the box. The server is started with listen on a port and host, as the [server reference](https://github.com/kartikk221/hyper-express/blob/master/docs/Server.md) describes.

## Worth knowing

The server listens on a port, so it needs a host that runs a Node.js process. The README says the native uWebSockets.js addon has prebuilt binaries for macOS, Windows and glibc-based Linux, and that Alpine Linux is not supported.
