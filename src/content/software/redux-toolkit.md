---
id: redux-toolkit
name: Redux Toolkit
urls:
  home: https://redux.js.org/toolkit/
  repository: https://github.com/reduxjs/redux-toolkit
  docs: https://redux.js.org/toolkit/introduction/getting-started
category:
  - library
description: Official Redux toolset that sets up a store, writes reducers and async logic, and includes the RTK Query data fetching and caching add-on.
status: active
maintainer: Mark Erikson
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - node
basedOn:
  - redux
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-03
githubStargazers: 11248
npmWeeklyDownloads: 48260242
contributors: 414
dependentRepos: 154770
dependentPackages: 3480
social:
  discord: https://discord.gg/0ZcbPKXt5bZ6au5t
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://redux.js.org/toolkit/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/reduxjs/redux-toolkit
    checkedAt: 2026-11-16
  - field: urls
    url: https://redux.js.org/toolkit/introduction/getting-started
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/reduxjs/redux-toolkit
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://redux.js.org/toolkit/introduction/getting-started
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://redux.js.org/toolkit/introduction/getting-started
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/reduxjs/redux-toolkit
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/reduxjs/redux-toolkit/commits/v1.0.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/reduxjs/redux-toolkit/releases/tag/v2.14.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/reduxjs/redux-toolkit/releases/tag/v2.14.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/reduxjs/redux-toolkit
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/reduxjs/redux-toolkit/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@reduxjs/toolkit
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40reduxjs%2Ftoolkit
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40reduxjs%2Ftoolkit
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

Redux Toolkit is the Redux project's toolset for writing Redux logic. It covers store setup with `configureStore`, reducers and their action creators with `createSlice`, asynchronous work with `createAsyncThunk`, and normalized state with `createEntityAdapter`. The [getting started guide](https://redux.js.org/toolkit/introduction/getting-started) covers setup in an existing app and in a browser.

The package builds on Redux. Its `configureStore` includes the thunk middleware by default. RTK Query, the data fetching and caching layer, ships in the same package under its own entry points and is optional.

## Worth knowing

The browser build needs an import map when it is used without a bundler, because it imports its dependencies by package name. The package is deliberately limited in scope: it does not provide reusable Redux modules, folder structures or entity relationship management.
