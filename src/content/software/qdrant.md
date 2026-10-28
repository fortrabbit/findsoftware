---
id: qdrant
name: Qdrant
urls:
  home: https://qdrant.tech
  repository: https://github.com/qdrant/qdrant
  docs: https://qdrant.tech/documentation/
  pricing: https://qdrant.tech/pricing/
category:
  - database
  - search
description: Vector search engine and vector database, run as a server with a REST and gRPC API, also offered as Qdrant Cloud.
status: active
maintainer: Qdrant Solutions GmbH
maintainerType: company
firstRelease: 2021
hqCountry: DE
language: rust
runtime:
  - binary
hosting:
  - binary
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 35291
contributors: 210
social:
  x: https://twitter.com/qdrant_engine
  discord: https://qdrant.to/discord
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://qdrant.tech/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/qdrant/qdrant
    checkedAt: 2026-10-28
  - field: urls
    url: https://qdrant.tech/documentation/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://qdrant.tech/legal/impressum/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://qdrant.tech/legal/terms_and_conditions/
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/qdrant/qdrant/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/qdrant/qdrant/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/qdrant/qdrant/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://qdrant.tech/documentation/installation/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/qdrant/qdrant/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/qdrant/qdrant/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://qdrant.tech/documentation/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/qdrant/qdrant/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://qdrant.tech/documentation/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://qdrant.tech/documentation/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://qdrant.tech/documentation/installation/
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://github.com/qdrant/qdrant/blob/master/README.md
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://github.com/qdrant/qdrant/blob/master/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://qdrant.tech/pricing/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/qdrant/qdrant/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/qdrant/qdrant/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/qdrant/qdrant/releases/tags/v0.2.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/qdrant/qdrant
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/qdrant/qdrant/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Qdrant is a vector search engine and vector database written in Rust. It runs as a server with a REST API and a gRPC interface, and it includes a web UI for interacting with the data. Docker, Docker Compose, a Helm chart for Kubernetes and a build from source with Cargo are the documented ways to install it. Qdrant Solutions GmbH in Berlin maintains it.

Qdrant Cloud is offered as a fully managed service beside the open-source server, with a free tier and a Premium tier that lists SSO. A paid Enterprise Operator for Kubernetes is offered for installations in the customer's own infrastructure.

## Worth knowing

The server needs POSIX block-level storage for its data. The installation page states that NFS and object storage are not supported, and that Docker on Windows with mounted volumes is known to cause data loss.
