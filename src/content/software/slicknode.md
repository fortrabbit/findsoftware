---
id: slicknode
name: Slicknode
urls:
  home: https://slicknode.com
  repository: https://github.com/slicknode/slicknode
  docs: https://slicknode.com/docs/
category:
  - headless-cms
  - backend
description: GraphQL backend, gateway and headless CMS that defines content and data models in GraphQL schema files, with an admin UI and a managed cloud or self-hosted deployment.
status: active
maintainer: Slicknode LLC
maintainerType: company
firstRelease: 2019
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 14
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - graphql
i18n: yes
runsAs:
  - always-on
installMethod: npm install -g slicknode
licenseModel: open-source
license: OSL-3.0
currentMajor: "0"
latestReleaseDate: 2023-05-08
githubStargazers: 208
npmWeeklyDownloads: 39
contributors: 3
social:
  x: https://twitter.com/slicknode
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://slicknode.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/slicknode/slicknode
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/slicknode/slicknode/blob/master/docs/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/slicknode/slicknode/master/LICENSE
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://slicknode.com/company/tos
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/slicknode/slicknode/releases
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/slicknode/slicknode
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/slicknode/slicknode/blob/master/docs/docs/extensions/create-extension.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/slicknode/latest
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/slicknode/slicknode/blob/master/packages/slicknode/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/slicknode/slicknode/blob/master/docs/docs/cli/migrate.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/slicknode/slicknode/blob/master/docs/docs/cli/start.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/slicknode/slicknode/blob/master/packages/slicknode/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/slicknode/slicknode/blob/master/packages/slicknode/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/slicknode/slicknode/blob/master/packages/slicknode/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/slicknode/slicknode/blob/master/packages/slicknode/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/slicknode/slicknode/blob/master/docs/docs/cli/start.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/slicknode/slicknode
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/slicknode/slicknode/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/slicknode/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/slicknode
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/slicknode/slicknode
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/slicknode/slicknode/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/slicknode
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Slicknode is a GraphQL backend and headless CMS. The server, started with slicknode start, serves the GraphQL API over HTTP and keeps its data in PostgreSQL. It generates an admin UI from the data model, and modules can carry Node.js extensions. The company behind it is Slicknode LLC, and the same software can run on its managed cloud or on a self-hosted server.

## Worth knowing

The [start command page](https://github.com/slicknode/slicknode/blob/master/docs/docs/cli/start.md) requires a running PostgreSQL server that the process can reach, and image and file modules need S3 or an S3-compatible bucket. The quickstart begins with a Slicknode Cloud account.
