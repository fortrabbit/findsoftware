---
id: webhook-tester
name: WebHook Tester
urls:
  home: https://wh.tarampamp.am
  repository: https://github.com/tarampampam/webhook-tester
  docs: https://github.com/tarampampam/webhook-tester#readme
category:
  - backend
  - testing
description: Go server that gives each test a unique, randomly generated URL for capturing webhooks and HTTP requests, with a configurable response.
status: active
maintainer: Paramtamtam
maintainerType: individual
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-04-13
githubStargazers: 552
contributors: 8
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/tarampampam/webhook-tester
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/tarampampam/webhook-tester/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/tarampampam/webhook-tester/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/tarampampam/webhook-tester/commit/1479fae546
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/tarampampam/webhook-tester
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/tarampampam/webhook-tester/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/tarampampam/webhook-tester/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/tarampampam/webhook-tester/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/tarampampam/webhook-tester/releases/tag/v2.3.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/tarampampam/webhook-tester/releases/tag/v2.3.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/tarampampam/webhook-tester
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/tarampampam/webhook-tester
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

WebHook Tester is a Go server that gives each test a unique, randomly generated URL for capturing webhooks and HTTP requests. Its storage can be memory, Redis or a local directory, and its README describes a built-in web interface for the recorded requests, and a tunnel that exposes a locally running instance to the internet through ngrok. The app ships as a single binary, a container image and a Helm chart, and the README calls it a self-hosted alternative to webhook.site.

## Worth knowing

The README says several instances behind a load balancer need Redis.
