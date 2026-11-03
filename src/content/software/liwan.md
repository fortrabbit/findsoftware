---
id: liwan
name: Liwan
urls:
  home: https://liwan.dev
  repository: https://github.com/explodingcamera/liwan
  docs: https://liwan.dev/getting-started/
category:
  - analytics
description: Self-hosted, privacy-first web analytics that runs as a single binary or a Docker container and keeps the data on the operator's server.
status: active
maintainer: Henry Gressmann
maintainerType: individual
firstRelease: 2024
hqCountry: DE
language: rust
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: single binary
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-29
githubStargazers: 221
contributors: 3
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://liwan.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/explodingcamera/liwan
    checkedAt: 2026-11-03
  - field: urls
    url: https://liwan.dev/getting-started/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://henrygressmann.de/impressum
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://henrygressmann.de/impressum
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://henrygressmann.de/impressum
    checkedAt: 2026-11-03
  - field: category
    url: https://liwan.dev/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/explodingcamera/liwan
    checkedAt: 2026-11-03
  - field: runtime
    url: https://liwan.dev/install/binary/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://liwan.dev/install/binary/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://liwan.dev/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://liwan.dev/install/docker-compose/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://liwan.dev/guides/service/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://liwan.dev/reference/projects-and-entities/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/explodingcamera/liwan/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/explodingcamera/liwan/releases/tag/liwan-v1.8.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/explodingcamera/liwan/releases/tag/liwan-v1.8.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/explodingcamera/liwan/tree/liwan-v0.1.0-beta.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/explodingcamera/liwan
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/explodingcamera/liwan/graphs/contributors
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

Liwan is self-hosted web analytics that ships as a single binary or a Docker container. Its dashboard and database are built in, and the database is DuckDB, an embedded database, so no separate service is needed.

A site adds a small browser script with one line of HTML, or sends events from its own server. The project says either approach works with any framework or CMS. Teams control access to private projects, and sign-in can use Google Workspace, Microsoft Entra ID, or an OpenID Connect provider.

## Worth knowing

The service guide sets Liwan up to start when the server boots, so it runs as a long-lived process on a host the operator manages.
