---
id: mongo-express
name: mongo-express
urls:
  repository: https://github.com/mongo-express/mongo-express
category:
  - admin-panel
description: Web-based admin interface for MongoDB, written in JavaScript for Node.js with Express.
status: active
maintainer: mongo-express
firstRelease: 2012
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 14
databases:
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: npm global install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-10-02
githubStargazers: 5987
npmWeeklyDownloads: 705
contributors: 144
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/mongo-express/mongo-express
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/mongo-express/mongo-express/blob/master/package.json
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/mongo-express/mongo-express
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/mongo-express/mongo-express/blob/v1.0.2/package.json
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/mongo-express/mongo-express/blob/master/LICENSE.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/mongo-express/mongo-express/blob/master/LICENSE.md
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/mongo-express/mongo-express/releases/tag/v1.0.2
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/mongo-express/mongo-express/releases/tag/v1.0.2
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://registry.npmjs.org/mongo-express
    checkedAt: 2026-10-30
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-19:2026-10-25/mongo-express
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/mongo-express/mongo-express
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/mongo-express/mongo-express/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/mongo-express/mongo-express/blob/master/README.md
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
---

mongo-express is a web-based admin interface for MongoDB and compatible services, written in JavaScript for Node.js with Express. It connects to a MongoDB server through a connection string and lets a browser view and edit its databases, collections and documents. It can be installed globally from npm, run from a Docker image, or mounted as middleware inside an Express application. It also supports sign-in through OpenID Connect.

## Worth knowing

The README says mongo-express should only be used privately for development purposes, because JSON documents pass through a JavaScript virtual machine and the web interface can run JavaScript on the server. Its newest versions are release candidates, and the last stable release is older. Docker Hub labels the image the README links as deprecated.
