---
id: redwoodjs
name: RedwoodJS
urls:
  repository: https://github.com/redwoodjs/graphql
  docs: https://docs.redwoodjs.com
category:
  - framework
description: Full-stack web framework that combines React, GraphQL, Prisma and TypeScript for building web applications.
status: active
maintainer: Redwood
firstRelease: 2020
language: typescript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 20
basedOn:
  - react
databases:
  - sqlite
  - postgres
runsAs:
  - static
  - always-on
  - per-request
renderingModes:
  - spa
  - static
installMethod: yarn create redwood-app
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2025-10-21
githubStargazers: 17587
npmWeeklyDownloads: 3924
contributors: 471
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://github.com/redwoodjs/graphql
    checkedAt: 2026-10-22
  - field: urls
    url: https://docs.redwoodjs.com/docs/introduction
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://github.com/redwoodjs/graphql/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/@redwoodjs/core
    checkedAt: 2026-10-22
  - field: category
    url: https://docs.redwoodjs.com/docs/introduction
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://github.com/redwoodjs/graphql/blob/main/README.md
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/redwoodjs/graphql
    checkedAt: 2026-10-22
  - field: runtime
    url: https://docs.redwoodjs.com/docs/quick-start
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://docs.redwoodjs.com/docs/tutorial/chapter1/prerequisites
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://docs.redwoodjs.com/docs/quick-start
    checkedAt: 2026-10-22
  - field: databases
    url: https://docs.redwoodjs.com/docs/local-postgres-setup
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://docs.redwoodjs.com/docs/prerender
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://docs.redwoodjs.com/docs/deploy/introduction
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://docs.redwoodjs.com/docs/deploy/baremetal
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://docs.redwoodjs.com/docs/deploy/introduction
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/redwoodjs/graphql
    checkedAt: 2026-10-22
  - field: license
    url: https://github.com/redwoodjs/graphql/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@redwoodjs/core/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/redwoodjs/graphql/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/redwoodjs/graphql
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/redwoodjs/graphql/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@redwoodjs/core
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

RedwoodJS is a full-stack framework built on React. The default database is SQLite, and the [local Postgres guide](https://docs.redwoodjs.com/docs/local-postgres-setup) covers running Postgres on a developer's machine for projects that use it in production.

Redwood supports prerendering at build time, which renders the pages to HTML before deployment. The [deployment docs](https://docs.redwoodjs.com/docs/deploy/baremetal) describe three shapes: a static web build served as files, a server that keeps the API process running under PM2, and serverless functions on hosted platforms.

## Worth knowing

The docs banner and the README announce RedwoodSDK, a separate project in its own repository, and the README describes an unreleased development epoch named Bighorn. The Serverless Framework deploy target to AWS Lambdas is marked deprecated on its page.
