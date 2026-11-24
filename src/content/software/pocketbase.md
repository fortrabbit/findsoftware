---
id: pocketbase
name: PocketBase
urls:
  home: https://pocketbase.io
  repository: https://ganigeorgiev.com/pocketbase/pocketbase
  docs: https://pocketbase.io/docs/
category:
  - backend
  - headless-cms
  - database
description: Open-source Go backend shipped as a single executable, with an embedded SQLite database, realtime subscriptions, authentication and a dashboard.
status: active
maintainer: Gani Georgiev
maintainerType: individual
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - sqlite
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: prebuilt-executable-download, go-framework
licenseModel: open-source
license: MIT
currentMajor: "0"
githubStargazers: 61573
social:
  forum: https://github.com/pocketbase/pocketbase/discussions
addedAt: 2026-10-19
checkedAt: 2026-11-23
sources:
  - field: name
    url: https://pocketbase.io/
    checkedAt: 2026-11-23
  - field: urls
    url: https://github.com/pocketbase/pocketbase
    checkedAt: 2026-11-23
  - field: urls
    url: https://raw.githubusercontent.com/pocketbase/pocketbase/master/README.md
    checkedAt: 2026-11-23
  - field: urls
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: maintainer
    url: https://github.com/pocketbase/pocketbase/blob/master/LICENSE.md
    checkedAt: 2026-11-23
  - field: maintainerType
    url: https://github.com/pocketbase/pocketbase/blob/master/LICENSE.md
    checkedAt: 2026-11-23
  - field: category
    url: https://pocketbase.io/
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/pocketbase/pocketbase
    checkedAt: 2026-11-23
  - field: runtime
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: currentMajor
    url: https://pocketbase.io/
    checkedAt: 2026-11-23
  - field: license
    url: https://github.com/pocketbase/pocketbase
    checkedAt: 2026-11-23
  - field: licenseModel
    url: https://github.com/pocketbase/pocketbase
    checkedAt: 2026-10-19
  - field: contentStore
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: databases
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: adminUi
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: headlessApi
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: installMethod
    url: https://pocketbase.io/docs/
    checkedAt: 2026-11-23
  - field: githubStargazers
    url: https://api.github.com/repos/pocketbase/pocketbase
    checkedAt: 2026-11-23
  - field: runsAs
    url: https://pocketbase.io/docs/going-to-production/
    checkedAt: 2026-11-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

PocketBase is a backend that ships as a single Go executable with an embedded SQLite database. It provides realtime subscriptions, authentication, file storage, backups and a built-in dashboard, and clients reach the data through a REST-style API. Gani Georgiev maintains the project. PocketBase can run as a standalone application or be used as a Go framework, and the docs list JavaScript and Dart SDKs for client code.

## Worth knowing

The [going-to-production guide](https://pocketbase.io/docs/going-to-production/) states that the project has no official Docker image.
