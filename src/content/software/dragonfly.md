---
id: dragonfly
name: Dragonfly
urls:
  home: https://www.dragonflydb.io
  repository: https://github.com/dragonflydb/dragonfly
  docs: https://www.dragonflydb.io/docs
  pricing: https://www.dragonflydb.io/pricing
category:
  - database
description: In-memory data store compatible with the Redis and Memcached APIs, built for caching and other data-intensive workloads.
status: active
maintainer: DragonflyDB Ltd.
maintainerType: company
firstRelease: 2022
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker-image
licenseModel: source-available
license: BUSL-1.1
currentMajor: "2"
latestReleaseDate: 2026-10-07
githubStargazers: 31829
contributors: 179
social:
  x: https://twitter.com/dragonflydbio
  discord: https://discord.gg/HsPjXGVH85
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://www.dragonflydb.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/dragonflydb/dragonfly
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/dragonflydb/dragonfly
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.dragonflydb.io/docs
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.dragonflydb.io/privacy
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.dragonflydb.io/privacy
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/dragonflydb/dragonfly/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://www.dragonflydb.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/dragonflydb/dragonfly
    checkedAt: 2026-10-28
  - field: runtime
    url: https://www.dragonflydb.io/docs/getting-started/binary
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/dragonflydb/dragonfly/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/dragonflydb/dragonfly/releases/latest
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/dragonflydb/dragonfly/blob/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/dragonflydb/dragonfly/blob/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dragonflydb.io/docs/getting-started/docker
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dragonflydb.io/docs/getting-started/docker-compose
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dragonflydb.io/docs/getting-started/kubernetes
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dragonflydb.io/docs/getting-started/kubernetes-operator
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dragonflydb.io/docs/getting-started/binary
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.dragonflydb.io/docs/getting-started/native-packages
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.dragonflydb.io/docs/getting-started/native-packages
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.dragonflydb.io/pricing
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/dragonflydb/dragonfly
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/dragonflydb/dragonfly/contributors
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

Dragonfly is an in-memory data store written in C++ and shipped as a native binary. It runs as a server process that answers Redis and Memcached clients on a port, so applications that use those protocols can connect to it. The [getting-started guide](https://www.dragonflydb.io/docs/getting-started) lists Docker, Docker Compose, a Helm chart, a Kubernetes operator, a binary download and Linux packages as ways to start it. Its own [comparison page](https://www.dragonflydb.io/dragonfly-vs-redis) names Redis as the product it is compared with.

## Worth knowing

The license is source-available rather than open source. The Dragonfly Business Source License 1.1 does not allow the work to be used as part of an in-memory data store product or service, or offered as a service. The license changes to Apache 2.0 on a fixed change date. The company also sells Dragonfly Cloud as a hosted service, and a Self-Managed plan that adds LDAP authentication and role-based access control, priced on request.
