---
id: doors
name: Doors
urls:
  home: https://doors.dev
  repository: https://github.com/doors-dev/doors
  docs: https://doors.dev/docs
category:
  - framework
description: Go framework for building stateful, reactive web applications whose interface state is driven from the server.
status: active
maintainer: doors dev LLC
maintainerType: company
firstRelease: 2025
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
templating: gox
runsAs:
  - always-on
renderingModes:
  - server
installMethod: go get github.com/doors-dev/doors
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-10
githubStargazers: 120
contributors: 1
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/doors-dev/doors
    checkedAt: 2026-10-26
  - field: urls
    url: https://doors.dev/docs
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/doors-dev/doors
    checkedAt: 2026-10-26
  - field: category
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://api.github.com/repos/doors-dev/doors
    checkedAt: 2026-10-26
  - field: templating
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://doors.dev/tutorial
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/doors-dev/doors
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/doors-dev/doors/refs/heads/main/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://doors.dev/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/doors-dev/doors/commits/v0.0.1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/doors-dev/doors/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/doors-dev/doors/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/doors-dev/doors
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/doors-dev/doors/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Doors is a Go framework for reactive web applications in which the interactive state stays on the server. Its templates are written in GoX, a Go language extension with its own language server, parser and editor plugins.

The application is a Go program that hands its handler to Go's HTTP server and runs it, and the framework is added with go get. The tutorial asks for Go 1.25.1 or newer, and the application runs on a stateful server, so it is a long-running process rather than files or a script per request.
