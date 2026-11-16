---
id: type-graphql
name: TypeGraphQL
urls:
  home: https://typegraphql.com
  repository: https://github.com/MichalLytek/type-graphql
  docs: https://typegraphql.com/docs/introduction.html
category:
  - framework
description: TypeScript framework for GraphQL APIs in Node.js that defines the schema and resolvers with classes and decorators.
status: active
maintainer: Michał Lytek
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 10
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-11-04
githubStargazers: 8095
npmWeeklyDownloads: 1039074
contributors: 89
dependentRepos: 7054
dependentPackages: 447
social:
  x: https://twitter.com/typegraphql
  discord: https://discord.gg/cWnBAQcbg2
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://typegraphql.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/MichalLytek/type-graphql
    checkedAt: 2026-11-16
  - field: urls
    url: https://typegraphql.com/docs/introduction.html
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/MichalLytek/type-graphql/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/MichalLytek/type-graphql/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://typegraphql.com/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/MichalLytek/type-graphql
    checkedAt: 2026-11-16
  - field: runtime
    url: https://typegraphql.com/
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/MichalLytek/type-graphql/blob/v1.1.1/package.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://typegraphql.com/docs/aws-lambda.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://typegraphql.com/docs/installation.html
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/MichalLytek/type-graphql/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://typegraphql.com/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/MichalLytek/type-graphql/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/MichalLytek/type-graphql/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/MichalLytek/type-graphql
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/MichalLytek/type-graphql/contributors
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/type-graphql
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/type-graphql
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/type-graphql
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
---

TypeGraphQL is a TypeScript framework for GraphQL APIs that runs on Node.js. Object types, inputs and resolvers are classes annotated with decorators, and the framework generates the GraphQL schema from them, so the types are written once in TypeScript and not again in a separate schema file.

The [installation guide](https://typegraphql.com/docs/installation.html) asks for graphql-js and graphql-scalars beside the framework, because they are its peer dependencies. Input validation uses decorators from the class-validator library, and the docs also describe integrations with TypeORM, Prisma and NestJS. The [introduction](https://typegraphql.com/docs/introduction.html) explains the approach.

## Worth knowing

The docs site presents the next major line, which is still in release candidates, so the newest stable release comes from an earlier line. The stable release's manifest states a lower Node.js minimum than the candidates do, so the release a reader installs decides which Node.js it needs.
