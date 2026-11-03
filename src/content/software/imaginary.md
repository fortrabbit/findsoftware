---
id: imaginary
name: imaginary
urls:
  repository: https://github.com/h2non/imaginary
category:
  - media
description: HTTP service written in Go that resizes, crops and converts images with libvips.
status: stub
maintainer: Tomas Aparicio
maintainerType: individual
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-08-12
githubStargazers: 6091
contributors: 52
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/h2non/imaginary
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/h2non/imaginary/master/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/h2non/imaginary
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/h2non/imaginary/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/h2non/imaginary/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/h2non/imaginary/releases/tag/v1.2.4
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/h2non/imaginary/releases/tag/v1.2.4
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/h2non/imaginary/tree/0.1.0-rc.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/h2non/imaginary
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/h2non/imaginary
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

imaginary is an HTTP service that performs image operations on the requests it receives: resize, crop, rotate, watermark, format conversion and more, as listed in the [README](https://github.com/h2non/imaginary). It calls libvips through a Go binding. The README gives install routes for the Go source with `go get`, the official Docker image with a Compose example, which bundles libvips, and deployments to Fly.io, Cloud Foundry and Google Cloud Run. Images can arrive in the POST body, from a local directory mounted into the container, or from a remote URL when the server starts with the URL source flag. Optional controls are an API key, URL signatures, a request throttle and CORS support. Tomas Aparicio is named as the original author and maintainer.

## Worth knowing

The newest tagged release is older than the default branch, which has commits after it. The source install needs libvips installed separately, and the README offers a preinstall script for that. The Docker image is the route that needs no separate libvips setup.
