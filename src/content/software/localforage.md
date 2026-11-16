---
id: localforage
name: localForage
urls:
  home: https://localforage.github.io/localForage
  repository: https://github.com/localForage/localForage
  docs: https://localforage.github.io/localForage
category:
  - library
description: JavaScript storage library with an asynchronous, localStorage-like API that stores values in IndexedDB, WebSQL or localStorage.
status: stub
maintainer: Mozilla
firstRelease: 2014
language: javascript
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2021-08-18
githubStargazers: 25801
npmWeeklyDownloads: 10921429
contributors: 94
dependentRepos: 87321
dependentPackages: 2798
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://localforage.github.io/localForage
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/localForage/localForage
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/localForage/localForage/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/localForage/localForage
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/localForage/localForage
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/localForage/localForage/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/localForage/localForage/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/localForage/localForage/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/localForage/localForage
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/localForage/localForage/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/localforage
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/localforage
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/localforage
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
---

localForage is an asynchronous storage library with an API that resembles localStorage. It keeps data in IndexedDB or WebSQL, and it falls back to localStorage in browsers that support neither. Reads and writes return promises or take callbacks. The README says the library is designed to run in the browser, and it can be included in a page as one JavaScript file or installed with npm.

## Worth knowing

Because the API is asynchronous, code written against localStorage's synchronous calls has to await the results. The README also says that when localStorage is the backend, its size limits make storing many large Blobs impossible.
