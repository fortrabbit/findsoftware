---
id: jpegoptim
name: jpegoptim
urls:
  home: https://www.kokkonen.net/tjko/projects.html
  repository: https://github.com/tjko/jpegoptim
  docs: https://github.com/tjko/jpegoptim/blob/main/jpegoptim.1
category:
  - build-tool
  - media
description: Command-line utility that optimizes and compresses JPEG files with lossless Huffman table optimization and optional lossy quality limits.
status: active
maintainer: Timo Kokkonen
maintainerType: individual
firstRelease: 2022
language: c
runtime:
  - binary
runsAs:
  - local
installMethod: source build with ./configure, make and make install
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "1"
latestReleaseDate: 2025-09-15
githubStargazers: 1827
contributors: 22
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.kokkonen.net/tjko/projects.html
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/tjko/jpegoptim
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/tjko/jpegoptim/main/jpegoptim.1
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/tjko/jpegoptim/main/COPYRIGHT
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/tjko/jpegoptim
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/tjko/jpegoptim/main/jpegoptim.1
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/tjko/jpegoptim/blob/main/README
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tjko/jpegoptim/blob/main/README
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/tjko/jpegoptim/main/jpegoptim.1
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/tjko/jpegoptim/main/COPYRIGHT
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/tjko/jpegoptim/main/COPYRIGHT
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/tjko/jpegoptim/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/tjko/jpegoptim/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/tjko/jpegoptim/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/tjko/jpegoptim
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/tjko/jpegoptim/contributors
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

jpegoptim is a command-line program that optimizes JPEG files. Its lossless mode optimizes the Huffman tables of a file, and its lossy mode sets an upper limit on image quality. The [man page](https://raw.githubusercontent.com/tjko/jpegoptim/main/jpegoptim.1) lists the options for each.

By default the program modifies an input file when it is optimized, and the -d option writes the optimized files to another directory instead. Source archives are built with ./configure and make, and the build needs the libjpeg library, which the README lists as version 6b or later.

## Worth knowing

The project has no site of its own. Its description and source archives sit on the maintainer's personal project page, and the source is also on GitHub.
