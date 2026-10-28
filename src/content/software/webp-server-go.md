---
id: webp-server-go
name: WebP Server Go
urls:
  home: https://webp.sh/
  repository: https://github.com/webp-sh/webp_server_go
  docs: https://docs.webp.sh/
category:
  - media
description: Go server that serves JPEG, PNG and other images as WebP or AVIF on the fly, at the URL of the original image, placed behind a web server or CDN.
status: active
maintainer: WebP Cloud Services
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: GPL-3.0, GPLv3
currentMajor: "0"
latestReleaseDate: 2026-10-06
githubStargazers: 2006
contributors: 15
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://webp.sh/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/webp-sh/webp_server_go
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/webp-sh/webp_server_go/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/webp-sh/webp_server_go/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://webp.se/about/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/webp-sh/webp_server_go
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/webp-sh/webp_server_go/0.16.2/go.mod
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.webp.sh/deployment/binary/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/webp-sh/webp_server_go/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.webp.sh/deployment/binary/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/webp-sh/webp_server_go
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/webp-sh/webp_server_go/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/webp-sh/webp_server_go/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/webp-sh/webp_server_go/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/webp-sh/webp_server_go/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/webp-sh/webp_server_go
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/webp-sh/webp_server_go/contributors
    checkedAt: 2026-10-28
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

WebP Server Go is a Go server that converts images on request. It reads JPEG, PNG, BMP, GIF, SVG, HEIC, NEF and WebP files from a directory and returns them as WebP, AVIF or JXL, under the URL of the original image, so the image links on a site stay the same. A reverse proxy such as Nginx or Caddy sits in front of it for public traffic.

Converted outputs are cached in a separate `exhaust` directory and source metadata in a `metadata` directory, and the project's quick start mounts all three into a container. The server is started with Docker Compose or as a binary.

## Worth knowing

Docker is the route the README recommends, because the binary needs libvips and can run into `glibc` and dependency problems. The binary page also reports a potential memory leak that the project has not resolved. The team behind the project also runs WebP Cloud, a hosted image service on webp.se.
