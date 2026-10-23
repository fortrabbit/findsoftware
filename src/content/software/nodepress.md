---
id: nodepress
name: NodePress
urls:
  repository: https://github.com/surmon-china/nodepress
  docs: https://github.surmon.me/nodepress
category:
  - headless-cms
  - cms
description: Blog CMS backend built with NestJS, MongoDB and Redis, exposing a RESTful API.
status: active
maintainer: Surmon
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - nestjs
databases:
  - mongodb
headlessApi:
  - rest
installMethod: pnpm install, then pnpm run build and pnpm run start:prod
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-03-17
githubStargazers: 1524
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/surmon-china/nodepress
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.surmon.me/nodepress/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/surmon-china/nodepress/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/surmon-china/nodepress/languages
    checkedAt: 2026-10-23
  - field: category
    url: https://api.github.com/repos/surmon-china/nodepress
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/surmon-china/nodepress/blob/main/ARCHITECTURE.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/surmon-china/nodepress/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/surmon-china/nodepress/blob/main/package.json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/surmon-china/nodepress/blob/main/package.json
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/surmon-china/nodepress/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/surmon-china/nodepress/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/surmon-china/nodepress/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/surmon-china/nodepress
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/surmon-china/nodepress/blob/main/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/surmon-china/nodepress/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/surmon-china/nodepress/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/surmon-china/nodepress
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/surmon-china/nodepress/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

NodePress is a blog CMS backend built with NestJS on a Fastify runtime. It exposes a RESTful API and needs MongoDB and Redis for a full run. It was written as the API behind the surmon.me blog, and its repository describes it as a headless CMS API service. The project has no admin interface of its own: the README lists the blog's admin site and the blog front end as separate repositories. Sign-in is a single Admin account with a password, plus OAuth login for users. Installation runs `pnpm install` and starts the server with `pnpm run start:prod`.

## Worth knowing

The package requires Node.js 22 or newer. The README describes the project as the API service for the surmon.me blog.
