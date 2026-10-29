---
id: envoy
name: Envoy
urls:
  home: https://www.envoyproxy.io
  repository: https://github.com/envoyproxy/envoy
  docs: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/start
category:
  - web-server
description: Open source edge and service proxy for cloud-native applications.
status: active
maintainer: Envoy Project Authors
maintainerType: community
firstRelease: 2016
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0, Apache License, Version 2.0
currentMajor: "1"
latestReleaseDate: 2026-10-27
githubStargazers: 29157
contributors: 379
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://www.envoyproxy.io/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/envoyproxy/envoy
    checkedAt: 2026-10-29
  - field: urls
    url: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/start
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://www.envoyproxy.io/
    checkedAt: 2026-10-29
  - field: category
    url: https://www.envoyproxy.io/
    checkedAt: 2026-10-29
  - field: category
    url: https://www.envoyproxy.io/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/envoyproxy/envoy
    checkedAt: 2026-10-29
  - field: runtime
    url: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/install
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/quick-start/run-envoy
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/install
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/install
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.envoyproxy.io/docs/envoy/v1.40.2/start/install
    checkedAt: 2026-10-29
  - field: license
    url: https://api.github.com/repos/envoyproxy/envoy
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/envoyproxy/envoy/blob/main/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/envoyproxy/envoy/blob/main/LICENSE
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/envoyproxy/envoy/releases/tag/v1.40.2
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/envoyproxy/envoy/releases/tag/v1.40.2
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/envoyproxy/envoy/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/envoyproxy/envoy
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/envoyproxy/envoy/contributors?per_page=1
    checkedAt: 2026-10-29
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

Envoy is an edge and service proxy written in C++. It runs as a server process that handles the network traffic of the applications beside it. The [install guide](https://www.envoyproxy.io/docs/envoy/v1.40.2/start/install) names three ways to get it: the official Docker images, the static binary on the GitHub releases page, and Homebrew on macOS. The [quick-start guide](https://www.envoyproxy.io/docs/envoy/v1.40.2/start/quick-start/run-envoy) describes starting it as a system daemon.

Envoy is hosted by the Cloud Native Computing Foundation. Its extensions can be written in Wasm, Lua, Go or Rust, and its configuration can change at runtime through the xDS APIs. Projects built on Envoy, such as Envoy Gateway, are separate software.
