---
id: xun
name: Xun
urls:
  repository: https://github.com/yaitoo/xun
  docs: https://github.com/yaitoo/xun/tree/main/docs
category:
  - framework
description: Go web framework that routes with the standard library's net/http mux and renders pages with html/template.
status: active
maintainer: Yaitoo
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - flat-file
templating: html/template
runsAs:
  - always-on
renderingModes:
  - server
installMethod: go get
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-12
githubStargazers: 93
contributors: 6
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/yaitoo/xun
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://api.github.com/users/yaitoo
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/yaitoo/xun
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/yaitoo/xun/blob/main/go.mod
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/yaitoo/xun
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/yaitoo/xun/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/yaitoo/xun/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://proxy.golang.org/github.com/yaitoo/xun/@v/v1.0.0.info
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/yaitoo/xun/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/yaitoo/xun/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/yaitoo/xun
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/yaitoo/xun/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Xun is a Go web framework built on the standard library's html/template and net/http router. A Content engine turns Markdown files into pages, and a project is added with `go get`.

## Worth knowing

The framework runs as a Go process that listens on a port, so the host has to run the binary; it does not serve the output as static files.
