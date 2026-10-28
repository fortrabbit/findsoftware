---
id: couchbase
name: Couchbase Server
urls:
  home: https://www.couchbase.com
  repository: https://github.com/couchbase/manifest
  docs: https://docs.couchbase.com/server/current/introduction/intro.html
  pricing: https://www.couchbase.com/pricing/
category:
  - database
description: Distributed JSON document database with key-value access, a SQL-like query engine and a built-in web console, made by Couchbase, Inc.
status: active
maintainer: Couchbase, Inc.
maintainerType: company
adminUi: true
runsAs:
  - always-on
installMethod: Linux packages
licenseModel: source-available
license: various licenses, including Business Source License 1.1 (BSL), Couchbase Community Edition license (free deployment of up to five node clusters)
currentMajor: "8"
social:
  x: https://twitter.com/couchbase
  forum: https://forums.couchbase.com
  facebook: https://www.facebook.com/Couchbase
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.couchbase.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.couchbase.com/server/current/introduction/intro.html
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/couchbase/manifest
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://docs.couchbase.com/server/current/introduction/intro.html
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.couchbase.com/
    checkedAt: 2026-10-28
  - field: category
    url: https://docs.couchbase.com/server/current/introduction/intro.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://docs.couchbase.com/server/current/release-notes/relnotes.html
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/couchbase/kv_engine/blob/master/LICENSE.txt
    checkedAt: 2026-10-28
  - field: license
    url: https://docs.couchbase.com/server/current/introduction/editions.html
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/couchbase/kv_engine/blob/master/LICENSE.txt
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.couchbase.com/pricing/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchbase.com/server/current/install/install-intro.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchbase.com/server/current/install/install-intro.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchbase.com/server/current/install/install-intro.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/couchbase/docker
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.couchbase.com/server/current/install/install-intro.html
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://docs.couchbase.com/server/current/install/install-intro.html
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Couchbase Server is a distributed database for JSON documents. A cluster is built by installing the server on each node and joining the nodes together, and the cluster is administered from a web console that the server provides. Data is reached through a key-value store and a query engine for SQL-like queries, and Capella, a managed service from the same company, runs it as a hosted database.

Couchbase, Inc. maintains the product. Installs exist for Linux, macOS and Windows, and a Docker image is built from a repository the company publishes.

## Worth knowing

The Community Edition license covers free deployment for clusters of up to five nodes, and the Enterprise Edition adds features and is sold on a subscription counted by the nodes used in production. The source repositories state that their code is under various licenses, including the Business Source License 1.1, so a reader should check the license of the release they install rather than assume one.
