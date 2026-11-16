---
id: pinia-colada
name: Pinia Colada
urls:
  home: https://pinia-colada.esm.dev
  repository: https://github.com/posva/pinia-colada
  docs: https://pinia-colada.esm.dev/quick-start.html
category:
  - library
description: Data fetching layer for Vue that adds cached queries, mutations and async state on top of Pinia.
status: active
maintainer: Eduardo San Martin Morote
maintainerType: individual
firstRelease: 2023
language: javascript
basedOn:
  - pinia
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-30
githubStargazers: 2245
npmWeeklyDownloads: 190250
contributors: 51
social:
  x: https://twitter.com/posva
  forum: https://github.com/posva/pinia-colada/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/posva/pinia-colada
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/posva/pinia-colada
    checkedAt: 2026-11-16
  - field: urls
    url: https://pinia-colada.esm.dev/quick-start.html
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/posva/pinia-colada/releases
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/posva/pinia-colada/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/posva/pinia-colada/blob/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/posva/pinia-colada/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/posva/pinia-colada
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/posva/pinia-colada/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/posva/pinia-colada/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/posva/pinia-colada/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/posva/pinia-colada/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/posva/pinia-colada
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/posva/pinia-colada/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@pinia/colada
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

Pinia Colada is a data fetching layer for Vue applications, built on top of Pinia. Its core is the `useQuery` and `useMutation` functions, used to read and write data, with automatic caching, request deduplication, optimistic updates and a plugin system. Server-side rendering is supported out of the box.

The project's [why page](https://pinia-colada.esm.dev/why.html) says it shares similarities with TanStack Query and has adapted some of its APIs for easier migration, and a [migration guide](https://pinia-colada.esm.dev/cookbook/migration-tvq.html) covers moving from @tanstack/vue-query.
