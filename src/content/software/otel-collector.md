---
id: otel-collector
name: OpenTelemetry Collector
urls:
  home: https://opentelemetry.io
  repository: https://github.com/open-telemetry/opentelemetry-collector
  docs: https://opentelemetry.io/docs/collector/
category:
  - analytics
description: Vendor-neutral server, written in Go, that receives, processes and exports traces, metrics and logs telemetry data.
status: active
maintainer: OpenTelemetry Authors
maintainerType: community
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: build from source
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2026-10-26
githubStargazers: 7728
contributors: 408
social:
  bluesky: https://bsky.app/profile/opentelemetry.io
  mastodon: https://fosstodon.org/@opentelemetry
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/open-telemetry/opentelemetry-collector/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://opentelemetry.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/open-telemetry/opentelemetry-collector
    checkedAt: 2026-11-03
  - field: urls
    url: https://opentelemetry.io/docs/collector/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/open-telemetry/opentelemetry-collector
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/open-telemetry/opentelemetry-collector
    checkedAt: 2026-11-03
  - field: runtime
    url: https://opentelemetry.io/docs/collector/install/binary/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://opentelemetry.io/docs/collector/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://opentelemetry.io/docs/collector/install/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://opentelemetry.io/docs/collector/install/kubernetes/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://opentelemetry.io/docs/collector/install/binary/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://opentelemetry.io/docs/collector/deployment/gateway/
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/open-telemetry/opentelemetry-collector/releases/tag/v0.164.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/open-telemetry/opentelemetry-collector/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/open-telemetry/opentelemetry-collector
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/open-telemetry/opentelemetry-collector/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://opentelemetry.io/docs/collector/install/
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

The OpenTelemetry Collector is a vendor-neutral server written in Go. It receives telemetry data, processes it and exports it to one or more backends. Applications instrumented with OpenTelemetry SDKs send it OTLP. The [agent deployment page](https://opentelemetry.io/docs/collector/deployment/agent/) places the Collector beside the application, on the same host, as a sidecar or DaemonSet, and the [gateway page](https://opentelemetry.io/docs/collector/deployment/gateway/) describes Collector instances running as a standalone service. The install docs give a prebuilt binary, a Docker image, a Kubernetes install and a build from source. The core Docker image is otel/opentelemetry-collector. The project describes itself as a Cloud Native Computing Foundation project.

## Worth knowing

The repository holds the core library and a build target for the core distribution. The release images on ghcr.io come from a separate releases repository.
