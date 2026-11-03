---
id: gorush
name: Gorush
urls:
  repository: https://github.com/appleboy/gorush
  docs: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
category:
  - backend
description: Push notification server that sends iOS, Android and Huawei notifications through a web API, a command line or gRPC.
status: active
maintainer: Bo-Yi Wu
maintainerType: individual
firstRelease: 2016
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: install script (install.sh) from the master branch
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-25
githubStargazers: 8796
contributors: 59
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/appleboy/gorush
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/appleboy/gorush/blob/v1.22.0/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/appleboy/gorush/blob/v1.22.0/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/appleboy/gorush/commits/8645e17060ded2f5b6446fd08f97e884653087fb
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/appleboy/gorush
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/appleboy/gorush/blob/v1.22.0/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/appleboy/gorush/releases/tag/v1.22.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/appleboy/gorush/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/appleboy/gorush
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/appleboy/gorush/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gorush is a server that sends push notifications to iOS, Android and Huawei devices. An application calls the server's web API at `/api/push`, and the server passes the message on to the platform's push service. It is written in Go, is configured with a YAML file and listens on port 8088 by default. Notifications go through a queue handled by multiple workers. Delivery statistics can be kept in memory, in Redis or in one of several embedded stores. Prometheus metrics, a gRPC service and a command line for single messages are also part of the project. The README describes running it in Docker, on Kubernetes or as an AWS Lambda function.

## Worth knowing

Each platform needs its own credentials in the configuration: a Firebase service account key for Android and an APNs key file for iOS. The queue's default is an in-process channel, and the README names NSQ, NATS and Redis streams as queue backends the operator can choose instead.
