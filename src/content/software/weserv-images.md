---
id: weserv-images
name: wsrv.nl
urls:
  home: https://wsrv.nl
  repository: https://github.com/weserv/images
  docs: https://wsrv.nl/docs/
category:
  - media
description: Self-hostable image cache and resize service that processes images from URL parameters, built on nginx and libvips.
status: active
maintainer: Andries Louw Wolthuizen and Kleis Auke Wolthuizen
maintainerType: individual
firstRelease: 2007
language: cpp
runsAs:
  - always-on
installMethod: docker image ghcr.io/weserv/images
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "5"
latestReleaseDate: 2026-11-01
githubStargazers: 2855
contributors: 5
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://wsrv.nl/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/weserv/images
    checkedAt: 2026-11-03
  - field: urls
    url: https://wsrv.nl/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/weserv/images/5.x/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://raw.githubusercontent.com/weserv/images/5.x/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/weserv/images
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/weserv/images/blob/5.x/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/weserv/images/blob/5.x/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/weserv/images/blob/5.x/docker/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/weserv/images/blob/5.x/docker/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/weserv/images
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/weserv/images/5.x/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/weserv/images/git/refs/tags/v5.1.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/weserv/images/commits/v5.1.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://raw.githubusercontent.com/weserv/images/5.x/CHANGELOG.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/weserv/images
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/weserv/images/contributors?per_page=1
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

wsrv.nl is an image service. It takes an image URL and parameters in the query, fetches the image, resizes or converts it with libvips and serves the result through nginx with a cache. The repository holds the code of the public service at wsrv.nl and is meant for running on a server of one's own. The [Docker guide](https://github.com/weserv/images/blob/5.x/docker/README.md) describes pulling the image from the GitHub Container Registry or building the container from the repository, after which the server answers on a local port.

Requests take parameters for size, fit, crop, mask, orientation, adjustment and output format, as the [documentation](https://wsrv.nl/docs/) lists them. Images are cached on the server and in a CDN, and the browser cache lifetime is a parameter as well.

## Worth knowing

The public service is free and filters some origin domains, and it limits uncached requests per visitor address. The FAQ says the code can run on a server of one's own without those limits. The server depends on libvips and nginx.
