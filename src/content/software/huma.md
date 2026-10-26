---
id: huma
name: Huma
urls:
  home: https://huma.rocks/
  repository: https://github.com/danielgtaylor/huma
  docs: https://huma.rocks/tutorial/installation/
category:
  - framework
description: Go micro framework for building HTTP REST and RPC APIs, backed by OpenAPI 3 and JSON Schema.
status: active
maintainer: Daniel G. Taylor
maintainerType: individual
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-29
githubStargazers: 4486
contributors: 136
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://huma.rocks/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/danielgtaylor/huma
    checkedAt: 2026-10-26
  - field: urls
    url: https://huma.rocks/tutorial/installation/
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/danielgtaylor/huma/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/danielgtaylor/huma/main/LICENSE.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/danielgtaylor/huma
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/danielgtaylor/huma/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/danielgtaylor/huma/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://huma.rocks/how-to/graceful-shutdown/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/danielgtaylor/huma
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/danielgtaylor/huma/main/LICENSE.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/danielgtaylor/huma/git/ref/tags/v1.0.0
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/danielgtaylor/huma/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/danielgtaylor/huma/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/danielgtaylor/huma
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/danielgtaylor/huma/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Huma is a Go micro framework for HTTP REST and RPC APIs, backed by OpenAPI 3 and JSON Schema. It is added to a Go module with `go get`.

## Worth knowing

The README states that Go 1.26 or newer is required. Huma serves HTTP, and its graceful shutdown guide describes stopping a server that accepts requests, so the API needs a host that keeps a process running.
