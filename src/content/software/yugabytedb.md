---
id: yugabytedb
name: YugabyteDB
urls:
  home: https://www.yugabyte.com
  repository: https://github.com/yugabyte/yugabyte-db
  docs: https://docs.yugabyte.com/stable/
  pricing: https://www.yugabyte.com/pricing/
category:
  - database
description: Open-source distributed SQL database with a PostgreSQL-compatible query layer (YSQL) and a Cassandra-style one (YCQL).
status: active
maintainer: YugaByte, Inc.
maintainerType: company
firstRelease: 2018
hqCountry: US
language: c
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: tar.gz archive for Linux
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2026-10-23
githubStargazers: 10641
contributors: 299
social:
  x: https://twitter.com/yugabyte
  discord: https://discord.gg/GWcSST7GqZ
  forum: https://forum.yugabyte.com
  subreddit: https://www.reddit.com/r/YugabyteDB/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://www.yugabyte.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.yugabyte.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/yugabyte/yugabyte-db
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.yugabyte.com/stable/
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.yugabyte.com/pricing/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://www.yugabyte.com/terms-of-service/
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.yugabyte.com/terms-of-service/
    checkedAt: 2026-10-31
  - field: category
    url: https://docs.yugabyte.com/stable/quick-start/linux/
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/yugabyte/yugabyte-db
    checkedAt: 2026-10-31
  - field: runtime
    url: https://docs.yugabyte.com/stable/quick-start/linux/
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.yugabyte.com/stable/reference/configuration/yugabyted/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.yugabyte.com/stable/quick-start/linux/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.yugabyte.com/stable/deploy/kubernetes/single-zone/eks/helm-chart/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.yugabyte.com/stable/quick-start/docker/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/yugabyte/yugabyte-db/blob/master/README.md
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/yugabyte/yugabyte-db/releases/tag/v2025.2.8.0
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/yugabyte/yugabyte-db/releases/tag/v1.0.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/yugabyte/yugabyte-db
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/yugabyte/yugabyte-db/contributors?per_page=1
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://docs.yugabyte.com/stable/quick-start/linux/
    checkedAt: 2026-10-31
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

YugabyteDB is a distributed SQL database that runs as YB-TServer and YB-Master server processes. The `yugabyted` utility starts and manages them on a laptop, and its reference says it also runs production deployments on VMs. The [quick start](https://docs.yugabyte.com/stable/quick-start/linux/) installs from a tar.gz archive and sets up a single-host cluster for development, and the [Helm chart guide](https://docs.yugabyte.com/stable/deploy/kubernetes/single-zone/eks/helm-chart/) covers a Kubernetes install, shown on Amazon EKS.

YugabyteDB Aeon is the fully managed cloud service that runs next to the open-source database.
