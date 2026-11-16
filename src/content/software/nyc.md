---
id: nyc
name: nyc
urls:
  home: https://istanbul.js.org/
  repository: https://github.com/istanbuljs/nyc
  docs: https://istanbul.js.org/docs/advanced/
category:
  - testing
description: Command-line interface for Istanbul, a JavaScript test coverage tool.
status: active
maintainer: Ben Coe
maintainerType: individual
firstRelease: 2015
language: javascript
runtime:
  - node
runtimeMin: node 20
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: ISC
currentMajor: "18"
latestReleaseDate: 2026-02-22
githubStargazers: 5762
npmWeeklyDownloads: 9778246
contributors: 99
dependentRepos: 283630
dependentPackages: 62707
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://istanbul.js.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/istanbuljs/nyc
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/istanbuljs/nyc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/nyc
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/istanbuljs/nyc/blob/nyc-v18.0.0/package.json
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/istanbuljs/nyc/blob/nyc-v18.0.0/package.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/istanbuljs/nyc
    checkedAt: 2026-11-16
  - field: category
    url: https://istanbul.js.org/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/istanbuljs/nyc/blob/nyc-v18.0.0/package.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/istanbuljs/nyc/blob/nyc-v18.0.0/package.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/istanbuljs/nyc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/istanbuljs/nyc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/istanbuljs/nyc/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/istanbuljs/nyc/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/istanbuljs/nyc/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/istanbuljs/nyc/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/istanbuljs/nyc
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/istanbuljs/nyc/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/nyc
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nyc
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nyc
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
packagistDownloads: null
---

nyc is the command-line interface for Istanbul, a JavaScript test coverage tool. It is added to a project as a development dependency and placed in front of an existing test command, such as mocha, so the coverage report comes out of the test run. It instruments JavaScript code and gives source-mapped coverage for Babel and TypeScript projects.

## Worth knowing

The README says Jest and tap include Istanbul coverage, so projects that use those runners do not need nyc. The Tidelift subscription the README mentions is commercial support for dependencies, not a version of nyc.
