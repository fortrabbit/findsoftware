---
id: milvus
name: Milvus
urls:
  home: https://milvus.io
  repository: https://github.com/milvus-io/milvus
  docs: https://milvus.io/docs
category:
  - database
description: Vector database for storing and searching embeddings, run as a Docker or Kubernetes server or as Milvus Lite, a Python library.
status: active
maintainer: LF AI & Data Foundation
maintainerType: foundation
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-26
githubStargazers: 46510
contributors: 339
social:
  x: https://x.com/milvusio
  discord: https://discord.gg/33mfvwep3J
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://milvus.io
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/milvus-io/milvus
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/milvus-io/milvus/releases
    checkedAt: 2026-10-28
  - field: language
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/milvus-io/milvus-docs/v3.0.x/site/en/getstarted/run-milvus-docker/install_standalone-docker.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/milvus-io/milvus-docs/v3.0.x/site/en/getstarted/install-overview.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/milvus-io/milvus-docs/v3.0.x/site/en/getstarted/run-milvus-docker/install_standalone-docker.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/milvus-io/milvus
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/milvus-io/milvus/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/milvus-io/milvus/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/milvus-io/milvus/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/milvus-io/milvus
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/milvus-io/milvus/contributors
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

Milvus is a vector database written in Go and C++ that stores and searches embeddings, with full-text and hybrid search alongside vector search. The open-source project sits under the LF AI & Data Foundation, and Zilliz is its major contributor. The [docs](https://milvus.io/docs) describe the deployment options: Milvus Lite, a Python library installed with pip for local use, a standalone server in a Docker container, and a distributed deployment on Kubernetes. Access control is role-based.

## Worth knowing

The standalone server runs as a long-lived Docker container, and the overview names a message queue, object storage and a metadata store as dependencies of every instance, by default Woodpecker, MinIO and etcd. A fully managed version runs on Zilliz Cloud, which is operated by a company other than the project's foundation.
