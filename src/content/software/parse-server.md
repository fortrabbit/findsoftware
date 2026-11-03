---
id: parse-server
name: Parse Server
urls:
  home: https://parseplatform.org
  repository: https://github.com/parse-community/parse-server
  docs: https://docs.parseplatform.org/parse-server/guide/
category:
  - backend
description: Open source backend for web and mobile apps that runs on Node.js, stores data in MongoDB or PostgreSQL, and can be mounted on an Express app.
status: active
maintainer: Parse Platform
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
databases:
  - mongodb
  - postgres
headlessApi:
  - rest
  - graphql
i18n: yes, localized pages and emails
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "9"
latestReleaseDate: 2026-10-30
githubStargazers: 21396
npmWeeklyDownloads: 81964
contributors: 318
social:
  x: https://twitter.com/ParsePlatform
  forum: https://community.parseplatform.org
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://parseplatform.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.parseplatform.org/parse-server/guide/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/parse-community/parse-server
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/parse-community/parse-server
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/parse-community/parse-server/blob/9.10.7/package.json
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/parse-community/parse-server
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/parse-community/parse-server
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/parse-community/parse-server/releases/tag/9.10.7
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/parse-community/parse-server/releases/tag/8.6.119
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/parse-community/parse-server/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/parse-community/parse-server
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/parse-community/parse-server/graphs/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/parse-server
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.parseplatform.org/parse-server/guide/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/parse-community/parse-server/blob/alpha/README.md
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Parse Server is a backend for web and mobile apps, written in JavaScript for Node.js. It serves a REST API, with an optional GraphQL API mounted alongside it, over a MongoDB or PostgreSQL database. It can run as its own process started from the command line, or be mounted on an existing Express app. Live Query adds real-time subscriptions over WebSockets, and Cloud Code adds server-side functions. The project is maintained by Parse Platform.

## Worth knowing

Parse Server does not support multi-tenancy. Parse Dashboard, a separate project from the server repository, is installed on its own.
