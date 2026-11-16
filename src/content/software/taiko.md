---
id: taiko
name: Taiko
urls:
  home: https://taiko.dev/
  repository: https://github.com/getgauge/taiko
  docs: https://docs.taiko.dev/
  plugins: https://docs.taiko.dev/plugins/
category:
  - testing
description: Node.js library that automates Chromium-based browsers to test modern web applications with readable JavaScript commands.
status: active
maintainer: ThoughtWorks, Inc.
maintainerType: company
firstRelease: 2017
language: javascript
runtime:
  - node
runsAs:
  - local
installMethod: npm, npx, github
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-11
githubStargazers: 3671
npmWeeklyDownloads: 4588
contributors: 103
dependentRepos: 289
dependentPackages: 19
social:
  forum: https://github.com/getgauge/taiko/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://taiko.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/getgauge/taiko
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.taiko.dev/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/getgauge/taiko/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/taiko
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/getgauge/taiko
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/getgauge/taiko
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/getgauge/taiko
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://docs.taiko.dev/taiko-in-docker/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/getgauge/taiko/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.taiko.dev/installing/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.taiko.dev/installing/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/getgauge/taiko/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/getgauge/taiko/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/getgauge/taiko/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/getgauge/taiko/releases
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/taiko
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/getgauge/taiko
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/getgauge/taiko/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/taiko
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/taiko
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.taiko.dev/plugins/
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

Taiko is a Node.js library for testing modern web applications. It automates Chromium-based browsers from a script, using the Chrome DevTools Protocol, so it needs no driver such as ChromeDriver. The docs describe an interactive recorder, a REPL that generates a script from the commands typed.

The docs recommend the Gauge test runner for organizing the tests. The overview compares Taiko with Selenium, Cypress, Puppeteer and TestCafe.

## Worth knowing

The docs list Chromium-based browsers as supported and Firefox as experimental. Safari is not supported, and testing mobile applications is not supported either. Scripts run in development and CI, not on a live site.
