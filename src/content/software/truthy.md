---
id: truthy
name: Truthy
urls:
  repository: https://github.com/gobeam/truthy
  docs: https://github.com/gobeam/truthy/blob/master/README.md
category:
  - headless-cms
description: Backend API for a CMS, written in NestJS, with modules for users, roles, permissions, email, localization and two-factor sign-in.
status: stub
maintainer: Roshan Ranabhat (gobeam)
maintainerType: individual
firstRelease: 2022
language: javascript
runtime:
  - node
hosting:
  - node
basedOn:
  - nestjs
databases:
  - postgres
adminUi: false
headlessApi:
  - rest
i18n: yes
runsAs:
  - always-on
installMethod: npx truthy-api
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-08-01
githubStargazers: 604
npmWeeklyDownloads: 6
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/gobeam/truthy
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/gobeam/truthy
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/gobeam/truthy
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/gobeam/truthy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/gobeam/truthy/releases/tag/0.3.3
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/gobeam/truthy/releases/tag/0.3.3
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/truthy-api
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gobeam/truthy
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gobeam/truthy/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/truthy-api
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Truthy is the backend API of a CMS, written in NestJS and run as a Node.js service. It provides modules for authentication, users, roles and permissions, an email module, account settings, one-time passwords and localization, with two-factor sign-in by time-based codes. Its data is kept in PostgreSQL, and Redis is used for queues and rate limiting. Its Swagger documentation is available in development mode.

It can be installed with `npx truthy-api` or by cloning the repository, and its Docker Compose setup starts PostgreSQL, Redis and the API as three containers.

## Worth knowing

The frontend is a separate project, so the API has no admin screens of its own.
