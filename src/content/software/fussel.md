---
id: fussel
name: Fussel
urls:
  repository: https://github.com/cbenning/fussel
  docs: https://github.com/cbenning/fussel/blob/main/README.md
category:
  - ssg
description: Static photo gallery generator that builds a gallery site from a directory of photos, with one album per subfolder.
status: active
maintainer: Christopher Benninger
maintainerType: individual
firstRelease: 2020
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.10
runsAs:
  - static
renderingModes:
  - static
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-08
githubStargazers: 313
contributors: 9
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/cbenning/fussel
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/cbenning/fussel/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/cbenning/fussel
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/cbenning/fussel
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/cbenning/fussel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/cbenning/fussel/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/cbenning/fussel/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/cbenning/fussel/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/cbenning/fussel
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/cbenning/fussel/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Fussel reads a directory of photos and writes a photo gallery site from it. The gallery shows EXIF information for each photo and the generator reads XMP face tags. The gallery frontend is written in React and built with Vite. The output is static files that need no server-side code, so the finished gallery can be served by any web space. The generator runs from a git clone with make, or from the published Docker image, and the [quick start](https://github.com/cbenning/fussel/blob/main/README.md) covers both.
