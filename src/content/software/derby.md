---
id: derby
name: DerbyJS
urls:
  home: https://derbyjs.com
  repository: https://github.com/derbyjs/derby
  docs: https://derbyjs.github.io/derby/
category:
  - framework
description: MVC framework for realtime, collaborative web applications that run in Node.js and in browsers.
status: active
maintainer: Nate Smith
language: typescript
runtime:
  - node
hosting:
  - node
databases:
  - mongodb
renderingModes:
  - spa
  - server
installMethod: git clone of derby-examples, then npm install
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2024-10-24
githubStargazers: 4700
npmWeeklyDownloads: 2176
contributors: 47
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://derbyjs.com
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/derbyjs/derby
    checkedAt: 2026-10-21
  - field: urls
    url: https://derbyjs.github.io/derby/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/derbyjs/derby/blob/master/README.md
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/derbyjs/derby/blob/master/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/derbyjs/derby
    checkedAt: 2026-10-21
  - field: license
    url: https://registry.npmjs.org/derby/latest
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://derbyjs.com
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://derbyjs.com/started
    checkedAt: 2026-10-21
  - field: runtime
    url: https://derbyjs.com/started
    checkedAt: 2026-10-21
  - field: databases
    url: https://derbyjs.com/started
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://github.com/derbyjs/derby/blob/master/docs/apps.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://github.com/derbyjs/derby/blob/master/docs/index.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/derby/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/derby
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/derby
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/derbyjs/derby
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/derbyjs/derby/contributors?anon=true&per_page=100
    checkedAt: 2026-10-21
figure:
  emoji: 🧱
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

DerbyJS is built on a data synchronization engine, Racer, and renders the same templates in the browser and on the server. A project can hold one or more single-page apps, each with models, templates and routes, and the server side plugs into Express as router middleware. The [documentation](https://derbyjs.github.io/derby/) covers the framework, and the [getting-started page](https://derbyjs.com/started) lists Node.js and MongoDB as what a first app needs.

## Worth knowing

The getting-started page calls the MongoDB adapter the most complete of the database adapters, and Redis is optional for scaling pub/sub beyond one server process. The install page gives an npm command only for the derby-examples repository, not for the framework package itself.
