---
id: sonicjs
name: SonicJS
urls:
  home: https://sonicjs.com
  repository: https://github.com/SonicJs-Org/sonicjs
  docs: https://sonicjs.com/deployment
category:
  - headless-cms
description: Headless content management system written in TypeScript that runs on Cloudflare Workers or self-hosted with Docker and SQLite.
status: active
maintainer: Lane Campbell and SonicJS contributors
maintainerType: community
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
contentStore:
  - database
databases:
  - sqlite
adminUi: true
headlessApi:
  - rest
  - graphql
runsAs:
  - always-on
installMethod: npx create-sonicjs, or a Docker image built from the repository
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-05-29
githubStargazers: 1760
npmWeeklyDownloads: 2187
contributors: 31
social:
  x: https://twitter.com/SonicJsHeadless
  discord: https://discord.gg/8bMy6bv3sZ
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://sonicjs.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/SonicJs-Org/sonicjs
    checkedAt: 2026-10-23
  - field: urls
    url: https://sonicjs.com/deployment
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/SonicJs-Org/sonicjs
    checkedAt: 2026-10-23
  - field: runtime
    url: https://sonicjs.com/self-hosting
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/@sonicjs-cms%2fcore/latest
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sonicjs.com/self-hosting
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://sonicjs.com/self-hosting
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://sonicjs.com
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/SonicJs-Org/sonicjs/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/SonicJs-Org/sonicjs/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/SonicJs-Org/sonicjs/releases/tags/v2.19.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/SonicJs-Org/sonicjs/releases/tags/v2.19.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/SonicJs-Org/sonicjs
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/SonicJs-Org/sonicjs/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@sonicjs-cms/core
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

SonicJS is a headless content management system written in TypeScript. It generates a REST API and an admin interface from the content schema, and a GraphQL endpoint is available as an opt-in plugin.

The primary deployment target is Cloudflare Workers, where content is kept in a D1 database (SQLite at the edge). The self-hosting guide describes a second path: a Docker image or a Node.js process with a local SQLite file and no Cloudflare account. The install docs start from the create-sonicjs scaffolder.

The project is maintained by Lane Campbell and SonicJS contributors.

## Worth knowing

The newest major line is published as betas only; the stable releases belong to the previous major.
