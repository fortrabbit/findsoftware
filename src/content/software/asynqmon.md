---
id: asynqmon
name: Asynqmon
urls:
  repository: https://github.com/hibiken/asynqmon
  docs: https://github.com/hibiken/asynqmon/blob/master/README.md
category:
  - backend
  - admin-panel
description: Web UI for monitoring and administering Asynq task queues, run as a binary or imported as a library into a Go web application.
status: active
maintainer: Ken Hibino
maintainerType: individual
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: release binary
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2023-07-03
githubStargazers: 935
contributors: 11
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://github.com/hibiken/asynqmon
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/hibiken/asynqmon/blob/master/README.md
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/hibiken/asynqmon
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/hibiken/asynqmon
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://proxy.golang.org/github.com/hibiken/asynqmon/@v/v0.7.2.info
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://proxy.golang.org/github.com/hibiken/asynqmon/@v/v0.7.2.info
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/hibiken/asynqmon/releases/tag/v0.1-alpha
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/hibiken/asynqmon
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/hibiken/asynqmon
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Asynqmon is a web UI for monitoring and administering Asynq task queues, written in Go. It runs as a binary whose web server listens on port 8080 by default and connects to a Redis server. It can also be imported into an existing Go web application as a library, and the [README](https://github.com/hibiken/asynqmon/blob/master/README.md) shows how to mount it with net/http and gorilla/mux. Release binaries, a Docker image and a source build are the install routes the README covers; a source build needs Node.js and Yarn for the frontend. The README names Ken Hibino as the copyright holder.
