---
id: go-camo
name: go-camo
urls:
  repository: https://github.com/cactus/go-camo
category:
  - media
description: Image proxy server that fetches non-secure images over SSL/TLS for pages served over HTTPS and checks HMAC-signed image URLs.
status: active
maintainer: Eli Janssen
firstRelease: 2012
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: binary-download
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-23
githubStargazers: 314
contributors: 25
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/cactus/go-camo
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/cactus/go-camo/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/cactus/go-camo
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/cactus/go-camo
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/cactus/go-camo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/cactus/go-camo/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/cactus/go-camo/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/cactus/go-camo/commits/9a2206860ca4c0c7dad33e2f0eb4f690bd95e58d
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/cactus/go-camo
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/cactus/go-camo/contributors
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

go-camo is an image proxy for pages served over HTTPS. A web app rewrites each image URL and signs it with an HMAC. The proxy checks the signature, decodes the URL, fetches the image from its origin and streams it to the client, so the page does not load non-secure images directly.

It is a Go program that builds to a static binary. The README says it does not daemonize itself and recommends a process supervisor for production. Release binaries, a container image and a source build are the install routes it names. It accepts hex and base64 encoded URLs and supports optional allow and deny filters for origins.

## Worth knowing

The README recommends fronting go-camo with a CDN where possible. It also says the container images are untested, and that the binary releases are the preferred route unless a container is required.
