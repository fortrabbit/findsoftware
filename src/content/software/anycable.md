---
id: anycable
name: AnyCable
urls:
  home: https://anycable.io
  repository: https://github.com/anycable/anycable
  docs: https://docs.anycable.io/
  pricing: https://anycable.io/#pricing
category:
  - backend
description: Realtime server, written in Go, that delivers messages to WebSocket and other clients with delivery guarantees and presence tracking.
status: active
maintainer: Vladimir Dementyev
maintainerType: individual
firstRelease: 2016
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: Homebrew
licenseModel: open-core
license: MIT, Commercial, for Pro (self-hosted)
currentMajor: "1"
latestReleaseDate: 2026-10-21
githubStargazers: 2388
npmWeeklyDownloads: 172
contributors: 38
social:
  x: https://twitter.com/any_cable
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://anycable.io/
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.anycable.io/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/anycable/anycable
    checkedAt: 2026-10-31
  - field: category
    url: https://anycable.io/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/anycable/anycable
    checkedAt: 2026-10-31
  - field: license
    url: https://docs.anycable.io/editions
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://docs.anycable.io/editions
    checkedAt: 2026-10-31
  - field: urls
    url: https://anycable.io/
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/anycable/anycable
    checkedAt: 2026-10-31
  - field: runtime
    url: https://docs.anycable.io/anycable-go/getting_started
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.anycable.io/anycable-go/getting_started
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.anycable.io/anycable-go/getting_started
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.anycable.io/anycable-go/getting_started
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.anycable.io/deployment/docker
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.anycable.io/deployment/systemd
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/anycable/anycable/blob/v1.6.20/MIT-LICENSE
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://github.com/anycable/anycable/blob/v1.6.20/MIT-LICENSE
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/anycable/anycable/tags
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/anycable/anycable/releases
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/anycable/anycable/releases
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/anycable/anycable
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/anycable/anycable
    checkedAt: 2026-10-31
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/@anycable/anycable-go
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
---

AnyCable is a realtime server written in Go. It runs as a standalone server, a single binary, that accepts WebSocket connections; the docs present it as a drop-in replacement for Action Cable in Rails and for Reverb or Pusher in Laravel. Its documented features include delivery guarantees with recovery after disconnects, presence tracking, signed streams and the Pusher protocol. The homepage says it needs no further infrastructure for operation and scaling, because an embedded NATS pub/sub server is included, and that an existing Redis or NATS can be used as well. Installation routes are Homebrew, a release binary, an npm package and a Docker image, and the systemd guide recommends running the server as a system service.

## Worth knowing

The open-source server is MIT licensed. A commercial Pro edition adds memory and cluster features and some protocols, and AnyCable+ is the managed form of Pro. The editions page names Apollo GraphQL, long polling and OCPP as Pro-only protocols.
