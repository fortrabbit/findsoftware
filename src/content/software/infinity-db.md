---
id: infinity-db
name: Infinity
urls:
  home: https://infiniflow.org
  repository: https://github.com/infiniflow/infinity
  docs: https://infiniflow.org/docs/dev/category/get-started
category:
  - database
  - search
description: AI-native database server that runs hybrid search over dense and sparse vectors, tensors, full text and structured data.
status: active
maintainer: InfiniFlow
firstRelease: 2024
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-09
githubStargazers: 4747
contributors: 59
social:
  x: https://x.com/infiniflowai
  discord: https://discord.com/invite/jEfRUwEYEV
  forum: https://github.com/infiniflow/infinity/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://infiniflow.org
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/infiniflow/infinity
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/infiniflow/infinity/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://infiniflow.org
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/infiniflow/infinity/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/infiniflow/infinity
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/infiniflow/infinity/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://infiniflow.org/docs/dev/deploy_infinity_server
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/infiniflow/infinity/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://infiniflow.org/docs/dev/deploy_infinity_server
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/infiniflow/infinity/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/infiniflow/infinity/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/infiniflow/infinity/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/infiniflow/infinity/releases/tag/v0.7.4
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/infiniflow/infinity/releases/tag/v0.7.4
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/infiniflow/infinity/releases/tag/v0.1.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/infiniflow/infinity
    checkedAt: 2026-10-28
  - field: contributors
    url: https://github.com/infiniflow/infinity/graphs/contributors
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

Infinity is an AI-native database server. It stores tables with vector, tensor, full-text and structured columns, and answers hybrid queries that combine dense and sparse vector search, tensor matching and full-text search with filters. The server runs as a single binary, started as a Docker container or as a system service from its deb or rpm package, and the README also names an embedded mode as a Python module. Applications reach it over the network through a client, which the [README](https://github.com/infiniflow/infinity/blob/main/README.md) installs from pip for Python. In the Docker and binary deployments, client and server run as separate processes.

## Worth knowing

The server keeps running as a process, so it needs a host that keeps services alive. A static web space cannot run it. The README's Docker example uses the nightly image tag, and the documentation banner points to a released version as the latest, so a reader who wants a fixed release has to pick the tag and the documentation version by hand.
