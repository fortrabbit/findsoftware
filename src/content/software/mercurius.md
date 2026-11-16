---
id: mercurius
name: Mercurius
urls:
  home: https://mercurius.dev
  repository: https://github.com/mercurius-js/mercurius
  docs: https://github.com/mercurius-js/mercurius/tree/master/docs
  plugins: https://github.com/mercurius-js/mercurius/blob/master/docs/plugins.md
category:
  - backend
description: GraphQL adapter for the Fastify web framework, with subscriptions, federation and gateway support.
status: active
maintainer: Matteo Collina
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
basedOn:
  - fastify
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "16"
latestReleaseDate: 2026-10-24
githubStargazers: 2492
npmWeeklyDownloads: 340987
contributors: 162
dependentRepos: 341
dependentPackages: 99
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://registry.npmjs.org/mercurius/latest
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mercurius-js/mercurius
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mercurius-js/mercurius/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mercurius-js/mercurius/blob/master/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mercurius-js/mercurius/blob/master/docs/plugins.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/fastify-gql
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mercurius-js/mercurius/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mercurius-js/mercurius
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/mercurius-js/mercurius/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/mercurius-js/mercurius/blob/v16.12.1/package.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/mercurius-js/mercurius/blob/v16.12.1/package.json
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/mercurius-js/mercurius
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mercurius-js/mercurius/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mercurius-js/mercurius/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mercurius-js/mercurius/blob/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mercurius-js/mercurius/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mercurius-js/mercurius/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mercurius-js/mercurius
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mercurius-js/mercurius/contributors?per_page=1&anon=false
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/mercurius
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/mercurius
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/mercurius
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
---

Mercurius is a GraphQL adapter for Fastify that runs as a Fastify plugin on Node.js. An application registers it on a Fastify instance together with a schema and resolvers, and the same server then answers GraphQL queries. The README lists subscriptions, batched queries and persisted queries among its features; federation and gateway support ship as separate packages.
