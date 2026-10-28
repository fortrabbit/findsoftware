---
id: backstopjs
name: BackstopJS
urls:
  home: https://garris.github.io/BackstopJS/
  repository: https://github.com/garris/BackstopJS
  docs: https://github.com/garris/BackstopJS/blob/master/README.md
category:
  - testing
description: Visual regression testing tool that captures screenshots of a web app over time and compares them against approved references.
status: active
maintainer: Garris Shipon
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
runtimeMin: node 16
runsAs:
  - local
installMethod: npm install -g backstopjs
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2024-09-07
githubStargazers: 7190
npmWeeklyDownloads: 111010
contributors: 157
dependentRepos: 2576
dependentPackages: 178
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://garris.github.io/BackstopJS/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/garris/BackstopJS
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/garris/BackstopJS/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/garris/BackstopJS/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/garris/BackstopJS
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/garris/BackstopJS/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/garris/BackstopJS/master/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/garris/BackstopJS/master/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/garris/BackstopJS/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/garris/BackstopJS/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/garris/BackstopJS/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/garris/BackstopJS
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/garris/BackstopJS/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/garris/BackstopJS/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/backstopjs/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/backstopjs
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/garris/BackstopJS
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/garris/BackstopJS/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/backstopjs
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/backstopjs
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/backstopjs
    checkedAt: 2026-10-28
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

BackstopJS runs visual regression tests on a web app. It loads each scenario in a headless browser, captures screenshots of the page or of selected elements at one or more viewport sizes, and compares them with reference images saved from an earlier run. Differences appear in an HTML report, where a person can approve the new screenshots as the next reference. Scenarios live in a JSON or JavaScript config file, and clicks, hovers and key presses run through Puppeteer or Playwright scripts.

The tool runs on Node.js. It is installed globally with npm for the command line, or locally in a project so that a Node script can call it. The README also describes a Docker image, started with a flag, that renders the tests in a container for consistency across environments. Reference and test images are written to a folder in the project, `backstop_data` by default.

## Worth knowing

The README's News section says BackstopJS needs a new maintainer or owner.
