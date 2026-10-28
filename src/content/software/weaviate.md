---
id: weaviate
name: Weaviate
urls:
  home: https://weaviate.io
  repository: https://github.com/weaviate/weaviate
  docs: https://docs.weaviate.io
  pricing: https://weaviate.io/pricing
category:
  - database
description: Open source vector database that stores objects and vectors and combines vector search with structured filtering.
status: active
maintainer: Weaviate B.V.
maintainerType: company
firstRelease: 2019
hqCountry: NL
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: docker image
licenseModel: open-core
license: BSD-3-Clause, Weaviate License (wl/ directory)
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 16923
contributors: 161
social:
  x: https://x.com/weaviate_io
  forum: https://forum.weaviate.io/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://weaviate.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/weaviate/weaviate
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.weaviate.io/weaviate
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/weaviate/weaviate/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://weaviate.io/privacy
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://weaviate.io/privacy
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://weaviate.io/privacy
    checkedAt: 2026-10-28
  - field: category
    url: https://weaviate.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/weaviate/weaviate
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/weaviate/weaviate
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/weaviate/weaviate/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/weaviate/weaviate/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/weaviate/weaviate
    checkedAt: 2026-10-28
  - field: urls
    url: https://weaviate.io/pricing
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.weaviate.io/deploy/installation-guides/docker-installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/weaviate/weaviate
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/weaviate/weaviate/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/weaviate/weaviate/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/weaviate/weaviate
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/weaviate/weaviate/contributors?per_page=1
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

Weaviate is an open source vector database that stores data objects together with their vector embeddings, and combines vector search with filters on structured data. It is written in Go and can be started from a Docker image or from a binary download. The sample Docker Compose file mounts a persistent volume at /var/lib/weaviate, where the server keeps its data.

The company behind it, Weaviate B.V., is established in Amsterdam, the Netherlands.

## Worth knowing

The project is open core. Code in the wl directory is available only under a commercial license, and its enterprise features run with a license key. Weaviate Cloud is a managed service that uses the same open source project, offered beside the self-hosted server.
