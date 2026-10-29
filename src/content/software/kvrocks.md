---
id: kvrocks
name: Apache Kvrocks
urls:
  home: https://kvrocks.apache.org/
  repository: https://github.com/apache/kvrocks
  docs: https://kvrocks.apache.org/docs/getting-started/
category:
  - database
description: Distributed key-value NoSQL database that stores data in RocksDB and accepts Redis clients and Redis cluster SDKs.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2019
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker-image, source-build
licenseModel: open-source
license: Apache-2.0, Apache License Version 2.0
currentMajor: "2"
latestReleaseDate: 2026-09-19
githubStargazers: 4480
contributors: 189
social:
  x: https://twitter.com/apache_kvrocks
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://kvrocks.apache.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/apache/kvrocks
    checkedAt: 2026-10-29
  - field: urls
    url: https://kvrocks.apache.org/docs/getting-started/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/apache/kvrocks/blob/unstable/NOTICE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://kvrocks.apache.org/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/apache/kvrocks/releases/tag/v1.0.1
    checkedAt: 2026-10-29
  - field: category
    url: https://kvrocks.apache.org/
    checkedAt: 2026-10-29
  - field: language
    url: https://github.com/apache/kvrocks
    checkedAt: 2026-10-29
  - field: runtime
    url: https://kvrocks.apache.org/docs/getting-started/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/apache/kvrocks/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/apache/kvrocks/releases/tag/v2.17.0
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/apache/kvrocks
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/apache/kvrocks/blob/unstable/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://kvrocks.apache.org/docs/getting-started/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://kvrocks.apache.org/download/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://kvrocks.apache.org/docs/getting-started/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://github.com/apache/kvrocks
    checkedAt: 2026-10-29
  - field: contributors
    url: https://github.com/apache/kvrocks/graphs/contributors
    checkedAt: 2026-10-29
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

Apache Kvrocks is a distributed key-value NoSQL database written in C++. It stores its data in RocksDB and speaks the Redis protocol, so clients written for Redis connect to it. The getting-started guide names a Docker image and a build from source as the two ways to run it, and the project releases source artifacts only. Once started, the server runs as a long-lived process. The Apache Software Foundation maintains it.

## Worth knowing

The README states an aim to lower the memory cost and raise the capacity compared to Redis, accepts Redis cluster SDKs for its cluster, and points to RedisShake for moving data from Redis. It lists Linux and macOS as supported platforms.
