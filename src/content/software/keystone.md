---
id: keystone
name: Keystone
urls:
  home: https://keystonejs.com
  repository: https://github.com/keystonejs/keystone
  docs: https://keystonejs.com/docs
category:
  - headless-cms
  - framework
description: Node.js headless CMS and application framework that generates a GraphQL API and an admin UI from a TypeScript schema.
status: active
maintainer: Thinkmill Labs Pty Ltd
maintainerType: company
hqCountry: AU
language: javascript
runtime:
  - node
hosting:
  - node
basedOn:
  - prisma
  - express
  - graphql-js
  - nextjs
  - react
contentStore:
  - database
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
headlessApi:
  - graphql
runsAs:
  - always-on
renderingModes:
  - api-only
installMethod: npm create keystone-app@latest
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-11-25
githubStargazers: 9998
npmWeeklyDownloads: 4328
contributors: 267
dependentRepos: 133
dependentPackages: 37
addedAt: 2026-10-18
checkedAt: 2026-11-28
sources:
  - field: name
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: urls
    url: https://api.github.com/repos/keystonejs/keystone
    checkedAt: 2026-11-28
  - field: urls
    url: https://api.github.com/repos/keystonejs/keystone
    checkedAt: 2026-11-28
  - field: urls
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: maintainer
    url: https://github.com/keystonejs/keystone/blob/main/LICENSE
    checkedAt: 2026-11-28
  - field: maintainerType
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: hqCountry
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: category
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: basedOn
    url: https://registry.npmjs.org/@keystone-6/core/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/keystonejs/keystone
    checkedAt: 2026-11-28
  - field: runtime
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: contentStore
    url: https://keystonejs.com/docs/guides/choosing-a-database
    checkedAt: 2026-11-28
  - field: databases
    url: https://keystonejs.com/docs/guides/choosing-a-database
    checkedAt: 2026-11-28
  - field: adminUi
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: headlessApi
    url: https://keystonejs.com/docs/config/config
    checkedAt: 2026-11-28
  - field: renderingModes
    url: https://keystonejs.com/
    checkedAt: 2026-11-28
  - field: installMethod
    url: https://keystonejs.com/docs/getting-started
    checkedAt: 2026-11-28
  - field: license
    url: https://api.github.com/repos/keystonejs/keystone
    checkedAt: 2026-11-28
  - field: license
    url: https://registry.npmjs.org/@keystone-6/core/latest
    checkedAt: 2026-11-28
  - field: licenseModel
    url: https://api.github.com/repos/keystonejs/keystone
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/@keystone-6/core/latest
    checkedAt: 2026-11-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/keystonejs/keystone/releases/latest
    checkedAt: 2026-11-28
  - field: githubStargazers
    url: https://api.github.com/repos/keystonejs/keystone
    checkedAt: 2026-11-28
  - field: contributors
    url: https://api.github.com/repos/keystonejs/keystone/contributors
    checkedAt: 2026-11-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@keystone-6/core
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://keystonejs.com/docs/getting-started
    checkedAt: 2026-11-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40keystone-6%2Fcore
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40keystone-6%2Fcore
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Keystone is a Node.js headless CMS and application framework that builds a GraphQL API and an admin UI from a TypeScript schema. Its database layer is Prisma, and Express serves the HTTP side as a long-running Node.js process. Custom REST endpoints can be added to the Express app, and the admin UI accepts custom React components. Thinkmill, a company based in Australia, maintains Keystone.

## Worth knowing

Keystone renders no pages. Its outputs are the GraphQL API and the admin UI, so a website needs its own frontend. Production deploys run database migrations before the server starts, so the database has to be reachable at that point. The docs advise against SQLite in production.
