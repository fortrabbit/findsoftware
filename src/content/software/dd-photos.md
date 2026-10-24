---
id: dd-photos
name: DD Photos
urls:
  home: https://ddphotos.donohoe.info
  repository: https://github.com/dougdonohoe/ddphotos
  docs: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
category:
  - media
  - ssg
description: Static photo album site generator that turns folders of photos and videos into a self-hosted gallery website.
status: active
maintainer: Doug and Cindy Donohoe
maintainerType: individual
firstRelease: 2026
language: go
runtime:
  - binary
  - node
hosting:
  - static
contentStore:
  - flat-file
templating: svelte
runsAs:
  - static
renderingModes:
  - static
installMethod: docker
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-21
githubStargazers: 179
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://ddphotos.donohoe.info/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/dougdonohoe/ddphotos
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://ddphotos.donohoe.info/
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://ddphotos.donohoe.info/
    checkedAt: 2026-10-23
  - field: description
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/dougdonohoe/ddphotos/license
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/dougdonohoe/ddphotos/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/dougdonohoe/ddphotos/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/dougdonohoe/ddphotos/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/dougdonohoe/ddphotos/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/dougdonohoe/ddphotos
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/dougdonohoe/ddphotos/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

DD Photos is a static photo album site generator. Each folder of photos and videos becomes an album, and the `photogen` tool resizes the images to WebP and writes the JSON index files that the site reads. The site is a SvelteKit app built ahead of time, so the output is pre-built files served directly by a web server. The browser fetches photo data from the JSON indexes, and password-protected albums are decrypted in the browser.

Albums can also be synced from Immich or PhotoPrism before a build. The [deployment guide](https://github.com/dougdonohoe/ddphotos/blob/main/docs/DEPLOY.md) lists an export for static hosts, rsync to Apache or nginx, and S3 with CloudFront.

## Worth knowing

The README names the companion desktop app, a separate repository, as the easiest way to run the project. The developer setup needs Go, Node.js and libvips.
