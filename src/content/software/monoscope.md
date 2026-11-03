---
id: monoscope
name: Monoscope
urls:
  home: https://monoscopehq.com
  repository: https://github.com/monoscope-tech/monoscope
  docs: https://monoscopehq.com/docs/onboarding/
  pricing: https://monoscopehq.com/pricing/
category:
  - analytics
description: Observability platform that stores logs, traces and metrics in S3-compatible buckets and can be self-hosted.
status: active
maintainer: Past 3 Technologies UG
maintainerType: company
firstRelease: 2025
hqCountry: DE
language: haskell
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-10-10
githubStargazers: 2035
contributors: 16
social:
  x: https://x.com/monoscope_tech
  discord: https://discord.gg/BSFCaUHxt4
  youtube: https://www.youtube.com/@Monoscope
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://monoscopehq.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/monoscope-tech/monoscope
    checkedAt: 2026-11-03
  - field: urls
    url: https://monoscopehq.com/docs/onboarding/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://monoscopehq.com
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://monoscopehq.com
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://monoscopehq.com
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/monoscope-tech/monoscope
    checkedAt: 2026-11-03
  - field: category
    url: https://monoscopehq.com
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/monoscope-tech/monoscope/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/monoscope-tech/monoscope/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/monoscope-tech/monoscope/blob/master/docs/getting-started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/monoscope-tech/monoscope/blob/master/docs/kubernetes.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/monoscope-tech/monoscope/blob/master/docs/configuration.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/monoscope-tech/monoscope
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://monoscopehq.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://monoscopehq.com/pricing/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/monoscope-tech/monoscope
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/monoscope-tech/monoscope
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/monoscope-tech/monoscope/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/monoscope-tech/monoscope/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/monoscope-tech/monoscope/releases
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Monoscope is an observability platform for logs, traces and metrics, with an AI SRE agent that works from the same data. It stores the telemetry in S3-compatible buckets that the user owns. The server is a Haskell binary that reads a PostgreSQL connection string from its configuration. The project documents a Docker Compose stack and Kubernetes manifests, and applications send their telemetry to it over OpenTelemetry or to a logs endpoint.

## Worth knowing

A hosted cloud service is offered beside the self-hosted software.
