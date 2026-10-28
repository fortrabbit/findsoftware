---
id: couchdb
name: Apache CouchDB
urls:
  home: https://couchdb.apache.org
  repository: https://github.com/apache/couchdb
  docs: https://docs.couchdb.org/en/stable/
category:
  - database
description: Database server with multi-primary replication, an HTTP/JSON API and a built-in web administration console, written in Erlang.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2008
hqCountry: US
language: erlang
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 26
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker (apache/couchdb)
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-12
githubStargazers: 6993
contributors: 198
social:
  x: https://twitter.com/CouchDB
  mastodon: https://fosstodon.org/@couchdb
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://couchdb.apache.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/apache/couchdb
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.couchdb.org/en/stable/intro/index.html
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/apache/couchdb/tags
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://couchdb.apache.org/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: category
    url: https://docs.couchdb.org/en/stable/intro/index.html
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/apache/couchdb
    checkedAt: 2026-10-28
  - field: runtime
    url: https://couchdb.apache.org/downloads.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchdb.org/en/stable/install/docker.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchdb.org/en/stable/install/unix.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchdb.org/en/stable/install/windows.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchdb.org/en/stable/install/kubernetes.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.couchdb.org/en/stable/install/unix.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.couchdb.org/en/stable/install/unix.html
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://couchdb.apache.org/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://couchdb.apache.org/downloads.html
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://couchdb.apache.org/downloads.html
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/apache/couchdb
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://couchdb.apache.org/
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/apache/couchdb
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/apache/couchdb/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://docs.couchdb.org/en/stable/install/unix.html
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://couchdb.apache.org/
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

Apache CouchDB is a database server that stores JSON documents and is reached over HTTP. It replicates data between servers and between clients. The project describes its replication protocol as the foundation for offline-first applications, and PouchDB, a separate project built for mobile devices and browsers, replicates with it. A single node is the usual starting point, and a cluster runs one logical database across several servers or VMs.

Installation options are Docker, Debian and RPM packages, a Windows installer, a Helm chart for Kubernetes and a source build. The installation guide asks the reader to start CouchDB at system boot through an init subsystem, so it runs as an always-on service. The web administration console, Fauxton, ships with the server.

The Apache Software Foundation maintains the project under the Apache License 2.0.

## Worth knowing

The configuration reference describes cookie, proxy and JWT authentication. The source build lists Erlang OTP, ICU, OpenSSL and Mozilla SpiderMonkey among its dependencies.
