---
id: litestream
name: Litestream
urls:
  home: https://litestream.io
  repository: https://github.com/benbjohnson/litestream
  docs: https://litestream.io/getting-started/
category:
  - database
description: Streaming replication tool for SQLite that continuously copies write-ahead log changes to object storage or local files.
status: active
maintainer: benbjohnson
maintainerType: individual
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
runsAs:
  - always-on
installMethod: prebuilt binary download
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-08-31
githubStargazers: 14550
contributors: 42
social:
  x: https://twitter.com/litestreamio
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://litestream.io/
    checkedAt: 2026-10-29
  - field: urls
    url: https://litestream.io/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/benbjohnson/litestream
    checkedAt: 2026-10-29
  - field: urls
    url: https://litestream.io/getting-started/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://api.github.com/users/benbjohnson
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://api.github.com/users/benbjohnson
    checkedAt: 2026-10-29
  - field: category
    url: https://litestream.io/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/benbjohnson/litestream
    checkedAt: 2026-10-29
  - field: runtime
    url: https://litestream.io/install/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/benbjohnson/litestream/releases/tag/v0.5.17
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/benbjohnson/litestream/releases
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/benbjohnson/litestream/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/benbjohnson/litestream/blob/v0.5.17/LICENSE
    checkedAt: 2026-10-29
  - field: databases
    url: https://litestream.io/tips/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://litestream.io/install/linux/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://litestream.io/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://litestream.io/install/linux/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://litestream.io/install/linux/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://litestream.io/install/mac/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://litestream.io/guides/docker/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://litestream.io/install/source/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/benbjohnson/litestream
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/benbjohnson/litestream/contributors?per_page=1&anon=false
    checkedAt: 2026-10-29
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

Litestream is a replication tool for SQLite, written in Go and distributed as a compiled binary. It continuously streams SQLite changes to cloud storage or to local files, so a database on one server can have a replica somewhere else.

It runs as a separate background process next to the application that owns the database, so the application needs no code changes. The install docs describe prebuilt binaries, Debian and RPM packages, a Homebrew tap, a Docker image and a build from source with the Go toolchain.

## Worth knowing

Litestream only works with SQLite's write-ahead log (WAL) journal mode. The [tips page](https://litestream.io/tips/) also asks the application to set a busy timeout, because Litestream takes short write locks while it checkpoints.
