---
id: bull-board
name: Bull Board
urls:
  home: https://felixmosh.github.io/bull-board/
  repository: https://github.com/felixmosh/bull-board
  docs: https://felixmosh.github.io/bull-board/
category:
  - backend
  - admin-panel
description: Dashboard UI for Bull and BullMQ job queues, mounted into an existing Node server or run as a standalone CLI or Docker image.
status: active
maintainer: Vitor Capretz
maintainerType: individual
firstRelease: 2019
language: javascript
runtime:
  - node
  - bun
hosting:
  - node
  - bun
runtimeMin: node 20
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-10-22
githubStargazers: 3518
npmWeeklyDownloads: 2780640
contributors: 134
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://felixmosh.github.io/bull-board/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: urls
    url: https://felixmosh.github.io/bull-board/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://raw.githubusercontent.com/felixmosh/bull-board/master/LICENSE
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: runtime
    url: https://felixmosh.github.io/bull-board/guide/getting-started
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://felixmosh.github.io/bull-board/guide/getting-started
    checkedAt: 2026-10-31
  - field: category
    url: https://felixmosh.github.io/bull-board/
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/@bull-board/api
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://felixmosh.github.io/bull-board/guide/docker
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://felixmosh.github.io/bull-board/guide/cli
    checkedAt: 2026-10-31
  - field: license
    url: https://raw.githubusercontent.com/felixmosh/bull-board/master/LICENSE
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://raw.githubusercontent.com/felixmosh/bull-board/master/LICENSE
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/felixmosh/bull-board/releases/tag/v9.10.5
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/felixmosh/bull-board/releases/tag/v9.10.5
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/felixmosh/bull-board/releases/tag/v0.0.6
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/felixmosh/bull-board
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
---

Bull Board is a dashboard for Bull and BullMQ job queues. It is mounted as a route in an existing Node server through an adapter for the framework in use, and it reads queues from Redis, or from PostgreSQL for BullMQ v6 queues. The [README](https://github.com/felixmosh/bull-board/blob/master/README.md) lists adapters for Express, Fastify, Koa, Hapi, NestJS, Hono, H3, Elysia and Bun, and the same dashboard also runs as a standalone command line tool or Docker image.

## Worth knowing

The optional metrics package, which keeps throughput history beyond the short window BullMQ stores, is marked beta in the README.
