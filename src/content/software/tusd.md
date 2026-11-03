---
id: tusd
name: tusd
urls:
  home: https://tus.github.io/tusd/
  repository: https://github.com/tus/tusd
  docs: https://tus.github.io/tusd/
category:
  - media
description: Reference Go server for tus, an open HTTP protocol for resumable file uploads, which tus-compatible clients upload to.
status: active
maintainer: Transloadit Ltd
maintainerType: company
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: pre-built binary download
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-16
githubStargazers: 3915
contributors: 95
social:
  forum: https://community.transloadit.com/c/tus/6
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://tus.github.io/tusd/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/tus/tusd
    checkedAt: 2026-11-03
  - field: urls
    url: https://tus.github.io/tusd/getting-started/usage/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/tus/tusd/blob/main/LICENSE.txt
    checkedAt: 2026-11-03
  - field: category
    url: https://tus.github.io/tusd/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/tus/tusd
    checkedAt: 2026-11-03
  - field: runtime
    url: https://tus.github.io/tusd/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/tus/tusd
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/tus/tusd/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/tus/tusd/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/tus/tusd/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/tus/tusd
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/tus/tusd/graphs/contributors
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tus.github.io/tusd/getting-started/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tus.github.io/tusd/getting-started/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tus.github.io/tusd/getting-started/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tus.github.io/tusd/getting-started/installation/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://tus.github.io/tusd/getting-started/usage/
    checkedAt: 2026-11-03
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

tusd is the reference server for tus, an open protocol for resumable file uploads over HTTP. It is written in Go and ships as a single binary, which the [installation guide](https://tus.github.io/tusd/getting-started/installation/) offers as a download, as a Docker image, as a build from a git clone, or as a Helm chart on Kubernetes. Uploaded files go to local disk or to Amazon S3, Azure Blob Storage or Google Cloud Storage, and tus-compatible clients send their uploads to it.

## Worth knowing

tusd runs as a long-lived server process, so a site that uses it needs a host that keeps that process running. Its hooks can call a script, an HTTP endpoint or a gRPC service. The client libraries that connect to tusd are separate projects.
