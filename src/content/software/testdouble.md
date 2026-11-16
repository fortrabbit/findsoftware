---
id: testdouble
name: testdouble.js
urls:
  repository: https://github.com/testdouble/testdouble.js
  docs: https://github.com/testdouble/testdouble.js/tree/main/docs
category:
  - testing
description: JavaScript test double library for replacing dependencies in tests and verifying the calls made to them, for Node.js and browsers.
status: active
maintainer: Test Double, LLC
maintainerType: company
firstRelease: 2015
language: javascript
runtime:
  - node
runtimeMin: node 22
installMethod: npm, download
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-12
githubStargazers: 1426
npmWeeklyDownloads: 145483
contributors: 59
dependentRepos: 3225
dependentPackages: 1046
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/testdouble/testdouble.js
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/testdouble/testdouble.js
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/testdouble/testdouble.js
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/v4.0.0/package.json
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/testdouble/testdouble.js/main/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/testdouble
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/testdouble
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/testdouble
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/testdouble
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/testdouble/testdouble.js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/testdouble/testdouble.js/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/testdouble
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/testdouble
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

testdouble.js is a test double library for JavaScript tests. It creates stand-ins for the dependencies a test replaces, stubs what they return and verifies how they were called, and it installs from npm as a development dependency. The [docs folder](https://github.com/testdouble/testdouble.js/tree/main/docs) covers the rest of the API, including the TypeScript usage.

The README links a comparison between testdouble.js and Sinon.js for readers who know Sinon.

## Worth knowing

The library is written for Node.js and browsers alike, and its browser build is also published on unpkg for download. It is test-framework agnostic, and the README names Jasmine, Mocha, Tape and Jest.
