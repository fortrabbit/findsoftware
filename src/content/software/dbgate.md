---
id: dbgate
name: DbGate
urls:
  home: https://www.dbgate.io/
  repository: https://github.com/dbgate/dbgate
  docs: https://docs.dbgate.io/
  pricing: https://www.dbgate.io/pricing/
category:
  - admin-panel
description: Cross-platform database client for SQL and NoSQL databases, available as a desktop app and as a self-hosted web app.
status: active
maintainer: Sprinx Systems, a.s.
maintainerType: company
parent: Sprinx group
firstRelease: 2020
hqCountry: CZ
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
databases:
  - mysql
  - mariadb
  - postgres
  - oracle
  - sqlserver
  - sqlite
  - mongodb
adminUi: true
i18n: localized into many languages
runsAs:
  - local
  - always-on
installMethod: desktop installers for Windows, Linux and macOS
licenseModel: open-core
license: GPL-3.0
currentMajor: "7"
latestReleaseDate: 2026-10-27
githubStargazers: 7355
npmWeeklyDownloads: 808
contributors: 49
social:
  x: https://twitter.com/db_gate
  facebook: https://www.facebook.com/dbgateapp/
  instagram: https://www.instagram.com/dbgate_io/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.dbgate.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/dbgate/dbgate
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.dbgate.io/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.dbgate.io/contact/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.dbgate.io/contact/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.dbgate.io/contact/
    checkedAt: 2026-10-28
  - field: parent
    url: https://www.dbgate.io/contact/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/dbgate/dbgate/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://www.dbgate.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/dbgate/dbgate
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/dbgate/dbgate/master/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/dbgate/dbgate/blob/v7.3.3/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/dbgate/dbgate/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download-community/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download-community/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download-community/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download-community/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download-community/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.dbgate.io/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.dbgate.io/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dbgate.io/download/
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/dbgate-serve
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/dbgate/dbgate/master/README.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://www.dbgate.io/download/
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.dbgate.io/pricing/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://raw.githubusercontent.com/dbgate/dbgate/master/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://www.dbgate.io/
    checkedAt: 2026-10-28
  - field: i18n
    url: https://www.dbgate.io/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/dbgate/dbgate/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/dbgate/dbgate/master/README.md
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/dbgate/dbgate/releases/latest
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/dbgate/dbgate/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/dbgate/dbgate
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/dbgate/dbgate/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
packagistDownloads: null
---

DbGate is a database client for SQL and NoSQL databases, with a desktop application and a web application that can be self-hosted. The [homepage](https://www.dbgate.io/) describes it as a powerful and easy to use client, and the [documentation](https://docs.dbgate.io/) names the desktop app and the self-hosted web app, which runs from Docker or as an npm package. The [repository](https://github.com/dbgate/dbgate) is JavaScript, with Node.js on the backend and an Electron shell for the desktop build.

DbGate Cloud is online storage for connections and SQL scripts, and the Premium edition includes access to it. The software is maintained by Sprinx Systems, a.s., and the contact page says DbGate is part of the Sprinx group.

## Worth knowing

The Premium and Team Premium editions add features under a paid license beside the GPL-3.0 Community code, and Team Premium adds administration of users, connections and roles. The self-hosted web application is a server process that keeps running, so it needs a host that runs long-lived processes and cannot be a static web space.
