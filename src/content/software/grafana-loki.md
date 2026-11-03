---
id: grafana-loki
name: Grafana Loki
urls:
  home: https://grafana.com/oss/loki
  repository: https://github.com/grafana/loki
  docs: https://grafana.com/docs/loki/latest/
category:
  - analytics
description: Horizontally scalable log aggregation system that indexes log labels rather than the text of log lines.
status: active
maintainer: Raintank Inc.
maintainerType: company
firstRelease: 2019
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: helm
licenseModel: open-source
license: AGPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-10-20
githubStargazers: 29113
contributors: 447
social:
  forum: https://community.grafana.com/c/grafana-loki/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://grafana.com/oss/loki/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/grafana/loki
    checkedAt: 2026-11-03
  - field: urls
    url: https://grafana.com/docs/loki/latest/setup/install/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://grafana.com/legal/privacy-policy/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://grafana.com/legal/privacy-policy/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://grafana.com/legal/privacy-policy/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/grafana/loki
    checkedAt: 2026-11-03
  - field: category
    url: https://grafana.com/oss/loki/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/loki/latest/setup/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/loki/latest/setup/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/loki/latest/setup/install/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/loki/latest/setup/install/local/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/loki/latest/setup/install/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://grafana.com/docs/loki/latest/setup/install/local/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://grafana.com/docs/loki/latest/setup/install/local/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/grafana/loki/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/grafana/loki/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/grafana/loki/releases/tag/v3.7.9
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/grafana/loki/releases/tag/v3.7.9
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/grafana/loki/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/grafana/loki
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/grafana/loki
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Grafana Loki is a log aggregation system. It stores log lines in object storage and indexes only the labels of each log stream. Applications send logs to its HTTP push endpoint, or send OpenTelemetry logs over HTTP. The [install guide](https://grafana.com/docs/loki/latest/setup/install/) lists Helm, Tanka, Docker, Linux packages and a source build.

## Worth knowing

Loki has no authentication layer of its own. The install docs say an authenticating reverse proxy must sit in front of it.
