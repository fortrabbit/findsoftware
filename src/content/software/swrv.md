---
id: swrv
name: swrv
urls:
  home: https://docs-swrv.netlify.app/
  repository: https://github.com/Kong/swrv
  docs: https://docs-swrv.netlify.app/
category:
  - library
description: Vue library that fetches remote data with stale-while-revalidate caching through the Vue Composition API.
status: active
maintainer: Kong Inc.
maintainerType: company
firstRelease: 2020
language: javascript
basedOn:
  - vue
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-09-16
githubStargazers: 2278
npmWeeklyDownloads: 2575610
contributors: 23
dependentRepos: 830
dependentPackages: 30
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://docs-swrv.netlify.app/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/Kong/swrv
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs-swrv.netlify.app/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/Kong/swrv/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://docs-swrv.netlify.app/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/Kong/swrv
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/Kong/swrv
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/Kong/swrv/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/Kong/swrv/releases
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/swrv/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/Kong/swrv/releases
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/Kong/swrv/blob/master/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/swrv
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/Kong/swrv
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/Kong/swrv/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/swrv
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/swrv
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

swrv is a Vue library for fetching remote data with stale-while-revalidate caching: a component gets cached data first, then the library sends the request and updates the data. The README describes it as largely a port of swr, the React library, and its FAQ compares the two.

## Worth knowing

Server-side rendering support was removed in a later release. Vue 2 is no longer supported; its last releases stay installable under separate tags.
