---
id: saltcorn
name: Saltcorn
urls:
  home: https://saltcorn.com
  repository: https://github.com/saltcorn/saltcorn
  docs: https://wiki.saltcorn.com/
category:
  - admin-panel
description: Open-source no-code database application builder for web and mobile apps, with views, workflows and a visual builder over PostgreSQL or SQLite.
status: active
maintainer: Tom Nielsen
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
databases:
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
i18n: user interface translations, ten locales
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-08-05
githubStargazers: 2089
npmWeeklyDownloads: 1515
contributors: 45
social:
  x: https://twitter.com/saltcorns
  discord: https://discord.gg/cbrTB8bp6e
  forum: https://forum.saltcorn.com
  youtube: https://www.youtube.com/@saltcorn
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://saltcorn.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: urls
    url: https://saltcorn.com
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/saltcorn/saltcorn/v1.6.2/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/saltcorn/saltcorn/v1.6.2/packages/saltcorn-cli/package.json
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://wiki.saltcorn.com/view/ShowPage?title=Install%20on%20Ubuntu
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@saltcorn/cli
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: databases
    url: https://wiki.saltcorn.com/view/ShowPage/where-can-i-run-saltcorn
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://saltcorn.com
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://wiki.saltcorn.com/view/ShowPage/api
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/saltcorn/saltcorn/v1.6.2/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://saltcorn.com
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/saltcorn/saltcorn
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://registry.npmjs.org/@saltcorn/cli/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@saltcorn/cli
    checkedAt: 2026-11-03
  - field: i18n
    url: https://wiki.saltcorn.com/view/ShowPage/language-translations
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Saltcorn is a no-code builder for database applications that serve web and mobile apps. Tables, views, pages and actions are assembled in the application itself. It stores its data in PostgreSQL, and SQLite is also supported. A server install runs Saltcorn as a service, and the project runs a multitenant instance at saltcorn.com. Saltcorn exposes a REST-like JSON API over its tables, and access to resources is controlled by user roles, each user having exactly one.

## Worth knowing

The README says the saltcorn.com service comes with no guarantees about the security or availability of the applications stored there.
