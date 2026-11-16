---
id: knex
name: Knex.js
urls:
  home: https://knexjs.org/
  repository: https://github.com/knex/knex
  docs: https://knexjs.org/guide/
  plugins: https://github.com/knex/knex/blob/master/ECOSYSTEM.md
category:
  - library
description: SQL query builder for JavaScript that runs on Node.js and builds queries for several SQL databases.
status: active
maintainer: Tim Griesser
firstRelease: 2013
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 16
databases:
  - postgres
  - mariadb
  - mysql
  - sqlserver
  - sqlite
  - oracle
installMethod: npm install knex --save
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-06-26
githubStargazers: 20337
npmWeeklyDownloads: 6786967
contributors: 432
dependentRepos: 94868
dependentPackages: 3407
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://knexjs.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/knex/knex
    checkedAt: 2026-11-16
  - field: urls
    url: https://knexjs.org/guide/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/knex/knex/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/knex
    checkedAt: 2026-11-16
  - field: category
    url: https://knexjs.org/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/knex/knex
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/knex/knex/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/knex/knex/blob/3.3.0/package.json
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/knex/knex/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://knexjs.org/guide/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/knex/knex/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/knex/knex
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/knex/knex/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/knex/knex/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/knex/knex/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/knex/knex
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/knex/knex/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/knex
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/knex
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/knex
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

Knex.js is a SQL query builder for JavaScript that runs on Node.js. A program writes queries as JavaScript calls, and the library turns them into SQL for the database it is configured with, across the SQL databases it supports.

## Worth knowing

The installation guide describes a browser build made with a bundler, which is limited to the constraints of WebSQL. It says that composing SQL in the browser for execution on the server is highly discouraged because it can cause serious security vulnerabilities, and that browser builds outside WebSQL are meant for learning.
