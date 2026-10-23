---
id: buckets
name: Buckets
urls:
  repository: https://github.com/bucketsio/buckets
  docs: https://github.com/bucketsio/buckets/blob/master/README.md
category:
  - cms
description: Open-source content management system built on Node.js and MongoDB, with routes and Handlebars templates.
status: discontinued
maintainer: David Kaneda
firstRelease: 2013
runtime:
  - node
hosting:
  - node
runtimeMin: node 0.10
contentStore:
  - database
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
templating: handlebars
runsAs:
  - always-on
installMethod: npm install buckets
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2014-11-02
githubStargazers: 1048
npmWeeklyDownloads: 50
contributors: 13
social:
  x: https://twitter.com/bucketsio
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://github.com/bucketsio/buckets
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/bucketsio/buckets
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/bucketsio/buckets/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/bucketsio/buckets/master/package.json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/buckets
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/bucketsio/buckets/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/bucketsio/buckets/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/bucketsio/buckets/blob/master/docs/database.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/bucketsio/buckets/blob/master/docs/database.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/bucketsio/buckets/blob/master/docs/config.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/bucketsio/buckets/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/bucketsio/buckets/blob/master/docs/user-docs/templates.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/bucketsio/buckets
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/asm-products/buckets/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/buckets
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/bucketsio/buckets/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/bucketsio/buckets/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/bucketsio/buckets
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/bucketsio/buckets/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/buckets
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: CMS
ai: authored
---

Buckets is an open-source content management system that stores its content in MongoDB and publishes it through routes. Each route maps an Express-style URL pattern to a Handlebars template, and the template pulls entries from the database with an entries helper. The package is installed from npm into a Node.js application, and the running server serves the site together with an admin interface at a configurable URL segment. The README also lists REST API documentation for the project.

## Worth knowing

The GitHub repository is archived, and the project's own site says development is on hold.
