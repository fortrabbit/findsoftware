---
id: clickhouse
name: ClickHouse
urls:
  home: https://clickhouse.com
  repository: https://github.com/ClickHouse/ClickHouse
  docs: https://clickhouse.com/docs/
  pricing: https://clickhouse.com/pricing
category:
  - database
  - analytics
description: Column-oriented SQL database management system for analytical queries, available as open-source server software and as a cloud service.
status: active
maintainer: ClickHouse, Inc.
maintainerType: company
firstRelease: 2016
language: cpp
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
runsAs:
  - always-on
  - local
installMethod: curl-install-script
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2026-10-24
githubStargazers: 50653
contributors: 311
social:
  x: https://x.com/ClickHouseDB
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://clickhouse.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/ClickHouse/ClickHouse
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/ClickHouse/ClickHouse/blob/master/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://clickhouse.com/pricing
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://clickhouse.com/company
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://clickhouse.com/company
    checkedAt: 2026-10-28
  - field: category
    url: https://clickhouse.com/docs/intro
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/ClickHouse/ClickHouse
    checkedAt: 2026-10-28
  - field: runtime
    url: https://clickhouse.com/docs/install
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://clickhouse.com/docs/install
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://clickhouse.com/docs/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/ClickHouse/ClickHouse/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://clickhouse.com/docs/install/docker
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://clickhouse.com/docs/install/debian_ubuntu
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://clickhouse.com/docs/install/redhat
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/ClickHouse/ClickHouse
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/ClickHouse/ClickHouse/blob/master/README.md
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/ClickHouse/ClickHouse/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ClickHouse/ClickHouse
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ClickHouse/ClickHouse/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://clickhouse.com/docs/intro
    checkedAt: 2026-10-28
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

ClickHouse is a column-oriented SQL database management system for online analytical processing. Its tables are stored as a collection of columns. It is written in C++, licensed under Apache-2.0 and maintained by ClickHouse, Inc., which also offers ClickHouse Cloud, built by its creators and maintainers.

The server runs as a long-running process on the machine or cluster it is installed on. The install guide offers a curl script, Docker images, Debian and Ubuntu packages, and rpm packages. The script downloads a single binary that also runs on a developer's machine for local work.

## Worth knowing

The open-source server and ClickHouse Cloud are separate deployments of the same database. Cloud pricing lists single sign-on and multi-factor authentication on its tiers, and a JWT option on the Enterprise plan. The self-managed server documents LDAP authentication, and the cloud features are not part of that server. The company's own timeline puts the open-source release in 2016.
