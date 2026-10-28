---
id: search-index
name: search-index
urls:
  home: https://fergiemcdowall.github.io/search-index/
  repository: https://github.com/fergiemcdowall/search-index
  docs: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/API.md
category:
  - search
description: JavaScript full-text search library for the browser and Node.js that keeps its index in a persistent key-value store.
status: active
maintainer: Fergus McDowall
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
contentStore:
  - database
runsAs:
  - browser
installMethod: npm package import
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-08-14
githubStargazers: 1423
npmWeeklyDownloads: 39197
contributors: 39
dependentRepos: 129
dependentPackages: 36
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://fergiemcdowall.github.io/search-index/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/API.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/fergiemcdowall/search-index
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/fergiemcdowall/search-index/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/fergiemcdowall/search-index/releases
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/fergiemcdowall/search-index
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/API.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/package.json
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/fergiemcdowall/search-index/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/API.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/FAQ.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/API.md
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/docs/API.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/package.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/fergiemcdowall/search-index/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/fergiemcdowall/search-index/blob/v6.0.2/package.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/fergiemcdowall/search-index/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/fergiemcdowall/search-index
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/fergiemcdowall/search-index/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/search-index
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/search-index
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/search-index
    checkedAt: 2026-10-28
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

search-index is a JavaScript full-text search library that runs in the browser and in Node.js. An index is opened with a `SearchIndex` constructor, documents are added with `PUT`, and results come back from `QUERY`. The index is kept in a persistent store: IndexedDB in a browser and LevelDB in Node.js by default.

The store can be swapped through the `db` option for any abstract-level compatible backend, such as the in-memory store or a backend for Redis or Postgres. The FAQ shows the library loaded with a script tag from its built file.

## Worth knowing

In a browser the index lives in that browser's own IndexedDB storage, so an index belongs to the browser it was built in.
