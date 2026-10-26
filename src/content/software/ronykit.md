---
id: ronykit
name: RonyKit
urls:
  repository: https://github.com/clubpay/ronykit
  docs: https://github.com/clubpay/ronykit/tree/main/docs
category:
  - framework
description: Go toolkit for building API servers that serve REST and RPC from one handler.
status: active
maintainer: Ehsan Moosa
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: homebrew
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-10-25
githubStargazers: 38
contributors: 8
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/clubpay/ronykit
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/clubpay/ronykit/blob/main/README.MD
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/clubpay/ronykit/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/clubpay/ronykit/releases
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/clubpay/ronykit
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/clubpay/ronykit/blob/main/README.MD
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/clubpay/ronykit/blob/main/README.MD
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/clubpay/ronykit/blob/main/README.MD
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/clubpay/ronykit/blob/main/README.MD
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/clubpay/ronykit/blob/main/docs/getting-started.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/clubpay/ronykit/blob/main/docs/getting-started.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/clubpay/ronykit/blob/main/README.MD
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/clubpay/ronykit/blob/main/docs/ronyup-guide.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/clubpay/ronykit
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/clubpay/ronykit/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/clubpay/ronykit/main/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/clubpay/ronykit/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/clubpay/ronykit/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/clubpay/ronykit
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/clubpay/ronykit/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

RonyKit is a Go toolkit for building API servers in which one handler can serve both REST and RPC (WebSocket) calls. The scaffolding tool `ronyup` is a separate module in the repository, installed with Homebrew or the Go toolchain, while the `rony` package is added to a project with go get. The [getting-started guide](https://github.com/clubpay/ronykit/blob/main/docs/getting-started.md) covers installation, a first server and core concepts. A server runs until it receives a shutdown signal. The documentation lives in the repository's docs folder, and no separate website is named.

## Worth knowing

The README of the repository's `ee` package states a higher Go requirement than the getting-started guide.
