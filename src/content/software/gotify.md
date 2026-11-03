---
id: gotify
name: Gotify
urls:
  home: https://gotify.net
  repository: https://github.com/gotify/server
  docs: https://gotify.net/docs/
category:
  - backend
description: Self-hosted message server that accepts messages over a REST API and delivers them to clients over a WebSocket connection.
status: active
maintainer: jmattheis
maintainerType: individual
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-09-15
githubStargazers: 16170
contributors: 56
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://gotify.net
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/gotify/server
    checkedAt: 2026-11-03
  - field: urls
    url: https://gotify.net/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/gotify/server/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/gotify/server/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/gotify/server
    checkedAt: 2026-11-03
  - field: category
    url: https://gotify.net
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gotify.net/docs/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gotify.net/docs/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gotify.net/docs/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gotify.net/docs/build
    checkedAt: 2026-11-03
  - field: runtime
    url: https://gotify.net/docs/build
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://gotify.net/docs/install
    checkedAt: 2026-11-03
  - field: databases
    url: https://gotify.net/docs/config
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://gotify.net
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/gotify/server/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/gotify/server/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/gotify/server/releases/tag/v3.1.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/gotify/server/releases/tag/v3.1.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/gotify/server/releases/tag/v1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/gotify/server
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/gotify/server
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gotify is a self-hosted message server. Applications send messages to it through a REST API, and clients receive them over a WebSocket connection. An Android app receives the messages on a phone, and a command line client can send them. The [install guide](https://gotify.net/docs/install) covers a Docker image, release binaries and a source build. The [push message docs](https://gotify.net/docs/pushmsg) show how a script or program calls the message endpoint, with examples in several languages. The server has a web interface for managing users, clients and applications, and it can sign users in through OpenID Connect.
