---
id: confetti
name: Confetti Framework
urls:
  home: https://confetti-framework.github.io/docs/
  repository: https://github.com/confetti-framework/confetti
  docs: https://confetti-framework.github.io/docs/
category:
  - framework
description: Go web application framework for building API servers with routing, middleware and validation.
status: active
maintainer: Confetti
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: GitHub template repository, then go run cmd/api/main.go api:serve
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-02-18
githubStargazers: 450
contributors: 9
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://confetti-framework.github.io/docs/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/confetti-framework/confetti
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/confetti-framework/confetti/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/confetti-framework/docs/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/confetti-framework/confetti
    checkedAt: 2026-10-26
  - field: runtime
    url: https://confetti-framework.github.io/docs/get-started/installation.html
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/confetti-framework/confetti/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://confetti-framework.github.io/docs/get-started/installation.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://confetti-framework.github.io/docs/architecture-concepts/lifecycle.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/confetti-framework/confetti/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/confetti-framework/confetti/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/confetti-framework/confetti/releases/tags/v0.20.4
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/confetti-framework/confetti/releases/tags/v1.0.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/confetti-framework/confetti/releases/tags/v1.0.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/confetti-framework/confetti
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/confetti-framework/confetti/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Confetti is a web framework written in Go, with routing, middleware and validation. The [documentation](https://confetti-framework.github.io/docs/) builds an endpoint from a controller function and a route registered with `handler.New`, with middleware wrapping each request before it reaches the controller. Controllers return errors to a central error handler in `internal/pkg/handler`, which the documentation describes as the place where logging and error reporting are customized.

A project starts from the framework's GitHub template repository. The [installation guide](https://confetti-framework.github.io/docs/get-started/installation.html) runs the API server with `go run cmd/api/main.go api:serve`, and configuration is read from environment variables through typed helpers in the `config` package.

## Worth knowing

The framework runs as a process that listens for HTTP requests, so a site or API built on it needs a host that can run a Go program rather than a host that serves static files.

The project's documentation names no database; it says only that the configuration covers a database connection.
