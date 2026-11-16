---
id: nanostores
name: Nano Stores
urls:
  home: https://nanostores.net
  repository: https://github.com/nanostores/nanostores
  docs: https://nanostores.net/docs/getting-started/
  plugins: https://nanostores.net/ecosystem/
category:
  - library
description: State manager for JavaScript and TypeScript made of small atomic stores that work with React, Vue, Svelte and other frameworks.
status: active
maintainer: Andrey Sitnik
firstRelease: 2021
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-06
githubStargazers: 7650
npmWeeklyDownloads: 19513538
contributors: 66
dependentRepos: 706
dependentPackages: 102
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://nanostores.net/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/nanostores/nanostores
    checkedAt: 2026-11-16
  - field: urls
    url: https://nanostores.net/docs/getting-started/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/nanostores/nanostores/commits/83f59f19e1cd0217ec714f355e4649232da13989
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/nanostores/nanostores/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://nanostores.net/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/nanostores/nanostores
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/nanostores/nanostores/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/nanostores/nanostores
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://nanostores.net/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/nanostores/nanostores/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/nanostores/nanostores/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/nanostores/nanostores
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/nanostores/nanostores/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/nanostores
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nanostores
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nanostores
    checkedAt: 2026-11-16
  - field: urls
    url: https://nanostores.net/docs/ecosystem/
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Nano Stores keeps application state in small stores outside the UI components. An atom holds a value and a computed store derives one from other stores, so a component reads only the stores it uses. The [getting started guide](https://nanostores.net/docs/getting-started/) describes a store as a plain JavaScript module that components only read.

Official adapter packages connect the stores to React, Preact, Vue, Solid, Lit, Angular and Alpine.js, while Svelte and vanilla JavaScript use them without an adapter. Companion packages cover persistence, data fetching, routing and translations.

## Worth knowing

On the server a store is shared by all requests, so the homepage advises keeping per-request data out of it.
