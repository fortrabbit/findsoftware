---
id: kysely
name: Kysely
urls:
  home: https://kysely.dev
  repository: https://github.com/kysely-org/kysely
  docs: https://kysely.dev/docs/getting-started
category:
  - library
description: Type-safe SQL query builder for TypeScript whose result types follow the selected columns.
status: active
maintainer: Sami Koskimäki
firstRelease: 2021
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - node
  - deno
  - bun
databases:
  - postgres
  - mysql
  - sqlserver
  - sqlite
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-12
githubStargazers: 14355
npmWeeklyDownloads: 29144397
contributors: 161
dependentRepos: 1155
dependentPackages: 193
social:
  bluesky: https://bsky.app/profile/kysely.dev
  discord: https://discord.gg/xyBJ3GwvAm
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/kysely-org/kysely
    checkedAt: 2026-11-16
  - field: urls
    url: https://kysely.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://kysely.dev/docs/getting-started
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/kysely-org/kysely/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/kysely-org/kysely
    checkedAt: 2026-11-16
  - field: category
    url: https://kysely.dev/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/kysely-org/kysely/blob/master/README.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://kysely.dev/docs/getting-started
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://kysely.dev/docs/getting-started
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://kysely.dev/docs/getting-started
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/kysely-org/kysely/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/kysely-org/kysely/master/LICENSE
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/kysely
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/kysely
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/kysely
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/kysely
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/kysely-org/kysely/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/kysely-org/kysely/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/kysely-org/kysely
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/kysely-org/kysely/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Kysely is a SQL query builder for TypeScript. Queries are method chains over typed table definitions, and the compiler checks that each table and column a query refers to is in scope where it is written. A result's type has only the selected columns, with their aliases, and it follows subqueries, joins and common table expressions. Each database is reached through a dialect, which usually needs its database driver library as a peer dependency. The library is mainly developed for Node.js and also runs on Deno, Bun, Cloudflare Workers and in web browsers.

## Worth knowing

Kysely deals with types only at the TypeScript level, so the values a driver returns at runtime are not changed, and the database interface has to match the schema. For queries the types cannot express, the README points to an sql template tag and a DynamicModule class.
