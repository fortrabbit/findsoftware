---
id: mercure
name: Mercure
urls:
  home: https://mercure.rocks
  repository: https://github.com/dunglas/mercure
  docs: https://mercure.rocks/docs
category:
  - backend
description: Protocol for pushing data updates to web browsers and other HTTP clients over server-sent events, with a reference hub server written in Go.
status: active
maintainer: Les-Tilleuls.coop
maintainerType: individual
firstRelease: 2018
hqCountry: FR
language: go
runtime:
  - binary
hosting:
  - binary
basedOn:
  - caddy
runsAs:
  - always-on
installMethod: Docker image dunglas/mercure
licenseModel: open-core
license: AGPL-3.0, commercial license for Mercure Enterprise
currentMajor: "1"
latestReleaseDate: 2026-10-25
githubStargazers: 5357
contributors: 104
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://mercure.rocks/
    checkedAt: 2026-11-03
  - field: urls
    url: https://mercure.rocks/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/dunglas/mercure
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://mercure.rocks/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://les-tilleuls.coop/en/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/dunglas/mercure/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://mercure.rocks/docs/hub/license
    checkedAt: 2026-11-03
  - field: license
    url: https://mercure.rocks/docs/hub/license
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://mercure.rocks/pricing
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/dunglas/mercure
    checkedAt: 2026-11-03
  - field: runtime
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://mercure.rocks/docs/hub/install
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/dunglas/mercure/releases/tag/v1.1.5
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/dunglas/mercure/releases/tag/v1.1.5
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/dunglas/mercure/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/dunglas/mercure
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/dunglas/mercure
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://mercure.rocks/docs/production/rolling-updates
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Mercure is a protocol for pushing updates from a server to browsers and other HTTP clients, and its reference hub is a server that implements it. The hub is a custom build of the [Caddy](https://mercure.rocks/docs/hub/install) web server with the Mercure module. The project publishes a Docker image, a Compose file, a Helm chart and prebuilt archives, and a Go library is available for applications written in Go.

## Worth knowing

The [license page](https://mercure.rocks/docs/hub/license) states AGPL-3.0 for the hub and offers a commercial license through Mercure Enterprise. The paid tiers add multi-node clustering and the Redis and PostgreSQL transports, and the hosted Mercure Cloud runs its servers in Amsterdam.
