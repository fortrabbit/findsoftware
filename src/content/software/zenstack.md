---
id: zenstack
name: ZenStack
urls:
  home: https://zenstack.dev
  repository: https://github.com/zenstackhq/zenstack
  docs: https://zenstack.dev/docs/
  plugins: https://zenstack.dev/docs/community-packages
category:
  - library
description: TypeScript database toolkit with a schema-first ORM, built-in access control and generated query APIs.
status: active
maintainer: ZenStack Dev, Inc.
maintainerType: company
firstRelease: 2022
language: javascript
runtime:
  - node
  - bun
hosting:
  - node
  - bun
runtimeMin: node 20
basedOn:
  - kysely
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
headlessApi:
  - rest
installMethod: npm create, npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-11-13
githubStargazers: 2965
npmWeeklyDownloads: 95979
contributors: 89
social:
  x: https://x.com/zenstackhq
  discord: https://discord.gg/Ykhr738dUe
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://zenstack.dev/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/zenstackhq/zenstack
    checkedAt: 2026-11-17
  - field: urls
    url: https://zenstack.dev/docs/
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://registry.npmjs.org/zenstack
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://zenstack.dev/
    checkedAt: 2026-11-17
  - field: maintainerType
    url: https://zenstack.dev/
    checkedAt: 2026-11-17
  - field: category
    url: https://raw.githubusercontent.com/zenstackhq/zenstack/dev/README.md
    checkedAt: 2026-11-17
  - field: basedOn
    url: https://zenstack.dev/
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/zenstackhq/zenstack
    checkedAt: 2026-11-17
  - field: runtime
    url: https://raw.githubusercontent.com/zenstackhq/zenstack/dev/README.md
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://zenstack.dev/docs/prerequisite
    checkedAt: 2026-11-17
  - field: databases
    url: https://zenstack.dev/docs/migrate-prisma
    checkedAt: 2026-11-17
  - field: headlessApi
    url: https://zenstack.dev/docs/service/api-handler
    checkedAt: 2026-11-17
  - field: adminUi
    url: https://zenstack.dev/docs/studio
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://raw.githubusercontent.com/zenstackhq/zenstack/dev/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://raw.githubusercontent.com/zenstackhq/zenstack/dev/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://raw.githubusercontent.com/zenstackhq/zenstack/dev/LICENSE
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://raw.githubusercontent.com/zenstackhq/zenstack/dev/LICENSE
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/zenstackhq/zenstack/releases/tags/v3.10.2
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/zenstackhq/zenstack/releases/tags/v3.10.2
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@zenstackhq/orm
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/zenstackhq/zenstack
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/zenstackhq/zenstack/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: urls
    url: https://zenstack.dev/docs/community-packages
    checkedAt: 2026-11-17
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

ZenStack is a TypeScript database toolkit: a schema file defines the data model, and an ORM reads and writes the database from it. The ORM is built on Kysely and offers a query API compatible with Prisma's, and the [migration guide](https://zenstack.dev/docs/migrate-prisma) covers moving an existing Prisma project. A query service can serve the model as RESTful web APIs, and ZenStack Studio is a database studio started from the command line. Built-in access control belongs to the same toolkit.

The packages are installed from npm under the `@zenstackhq` scope, and `npm create zenstack` scaffolds a new project. The repository is a monorepo, so its stars and contributors cover every package. ZenStack Dev, Inc. maintains it.

## Worth knowing

The docs name Node.js 20 as the minimum, while the published packages declare Node.js 22. The project began as an extension of Prisma ORM, and its current major line removed Prisma as a runtime dependency.
