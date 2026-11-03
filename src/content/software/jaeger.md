---
id: jaeger
name: Jaeger
urls:
  home: https://www.jaegertracing.io
  repository: https://github.com/jaegertracing/jaeger
  docs: https://www.jaegertracing.io/docs/
category:
  - analytics
description: Open-source distributed tracing platform that collects, stores and shows traces from requests that cross services.
status: active
maintainer: The Jaeger Authors
maintainerType: community
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: Apache-2.0, Apache 2.0 License
currentMajor: "2"
latestReleaseDate: 2026-10-06
githubStargazers: 23364
contributors: 433
social:
  x: https://twitter.com/JaegerTracing
  forum: https://github.com/jaegertracing/jaeger/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.jaegertracing.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/jaegertracing/jaeger
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.jaegertracing.io/docs/latest/deployment/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/jaegertracing/jaeger/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/jaegertracing/jaeger
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/jaegertracing/jaeger/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.jaegertracing.io
    checkedAt: 2026-11-03
  - field: category
    url: https://www.jaegertracing.io
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/jaegertracing/jaeger
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.jaegertracing.io/download/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.jaegertracing.io/docs/2.22/deployment/windows/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.jaegertracing.io/download/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.jaegertracing.io/docs/latest/deployment/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.jaegertracing.io/docs/2.22/deployment/kubernetes/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.jaegertracing.io/docs/2.22/deployment/kubernetes/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/jaegertracing/jaeger/releases/tag/v2.22.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/jaegertracing/jaeger/releases/tag/v2.22.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/jaegertracing/jaeger/releases/tag/v0.5.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/jaegertracing/jaeger
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/jaegertracing/jaeger/contributors
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

Jaeger is an open-source platform for distributed tracing. Applications send trace data to it over the OpenTelemetry Protocol (OTLP), it stores the traces in a storage backend, and its UI shows how a request moved through the services it crossed. The current major line is built on the OpenTelemetry Collector framework, and the same binary can run in several roles.

Jaeger is written in Go and ships as a binary, a container image, a Helm chart and an OpenTelemetry Operator setup for Kubernetes. The [deployment guide](https://www.jaegertracing.io/docs/latest/deployment/) describes the backend as a single binary or container image. The Cassandra, Elasticsearch and OpenSearch backends are the primary supported storage options, and the [storage guide](https://www.jaegertracing.io/docs/latest/storage/) describes them.

## Worth knowing

The Windows guide describes hosting Jaeger processes as Windows services. The previous major line has reached end of life.
