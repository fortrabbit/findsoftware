---
id: gofound
name: GoFound
urls:
  repository: https://github.com/sea-team/gofound
  docs: https://github.com/sea-team/gofound/tree/main/docs
category:
  - search
description: Full-text search engine written in Go, run as a standalone HTTP server with its own index and admin interface.
status: active
maintainer: sea-team
maintainerType: community
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary download, compile from source, docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2023-04-10
githubStargazers: 1595
contributors: 13
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/sea-team/gofound
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/sea-team/gofound/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://api.github.com/repos/sea-team/gofound
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/sea-team/gofound
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/sea-team/gofound
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/sea-team/gofound/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/sea-team/gofound/blob/main/docs/compile.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/sea-team/gofound/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/sea-team/gofound/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/sea-team/gofound/blob/main/docs/example.md
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://github.com/sea-team/gofound/blob/main/docs/compile.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/sea-team/gofound/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/sea-team/gofound/releases/latest
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/sea-team/gofound/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/sea-team/gofound
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/sea-team/gofound/contributors?per_page=1
    checkedAt: 2026-10-28
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

GoFound is a full-text search engine written in Go. It runs as a standalone server that keeps its index and documents in leveldb files in a data directory, and an HTTP API handles indexing and queries. Its web admin interface is built with Vue, element-ui and Vite, as the [compile guide](https://github.com/sea-team/gofound/blob/main/docs/compile.md) describes.

The project offers a prebuilt binary, a build from source with the Go toolchain, and a Dockerfile in the repository. Once started, the server stays running and the API is called from the site or application that needs search, with the [example](https://github.com/sea-team/gofound/blob/main/docs/example.md) showing the start-up command.

## Worth knowing

The README, the documentation and the admin interface are written in Chinese. The project's own README compares it with Elasticsearch.
