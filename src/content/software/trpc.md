---
id: trpc
name: tRPC
urls:
  home: https://trpc.io/
  repository: https://github.com/trpc/trpc
  docs: https://trpc.io/docs
category:
  - backend
description: TypeScript library for building and consuming end-to-end typesafe APIs without schemas or code generation.
status: active
maintainer: Alex Johansson
maintainerType: individual
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-11-15
githubStargazers: 40810
npmWeeklyDownloads: 8018480
contributors: 462
social:
  x: https://x.com/trpcio
  discord: https://trpc.io/discord
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://trpc.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/trpc/trpc
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/trpc/trpc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/trpc/trpc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/trpc/trpc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/trpc/trpc
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/trpc/trpc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://trpc.io/docs/server/adapters/standalone
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://trpc.io/docs/quickstart
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/trpc/trpc
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://trpc.io/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/trpc/trpc/releases?per_page=100
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/trpc/trpc/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/trpc/trpc/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/trpc/trpc
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/trpc/trpc/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@trpc/server
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
---

tRPC is a TypeScript library for building and consuming end-to-end typesafe APIs without schemas or code generation. It is installed from npm as two packages, @trpc/server and @trpc/client. The docs say it combines concepts from REST and GraphQL, and that it can run standalone or be mounted as an endpoint on an existing REST API.

The server side has adapters for Express, Fastify, Next.js, AWS Lambda and the Fetch API, and a standalone Node.js adapter. Subscriptions run over WebSockets or HTTP streams.

## Worth knowing

The quickstart requires TypeScript and recommends strict mode in tsconfig.json.
