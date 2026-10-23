---
id: tensei
name: Tensei
urls:
  repository: https://github.com/tenseijs/tensei
  docs: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
category:
  - headless-cms
description: Open source Node.js headless CMS written in TypeScript that generates a dashboard and a GraphQL or REST API from resources defined in code.
status: stub
maintainer: Kati Frantz-Vallie
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 12
databases:
  - mysql
  - postgres
  - sqlite
  - mongodb
adminUi: true
headlessApi:
  - graphql
  - rest
runsAs:
  - always-on
installMethod: npx create-tensei-app, or yarn create tensei-app
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-01-06
githubStargazers: 568
npmWeeklyDownloads: 56
contributors: 7
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/tenseijs/tensei
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/tenseijs/tensei/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/tenseijs/tensei
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/tenseijs/tensei/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/tenseijs/tenseijs.com/blob/master/src/pages/docs/getting-started.mdx
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/tenseijs/tensei
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/tenseijs/tensei/blob/master/LICENCE.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/tenseijs/tensei/blob/master/LICENCE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/tenseijs/tensei/git/tags/2127c8b45918118eb0cc5320e73e6e971b5c1c8e
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@tensei%2fcore/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/tenseijs/tensei/git/commits/630f39038c7751178465f990fb358b0c2d5b1914
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tenseijs/tensei
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tenseijs/tensei/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@tensei/core
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

Tensei is a headless CMS written in TypeScript and run on Node.js. A project defines its resources in code, and each resource represents a database table. The docs describe a fully customisable GraphQL or REST API, with a CMS dashboard and role-based access control included.

A new project is generated with `npx create-tensei-app` or `yarn create tensei-app`, and the server it creates runs as a long-lived Node.js process. Database access goes through MikroORM, and the docs name MySQL, PostgreSQL, SQLite and MongoDB as supported databases, each installed with its own driver package. The source is MIT-licensed and hosted in the tenseijs GitHub organization.

## Worth knowing

The project's website no longer serves the software: its domain now redirects to a parking page. The guides are therefore read from the documentation source repository, which has not been pushed since the newest tag, so the pages describe that release. The repository publishes versions as tags, not GitHub releases.
