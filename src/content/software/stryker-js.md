---
id: stryker-js
name: StrykerJS
urls:
  home: https://stryker-mutator.io/
  repository: https://github.com/stryker-mutator/stryker-js
  docs: https://stryker-mutator.io/docs/stryker-js/introduction/
category:
  - testing
description: Mutation testing framework for JavaScript and TypeScript projects that changes the code and reports the changes the tests do not catch.
status: active
maintainer: Simon de Lang
maintainerType: individual
firstRelease: 2016
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "10"
latestReleaseDate: 2026-10-23
githubStargazers: 3379
npmWeeklyDownloads: 6158937
contributors: 147
dependentRepos: 1724
dependentPackages: 588
social:
  x: https://twitter.com/stryker_mutator
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://stryker-mutator.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/stryker-mutator/stryker-js
    checkedAt: 2026-11-16
  - field: urls
    url: https://stryker-mutator.io/docs/stryker-js/introduction/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/stryker-mutator/stryker-js/v10.1.1/packages/core/package.json
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/stryker-mutator/stryker-js/v10.1.1/packages/core/package.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/stryker-mutator/stryker-js
    checkedAt: 2026-11-16
  - field: category
    url: https://stryker-mutator.io/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://stryker-mutator.io/docs/stryker-js/getting-started/
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/stryker-mutator/stryker-js/blob/v10.1.1/packages/core/package.json
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/stryker-mutator/stryker-js
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://stryker-mutator.io/
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://stryker-mutator.io/docs/stryker-js/getting-started/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://stryker-mutator.io/docs/stryker-js/getting-started/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/stryker-mutator/stryker-js/releases?per_page=100
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/stryker-mutator/stryker-js/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/stryker-mutator/stryker-js/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/stryker-mutator/stryker-js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/stryker-mutator/stryker-js/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@stryker-mutator/core
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40stryker-mutator%2Fcore
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40stryker-mutator%2Fcore
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

StrykerJS is a mutation testing tool for JavaScript and TypeScript projects. It changes the code under test, runs the test suite against each change, and reports the changes the tests do not catch. The [getting-started guide](https://stryker-mutator.io/docs/stryker-js/getting-started/) sets it up with an init command in the project and runs it from the terminal at the project root.

The project began as a JavaScript mutation testing framework under the name Stryker. The [introduction](https://stryker-mutator.io/docs/stryker-js/introduction/) says it was later renamed StrykerJS.

## Worth knowing

Mutation reports can be sent to the Stryker Dashboard, a hosted service that stores reports in the cloud. A repository is enabled on it with a GitHub login and a reporter setting in the Stryker configuration, as the [dashboard page](https://stryker-mutator.io/docs/General/dashboard/) describes.
