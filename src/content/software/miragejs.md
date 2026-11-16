---
id: miragejs
name: Mirage JS
urls:
  home: https://miragejs.com/
  repository: https://github.com/miragejs/miragejs
  docs: https://miragejs.com/docs/getting-started/introduction/
category:
  - testing
description: API mocking library that intercepts a JavaScript app's network requests so the app can run without its backend.
status: active
maintainer: Sam Selikoff
firstRelease: 2019
language: javascript
runtime:
  - node
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2023-10-30
githubStargazers: 5525
npmWeeklyDownloads: 393479
contributors: 170
dependentRepos: 4395
dependentPackages: 157
social:
  x: https://twitter.com/miragejs
  discord: https://discord.gg/pPsdsrn
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://miragejs.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/miragejs/miragejs
    checkedAt: 2026-11-16
  - field: urls
    url: https://miragejs.com/docs/getting-started/introduction/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/miragejs
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://miragejs.com/docs/about/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/miragejs/miragejs
    checkedAt: 2026-11-16
  - field: category
    url: https://miragejs.com/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://miragejs.com/docs/comparison-with-other-tools/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://miragejs.com/docs/getting-started/installation/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/miragejs/miragejs/blob/v0.1.48/LICENSE.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/miragejs/miragejs/blob/v0.1.48/LICENSE.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/miragejs
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/miragejs
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/miragejs
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/miragejs/miragejs/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/miragejs/miragejs/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/miragejs/miragejs
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/miragejs/miragejs/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Mirage JS gives frontend developers a fake server that runs beside the app in the browser. It intercepts the network requests the app makes and answers them from route handlers the developer defines, with a database and factories for test data. It is installed from npm, and Sam Selikoff maintains it. The [introduction](https://miragejs.com/docs/getting-started/introduction/) explains how the library fits into a frontend project. Mirage began as an Ember addon, and its core was later extracted into this standalone package.

## Worth knowing

Mirage resets its state on every browser reload, and it can use localStorage for temporary persistence. Under Node.js it runs only in a browser-like environment such as jsdom, and it cannot yet mock a React app's server-side API requests.
