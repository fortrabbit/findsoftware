---
id: nocodb
name: NocoDB
urls:
  home: https://nocodb.com
  repository: https://github.com/nocodb/nocodb
  docs: https://docs.nocodb.com/
  pricing: https://nocodb.com/pricing
category:
  - database
description: Spreadsheet-style interface for building online databases on SQLite, PostgreSQL or an existing database, self-hosted with Docker or offered as NocoDB Cloud.
status: active
maintainer: NocoDB Inc
maintainerType: company
firstRelease: 2018
language: javascript
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: Docker image nocodb/nocodb
licenseModel: source-available
license: Sustainable Use License
latestReleaseDate: 2026-09-29
githubStargazers: 65332
contributors: 338
social:
  x: https://twitter.com/nocodb
  discord: https://discord.gg/c7GEYrvFtT
  forum: https://community.nocodb.com/
  subreddit: https://www.reddit.com/r/NocoDB/
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://nocodb.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/nocodb/nocodb
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/nocodb/nocodb
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nocodb.com/docs/self-hosting/installation/single-server
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nocodb.com/docs/self-hosting/installation/community-methods
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://nocodb.com/docs/self-hosting/installation/single-server
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/nocodb/nocodb/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/nocodb/nocodb/blob/develop/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/nocodb/nocodb/blob/develop/LICENSE.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://nocodb.com/pricing
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://nocodb.com/terms-of-service
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/nocodb/nocodb/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/nocodb/nocodb/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/nocodb/nocodb
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/nocodb/nocodb/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🗄️
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Database
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

NocoDB is a web application that presents a database as a spreadsheet. A user creates tables and views in the browser, and the same data is available through REST APIs. Views include grid, gallery, form, kanban and calendar, and access is controlled with roles at several levels. The docs describe importing Airtable bases.

It is self-hosted with Docker on SQLite or PostgreSQL, with an install script that sets up NocoDB with PostgreSQL and Redis on one server, or with a binary download meant for local testing. NocoDB Cloud is the hosted version from the same maintainer, NocoDB Inc.

## Worth knowing

NocoDB is published under the Sustainable Use License, which limits use to internal business purposes or non-commercial use, so the record classes it as source-available. Separate paid self-hosted plans add features such as SSO, audit logs and row-level security.
