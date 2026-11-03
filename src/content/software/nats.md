---
id: nats
name: NATS
urls:
  home: https://nats.io
  repository: https://github.com/nats-io/nats-server
  docs: https://docs.nats.io
category:
  - backend
description: Messaging server that routes messages between applications and services by subject, with optional persistence through JetStream.
status: active
maintainer: NATS Authors
maintainerType: community
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-26
githubStargazers: 20990
contributors: 227
social:
  x: https://x.com/nats_io
  youtube: https://www.youtube.com/@nats_io
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://nats.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/nats-io/nats-server
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.nats.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://nats.io
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://nats.io
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/nats-io/nats-server
    checkedAt: 2026-11-03
  - field: category
    url: https://nats.io
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.nats.io/concepts/what-is-nats
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.nats.io/concepts/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.nats.io/concepts/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.nats.io/concepts/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.nats.io/concepts/getting-started/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/nats-io/nats-server
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://nats.io
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/nats-io/nats-server
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/nats-io/nats-server
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/nats-io/nats-server/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/nats-io/nats-server/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/nats-io/nats-server/releases
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.nats.io/concepts/what-is-nats
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

NATS is a messaging server that routes messages between applications and services by subject. Applications connect to it with a client library, then publish to subjects and subscribe to them. The server is a single Go binary, and clustering, leaf nodes, MQTT and WebSocket are configuration on that same process. JetStream adds optional persistence. The project documents installs with Docker, Homebrew, an install script and release binaries from GitHub.
