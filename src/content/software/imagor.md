---
id: imagor
name: imagor
urls:
  home: https://docs.imagor.net
  repository: https://github.com/cshum/imagor
  docs: https://docs.imagor.net
category:
  - media
description: Image processing server and Go library that resizes, crops and filters images with libvips, using the thumbor URL syntax.
status: active
maintainer: Adrian C. Shum
maintainerType: individual
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-24
githubStargazers: 4056
contributors: 40
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docs.imagor.net/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.imagor.net/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/cshum/imagor
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.imagor.net/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/cshum/imagor
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/cshum/imagor/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/cshum/imagor/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cshum/imagor/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/cshum/imagor/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/cshum/imagor/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/cshum/imagor/releases/tag/v1.9.14
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/cshum/imagor/releases/tag/v1.9.14
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/cshum/imagor/tree/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/cshum/imagor
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/cshum/imagor
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

imagor is an image processing server and Go library that uses libvips. The [docs](https://docs.imagor.net) describe it as an HTTP server with Docker support, and the quick start runs the published Docker image. Images are requested by URL. imagor adopts the URL syntax of thumbor, and the README presents it as a drop-in replacement for thumbor. Sources can be local files, object storage such as AWS S3 or Google Cloud Storage, or an HTTP origin. The [security page](https://docs.imagor.net/security/) explains URL signing: with a secret set, every request URL must carry a valid HMAC signature, and an expiry filter can give a signed URL a hard end time. Adrian C. Shum maintains the project.

## Worth knowing

The docs present commercial support and consulting as optional, and state that imagor itself remains open source. Imagor Studio appears in the same ecosystem as a separate self-hosted product, and the project's pages do not describe it as an edition of imagor.
