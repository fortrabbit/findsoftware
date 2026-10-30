---
id: outerbase-studio
name: Outerbase Studio
urls:
  home: https://studio.outerbase.com
  repository: https://github.com/outerbase/studio
category:
  - admin-panel
description: Browser-based graphical client for managing SQLite, LibSQL and other SQL databases.
status: active
maintainer: Outerbase, Inc.
maintainerType: company
firstRelease: 2024
language: javascript
runtime:
  - node
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
runsAs:
  - local
installMethod: Cloudflare Workers deploy button
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2025-03-31
githubStargazers: 5999
contributors: 16
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://studio.outerbase.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/outerbase/studio
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://outerbase.com/terms/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://outerbase.com/terms/
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/outerbase/studio/releases/tag/v0.1.0
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/outerbase/studio
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/outerbase/studio/blob/v0.10.2/Dockerfile
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/outerbase/studio/releases/tag/v0.10.2
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/outerbase/studio/releases/tag/v0.10.2
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/outerbase/studio
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/outerbase/studio/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/outerbase/studio/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/outerbase/studio
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/outerbase/studio/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/outerbase/studio/blob/master/README.md
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
---

Outerbase Studio is a database client that runs in the browser and connects to SQLite and LibSQL-based databases such as Turso, rqlite and Cloudflare D1. The [README](https://github.com/outerbase/studio/blob/master/README.md) lists MySQL and PostgreSQL as beta connections with limited features. The project is a web app that can be deployed to Cloudflare Workers from its repository with a deploy button, and a desktop build wraps the same web version. The desktop build is the route for drivers that a browser cannot run, such as MySQL and PostgreSQL. Outerbase, Inc. maintains the project, as its [terms page](https://outerbase.com/terms/) states.

## Worth knowing

The beta status of the MySQL and PostgreSQL connections is stated in the README, so a reader who needs those engines should check the feature list before choosing it. The latest tagged release is older than the most recent commits on the default branch, so a reader who needs the newest code has to build from the repository.
