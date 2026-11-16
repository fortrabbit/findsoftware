---
id: immer
name: Immer
urls:
  home: https://immerjs.github.io/immer/
  repository: https://github.com/immerjs/immer
  docs: https://immerjs.github.io/immer/
category:
  - library
description: JavaScript package that allows code to work with immutable state in a more convenient way.
status: stub
maintainer: Michel Weststrate
maintainerType: individual
firstRelease: 2016
language: javascript
installMethod: npm install immer or yarn add immer
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-11-10
githubStargazers: 29003
npmWeeklyDownloads: 92536667
contributors: 222
dependentRepos: 1478225
dependentPackages: 5437
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://immerjs.github.io/immer/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/immerjs/immer
    checkedAt: 2026-11-16
  - field: urls
    url: https://immerjs.github.io/immer/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/immerjs/immer/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/immerjs/immer/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/immerjs/immer
    checkedAt: 2026-11-16
  - field: category
    url: https://immerjs.github.io/immer/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/immerjs/immer/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/immerjs/immer/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://immerjs.github.io/immer/installation/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://immerjs.github.io/immer/installation/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://immerjs.github.io/immer/installation/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/immerjs/immer/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/immerjs/immer/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/immer
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/immer
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/immerjs/immer
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/immerjs/immer/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/immer
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/immer
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

Immer lets code change a draft of plain JavaScript objects, arrays, Sets and Maps, and then produces the next immutable state from those changes, with structural sharing and object freezing. The documentation says it can be used wherever immutable data structures are needed, such as React state, Redux reducers or configuration management, and it supports JSON patches for communicating changes.

## Worth knowing

Support for Map and Set, JSON patches and an array-method optimization is opt-in: each is enabled once by a function call at application start. Immer relies on Proxy and cannot be used in engines without it.
