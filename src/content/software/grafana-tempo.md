---
id: grafana-tempo
name: Grafana Tempo
urls:
  home: https://grafana.com/oss/tempo
  repository: https://github.com/grafana/tempo
  docs: https://grafana.com/docs/tempo/latest/
category:
  - analytics
description: Open source distributed tracing backend that ingests Jaeger, Zipkin and OpenTelemetry traces and stores them in object storage.
status: active
maintainer: Raintank Inc.
maintainerType: company
firstRelease: 2020
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: binary-download
licenseModel: open-source
license: AGPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-10-21
githubStargazers: 5552
contributors: 313
social:
  forum: https://community.grafana.com/c/grafana-tempo/40
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://grafana.com/oss/tempo/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/grafana/tempo
    checkedAt: 2026-11-03
  - field: urls
    url: https://grafana.com/docs/tempo/latest/setup/
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
    url: https://github.com/grafana/tempo
    checkedAt: 2026-11-03
  - field: category
    url: https://grafana.com/oss/tempo/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/tempo/latest/setup/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/tempo/latest/setup/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/tempo/latest/setup/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/tempo/latest/set-up-for-tracing/setup-tempo/deploy/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/tempo/latest/set-up-for-tracing/setup-tempo/deploy/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://grafana.com/docs/tempo/latest/set-up-for-tracing/setup-tempo/deploy/locally/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://grafana.com/docs/tempo/latest/setup/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/grafana/tempo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/grafana/tempo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/grafana/tempo/releases/tag/v3.1.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/grafana/tempo/releases/tag/v3.1.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/grafana/tempo/releases/tag/v0.2.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/grafana/tempo
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/grafana/tempo
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

Grafana Tempo is a distributed tracing backend. It receives traces sent with Jaeger, Zipkin and OpenTelemetry, and it keeps them in object storage. The [setup guide](https://grafana.com/docs/tempo/latest/setup/) describes a monolithic and a microservices deployment mode. The project ships a pre-compiled binary, OS packages and a Docker image, with Helm and Tanka examples for Kubernetes.

## Worth knowing

The setup page says the microservices mode needs a Kafka-compatible system. The homepage calls object storage the only dependency.
