---
id: gomock
name: gomock
urls:
  repository: https://github.com/uber-go/mock
  docs: https://pkg.go.dev/go.uber.org/mock
category:
  - testing
description: Mocking framework for Go that generates mock implementations of Go interfaces, with the mockgen tool.
status: active
maintainer: Uber
firstRelease: 2023
language: go
runtime:
  - binary
installMethod: go install
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2025-08-18
githubStargazers: 3429
contributors: 120
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/uber-go/mock
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/uber-go/mock/blob/main/README.md
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/uber-go/mock/blob/main/README.md
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/uber-go/mock
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/uber-go/mock/blob/main/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/uber-go/mock/blob/main/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://raw.githubusercontent.com/uber-go/mock/main/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/uber-go/mock
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/uber-go/mock/releases
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/uber-go/mock/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/uber-go/mock/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/uber-go/mock
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/uber-go/mock/contributors?per_page=1
    checkedAt: 2026-11-09
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

gomock is a mocking framework for Go that generates mock implementations of Go interfaces. The `mockgen` tool takes a Go source file, a package archive or a package and writes the mock code, and the framework integrates with Go's built-in `testing` package. The project began as Google's `golang/mock` repository, which Google no longer maintains; Uber forked it and maintains the fork under the `go.uber.org/mock` module path.

## Worth knowing

The [README](https://github.com/uber-go/mock/blob/main/README.md) says the module supports the Go versions that the official Go Release Policy supports, which is the two most recent releases.
