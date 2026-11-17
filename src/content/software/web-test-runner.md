---
id: web-test-runner
name: Web Test Runner
urls:
  home: https://modern-web.dev/
  repository: https://github.com/modernweb-dev/web
  docs: https://modern-web.dev/docs/test-runner/overview/
category:
  - testing
description: Test runner for web applications that runs JavaScript test files in real browsers.
status: active
maintainer: modern-webdev
firstRelease: 2020
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-10
githubStargazers: 2456
npmWeeklyDownloads: 204857
contributors: 158
dependentRepos: 1963
dependentPackages: 2591
social:
  x: https://twitter.com/modern_web_dev
  discord: https://modern-web.dev/discover/discord/
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://modern-web.dev/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/modernweb-dev/web
    checkedAt: 2026-11-17
  - field: urls
    url: https://modern-web.dev/docs/test-runner/overview/
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://api.github.com/repos/modernweb-dev/web/releases?per_page=100
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/modernweb-dev/web/blob/master/LICENSE
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/modernweb-dev/web
    checkedAt: 2026-11-17
  - field: runtime
    url: https://raw.githubusercontent.com/modernweb-dev/web/%40web/test-runner%401.0.1/packages/test-runner/package.json
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://raw.githubusercontent.com/modernweb-dev/web/%40web/test-runner%401.0.1/packages/test-runner/package.json
    checkedAt: 2026-11-17
  - field: runsAs
    url: https://modern-web.dev/docs/test-runner/testing-in-a-ci/
    checkedAt: 2026-11-17
  - field: category
    url: https://modern-web.dev/docs/test-runner/overview/
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://modern-web.dev/docs/test-runner/overview/
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@web/test-runner
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/modernweb-dev/web/releases?per_page=100
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/modernweb-dev/web/releases?per_page=100
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/modernweb-dev/web
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/modernweb-dev/web/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/modernweb-dev/web
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@web%2Ftest-runner
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@web%2Ftest-runner
    checkedAt: 2026-11-17
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

Web Test Runner runs the JavaScript test files of a web application in real browsers. It starts the browsers through Puppeteer, Playwright, Selenium or WebdriverIO, runs tests in parallel and in isolation, and has a watch mode and a coverage option. The [overview](https://modern-web.dev/docs/test-runner/overview/) lists the basic commands.

## Worth knowing

The runner needs a real browser, so a CI environment must be able to run one, as the [CI guide](https://modern-web.dev/docs/test-runner/testing-in-a-ci/) says.
