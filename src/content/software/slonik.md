---
id: slonik
name: Slonik
urls:
  repository: https://github.com/gajus/slonik
  docs: https://github.com/gajus/slonik
category:
  - library
description: Node.js PostgreSQL client with strict types, detailed logging and assertions, built on the node-postgres driver.
status: active
maintainer: Gajus Kuizinas
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
databases:
  - postgres
installMethod: npm
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "49"
latestReleaseDate: 2026-11-06
githubStargazers: 4937
npmWeeklyDownloads: 283485
contributors: 58
dependentRepos: 245
dependentPackages: 90
social:
  x: https://twitter.com/kuizinas
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/gajus/slonik
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/gajus/slonik/main/packages/slonik/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/gajus/slonik/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/gajus/slonik
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/gajus/slonik/main/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/gajus/slonik/slonik@49.13.0/packages/slonik/package.json
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/gajus/slonik/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/gajus/slonik/slonik@49.13.0/packages/slonik/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://registry.npmjs.org/slonik/latest
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/gajus/slonik/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/gajus/slonik/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/slonik
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/gajus/slonik/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/gajus/slonik/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/gajus/slonik
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/gajus/slonik/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/slonik
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/slonik
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/slonik
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

Slonik is a PostgreSQL client for Node.js, written in TypeScript. It is built on top of pg, the node-postgres driver, and provides methods for building queries and querying data. The repository is a monorepo that holds the library's packages, and its [README](https://github.com/gajus/slonik) describes the API and compares Slonik with other PostgreSQL clients.

## Worth knowing

The README says the library does not handle migrations, because a database client and migrations are separate problems. It names other tools for that job.
