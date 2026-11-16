---
id: redux-saga
name: Redux-Saga
urls:
  home: https://redux-saga.js.org/
  repository: https://github.com/redux-saga/redux-saga
  docs: https://redux-saga.js.org/docs/introduction/GettingStarted
category:
  - library
description: Redux middleware that manages application side effects as generator-based sagas.
status: active
maintainer: Redux-Saga team
maintainerType: community
firstRelease: 2015
language: javascript
basedOn:
  - redux
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-13
githubStargazers: 22410
npmWeeklyDownloads: 1903266
contributors: 326
dependentRepos: 98110
dependentPackages: 3138
social:
  discord: https://discord.gg/AKz29HvK2h
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://redux-saga.js.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/redux-saga/redux-saga
    checkedAt: 2026-11-16
  - field: urls
    url: https://redux-saga.js.org/docs/introduction/GettingStarted
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/redux-saga/redux-saga/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/redux-saga/redux-saga
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/redux-saga/redux-saga/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/redux-saga/redux-saga/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/redux-saga/redux-saga/blob/main/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/redux-saga
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/redux-saga/redux-saga
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/redux-saga/redux-saga/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/redux-saga/redux-saga/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/redux-saga
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/redux-saga/redux-saga/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/redux-saga/redux-saga/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/redux-saga/redux-saga
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/redux-saga/redux-saga/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/redux-saga
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/redux-saga
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

Redux-Saga is Redux middleware that manages application side effects such as data fetching. A saga acts like a separate thread responsible for side effects, started, paused and cancelled from the application with normal Redux actions, and sagas are written with an ES6 feature called Generators.

The README compares it with redux-thunk and says sagas avoid callback hell. The repository is a monorepo that publishes the core package beside related packages.

## Worth knowing

The UMD build needs a browser that supports ES2015 generators. Otherwise they have to be transpiled and given a runtime.
