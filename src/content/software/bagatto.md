---
id: bagatto
name: Bagatto
urls:
  home: https://bagatto.co
  repository: https://git.sr.ht/~subsetpark/bagatto
  docs: https://bagatto.co/manual
category:
  - ssg
description: Static site generator in which each site is a Janet program that declares its data and its output files.
status: active
maintainer: Z. D. Smith
firstRelease: 2020
language: other
hosting:
  - static
contentStore:
  - flat-file
templating: temple
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: jpm, cloned from the git repository
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-08-02
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://bagatto.co/
    checkedAt: 2026-10-23
  - field: urls
    url: https://git.sr.ht/~subsetpark/bagatto
    checkedAt: 2026-10-23
  - field: urls
    url: https://bagatto.co/manual
    checkedAt: 2026-10-23
  - field: category
    url: https://bagatto.co/
    checkedAt: 2026-10-23
  - field: language
    url: https://bagatto.co/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://bagatto.co/getting
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://bagatto.co/getting
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://bagatto.co/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://bagatto.co/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://bagatto.co/manual
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://git.sr.ht/~subsetpark/bagatto/blob/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://git.sr.ht/~subsetpark/bagatto/refs/rss.xml
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://git.sr.ht/~subsetpark/bagatto/refs/rss.xml
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://git.sr.ht/~subsetpark/bagatto/refs/rss.xml
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bagatto is a static site generator in which a site is an ordinary Janet module. The module holds a data specification, which loads source files such as Markdown articles and JSON configuration files, and a site specification, which lists each output file with its path and contents. Pages are rendered with the Temple template system. Running `bag index.janet` on the module writes the files, and the [manual](https://bagatto.co/manual) describes its two phases, the data phase and the site phase.

## Worth knowing

The pre-compiled build offered on the [getting page](https://bagatto.co/getting) is labeled experimental. The other install routes there and in the README build from the Janet package manager or the Arch Linux AUR package.
