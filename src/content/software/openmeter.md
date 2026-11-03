---
id: openmeter
name: OpenMeter
urls:
  home: https://openmeter.io
  repository: https://github.com/openmeterio/openmeter
  docs: https://openmeter.io/docs
  pricing: https://openmeter.io/pricing
category:
  - e-commerce
description: Open-source usage metering and billing platform that ingests usage events and bills customers for the usage.
status: active
maintainer: Kong Inc.
maintainerType: company
parent: Kong Inc.
firstRelease: 2023
language: go
databases:
  - postgres
adminUi: false
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2023-07-11
githubStargazers: 2431
npmWeeklyDownloads: 39534
contributors: 36
social:
  x: https://twitter.com/openmeterio
  forum: https://github.com/openmeterio/openmeter/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://openmeter.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/openmeterio/openmeter
    checkedAt: 2026-11-03
  - field: urls
    url: https://openmeter.io/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://openmeter.io/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openmeterio/openmeter
    checkedAt: 2026-11-03
  - field: license
    url: https://openmeter.io/about
    checkedAt: 2026-11-03
  - field: category
    url: https://openmeter.io/about
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/openmeterio/openmeter
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/openmeterio/openmeter/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://openmeter.io/about
    checkedAt: 2026-11-03
  - field: parent
    url: https://openmeter.io/about
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/openmeterio/openmeter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openmeter.io/docs/open-source/kubernetes
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/openmeterio/openmeter
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/openmeterio/openmeter/releases
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@openmeter/sdk
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/openmeterio/openmeter
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/openmeterio/openmeter
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/openmeterio/openmeter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/openmeterio/openmeter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/openmeterio/openmeter/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

OpenMeter records usage events that an application sends to it, aggregates them in real time, and turns them into customer usage data and invoices. Applications send CloudEvents-compatible events through the REST API or through the JavaScript, Python and Go SDKs, and the same API answers usage queries and delivers webhooks. The core runtime is an API server with worker processes that handle event sink, balances, billing and notifications, backed by Kafka, ClickHouse and PostgreSQL. A [Docker Compose quickstart](https://github.com/openmeterio/openmeter#quickstart) runs that stack for local evaluation, and the project documents a [Helm chart](https://openmeter.io/docs/open-source/kubernetes) for development deployments.

The project joined Kong Inc. in 2025, and the managed product is offered as Konnect Metering & Billing on the Kong Konnect platform.

## Worth knowing

The README describes releases as beta that can include breaking changes, and lists a bundled operator UI among the things OpenMeter is not. The Helm chart is documented for development deployments, not for production.
