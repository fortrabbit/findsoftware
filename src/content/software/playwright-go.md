---
id: playwright-go
name: playwright-go
urls:
  home: https://mxschmitt.github.io/playwright-go/
  repository: https://github.com/mxschmitt/playwright-go
  docs: https://playwright.dev/docs/intro
category:
  - testing
description: Go library that automates Chromium, Firefox and WebKit through one API for browser automation and end-to-end testing.
status: active
maintainer: Max Schmitt
maintainerType: individual
firstRelease: 2020
language: go
runtime:
  - binary
basedOn:
  - playwright
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-05
githubStargazers: 3549
contributors: 34
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mxschmitt.github.io/playwright-go/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mxschmitt/playwright-go/blob/main/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mxschmitt/playwright-go
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mxschmitt/playwright-go/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/mxschmitt/playwright-go/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/mxschmitt/playwright-go/releases?per_page=100
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mxschmitt/playwright-go/blob/main/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mxschmitt/playwright-go/blob/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/mxschmitt/playwright-go/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mxschmitt/playwright-go
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/mxschmitt/playwright-go/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mxschmitt/playwright-go/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mxschmitt/playwright-go/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/mxschmitt/playwright-go/releases/tag/v0.6401.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mxschmitt/playwright-go/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mxschmitt/playwright-go
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mxschmitt/playwright-go/contributors?per_page=1
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
npmWeeklyDownloads: null
---

playwright-go is the Go library for Playwright, which drives Chromium, Firefox and WebKit through one API. The package ships a Node.js runtime of around 50MB together with the Playwright driver and talks to it over stdio, and installing the driver also downloads the browsers. The README names end-to-end testing among its uses.

## Worth knowing

Each minor version of the module needs a specific Playwright driver version, so the driver install step uses the version named in the project's go.mod.
