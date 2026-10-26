---
id: swifter
name: Swifter
urls:
  repository: https://github.com/httpswift/swifter
  docs: https://github.com/httpswift/swifter/blob/stable/README.md
category:
  - web-server
description: Tiny HTTP server engine written in Swift.
status: stub
maintainer: Damian Kołakowski
firstRelease: 2015
language: swift
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: Swift Package Manager
licenseModel: open-source
license: BSD-3-Clause, BSD
currentMajor: "1"
latestReleaseDate: 2020-09-26
githubStargazers: 4018
contributors: 78
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/httpswift/swifter
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/httpswift/swifter
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/httpswift/swifter/blob/stable/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/httpswift/swifter
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/httpswift/swifter/blob/stable/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/httpswift/swifter/blob/stable/LICENSE
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/httpswift/swifter/blob/stable/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/httpswift/swifter/git/refs/tags/1.0.2
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/httpswift/swifter/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/httpswift/swifter/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/httpswift/swifter
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/httpswift/swifter/contributors
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Swifter is an HTTP server engine written in Swift. An application creates an `HttpServer` in code, registers handlers for routes, and calls `start()`, so the server runs as the application's own process. The [README](https://github.com/httpswift/swifter/blob/stable/README.md) shows examples for routes, serving files from a directory, redirects, HTML built in Swift and WebSocket handlers. It is installed through the Swift Package Manager, CocoaPods or Carthage.

## Worth knowing

The default branch is `stable`. The `master` branch adds an experimental web-framework layer on top of it, and the `2.0` branch, an async IO version, is marked experimental in the README.
