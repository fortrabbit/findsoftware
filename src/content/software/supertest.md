---
id: supertest
name: SuperTest
urls:
  repository: https://github.com/forwardemail/supertest
  docs: https://github.com/forwardemail/supertest/blob/master/README.md
category:
  - testing
description: Node.js library that tests HTTP servers with a fluent API of request and response assertions.
status: active
maintainer: TJ Holowaychuk
maintainerType: individual
firstRelease: 2012
language: javascript
runtime:
  - node
runtimeMin: node 14
basedOn:
  - superagent
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-11-07
githubStargazers: 14412
npmWeeklyDownloads: 25263492
contributors: 92
dependentRepos: 416427
dependentPackages: 19319
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/forwardemail/supertest
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/forwardemail/supertest/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/forwardemail/supertest/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/forwardemail/supertest/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/forwardemail/supertest
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/forwardemail/supertest/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/forwardemail/supertest/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://api.github.com/repos/forwardemail/supertest
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/forwardemail/supertest/v7.3.2/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/forwardemail/supertest/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/forwardemail/supertest
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/forwardemail/supertest/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/forwardemail/supertest/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/supertest
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/supertest
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/supertest
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/supertest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/forwardemail/supertest
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/forwardemail/supertest/contributors?per_page=1
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

SuperTest tests Node.js HTTP servers by sending them requests and asserting on the responses, through a fluent API of request and response assertions. It is built on superagent, which the README names as the library it is driven by.

It is installed as a development dependency from npm. The README says it works with any test framework and shows examples with mocha.

## Worth knowing

An expect() failure inside an end() callback does not throw. The README says the test has to rethrow the error or pass it to done to fail.
