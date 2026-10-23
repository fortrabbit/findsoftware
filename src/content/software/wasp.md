---
id: wasp
name: Wasp
urls:
  home: https://wasp.sh
  repository: https://github.com/wasp-lang/wasp
  docs: https://wasp.sh/docs
category:
  - framework
description: Full-stack framework that builds React, Node.js and Prisma web apps from a declarative configuration file.
status: active
maintainer: wasp-lang
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 24
basedOn:
  - react
  - prisma
databases:
  - postgres
runsAs:
  - static
  - always-on
renderingModes:
  - spa
  - static
installMethod: npm global install of @wasp.sh/wasp-cli
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-16
githubStargazers: 18779
npmWeeklyDownloads: 4158
contributors: 125
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/wasp-lang/wasp
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/wasp-lang/wasp
    checkedAt: 2026-10-22
  - field: urls
    url: https://wasp.sh/docs
    checkedAt: 2026-10-22
  - field: category
    url: https://wasp.sh/docs
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://wasp.sh
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://github.com/wasp-lang/wasp/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/wasp-lang/wasp/languages
    checkedAt: 2026-10-22
  - field: runtime
    url: https://wasp.sh/docs/quick-start
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://wasp.sh/docs/quick-start
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://wasp.sh/docs/deployment/intro
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://wasp.sh
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://wasp.sh/docs/deployment/intro
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://wasp.sh/docs/deployment/intro
    checkedAt: 2026-10-22
  - field: databases
    url: https://wasp.sh/docs/deployment/intro
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://wasp.sh/docs/quick-start
    checkedAt: 2026-10-22
  - field: license
    url: https://github.com/wasp-lang/wasp/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://wasp.sh
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@wasp.sh/wasp-cli/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/wasp-lang/wasp/releases/latest
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/wasp-lang/wasp/releases
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/wasp-lang/wasp
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/wasp-lang/wasp/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@wasp.sh/wasp-cli
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

Wasp is a full-stack framework for web apps on React, Node.js and Prisma. An app is described in a declarative configuration file, and Wasp builds the frontend, backend and database parts from that description.

The deployment overview splits a Wasp app into three parts. The client is a single-page application that is usually served by a static file server or a CDN. The server is an Express app on Node.js, which handles requests from the client and comes with a Dockerfile. The production database is PostgreSQL. Individual routes can be prerendered to static content.
