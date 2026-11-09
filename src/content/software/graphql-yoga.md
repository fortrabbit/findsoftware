---
id: graphql-yoga
name: GraphQL Yoga
urls:
  home: https://the-guild.dev/graphql/yoga-server
  repository: https://github.com/graphql-hive/graphql-yoga
  docs: https://the-guild.dev/graphql/yoga-server/docs
category:
  - backend
description: Fully-featured GraphQL server library for JavaScript that runs on the WHATWG Fetch API across Node.js and other JavaScript runtimes.
status: active
maintainer: The Guild
firstRelease: 2017
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
runtimeMin: node 22
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-23
githubStargazers: 8539
npmWeeklyDownloads: 2907848
contributors: 179
dependentRepos: 10200
dependentPackages: 253
social:
  x: https://x.com/theguilddev
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://the-guild.dev/graphql/yoga-server
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/graphql-hive/graphql-yoga
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/graphql-hive/graphql-yoga/blob/main/packages/graphql-yoga/README.md
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/graphql-hive/graphql-yoga/releases
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/graphql-hive/graphql-yoga/blob/main/LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/graphql-hive/graphql-yoga
    checkedAt: 2026-11-09
  - field: category
    url: https://the-guild.dev/graphql/yoga-server
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/graphql-hive/graphql-yoga/blob/main/packages/graphql-yoga/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/graphql-hive/graphql-yoga/blob/main/packages/graphql-yoga/README.md
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://registry.npmjs.org/graphql-yoga/6.0.1
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/graphql-hive/graphql-yoga/blob/main/packages/graphql-yoga/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/graphql-hive/graphql-yoga
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://api.github.com/repos/graphql-hive/graphql-yoga
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://registry.npmjs.org/graphql-yoga
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://registry.npmjs.org/graphql-yoga
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/graphql-hive/graphql-yoga
    checkedAt: 2026-11-09
  - field: contributors
    url: https://github.com/graphql-hive/graphql-yoga
    checkedAt: 2026-11-09
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/graphql-yoga
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/graphql-yoga
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/graphql-yoga
    checkedAt: 2026-11-09
ai: authored
packagistDownloads: null
---

GraphQL Yoga is a GraphQL server library for JavaScript. The quick start builds a schema, passes it to createYoga and starts a Node server. The README says the core package depends on the WHATWG Fetch API so that it can run on any environment, including Deno, Bun, Cloudflare Workers and AWS Lambda. The install instructions name the graphql-yoga package from npm.

The docs include a [comparison with Apollo Server](https://the-guild.dev/graphql/yoga-server/docs/comparison) and a [migration guide from Apollo Server](https://the-guild.dev/graphql/yoga-server/docs/migration/migration-from-apollo-server). The comparison page says Yoga is built on top of Envelop, a GraphQL plugin system.

## Worth knowing

The repository is a monorepo that holds the graphql-yoga core package beside many @graphql-yoga packages, so its stars and contributor count cover all of them.
