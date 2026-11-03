---
id: lowdefy
name: Lowdefy
urls:
  home: https://lowdefy.com
  repository: https://github.com/lowdefy/lowdefy
  docs: https://docs.lowdefy.com
category:
  - admin-panel
description: Config-first web framework that builds business apps and internal tools from YAML configuration, served by a Node.js server.
status: active
maintainer: Lowdefy, Inc.
maintainerType: company
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
basedOn:
  - hono
  - vite
databases:
  - postgres
  - mongodb
  - mysql
  - mariadb
  - sqlserver
  - sqlite
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: npx / pnpx (Lowdefy CLI)
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-10-27
githubStargazers: 3018
npmWeeklyDownloads: 2511
contributors: 31
social:
  x: https://x.com/lowdefy
  discord: https://discord.gg/WmcJgXt
  forum: https://github.com/lowdefy/lowdefy/discussions
  youtube: https://www.youtube.com/@lowdefy
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://lowdefy.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://lowdefy.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/lowdefy/lowdefy
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.lowdefy.com
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://lowdefy.com/privacy
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://lowdefy.com/privacy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/lowdefy/lowdefy/releases/tag/lowdefy-v0.0.0-alpha.4
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/lowdefy/lowdefy/releases/tag/v7.1.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/lowdefy
    checkedAt: 2026-11-03
  - field: license
    url: https://lowdefy.com/about
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://lowdefy.com/about
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/lowdefy/lowdefy
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/lowdefy/latest
    checkedAt: 2026-11-03
  - field: renderingModes
    url: https://docs.lowdefy.com/md/deployment/vercel.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.lowdefy.com/md/tutorial/tutorial-start.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.lowdefy.com/md/deployment/docker.md
    checkedAt: 2026-11-03
  - field: category
    url: https://lowdefy.com/about
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.lowdefy.com/md/tutorial/tutorial-start.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.lowdefy.com/md/deployment/node-server.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/lowdefy/lowdefy
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.lowdefy.com/md/connections/mariadb.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.lowdefy.com/md/connections/mssql.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.lowdefy.com/md/connections/sqlite.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://docs.lowdefy.com/md/concepts/i18n.md
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/lowdefy
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/lowdefy/lowdefy
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/lowdefy/lowdefy/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://github.com/lowdefy/lowdefy/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Lowdefy is a config-first web framework for business apps and internal tools. An app is described in YAML config, covering pages, blocks, operators, actions and connections, and the framework builds it into a running web app.

Lowdefy connects to databases and services through connections. Roles limit which users reach which pages and API endpoints, OpenID Connect identity providers can sign users in, and a config block sets up translations. The production build is a Node.js server: the [Node.js guide](https://docs.lowdefy.com/md/deployment/node-server.md) describes building it into a folder and starting it, and the [Docker guide](https://docs.lowdefy.com/md/deployment/docker.md) describes building an image.

## Worth knowing

The production server is a long-running Node.js process, so the host has to run Node.js.
