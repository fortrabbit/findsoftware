---
id: pinia
name: Pinia
urls:
  home: https://pinia.vuejs.org
  repository: https://github.com/vuejs/pinia
  docs: https://pinia.vuejs.org/getting-started.html
category:
  - library
description: Store library for Vue that shares state across components and pages.
status: active
maintainer: Eduardo San Martin Morote
firstRelease: 2019
language: javascript
basedOn:
  - vue
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-14
githubStargazers: 14763
npmWeeklyDownloads: 7333600
contributors: 307
dependentRepos: 20548
dependentPackages: 2364
social:
  x: https://twitter.com/posva
  forum: https://github.com/vuejs/pinia/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pinia.vuejs.org
    checkedAt: 2026-11-16
  - field: urls
    url: https://pinia.vuejs.org/getting-started.html
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/vuejs/pinia
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/vuejs/pinia/blob/v4/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/pinia
    checkedAt: 2026-11-16
  - field: category
    url: https://pinia.vuejs.org
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://pinia.vuejs.org/introduction.html
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/vuejs/pinia
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://pinia.vuejs.org/getting-started.html
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/vuejs/pinia/blob/v4/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/vuejs/pinia/blob/v4/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/vuejs/pinia/releases/tag/v4.1.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/vuejs/pinia/releases/tag/v4.1.0
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/pinia
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/vuejs/pinia
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/vuejs/pinia/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/pinia
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/pinia
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

Pinia is a store library for Vue. A store holds state and business logic outside the component tree, built from state, getters and actions, so components and pages can share it. The docs cover server-side rendering and a Nuxt module published from the same repository, and the project names itself the successor of Vuex.

## Worth knowing

The current line works with Vue 3, and the README points to a separate branch for Vue 2. Pinia targets modern browsers and uses Object.hasOwn(), so older browsers need a polyfill.
