---
id: coroot
name: Coroot
urls:
  home: https://coroot.com
  repository: https://github.com/coroot/coroot
  docs: https://docs.coroot.com/
  pricing: https://coroot.com/pricing/
category:
  - analytics
description: Open-source observability and application performance tool that collects metrics, logs, traces and profiles with eBPF and OpenTelemetry, with root cause analysis.
status: active
maintainer: Coroot, Inc.
maintainerType: company
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-30
githubStargazers: 7999
contributors: 37
social:
  x: https://twitter.com/coroot_com
  bluesky: https://bsky.app/profile/coroot.bsky.social
  mastodon: https://mastodon.social/@coroot
  youtube: https://www.youtube.com/@coroot_com
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://coroot.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/coroot/coroot
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.coroot.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://coroot.com/pricing/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://coroot.com/terms/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://coroot.com/terms/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/coroot/coroot
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/coroot/coroot
    checkedAt: 2026-11-03
  - field: runtime
    url: https://api.github.com/repos/coroot/coroot
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.coroot.com/configuration/coroot-node-agent
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.coroot.com/installation/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.coroot.com/installation/kubernetes
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/coroot/coroot
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.coroot.com/installation/docker
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.coroot.com/configuration/authentication
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/coroot/coroot/releases/tag/v1.29.1
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/coroot/coroot/releases/tag/v1.29.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/coroot/coroot/releases/tag/0.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/coroot/coroot
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/coroot/coroot/contributors
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

Coroot is an observability tool that collects metrics, logs, traces and profiles from the containers on each node. The node agent uses eBPF, and the project documents no code change in the applications for that. The data is shown in a web UI with root cause analysis. Logs, traces and profiles are stored in ClickHouse.

It installs with Docker Compose, which starts the Coroot server, a node agent, a cluster agent, ClickHouse and Prometheus, or with a Kubernetes operator installed from a Helm chart.

## Worth knowing

The Enterprise Edition uses the same Docker Compose file with a license key. It is a paid subscription that adds granular RBAC and SSO.

The vendor also runs a cloud-hosted version of the monitoring service, under its terms of service.
