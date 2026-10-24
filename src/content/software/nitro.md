---
id: nitro
name: Nitro
urls:
  home: https://nitro.build
  repository: https://github.com/nitrojs/nitro
  docs: https://nitro.build/guide
category:
  - backend
description: TypeScript server toolkit for full-stack servers with filesystem routing, storage, caching and a Vite plugin, deployable to Node.js, Bun, Deno and serverless hosts.
status: active
maintainer: Pooya Parsa and Nitro contributors
maintainerType: community
language: javascript
runtime:
  - node
  - bun
  - deno
hosting:
  - node
  - bun
  - deno
runtimeMin: node 20
databases:
  - sqlite
  - postgres
  - mysql
installMethod: npx create-nitro-app, or npm i nitro vite with the Vite plugin
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-19
githubStargazers: 11298
npmWeeklyDownloads: 7500690
contributors: 409
social:
  x: https://x.com/nitrojsdev
  bluesky: https://bsky.app/profile/nitro.build
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://github.com/nitrojs/nitro
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/nitrojs/nitro
    checkedAt: 2026-10-22
  - field: urls
    url: https://nitro.build/guide
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/nitrojs/nitro/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/nitrojs/nitro
    checkedAt: 2026-10-22
  - field: category
    url: https://nitro.build/guide
    checkedAt: 2026-10-22
  - field: runtime
    url: https://nitro.build
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://registry.npmjs.org/nitro/latest
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://nitro.build/guide/quick-start
    checkedAt: 2026-10-22
  - field: databases
    url: https://nitro.build/guide
    checkedAt: 2026-10-22
  - field: license
    url: https://github.com/nitrojs/nitro/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://github.com/nitrojs/nitro/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/nitrojs/nitro/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/nitrojs/nitro/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/nitrojs/nitro
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/nitrojs/nitro/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/nitro
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Nitro is a TypeScript server toolkit for building full-stack servers, and it can be added to an existing Vite project as a plugin or started with create-nitro-app. The homepage says the same codebase deploys to Node.js, Bun, Deno or serverless hosts. Nitro includes a built-in SQL layer that defaults to SQLite and can connect to other databases. The [introduction](https://nitro.build/guide) names Nuxt, SolidStart and TanStack Start as frameworks that fully or partially leverage Nitro.

## Worth knowing

The project's pages present a new major line as current, but the stable release line on GitHub and npm is still the previous one, and the newer line is published as beta. Database, Tasks and OpenAPI are marked experimental on the homepage. The npm package named in the install instructions carries the beta.
