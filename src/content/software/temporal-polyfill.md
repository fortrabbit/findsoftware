---
id: temporal-polyfill
name: temporal-polyfill
urls:
  repository: https://github.com/fullcalendar/temporal-polyfill
  docs: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md
category:
  - library
description: JavaScript polyfill of the Temporal date and time API, for browsers and Node.js.
status: active
maintainer: Adam Shaw
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 16
installMethod: npm, cdn
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-04
githubStargazers: 791
npmWeeklyDownloads: 7482696
contributors: 12
dependentRepos: 49
dependentPackages: 14
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/fullcalendar/temporal-polyfill
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/fullcalendar/temporal-polyfill
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://registry.npmjs.org/temporal-polyfill/latest
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://registry.npmjs.org/temporal-polyfill/latest
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/fullcalendar/temporal-polyfill/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/temporal-polyfill
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/temporal-polyfill
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/fullcalendar/temporal-polyfill
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/fullcalendar/temporal-polyfill/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/temporal-polyfill
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/temporal-polyfill
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/temporal-polyfill
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

temporal-polyfill is a JavaScript polyfill for Temporal, the successor to the JavaScript Date object. It installs from npm or loads from a CDN, and the same repository also holds a tree-shakeable function API and a codemod that rewrites its calls into Temporal code.

The package is written in TypeScript. The [README](https://github.com/fullcalendar/temporal-polyfill/blob/main/polyfill/README.md) says CommonJS code needs newer Node.js releases than ES module code does.

## Worth knowing

The README says the implementation has two intentional deviations from the Temporal spec.
