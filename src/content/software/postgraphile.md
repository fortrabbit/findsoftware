---
id: postgraphile
name: PostGraphile
urls:
  home: https://postgraphile.org/
  repository: https://github.com/graphile/crystal
  docs: https://postgraphile.org/postgraphile/5/
  pricing: https://postgraphile.org/pricing
  plugins: https://postgraphile.org/postgraphile/5/community-plugins
category:
  - backend
description: Node.js tool that builds a GraphQL API from a PostgreSQL database schema, with a CLI, middleware and standalone schema modes.
status: active
maintainer: Benjie Gillam
maintainerType: individual
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-11-02
githubStargazers: 12935
npmWeeklyDownloads: 155349
contributors: 179
social:
  x: https://twitter.com/GraphileHQ
  mastodon: https://fosstodon.org/@graphile
  discord: https://discord.gg/graphile
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://postgraphile.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://postgraphile.org/postgraphile/5/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/graphile/crystal
    checkedAt: 2026-11-03
  - field: category
    url: https://postgraphile.org/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/graphile/crystal/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/graphile/crystal/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/graphile/crystal/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/graphile/crystal
    checkedAt: 2026-11-03
  - field: runtime
    url: https://postgraphile.org/postgraphile/5/production
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/postgraphile/latest
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/graphile/crystal
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/graphile/crystal/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/graphile/crystal/releases
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://postgraphile.org/postgraphile/5/usage-cli
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://postgraphile.org/postgraphile/5/deploying-docker
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://postgraphile.org/postgraphile/5/usage
    checkedAt: 2026-11-03
  - field: urls
    url: https://postgraphile.org/postgraphile/5/community-plugins
    checkedAt: 2026-11-03
  - field: databases
    url: https://postgraphile.org/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://postgraphile.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://postgraphile.org/pricing
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/graphile/crystal
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/graphile/crystal
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/postgraphile
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

PostGraphile builds a GraphQL API from a PostgreSQL database and lets developers customize and extend the generated schema with plugins. It is a Node.js tool with three modes: a command-line tool that starts a Node HTTP server, middleware inside an existing Node server, or a standalone GraphQL schema. The [production guide](https://postgraphile.org/postgraphile/5/production) lists deployment to Heroku, a virtual machine, a container or bare metal, and an official Docker image exists for standalone use without custom plugins. Community plugins are listed on the docs site.

## Worth knowing

PostGraphile Pro is a commercial plugin, available to sponsors and by licence, that the [pricing page](https://postgraphile.org/pricing) describes as an add-on for PostGraphile V4 Core. The Docker deployment guide carries a warning that it has not yet been tested with the current release line.
