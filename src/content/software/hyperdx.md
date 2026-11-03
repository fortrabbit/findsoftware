---
id: hyperdx
name: HyperDX
urls:
  home: https://hyperdx.io
  repository: https://github.com/hyperdxio/hyperdx
  docs: https://clickhouse.com/docs/use-cases/observability/clickstack/overview
  pricing: https://www.hyperdx.io/pricing
category:
  - analytics
description: Open-source observability platform that searches and visualizes logs, traces, metrics, errors and session replays on top of ClickHouse, ingesting OpenTelemetry data from applications.
status: active
maintainer: DeploySentinel, Inc.
maintainerType: company
parent: ClickHouse
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - mongodb
adminUi: true
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-01
githubStargazers: 9985
contributors: 107
social:
  x: https://twitter.com/hyperdxio
  discord: https://discord.gg/FErRRKU78j
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hyperdx.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hyperdxio/hyperdx/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/hyperdxio/hyperdx/releases/tag/hyperdx%401.1.0
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/hyperdxio/hyperdx/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/hyperdxio/hyperdx/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: parent
    url: https://hyperdx.io/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/hyperdxio/hyperdx/blob/@hyperdx/api@2.43.1/packages/api/package.json
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/hyperdxio/hyperdx/blob/@hyperdx/api@2.43.1/packages/api/package.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://clickhouse.com/docs/clickstack/deployment/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://clickhouse.com/docs/clickstack/deployment/overview
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/hyperdxio/hyperdx/blob/main/DEPLOY.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.hyperdx.io/pricing
    checkedAt: 2026-11-03
  - field: category
    url: https://hyperdx.io/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hyperdxio/hyperdx/releases/tag/%40hyperdx%2Fapp%402.43.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hyperdxio/hyperdx/releases/tag/%40hyperdx%2Fapp%402.43.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/hyperdxio/hyperdx
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/hyperdxio/hyperdx/graphs/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

HyperDX is an observability platform that searches and charts logs, traces, metrics, errors and session replays. It stores its telemetry in ClickHouse and receives OpenTelemetry data from applications through an OpenTelemetry collector. The all-in-one Docker image publishes the UI on port 8080 and the OpenTelemetry ports 4317 and 4318, and a production deployment also keeps users, dashboards and saved searches in MongoDB. DeploySentinel, Inc. holds the copyright in the repository, and ClickHouse acquired the project, as the homepage states. ClickHouse Cloud can host a HyperDX deployment as well, and DeploySentinel offers an account-based HyperDX service under its terms.

## Worth knowing

The software sends anonymized usage data from open source deployments unless the USAGE_STATS_ENABLED variable is set to false. The deployment guide's production example names a beta image tag, while the README names the all-in-one image.
