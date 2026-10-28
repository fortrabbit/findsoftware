---
id: cockroachdb
name: CockroachDB
urls:
  home: https://www.cockroachlabs.com
  repository: https://github.com/cockroachdb/cockroach
  docs: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
category:
  - database
description: Distributed SQL database that runs as a cluster of nodes and keeps its data replicated across them.
status: active
maintainer: Cockroach Labs, Inc.
maintainerType: company
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary download
license: CockroachDB Software License
latestReleaseDate: 2026-10-21
githubStargazers: 32591
contributors: 306
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://github.com/cockroachdb/cockroach
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.cockroachlabs.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/cockroachdb/cockroach
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.cockroachlabs.com/privacy/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.cockroachlabs.com/privacy/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.cockroachlabs.com/privacy/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/cockroachdb/cockroach
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/cockroachdb/cockroach
    checkedAt: 2026-10-28
  - field: runtime
    url: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.cockroachlabs.com/docs/stable/cockroach-start
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/cockroachdb/cockroach
    checkedAt: 2026-10-28
  - field: license
    url: https://www.cockroachlabs.com/docs/releases/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://www.cockroachlabs.com/docs/stable/ui-overview
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/cockroachdb/cockroach/commits/v26.2.9
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/cockroachdb/cockroach
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/cockroachdb/cockroach/contributors?per_page=1
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

CockroachDB is a distributed SQL database. The server is a Go program shipped as a binary, and the [installation guide](https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux) covers the binary, a Docker image, Kubernetes and a build from source. A web interface, the DB Console, shows details about the cluster and its database configuration.

A node is started with `cockroach start`, which the start command's reference describes as a long-running server. The vendor also runs the database as CockroachDB Cloud.

## Worth knowing

Releases from 24.3.0 on are under the CockroachDB Software License. Earlier binaries were under the Business Source License, according to the releases page. Some self-hosted deployments need a paid Enterprise license to use all features.
