---
id: sockudo
name: Sockudo
urls:
  home: https://sockudo.io/
  repository: https://github.com/sockudo/sockudo
  docs: https://sockudo.io/docs
category:
  - backend
description: Self-hosted realtime server written in Rust that serves Pusher-compatible WebSocket and HTTP APIs.
status: active
maintainer: Sockudo
firstRelease: 2025
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-22
githubStargazers: 842
contributors: 27
social:
  x: https://x.com/sockudorealtime
  discord: https://discord.gg/ySfNxfh2gZ
  forum: https://github.com/sockudo/sockudo/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://sockudo.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/sockudo/sockudo
    checkedAt: 2026-11-03
  - field: urls
    url: https://sockudo.io/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/sockudo/sockudo/releases/tag/v1.0.0-beta
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/sockudo/sockudo/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://sockudo.io/docs/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sockudo.io/docs/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sockudo.io/docs/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sockudo.io/docs/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sockudo.io/docs/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sockudo.io/docs/getting-started/installation
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/sockudo/sockudo/blob/v5.2.0/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/sockudo/sockudo/releases/tag/v5.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/sockudo/sockudo/releases/tag/v5.2.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/sockudo/sockudo
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/sockudo/sockudo
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Sockudo is a self-hosted realtime server written in Rust. It serves WebSocket connections and HTTP publish requests, and it keeps strict Protocol V1 compatibility with the Pusher protocol, so existing Pusher clients and backend SDKs can be pointed at it. Protocol V2 adds Sockudo-native events and features such as message recovery and history. The [migration guide](https://sockudo.io/docs/getting-started/migration) describes moving from Pusher Channels or Soketi. The server ships as a Linux binary, a container image, a crate built with cargo, a Docker Compose stack and a Helm chart. The Docker Compose stack starts the server with Prometheus metrics, a dashboard UI and a dashboard API.

## Worth knowing

Protocol defaults vary by SDK, so the README asks each package to be checked before Protocol V2 is assumed to be on. The prebuilt binary installer is Linux only; other platforms build from crates.io or source. The homepage also names an opt-in compatibility layer for Ably REST and WebSocket clients, which leaves out Live Objects.
