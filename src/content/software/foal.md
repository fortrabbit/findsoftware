---
id: foal
name: FoalTS
urls:
  home: https://foalts.org/
  repository: https://github.com/FoalTS/foal
  docs: https://foalts.org/docs/
category:
  - framework
description: Node.js framework for creating web applications, written in TypeScript.
status: active
maintainer: FoalTS
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - express
databases:
  - postgres
  - mysql
  - sqlite
  - mongodb
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: npx scaffolder
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-07-09
githubStargazers: 1936
npmWeeklyDownloads: 1692
social:
  bluesky: https://bsky.app/profile/foalts.org
  discord: https://discord.gg/QUrJv98
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://foalts.org/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/FoalTS/foal
    checkedAt: 2026-10-21
  - field: urls
    url: https://foalts.org/docs/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/FoalTS/foal/master/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://foalts.org/docs/
    checkedAt: 2026-10-21
  - field: language
    url: https://foalts.org/docs/
    checkedAt: 2026-10-21
  - field: runtime
    url: https://foalts.org/docs/
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/@foal/core/latest
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/@foal/core
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://foalts.org/docs/common/expressjs
    checkedAt: 2026-10-21
  - field: databases
    url: https://foalts.org/docs/databases/typeorm/introduction
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://raw.githubusercontent.com/FoalTS/foal/master/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://foalts.org/docs/deployment-and-environments/checklist
    checkedAt: 2026-10-21
  - field: headlessApi
    url: https://foalts.org/docs/
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/FoalTS/foal
    checkedAt: 2026-10-21
  - field: license
    url: https://raw.githubusercontent.com/FoalTS/foal/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/@foal/core/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/FoalTS/foal/releases/latest
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@foal/core
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/FoalTS/foal
    checkedAt: 2026-10-21
figure:
  emoji: 🧱
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

FoalTS is a Node.js framework for building web applications, written in TypeScript. It bundles a CLI, testing tools, frontend utilities, authentication, an ORM, deployment environments and GraphQL and Swagger API support in one place, so a project does not need to assemble these from separate npm packages. The application returned by its `createApp` function is an ExpressJS application. A project is created with `npx @foal/cli createapp`, and `npm run dev` starts a development server.

For production, the [deployment checklist](https://foalts.org/docs/deployment-and-environments/checklist) describes starting the app with the environment set to production, and covers HTTPS, secrets and production database migrations.
