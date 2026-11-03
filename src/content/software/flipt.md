---
id: flipt
name: Flipt
urls:
  home: https://www.flipt.io
  repository: https://github.com/flipt-io/flipt
  docs: https://docs.flipt.io/v2
  pricing: https://www.flipt.io/pricing
category:
  - dev-tool
description: Git-native feature flag platform that serves flags from a single self-hosted binary, with REST and gRPC APIs and SDKs.
status: active
maintainer: Flipt Software, Inc.
maintainerType: company
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: FCL-1.0-MIT, MIT
currentMajor: "2"
latestReleaseDate: 2026-10-23
githubStargazers: 4935
contributors: 96
social:
  discord: https://www.flipt.io/discord
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.flipt.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/flipt-io/flipt
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/flipt-io/flipt/blob/v2/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/flipt-io/flipt/blob/v2/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/flipt-io/flipt/blob/v2/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/flipt-io/flipt
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.flipt.io/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.flipt.io/v2/installation
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/flipt-io/flipt/blob/v2/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/flipt-io/flipt/blob/v2/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/flipt-io/flipt/blob/v2/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.flipt.io/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/flipt-io/flipt/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/flipt-io/flipt/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/flipt-io/flipt/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/flipt-io/flipt
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/flipt-io/flipt/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Flipt is a Git-native feature flag platform. The server is a single binary that runs as a long-lived process and serves a web UI and an API. Its storage backends hold flag state in a local directory, in memory or in a Git repository; the local backend serves flag state from a git repository on the local filesystem.

Applications evaluate flags through REST and gRPC APIs, through client SDKs, or through OpenFeature providers that Flipt publishes. The web UI can sign users in with OIDC. The server is written in Go, and the [installation guide](https://docs.flipt.io/v2/installation) lists Docker, release archives, a Helm chart and Homebrew as install routes.

## Worth knowing

The server code is under the Fair Core License, which is source-available and excludes competing uses. The client code is under the MIT license. Some features need a commercial license. Flipt Cloud is a hosted product, and the project's migration guide moves users from it to a self-hosted Flipt v2 instance.
