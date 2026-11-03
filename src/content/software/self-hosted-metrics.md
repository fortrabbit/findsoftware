---
id: self-hosted-metrics
name: Self-Hosted Metrics
urls:
  repository: https://github.com/kOlapsis/shm
  docs: https://github.com/kOlapsis/shm/blob/main/docs/DEPLOYMENT.md
category:
  - analytics
description: Telemetry server and client SDKs that let developers of self-hosted software collect signed usage counters and show them on a dashboard.
status: stub
maintainer: btouchard
maintainerType: individual
firstRelease: 2025
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
licenseModel: open-source
license: AGPL-3.0, MIT
currentMajor: "1"
latestReleaseDate: 2026-07-29
githubStargazers: 165
npmWeeklyDownloads: 131
contributors: 1
social:
  forum: https://github.com/kolapsis/shm/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/kOlapsis/shm
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/kOlapsis/shm/blob/main/docs/DEPLOYMENT.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/kOlapsis/shm
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/kOlapsis/shm/blob/main/docs/DEPLOYMENT.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/kOlapsis/shm/blob/main/docs/API.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/kOlapsis/shm
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/kOlapsis/shm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/kOlapsis/shm/releases/tags/v1.0.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/kOlapsis/shm/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/kOlapsis/shm/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/kOlapsis/shm
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/kOlapsis/shm/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@kolapsis/shm-sdk
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Self-Hosted Metrics is a telemetry server and two client SDKs, one for Go and one for Node.js, for developers who distribute self-hosted software. An application embeds the SDK; the SDK sends signed JSON snapshots of its counters to the server, which stores them in PostgreSQL and shows them on a dashboard. Each instance signs its requests with an Ed25519 key that it generates on first run. The server is a single Go binary with an embedded web interface, and the documented route is a Docker Compose file that runs it next to PostgreSQL.

## Worth knowing

The dashboard has no login by default, so the deployment guide says to put it behind an authenticating proxy before exposing it. The project's own website, named in its README, does not show the software when checked, so the record is kept as a stub until that is settled.
