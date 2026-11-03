---
id: victoriametrics
name: VictoriaMetrics
urls:
  home: https://victoriametrics.com
  repository: https://github.com/VictoriaMetrics/VictoriaMetrics
  docs: https://docs.victoriametrics.com/victoriametrics/
  pricing: https://victoriametrics.com/plans-features/
category:
  - analytics
description: Time series database and monitoring solution that stores metrics pushed by applications and agents, with a Prometheus-compatible query API.
status: active
maintainer: VictoriaMetrics Inc.
maintainerType: company
firstRelease: 2018
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
latestReleaseDate: 2026-10-26
githubStargazers: 18004
contributors: 410
social:
  x: https://x.com/VictoriaMetrics
  mastodon: https://mastodon.social/@victoriametrics/
  subreddit: https://www.reddit.com/r/VictoriaMetrics/
  youtube: https://www.youtube.com/@victoriametrics
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://victoriametrics.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaMetrics
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.victoriametrics.com/victoriametrics/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://victoriametrics.com/legal/esa/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaMetrics
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.victoriametrics.com/victoriametrics/quick-start/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victoriametrics/quick-start/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victoriametrics/quick-start/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.victoriametrics.com/victoriametrics/quick-start/
    checkedAt: 2026-11-03
  - field: category
    url: https://victoriametrics.com/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaMetrics
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.victoriametrics.com/victoriametrics/enterprise/
    checkedAt: 2026-11-03
  - field: urls
    url: https://victoriametrics.com/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/VictoriaMetrics/VictoriaMetrics/releases/tag/v1.2.1
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/VictoriaMetrics/VictoriaMetrics/releases/tag/v1.155.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/VictoriaMetrics/VictoriaMetrics/releases/tag/v1.155.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaMetrics
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/VictoriaMetrics/VictoriaMetrics/contributors
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.victoriametrics.com/victoriametrics/quick-start/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.victoriametrics.com/victoriametrics/quick-start/
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

VictoriaMetrics is a time series database and monitoring solution written in Go and released under the Apache License 2.0 for its community components. Applications and agents push metrics to it over the Prometheus remote write API, the InfluxDB line protocol, the OpenTelemetry HTTP API and other push protocols, and it answers queries through a Prometheus-compatible querying API. The docs name a single-node version and a cluster version. The quick start runs the single binary and shows it set up as a systemd service listening for HTTP. Installation can use Docker, Helm or the binary releases. The company VictoriaMetrics Inc. maintains the project.

## Worth knowing

An Enterprise edition sits beside the community code and is licensed separately: the docs allow evaluation with a trial license and production use under an enterprise contract. The vendor also runs a managed service, VictoriaMetrics Cloud.
