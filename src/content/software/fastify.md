---
id: fastify
name: Fastify
urls:
  home: https://www.fastify.dev
  repository: https://github.com/fastify/fastify
  docs: https://fastify.dev/docs/latest/
  plugins: https://fastify.dev/ecosystem/
category:
  - framework
description: Node.js web framework for building HTTP APIs and web applications, with a plugin architecture and schema-based validation.
status: active
maintainer: OpenJS Foundation
maintainerType: foundation
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
runsAs:
  - always-on
  - per-request
installMethod: npm install fastify
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-13
githubStargazers: 37281
npmWeeklyDownloads: 9325750
contributors: 432
social:
  x: https://x.com/fastifyjs
  discord: https://discord.gg/fastify
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/fastify/fastify
    checkedAt: 2026-10-22
  - field: urls
    url: https://fastify.dev/docs/latest/
    checkedAt: 2026-10-22
  - field: category
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/fastify/fastify
    checkedAt: 2026-10-22
  - field: runtime
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://fastify.dev/docs/latest/Guides/Serverless/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://fastify.dev/docs/latest/Guides/Serverless/
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/fastify/fastify
    checkedAt: 2026-10-22
  - field: license
    url: https://github.com/fastify/fastify/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/fastify/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/fastify/fastify/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/fastify/fastify
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/fastify/fastify/contributors?anon=true&per_page=100
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/fastify
    checkedAt: 2026-10-22
  - field: urls
    url: https://www.fastify.dev/
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Fastify is a web framework for Node.js that builds HTTP APIs and web applications from routes and plugins registered on a server instance. The server listens on a port once the application calls its listen method, so a container or server deployment runs a process that stays up. The [serverless guide](https://fastify.dev/docs/latest/Guides/Serverless/) also covers running the application on serverless platforms, where the platform starts it per request.

## Worth knowing

The serverless guide notes that a larger application takes longer to boot on a function platform. It names Google Cloud Run, AWS Fargate, Azure Container Instances and Vercel as platforms where the server can handle several requests at once.
