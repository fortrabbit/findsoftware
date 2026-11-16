---
id: oapi-codegen
name: oapi-codegen
urls:
  repository: https://github.com/oapi-codegen/oapi-codegen
  docs: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/docs/configuration.md
category:
  - dev-tool
  - backend
description: Go code generator that turns OpenAPI 3.0 and 3.1 specifications into server boilerplate, API clients and models.
status: active
maintainer: oapi-codegen
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-31
githubStargazers: 8667
contributors: 291
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/oapi-codegen/oapi-codegen/blob/v2.8.2/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen/commits/v1.0.0
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/oapi-codegen/oapi-codegen/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/oapi-codegen/oapi-codegen/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

oapi-codegen is a command-line tool and library that converts OpenAPI 3.0 and 3.1 specifications into Go code. It generates server boilerplate for Go HTTP routers, API clients and model types, and its server output targets Chi, Echo, Echo v5, Fiber, Fiber v3, Gin, gorilla/mux, Iris and the standard net/http package.

The tool is installed with the Go toolchain, either as a binary or as a `go tool` dependency of the project that uses it. The source is in the oapi-codegen organization on GitHub, and the project has no website of its own beyond the repository.

## Worth knowing

The tool and the generated code have different Go requirements, and the generated code's minimum depends on the server target.
