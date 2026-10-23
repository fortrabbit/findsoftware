---
id: remult
name: Remult
urls:
  home: https://remult.dev
  repository: https://github.com/remult/remult
  docs: https://remult.dev/docs/
category:
  - framework
description: TypeScript library for full-stack CRUD and realtime over entity classes, with a database layer and an API.
status: active
maintainer: Noam Honig, Yoni Rapoport and contributors
maintainerType: community
firstRelease: 2021
language: typescript
databases:
  - postgres
  - mysql
  - sqlite
  - mongodb
  - sqlserver
  - oracle
adminUi: true
headlessApi:
  - rest
  - graphql
installMethod: npm init remult
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-08-30
githubStargazers: 3213
npmWeeklyDownloads: 2110
contributors: 55
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://remult.dev
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/remult/remult
    checkedAt: 2026-10-22
  - field: urls
    url: https://remult.dev/docs/
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/remult/remult/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/remult/remult
    checkedAt: 2026-10-22
  - field: category
    url: https://remult.dev
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://remult.dev/docs/
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/remult
    checkedAt: 2026-10-22
  - field: databases
    url: https://github.com/remult/remult
    checkedAt: 2026-10-22
  - field: headlessApi
    url: https://github.com/remult/remult
    checkedAt: 2026-10-22
  - field: headlessApi
    url: https://github.com/remult/remult
    checkedAt: 2026-10-22
  - field: adminUi
    url: https://raw.githubusercontent.com/remult/remult/main/docs/docs/admin-ui.md
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/remult/remult/main/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/remult/remult/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/remult/remult/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/remult
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/remult/remult
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/remult/remult/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/remult
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Remult is a TypeScript library that uses entity classes as the single definition for a CRUD and realtime API, a type-safe frontend client and a backend database layer. The server side is set up as request-handling middleware, and the README lists adapters for Express, Fastify, Next.js, Nuxt, SvelteKit, SolidStart, Nest, Koa, Hapi and Hono. Validation is defined once and runs on both the backend and the frontend, and authorization rules are written in code.

The generated API is REST with live queries, and a GraphQL endpoint is optional. An admin UI for entities is built in and is switched on with a configuration option.
