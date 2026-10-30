---
id: scylladb
name: ScyllaDB
urls:
  home: https://www.scylladb.com
  repository: https://github.com/scylladb/scylladb
  docs: https://docs.scylladb.com
  pricing: https://www.scylladb.com/pricing/
category:
  - database
description: NoSQL database, API-compatible with Apache Cassandra and Amazon DynamoDB, written in C++.
status: active
maintainer: ScyllaDB Ltd.
maintainerType: company
firstRelease: 2015
hqCountry: IL
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: web installer script (curl)
licenseModel: source-available
license: ScyllaDB Software License Agreement 1.1
latestReleaseDate: 2026-10-15
githubStargazers: 15814
contributors: 187
social:
  x: https://twitter.com/ScyllaDB
  bluesky: https://bsky.app/profile/scylladb.com
  forum: https://forum.scylladb.com/
  youtube: https://www.youtube.com/channel/UC7fDHfQDRiQ9Nn0tFf33jeQ
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.scylladb.com
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/scylladb/scylladb
    checkedAt: 2026-10-30
  - field: urls
    url: https://docs.scylladb.com
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.scylladb.com/privacy/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.scylladb.com/privacy/
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://www.scylladb.com/company/
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/scylladb/scylladb/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/scylladb/scylladb
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/scylladb/scylladb/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/scylladb/scylladb/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.scylladb.com/manual/stable/getting-started/installation-common/scylla-web-installer.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.scylladb.com/manual/stable/getting-started/install-scylla/install-on-linux.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.scylladb.com/manual/stable/getting-started/installation-common/unified-installer.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.scylladb.com/manual/stable/getting-started/install-scylla/run-in-docker.html
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/scylladb/scylladb/blob/scylla-2026.3.4/LICENSE-ScyllaDB-Source-Available.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/scylladb/scylladb/blob/scylla-2026.3.4/LICENSE-ScyllaDB-Source-Available.md
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/scylladb/scylladb/tree/scylla-2026.3.4
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/scylladb/scylladb
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/scylladb/scylladb/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.scylladb.com/pricing/
    checkedAt: 2026-10-30
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

ScyllaDB is a database written in C++ that is API-compatible with Apache Cassandra and Amazon DynamoDB. The [repository](https://github.com/scylladb/scylladb) README starts the server with a single command, and the DynamoDB-compatible API, called Alternator, must be enabled before it is served.

Installation offers a curl-based web installer, Linux packages, an installer that runs without root privileges, and a Docker image; the [Linux install guide](https://docs.scylladb.com/manual/stable/getting-started/install-scylla/install-on-linux.html) describes each route. ScyllaDB Ltd. maintains the project. Alongside the server code, the company offers an Enterprise edition with premium features and dedicated support, and ScyllaDB X Cloud, a managed service on AWS and GCP. The docs include a migration procedure for moving from Apache Cassandra.

## Worth knowing

The source is published under the ScyllaDB Software License Agreement, which grants its license only to Never Customers: organizations with no paid commercial relationship with ScyllaDB in the previous twelve months. Releases before that agreement carried the AGPL-3.0 license.
