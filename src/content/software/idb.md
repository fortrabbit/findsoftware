---
id: idb
name: idb
urls:
  repository: https://github.com/jakearchibald/idb
  docs: https://github.com/jakearchibald/idb/blob/main/README.md
category:
  - library
description: Promise-based wrapper around the browser's IndexedDB API that mirrors its methods with small usability changes.
status: active
maintainer: Jake Archibald
maintainerType: individual
firstRelease: 2015
language: javascript
installMethod: npm
licenseModel: open-source
license: ISC
currentMajor: "8"
latestReleaseDate: 2026-10-06
githubStargazers: 7443
npmWeeklyDownloads: 36312869
contributors: 32
dependentRepos: 782286
dependentPackages: 602
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/jakearchibald/idb
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/jakearchibald/idb/blob/main/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/idb
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/jakearchibald/idb/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/jakearchibald/idb/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/jakearchibald/idb
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/jakearchibald/idb/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/jakearchibald/idb/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/jakearchibald/idb/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/jakearchibald/idb
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/jakearchibald/idb/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/idb/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/idb
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/idb
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/jakearchibald/idb
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/jakearchibald/idb/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/idb
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/idb
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

idb wraps the browser's IndexedDB API and mirrors its methods, but every request returns a promise. A database object gets shortcuts such as `get`, `put` and `getAll` that open a transaction for a single call, transactions expose a `done` promise, and cursors and stores can be iterated with `for await`. `openDB` takes upgrade, blocked, blocking and terminated callbacks, and the package ships TypeScript types that can describe a database's stores.

## Worth knowing

A transaction closes once nothing is left to do after the microtask queue, so awaiting a fetch between the start and the end of a transaction makes the next write fail. The README also says the library targets modern browsers and does not support Internet Explorer. For key-value storage alone, the README points to idb-keyval.
