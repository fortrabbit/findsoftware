---
id: seaweedfs
name: SeaweedFS
urls:
  repository: https://github.com/seaweedfs/seaweedfs
  docs: https://github.com/seaweedfs/seaweedfs/wiki
  pricing: https://seaweedfs.com/docs/pricing/
category:
  - database
description: Distributed file system and S3-compatible object store, written in Go, shipped as one weed binary.
status: active
maintainer: Seaweed Data
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: binary download from GitHub releases
licenseModel: open-core
license: Apache-2.0, SeaweedFS Enterprise Edition End User License Agreement
currentMajor: "4"
latestReleaseDate: 2026-10-25
githubStargazers: 35828
contributors: 399
social:
  x: https://twitter.com/SeaweedFS
  subreddit: https://www.reddit.com/r/SeaweedFS/
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/seaweedfs/seaweedfs
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/seaweedfs/seaweedfs
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://seaweedfs.com/docs/eula/
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/seaweedfs/seaweedfs/releases/tag/v0.69
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/seaweedfs/seaweedfs
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://seaweedfs.com/docs/eula/
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://seaweedfs.com/docs/pricing/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/seaweedfs/seaweedfs/releases/tag/4.51
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/seaweedfs/seaweedfs/releases/tag/4.51
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/seaweedfs/seaweedfs
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/seaweedfs/seaweedfs/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/seaweedfs/seaweedfs/blob/master/README.md
    checkedAt: 2026-10-30
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

SeaweedFS is a distributed file system and object store written in Go. One `weed` binary serves an S3 object store, a POSIX file system and a lakehouse with S3 Tables, and the same process also runs the master, volume server, filer, WebDAV, the Iceberg REST catalog and the Admin UI. The [README](https://github.com/seaweedfs/seaweedfs) starts a one-node S3 endpoint with a single command, and it shows how to run the master, volume server, filer and S3 as separate services. The installation routes it lists are a release binary, an install script, a Docker image, Docker Compose, a Helm chart for Kubernetes and a build from source.

The filer keeps directory metadata in an external store such as MySQL, PostgreSQL, SQLite or MongoDB. The repository belongs to the seaweedfs organization on GitHub.

## Worth knowing

The open source code is licensed under Apache-2.0. Seaweed Data publishes SeaweedFS Enterprise Edition, which adds features such as data recovery, point-in-time recovery and customizable erasure coding, under a separate end user license agreement. The README compares the project with MinIO, which it describes as having ceased development.
