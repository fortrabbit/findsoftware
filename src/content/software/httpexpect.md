---
id: httpexpect
name: httpexpect
urls:
  repository: https://github.com/gavv/httpexpect
  docs: https://pkg.go.dev/github.com/gavv/httpexpect/v2
category:
  - testing
description: Go library for end-to-end HTTP and REST API tests, with chainable request builders and response assertions.
status: active
maintainer: Victor Gaydov
maintainerType: individual
firstRelease: 2019
language: go
runtime:
  - binary
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2025-03-04
githubStargazers: 2723
contributors: 72
social:
  discord: https://discord.gg/5SCPCuCWA9
  forum: https://github.com/gavv/httpexpect/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/gavv/httpexpect
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/gavv/httpexpect/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/gavv/httpexpect/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/gavv/httpexpect
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/gavv/httpexpect/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/gavv/httpexpect/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/gavv/httpexpect/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/gavv/httpexpect/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/gavv/httpexpect/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/gavv/httpexpect/commits/v1.0.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/gavv/httpexpect
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/gavv/httpexpect/contributors
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

httpexpect is a testing library for Go that builds HTTP requests and checks their responses through chainable calls. A test sets the path, query, headers, cookies and a JSON, urlencoded or multipart body, then asserts on the status, headers, cookies and payload, including JSON paths and JSON Schema.

The library can talk to a server through a real HTTP client or call the Go handler directly. Failures are reported through the standard testing package or through testify.
