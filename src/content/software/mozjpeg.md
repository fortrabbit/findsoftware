---
id: mozjpeg
name: MozJPEG
urls:
  repository: https://github.com/mozilla/mozjpeg
category:
  - media
  - build-tool
description: JPEG encoder that patches libjpeg-turbo to produce smaller JPEG files at the same visual quality, usable as a drop-in libjpeg library.
status: stub
maintainer: Mozilla
firstRelease: 2014
language: c
installMethod: CMake build from source, the same as libjpeg-turbo
licenseModel: open-source
license: IJG, Zlib, BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2022-08-15
githubStargazers: 5739
contributors: 77
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/mozilla/mozjpeg
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/mozilla/mozjpeg/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/mozilla/mozjpeg/releases
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/mozilla/mozjpeg
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/mozilla/mozjpeg/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/mozilla/mozjpeg/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/mozilla/mozjpeg/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/mozilla/mozjpeg/blob/master/BUILDING.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/mozilla/mozjpeg/blob/v4.1.1/LICENSE.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/mozilla/mozjpeg/blob/v4.1.1/LICENSE.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/mozilla/mozjpeg/blob/v4.1.1/LICENSE.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/mozilla/mozjpeg/blob/v4.1.1/LICENSE.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/mozilla/mozjpeg/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/mozilla/mozjpeg/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/mozilla/mozjpeg
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/mozilla/mozjpeg/contributors?per_page=1
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

MozJPEG is a C library that patches libjpeg-turbo to encode JPEG files at smaller sizes for the same visual quality. It keeps the libjpeg API, so it can take the place of libjpeg in a program that uses that API. The project aims at graphics programs and image processing tools, which call the library; a cjpeg command-line tool is included as a demonstration. The source is built with CMake in the same way as libjpeg-turbo, and Windows builds can use vcpkg. The project is maintained by Mozilla on GitHub.
