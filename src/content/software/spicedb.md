---
id: spicedb
name: SpiceDB
urls:
  home: https://authzed.com/spicedb
  repository: https://github.com/authzed/spicedb
  docs: https://authzed.com/docs/spicedb/getting-started/discovering-spicedb
  pricing: https://authzed.com/pricing
category:
  - auth
description: Open-source, Google Zanzibar-inspired database for creating and managing security-critical application permissions.
status: active
maintainer: Authzed, Inc.
maintainerType: company
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 7188
contributors: 83
social:
  x: https://twitter.com/authzed
  discord: https://authzed.com/discord
  forum: https://github.com/orgs/authzed/discussions
  youtube: https://www.youtube.com/channel/UCFeSgZf0rPqQteiTQNGgTPg
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://authzed.com/spicedb
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/authzed/spicedb
    checkedAt: 2026-11-03
  - field: urls
    url: https://authzed.com/docs/spicedb/getting-started/discovering-spicedb
    checkedAt: 2026-11-03
  - field: category
    url: https://authzed.com/spicedb
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/authzed/spicedb
    checkedAt: 2026-11-03
  - field: license
    url: https://authzed.com/pricing
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/authzed/spicedb/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/authzed/spicedb
    checkedAt: 2026-11-03
  - field: runtime
    url: https://authzed.com/docs/spicedb/getting-started/install/debian
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://authzed.com/docs/spicedb/getting-started/install/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://authzed.com/docs/spicedb/getting-started/install/debian
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://authzed.com/docs/spicedb/getting-started/install/debian
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://authzed.com/docs/spicedb/getting-started/install/debian
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://authzed.com/docs/spicedb/getting-started/install/macos
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://authzed.com/docs/spicedb/getting-started/install/kubernetes
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://authzed.com/docs/spicedb/getting-started/client-libraries
    checkedAt: 2026-11-03
  - field: databases
    url: https://authzed.com/docs/spicedb/concepts/datastores
    checkedAt: 2026-11-03
  - field: databases
    url: https://authzed.com/docs/spicedb/concepts/datastores
    checkedAt: 2026-11-03
  - field: databases
    url: https://authzed.com/docs/spicedb/concepts/datastores
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/authzed/spicedb/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/authzed/spicedb/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/authzed/spicedb
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/authzed/spicedb
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/authzed/spicedb/blob/main/NOTICE
    checkedAt: 2026-11-03
  - field: urls
    url: https://authzed.com/pricing
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

SpiceDB is an open-source database for application permissions, inspired by Google's Zanzibar design. Applications call it through its gRPC and HTTP/JSON APIs, and the [client libraries page](https://authzed.com/docs/spicedb/getting-started/client-libraries) describes a SpiceDB instance serving the HTTP server that clients reach.

Relationships are stored in the datastore chosen for the deployment: CockroachDB, Cloud Spanner, PostgreSQL or MySQL. Packages come from Docker images, apt, snap, Homebrew and a Kubernetes operator, which lives in its own repository.

## Worth knowing

A commercially licensed Enterprise build runs beside the Apache-2.0 server. The product page lists scoped API access, audit logging, rate limiting and embargoed security fixes as its additions. A hosted service, AuthZed Cloud, runs the software for customers who do not operate it themselves.
