---
id: lust
name: lust
urls:
  repository: https://github.com/ChillFish8/lust
  docs: https://github.com/ChillFish8/lust/blob/master/description.md
category:
  - media
description: Auto-optimising image server that re-encodes uploaded images into several formats and serves resized variants over HTTP.
status: stub
maintainer: Harrison Burt
maintainerType: individual
firstRelease: 2021
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2022-04-03
githubStargazers: 435
contributors: 5
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/ChillFish8/lust
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ChillFish8/lust/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ChillFish8/lust/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/ChillFish8/lust/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/ChillFish8/lust/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ChillFish8/lust
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/ChillFish8/lust/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ChillFish8/lust/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ChillFish8/lust/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ChillFish8/lust/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/ChillFish8/lust/blob/master/description.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ChillFish8/lust/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/ChillFish8/lust/releases/tag/2.1.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ChillFish8/lust/releases/tag/2.1.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ChillFish8/lust/releases/tag/0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ChillFish8/lust
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/ChillFish8/lust/graphs/contributors
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

lust is an image server. It re-encodes uploaded images into png, jpeg, webp or gif, creates the sizes (presets) set in a configuration file, and serves the variants over HTTP. A request picks a variant with a size query parameter. The storage backend is a file system, ScyllaDB or an S3-compatible blob store.

It is installed from a Docker image, through cargo install from the repository, or built from source with cargo. The server also serves its OpenAPI documentation at a UI endpoint.

## Worth knowing

The README says the file system backend is designed for testing and points to ScyllaDB or a blob store for full-scale deployment. The in-memory cache holds more images as its size setting grows, and the README warns that bigger images can raise RAM use.
