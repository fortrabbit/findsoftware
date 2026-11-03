---
id: prisme
name: Prisme Analytics
urls:
  home: https://www.prismeanalytics.com
  repository: https://github.com/prismelabs/analytics
  docs: https://www.prismeanalytics.com/docs
category:
  - analytics
description: Privacy-focused web analytics that can be self-hosted with Docker Compose, stores events in ClickHouse and shows them in Grafana dashboards.
status: active
maintainer: Prisme Analytics
maintainerType: company
firstRelease: 2024
language: go
basedOn:
  - grafana
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: AGPL-3.0-only, MIT
currentMajor: "0"
latestReleaseDate: 2025-06-25
githubStargazers: 136
contributors: 1
social:
  x: https://x.com/prismeanalytics
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.prismeanalytics.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/prismelabs/analytics
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.prismeanalytics.com/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.prismeanalytics.com/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://www.prismeanalytics.com/privacy/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/prismelabs/analytics
    checkedAt: 2026-11-03
  - field: category
    url: https://www.prismeanalytics.com/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/prismelabs/analytics/blob/v0.20.0/LICENSING.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/prismelabs/analytics/blob/v0.20.0/LICENSING.md
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://www.prismeanalytics.com/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/prismelabs/analytics
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.prismeanalytics.com/docs/guides/self-host-prisme-docker/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.prismeanalytics.com/docs/guides/self-host-prisme-docker/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/prismelabs/analytics
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/prismelabs/analytics
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/prismelabs/analytics/releases/tag/v0.20.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/prismelabs/analytics/releases/tag/v0.20.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/prismelabs/analytics/releases/tag/v0.1.0
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

Prisme Analytics is a web analytics service that stores events in ClickHouse and shows them in Grafana dashboards. The project's homepage says it is built on top of Grafana and ClickHouse, and Grafana supplies the dashboards, user management and permissions. A tracking script and a JavaScript-free pixel send page views to the instance.

The [self-host guide](https://www.prismeanalytics.com/docs/guides/self-host-prisme-docker/) sets up a Prisme Analytics server with Docker. Prisme Analytics, the company, also runs Prisme Cloud, and its homepage says every feature of the cloud service is in the open-source distribution.

## Worth knowing

The server is written in Go. The self-host guide sets the instance up with Docker Compose, so a self-hosted instance needs a host that runs containers. The cloud service is hosted in the EU.
