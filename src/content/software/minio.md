---
id: minio
name: MinIO
urls:
  home: https://www.min.io/
  repository: https://github.com/minio/minio
  docs: https://docs.min.io/community/minio-object-store/index.html
category:
  - database
description: S3-compatible object storage server written in Go.
status: discontinued
maintainer: MinIO, Inc.
maintainerType: company
firstRelease: 2016
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: go install from source
licenseModel: open-source
license: AGPL-3.0
latestReleaseDate: 2025-10-16
githubStargazers: 61295
contributors: 410
social:
  x: https://x.com/Minio
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: status
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.min.io/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/minio/minio
    checkedAt: 2026-10-30
  - field: urls
    url: https://docs.min.io/community/minio-object-store/index.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/minio/minio/blob/master/NOTICE
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.min.io/
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/minio/minio
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/minio/minio/blob/master/README.md
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/minio/minio/releases/tag/RELEASE.2025-10-15T17-29-55Z
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/minio/minio/releases/tag/OFFICIAL.2016-02-08T00-12-28Z
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/minio/minio
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/minio/minio/contributors?per_page=1
    checkedAt: 2026-10-30
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

MinIO is an object storage server with an S3-compatible API, written in Go. The community source builds with the Go toolchain or from the Dockerfile in its repository, and the README starts the server with a command that takes an empty folder as its path. The server includes an embedded web browser for buckets and objects. The README also covers installing it on bare-metal hardware, and it names the community Helm chart and the MinIO Operator for Kubernetes.

## Worth knowing

The [repository](https://github.com/minio/minio) is archived, and its README says it is no longer maintained. The README names two editions of the company's AIStor product as alternatives. The community source is distributed without pre-compiled binaries, and the README says earlier binaries will not receive updates. The README says usage in an application stack requires validation against AGPLv3 obligations.
