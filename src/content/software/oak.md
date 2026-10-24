---
id: oak
name: Oak
urls:
  home: https://oakserver.org
  repository: https://github.com/oakserver/oak
  docs: https://jsr.io/@oak/oak/doc
category:
  - framework
  - library
description: Middleware framework for handling HTTP requests across Deno, Node.js, Bun and Cloudflare Workers.
status: active
maintainer: the oak authors
maintainerType: community
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - node
  - deno
  - bun
runtimeMin: node 16
installMethod: deno add jsr:@oak/oak, or npm i @oakserver/oak on Node.js
licenseModel: open-source
license: MIT
currentMajor: "17"
latestReleaseDate: 2025-11-22
githubStargazers: 5407
npmWeeklyDownloads: 102
contributors: 83
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/oakserver/oak
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/oakserver/oak
    checkedAt: 2026-10-22
  - field: urls
    url: https://oakserver.org
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/oakserver/oak/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/oakserver/oak
    checkedAt: 2026-10-22
  - field: category
    url: https://oakserver.org
    checkedAt: 2026-10-22
  - field: runtime
    url: https://oakserver.org
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://github.com/oakserver/oak/blob/main/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://github.com/oakserver/oak/blob/main/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://github.com/oakserver/oak/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://github.com/oakserver/oak/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://jsr.io/@oak/oak/meta.json
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://jsr.io/@oak/oak/meta.json
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/oakserver/oak
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/oakserver/oak/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@oakserver/oak
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Oak is a middleware framework for handling HTTP requests in TypeScript, and its README says it is inspired by Koa. It runs on Deno, Node.js, Bun and Cloudflare Workers, and it is installed from JSR with `deno add jsr:@oak/oak` or from npm for Node.js. The project site links to the JSR documentation for the API and says oak was originally written for the Deno runtime. The license names the oak authors as the copyright holder.

## Worth knowing

The README says send, WebSocket upgrades and serving over TLS or HTTPS are not supported on Node.js, and send and WebSocket upgrades are not supported on Bun and Cloudflare Workers. The project has no GitHub releases, so its current major is read from JSR. The npm package of the same project carries an older major than the JSR package.
