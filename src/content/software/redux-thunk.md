---
id: redux-thunk
name: Redux Thunk
urls:
  repository: https://github.com/reduxjs/redux-thunk
  docs: https://redux.js.org/usage/writing-logic-thunks
category:
  - library
description: Redux middleware that lets action creators return functions, which can dispatch actions and read the store state.
status: active
maintainer: Dan Abramov
firstRelease: 2015
language: javascript
basedOn:
  - redux
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2023-12-04
githubStargazers: 17654
npmWeeklyDownloads: 49830643
contributors: 49
dependentRepos: 591408
dependentPackages: 7365
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/reduxjs/redux-thunk
    checkedAt: 2026-11-16
  - field: urls
    url: https://redux.js.org/usage/writing-logic-thunks
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/reduxjs/redux-thunk/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/reduxjs/redux-thunk
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/reduxjs/redux-thunk/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/reduxjs/redux-thunk/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/reduxjs/redux-thunk
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/reduxjs/redux-thunk/blob/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/reduxjs/redux-thunk/releases/tag/v0.1.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/reduxjs/redux-thunk/releases/tag/v3.1.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/reduxjs/redux-thunk/releases/tag/v3.1.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/reduxjs/redux-thunk
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/reduxjs/redux-thunk/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/redux-thunk
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/redux-thunk
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/redux-thunk
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

Redux Thunk is middleware for Redux that lets an action creator return a function instead of a plain action object. The middleware calls that function with the store's `dispatch` and `getState` methods, so the function can read the current state and dispatch actions at a later time or only when a condition is met. The [Redux documentation on thunks](https://redux.js.org/usage/writing-logic-thunks) describes the pattern in more detail.

With Redux's `createStore`, the middleware is installed through `applyMiddleware`. Redux Toolkit's `configureStore` adds it by default.

## Worth knowing

The thunk middleware is not part of the Redux core library, so a store set up by hand needs the package added.
