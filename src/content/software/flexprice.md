---
id: flexprice
name: Flexprice
urls:
  home: https://flexprice.io
  repository: https://github.com/flexprice/flexprice
  docs: https://docs.flexprice.io
  pricing: https://flexprice.io/pricing
category:
  - e-commerce
description: Open-source usage-based billing platform with metering, credits, pricing plans and invoicing, run through an API and available as a hosted cloud service.
status: active
maintainer: Squirrelly Technologies Private Limited
maintainerType: company
firstRelease: 2025
hqCountry: IN
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-core
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-29
githubStargazers: 6875
contributors: 39
social:
  x: https://x.com/tryflexprice
  youtube: https://youtube.com/@tryflexprice
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://flexprice.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/flexprice/flexprice
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.flexprice.io/developers/self-hosting.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/flexprice/flexprice/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://flexprice.io/privacy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://flexprice.io/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/flexprice/flexprice/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/flexprice/flexprice
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.flexprice.io/docs/getting-started/self-hosting-guide.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.flexprice.io/docs/getting-started/architecture.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.flexprice.io/developers/self-hosting.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.flexprice.io/docs/getting-started/architecture.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.flexprice.io/developers/self-hosting.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flexprice.io/docs/getting-started/self-hosting-guide.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flexprice.io/docs/getting-started/self-hosting-guide.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/flexprice/flexprice
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/flexprice/flexprice/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://flexprice.io/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/flexprice/flexprice/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/flexprice/flexprice/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/flexprice/flexprice/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/flexprice/flexprice
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/flexprice/flexprice/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Flexprice is a usage-based billing platform with metering, credits, pricing plans and invoicing. An application connects to it through its API and SDKs, and the API serves more than 200 REST endpoints. The project publishes SDKs for Go, Python and TypeScript.

The server is written in Go and runs as three services built from one codebase: the API, a Consumer and a Background Worker. The [self-hosting guide](https://docs.flexprice.io/docs/getting-started/self-hosting-guide.md) starts the services with Docker Compose beside PostgreSQL and ClickHouse, with Kafka and Temporal in the same stack, and it builds a dashboard that is served against the API. The guide also covers a production layout on AWS.

## Worth knowing

The open-source edition is licensed under the AGPL, and the project describes an open-core model in which some parts sit under a commercial license. Flexprice Cloud is the hosted product. The self-hosting page lists the differences developers meet when they build against a self-hosted instance, including how webhooks are delivered.
