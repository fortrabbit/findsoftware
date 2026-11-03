---
id: node-red
name: Node-RED
urls:
  home: https://nodered.org
  repository: https://github.com/node-red/node-red
  docs: https://nodered.org/docs/
  plugins: https://flows.nodered.org
category:
  - backend
description: Browser-based flow editor and Node.js runtime for building event-driven applications that connect devices, services and data.
status: active
maintainer: Node-RED
maintainerType: community
firstRelease: 2013
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
contentStore:
  - flat-file
adminUi: true
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "5"
latestReleaseDate: 2026-10-21
githubStargazers: 23806
npmWeeklyDownloads: 92432
contributors: 252
social:
  x: https://twitter.com/nodered
  mastodon: https://social.nodered.org/@nodered
  forum: https://discourse.nodered.org
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://nodered.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/node-red/node-red
    checkedAt: 2026-11-03
  - field: urls
    url: https://nodered.org/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/node-red/node-red/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/node-red/node-red/blob/main/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://nodered.org/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/node-red/node-red
    checkedAt: 2026-11-03
  - field: runtime
    url: https://nodered.org/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/node-red/node-red
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/node-red/node-red/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/node-red/node-red/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/node-red/node-red/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/node-red/node-red/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/node-red/node-red/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/node-red/node-red
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/node-red/node-red/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/node-red
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://nodered.org/docs/getting-started/local
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://nodered.org/docs/getting-started/raspberrypi
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/node-red/node-red/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/node-red/node-red/5.0.9/package.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/node-red/node-red/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nodered.org/docs/getting-started/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nodered.org/docs/getting-started/
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://nodered.org/docs/getting-started/local
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Node-RED is a browser-based flow editor that runs on Node.js. People wire devices, services and data together as flows, and the runtime keeps those flows running as a server. Flows can expose HTTP endpoints through HTTP In nodes, which an application or website can call, and those routes can be secured with basic authentication. The flows themselves are stored in a flows file. The project documents installs with npm, Docker and an install script for the Raspberry Pi, the [documentation](https://nodered.org/docs/) covers the editor, and the library at [flows.nodered.org](https://flows.nodered.org) holds shared nodes and flows.
