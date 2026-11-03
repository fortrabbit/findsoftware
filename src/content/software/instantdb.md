---
id: instantdb
name: Instant
urls:
  home: https://www.instantdb.com
  repository: https://github.com/instantdb/instant
  docs: https://www.instantdb.com/docs
category:
  - backend
description: Open-source backend for web and mobile apps with a client-side, real-time database, auth, permissions, storage and streams.
status: active
maintainer: Instant
firstRelease: 2023
language: javascript
runtime:
  - jvm
hosting:
  - java
contentStore:
  - database
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-08-31
githubStargazers: 10564
npmWeeklyDownloads: 376964
contributors: 58
social:
  x: https://twitter.com/instant_db
  discord: https://discord.com/invite/VU53p7uQcE
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.instantdb.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/instantdb/instant
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.instantdb.com/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.instantdb.com
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/instantdb/instant
    checkedAt: 2026-11-03
  - field: category
    url: https://www.instantdb.com
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/instantdb/instant
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.instantdb.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://github.com/instantdb/instant/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/instantdb/instant/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.instantdb.com/docs/self-hosting/vps
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.instantdb.com/docs/start-vanilla
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.instantdb.com/docs/self-hosting/aws
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.instantdb.com/docs/self-hosting/aws
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.instantdb.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://registry.npmjs.org/@instantdb/core
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://registry.npmjs.org/@instantdb/core
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@instantdb/core
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/instantdb/instant
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/instantdb/instant/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/@instantdb/core
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Instant is an open-source backend for web and mobile apps. Its client SDKs, installed from npm, read and write a relational data model through queries that update as the data changes, so other clients see a change in real time and an app keeps working offline. Auth, permissions, file storage, presence and streams are part of the same service.

The server is a sync server written in Clojure that runs on the JVM. It keeps user data as triples in one PostgreSQL database and watches the database's write-ahead log to decide which queries to refresh. The [self-hosting guide](https://www.instantdb.com/docs/self-hosting) describes a docker compose setup that runs Instant beside PostgreSQL, MinIO for files and Caddy as the reverse proxy, and it asks for an email provider so that login codes reach users.

## Worth knowing

Instant Cloud, the hosted service, no longer accepts new signups and is scheduled to shut down. The project states that all of Instant is open source and publishes a migration guide for moving a cloud app to a self-hosted instance. Until an email provider is configured, login codes are written to the backend logs.
