---
id: go-rod
name: Rod
urls:
  home: https://go-rod.github.io/
  repository: https://github.com/go-rod/rod
  docs: https://go-rod.github.io/
category:
  - testing
description: Go library that drives a browser over the Chrome DevTools Protocol for web automation and scraping.
status: active
maintainer: Yad Smood
maintainerType: individual
firstRelease: 2020
language: go
runtime:
  - binary
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-07-12
githubStargazers: 7146
contributors: 57
social:
  discord: https://discord.gg/CpevuvY
  forum: https://github.com/go-rod/rod/discussions
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://github.com/go-rod/rod/blob/main/README.md
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/go-rod/rod
    checkedAt: 2026-11-08
  - field: urls
    url: https://github.com/go-rod/rod/blob/main/README.md
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://github.com/go-rod/rod/releases/tag/v0.42.1
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/go-rod/rod/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: maintainerType
    url: https://github.com/go-rod/rod/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/go-rod/rod/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/go-rod/rod
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/go-rod/go-rod.github.io/blob/main/get-started/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/go-rod/rod/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/go-rod/rod/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://github.com/go-rod/rod/releases/tag/v0.116.2
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://github.com/go-rod/rod/releases/tag/v0.116.2
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/go-rod/rod
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/go-rod/rod/contributors?per_page=1
    checkedAt: 2026-11-08
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

Rod is a Go library that drives a browser through the Chrome DevTools Protocol, for web automation and scraping. The library can connect to a browser that is running, or find a local browser or download one that matches its own revision. The README describes a high-level layer with low-level packages underneath, so a program can call either. The [get-started guide](https://github.com/go-rod/go-rod.github.io/blob/main/get-started/README.md) shows a first program that imports the module and runs it with go run.

## Worth knowing

The compatibility notes say the auto-downloaded browser may not work on every platform, and that some platforms need the browser installed by hand. Each Rod version works with one browser revision, named in its launcher package. The notes recommend a Docker-based launcher for running Rod on a server.
