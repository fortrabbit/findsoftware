---
id: graphweaver
name: Graphweaver
urls:
  home: https://graphweaver.com
  repository: https://github.com/exogee-technology/graphweaver
  docs: https://graphweaver.com/docs
category:
  - backend
description: TypeScript GraphQL server that combines databases, REST APIs and SaaS platforms into one API, with an admin panel for the connected data.
status: active
maintainer: Exogee Pty Ltd
maintainerType: company
firstRelease: 2024
hqCountry: AU
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: CLI (pnpx graphweaver@latest init)
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-09-22
githubStargazers: 557
npmWeeklyDownloads: 503
contributors: 22
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://graphweaver.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/exogee-technology/graphweaver
    checkedAt: 2026-10-23
  - field: urls
    url: https://graphweaver.com/docs
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://exogee.com/privacy-policy
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://exogee.com/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/exogee-technology/graphweaver
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/exogee-technology/graphweaver/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/exogee-technology/graphweaver/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/exogee-technology/graphweaver/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/exogee-technology/graphweaver/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.graphweaver.com/2cb40535125849a88ba5b31a60bed6cf
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/exogee-technology/graphweaver/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://graphweaver.com/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://graphweaver.com/
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://graphweaver.com/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/exogee-technology/graphweaver/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.graphweaver.com/25ef7df00fa9479298cbda9eaf0db6ec
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/exogee-technology/graphweaver/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/exogee-technology/graphweaver/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/exogee-technology/graphweaver/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/exogee-technology/graphweaver
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/exogee-technology/graphweaver/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@exogee/graphweaver
    checkedAt: 2026-10-23
figure:
  emoji: 🏗️
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Backend
ai: authored
packagistDownloads: null
---

Graphweaver is a GraphQL server written in TypeScript. It connects several data sources, such as PostgreSQL, MySQL, SQLite and REST APIs, and presents them as one instant GraphQL API. The README calls it an open source alternative to Hasura. Developers create a project with the Graphweaver CLI. The admin panel is a React application, and the [documentation](https://graphweaver.com/docs) describes how to extend it with custom pages and fields.

Permissions are assigned to roles, and roles are given to users. The project is published as open source by Exogee Pty Ltd, an Australian software engineering company, under the Apache License 2.0.

## Worth knowing

The [deployment overview](https://docs.graphweaver.com/deployments) says the build writes two outputs: the admin panel as static files, which any static web host can serve, and a single backend file that runs under Node.js. The backend needs a Node process that keeps running, so static hosting alone does not serve the API.

The README quick start lists PNPM as a prerequisite next to Node.

Graphweaver connects to databases; it does not keep content of its own, so the data stays in the systems it connects to.
