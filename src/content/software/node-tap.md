---
id: node-tap
name: node-tap
urls:
  home: https://node-tap.org/
  repository: https://github.com/tapjs/tapjs
  docs: https://node-tap.org/basics/
category:
  - testing
description: Test Anything Protocol test framework and command line runner for Node.js.
status: active
maintainer: Isaac Z. Schlueter
firstRelease: 2011
language: javascript
runtime:
  - node
runtimeMin: node 20
installMethod: npm
licenseModel: open-source
license: BlueOak-1.0.0
currentMajor: "21"
latestReleaseDate: 2026-11-03
githubStargazers: 2429
npmWeeklyDownloads: 379463
contributors: 104
dependentRepos: 207491
dependentPackages: 10984
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://node-tap.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/tapjs/tapjs
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/package.json
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/tap
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/tapjs/tapjs
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://node-tap.org/basics/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/LICENSE.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/tapjs/tapjs/blob/tap@21.8.0/src/tap/LICENSE.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/tap
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/tap
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/tap
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/tapjs/tapjs/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/tap
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/tapjs/tapjs
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/tapjs/tapjs/contributors?per_page=1
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

node-tap lets Node.js programs be tested with the Test Anything Protocol, and it ships a command line runner that reports the results. Its documentation is the [Getting started guide](https://node-tap.org/basics/) on the project's site.

## Worth knowing

The package tap is part of the tapjs monorepo on GitHub. Its nock and sinon integrations are plugins of tap that load those libraries into tap tests, so they do not appear as separate records.
