---
id: openanalytics
name: OpenAnalytics
urls:
  home: https://getopen.so
  repository: https://github.com/OpenLabs-so/openanalytics
  docs: https://getopen.so/docs
  pricing: https://getopen.so/pricing
category:
  - analytics
description: Privacy-first web analytics with one lightweight tracker script, self-hostable under AGPL-3.0 and also offered as a hosted service by its authors.
status: active
maintainer: OpenLabs
firstRelease: 2026
language: javascript
databases:
  - postgres
runsAs:
  - always-on
installMethod: Docker Compose with published images
licenseModel: open-source
license: AGPL-3.0, MIT
currentMajor: "0"
latestReleaseDate: 2026-09-19
githubStargazers: 645
contributors: 4
social:
  x: https://x.com/openanalyticshq
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://getopen.so
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: urls
    url: https://getopen.so/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://getopen.so
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/OpenLabs-so/openanalytics/blob/main/SELF-HOSTING.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/OpenLabs-so/openanalytics/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/OpenLabs-so/openanalytics/releases/tag/v0.8.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/OpenLabs-so/openanalytics/releases/tag/v0.8.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/OpenLabs-so/openanalytics
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/OpenLabs-so/openanalytics/contributors
    checkedAt: 2026-11-03
  - field: urls
    url: https://getopen.so/pricing
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

OpenAnalytics is web analytics built around one tracker script. The server is split into services: an ingest collector, a worker that writes events, a control plane, a query gateway, a realtime stream and a dashboard. Control-plane data sits in Postgres, events in ClickHouse and queues and caches in Valkey.

The self-hosted install is a Docker Compose stack that pulls published images, and the authors also run a hosted instance of the same code.

## Worth knowing

Four DNS names must point at the host before the first start, because certificates are issued on first boot and issuance fails without them. The README also states that migrations do not go down, so the way back from an upgrade is a restore.
