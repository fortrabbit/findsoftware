---
id: flyimg
name: Flyimg
urls:
  home: https://flyimg.io
  repository: https://github.com/flyimg/flyimg
  docs: https://docs.flyimg.io
category:
  - media
description: Dockerized image server that resizes, crops and converts images on the fly from URL options, with caching.
status: active
maintainer: Sadok Ferjani
firstRelease: 2017
language: php
runtime:
  - php
hosting:
  - php
runsAs:
  - always-on
installMethod: docker-image
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-11-03
githubStargazers: 1233
contributors: 20
social:
  x: https://twitter.com/flyimg_
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://flyimg.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/flyimg/flyimg
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/flyimg/flyimg/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/flyimg/flyimg/1.12.13/composer.json
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/flyimg/flyimg
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.flyimg.io/install/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/flyimg/flyimg/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://docs.flyimg.io/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.flyimg.io/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/flyimg/flyimg/releases/tag/1.12.13
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/flyimg/flyimg/releases/tag/1.12.13
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/flyimg/flyimg/releases/tag/1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/flyimg/flyimg
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/flyimg/flyimg/contributors
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.flyimg.io/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flyimg.io/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flyimg.io/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flyimg.io/helm-chart/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.flyimg.io/install/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Flyimg is a Dockerized image server that fetches an image from a URL, resizes, crops and converts it, caches the result and serves it. Options go in the request path before the source image URL, so a page can point its img tags at the server, and the output is written to local storage or to an S3 bucket. The container runs PHP under nginx and php-fpm, which the [install guide](https://docs.flyimg.io/install/) describes as two processes started together. The project publishes a Docker image, a source build and a [Helm chart](https://docs.flyimg.io/helm-chart/) for Kubernetes, and it also offers a fully managed service under the same name.

## Worth knowing

The server is a long-running container, not static files. Image processing uses ImageMagick, and the output formats include AVIF, WebP, MozJPEG, PNG, GIF and JPEG XL. The docs describe domain restrictions for image sources and signed, encrypted URLs.
