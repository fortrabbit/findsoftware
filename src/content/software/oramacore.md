---
id: oramacore
name: OramaCore
urls:
  repository: https://github.com/oramasearch/oramacore
  docs: https://github.com/oramasearch/oramacore/blob/develop/docs/api.md
category:
  - search
description: Search and vector database server, written in Rust, that runs from a Docker image and adds an LLM interface to a collection's search.
status: active
maintainer: OramaSearch, Inc.
maintainerType: company
firstRelease: 2025
hqCountry: US
language: rust
runsAs:
  - always-on
installMethod: docker, docker compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-13
githubStargazers: 265
contributors: 12
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/oramasearch/oramacore
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/oramasearch/oramacore/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/oramasearch/oramacore/releases/tag/0.0.1
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://orama.com/legal/terms
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://orama.com/
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/oramasearch/oramacore/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/oramasearch/oramacore/blob/develop/LICENSE.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/oramasearch/oramacore
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/oramasearch/oramacore/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/oramasearch/oramacore/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/oramasearch/oramacore/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/oramasearch/oramacore/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/oramasearch/oramacore/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/oramasearch/oramacore
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/oramasearch/oramacore/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

OramaCore is a server, written in Rust, that combines a full-text search engine, a vector database and an LLM interface in one service. Its [README](https://github.com/oramasearch/oramacore/blob/develop/README.md) documents a Docker image and a compose file as the way to run it, and the [API notes](https://github.com/oramasearch/oramacore/blob/develop/docs/api.md) cover its supervision and configuration.

It runs as a long-running HTTP server, so the host has to keep it up. The JavaScript client that calls it is a separate package and does not contain the server. The company's cloud, Orama Cloud, is documented as a managed service.

## Worth knowing

The README recommends an NVIDIA GPU for running the application, and names one NVIDIA A100 as the minimum for production use. The README's documentation domain does not resolve, so the repository is the reference.
