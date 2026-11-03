---
id: victorialogs
name: VictoriaLogs
urls:
  home: https://victoriametrics.com/products/victorialogs/
  repository: https://github.com/VictoriaMetrics/VictoriaLogs
  docs: https://docs.victoriametrics.com/victorialogs/
category:
  - analytics
description: Log database and server that ingests logs over HTTP APIs from log shippers and applications, and answers queries over them.
status: active
maintainer: VictoriaMetrics Inc.
maintainerType: company
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-core
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-01
githubStargazers: 2454
contributors: 368
social:
  x: https://twitter.com/VictoriaMetrics
  mastodon: https://mastodon.social/@victoriametrics/
  subreddit: https://www.reddit.com/r/VictoriaMetrics/
  youtube: https://www.youtube.com/@victoriametrics
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://victoriametrics.com/products/victorialogs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaLogs
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.victoriametrics.com/victorialogs/quickstart/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://victoriametrics.com/legal/esa/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaLogs
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.victoriametrics.com/victorialogs/quickstart/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victorialogs/quickstart/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victorialogs/quickstart/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victorialogs/quickstart/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victorialogs/quickstart/
    checkedAt: 2026-11-03
  - field: category
    url: https://victoriametrics.com/products/victorialogs/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaLogs
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.victoriametrics.com/victoriametrics/enterprise/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/VictoriaMetrics/VictoriaMetrics/releases/tag/v0.1.0-victorialogs
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/VictoriaMetrics/VictoriaLogs/releases/tag/v1.53.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/VictoriaMetrics/VictoriaLogs/releases/tag/v1.53.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaLogs
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaLogs/contributors
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.victoriametrics.com/victorialogs/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.victoriametrics.com/victorialogs/
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

VictoriaLogs is a log database and server written in Go. It accepts logs over HTTP from log shippers and applications, through the Elasticsearch bulk API, a JSON stream API, the Loki JSON API and the OpenTelemetry API, and logs can be queried in its built-in web UI. It runs as a long-lived process. The docs list pre-built binaries, Docker, Helm charts, a Kubernetes operator and source builds as installation methods, and the quick start runs a single binary. The community edition is under the Apache License 2.0. VictoriaMetrics Inc. maintains it.

## Worth knowing

An Enterprise edition is licensed separately, and the docs allow production use of it under an enterprise contract.
