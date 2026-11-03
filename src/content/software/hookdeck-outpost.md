---
id: hookdeck-outpost
name: Outpost
urls:
  home: https://hookdeck.com/outpost
  repository: https://github.com/hookdeck/outpost
  docs: https://hookdeck.com/docs/outpost/overview
  pricing: https://hookdeck.com/outpost/pricing
category:
  - backend
description: Open-source Go service that sends outbound webhooks and other event destinations from an application to its customers, with a tenant portal and retries.
status: active
maintainer: Hookdeck Technologies Inc.
maintainerType: company
firstRelease: 2024
hqCountry: CA
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 1077
contributors: 28
social:
  x: https://twitter.com/Hookdeck
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hookdeck.com/outpost
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hookdeck/outpost
    checkedAt: 2026-11-03
  - field: urls
    url: https://hookdeck.com/docs/outpost/overview
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hookdeck/outpost
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://hookdeck.com/terms
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/hookdeck/outpost
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://hookdeck.com/terms
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/hookdeck/outpost
    checkedAt: 2026-11-03
  - field: runtime
    url: https://hookdeck.com/docs/outpost/self-hosting/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://hookdeck.com/docs/outpost/self-hosting/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hookdeck.com/docs/outpost/self-hosting/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hookdeck.com/docs/outpost/self-hosting/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hookdeck.com/docs/outpost/self-hosting/deployment
    checkedAt: 2026-11-03
  - field: databases
    url: https://hookdeck.com/docs/outpost/self-hosting/deployment
    checkedAt: 2026-11-03
  - field: category
    url: https://hookdeck.com/outpost
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hookdeck/outpost/releases/tag/v1.7.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hookdeck/outpost/releases/tag/v1.7.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/hookdeck/outpost/releases/tag/v0.1.0-alpha.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/hookdeck/outpost
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/hookdeck/outpost/graphs/contributors
    checkedAt: 2026-11-03
  - field: urls
    url: https://hookdeck.com/outpost/pricing
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Outpost is a Go service that an application runs to send outbound webhooks and other event destinations to its customers. The application publishes events through Outpost's REST API or a queue, and Outpost delivers them with retries and a tenant portal. The service needs Redis and a PostgreSQL or ClickHouse database, plus a message queue for the queue-based destinations. It ships as a binary and a Docker image, with an example Helm chart for Kubernetes, and its three services (delivery, api and log) are entry points of one executable. Hookdeck Technologies Inc., a company in Montreal, Canada, builds and maintains it.

## Worth knowing

A managed Outpost, which runs the same codebase, is offered by the same company as a hosted service.
