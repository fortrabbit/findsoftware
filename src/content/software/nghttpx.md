---
id: nghttpx
name: nghttpx
urls:
  home: https://nghttp2.org
  repository: https://github.com/nghttp2/nghttp2
  docs: https://nghttp2.org/documentation/nghttpx.1.html
category:
  - web-server
description: Reverse proxy for HTTP/3, HTTP/2 and HTTP/1 that ships in the nghttp2 project.
status: active
maintainer: Tatsuhiro Tsujikawa
maintainerType: individual
firstRelease: 2013
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: build from source
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-29
githubStargazers: 5074
contributors: 144
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://nghttp2.org/documentation/nghttpx.1.html
    checkedAt: 2026-10-30
  - field: urls
    url: https://nghttp2.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/nghttp2/nghttp2
    checkedAt: 2026-10-30
  - field: urls
    url: https://nghttp2.org/documentation/nghttpx.1.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/COPYING
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/COPYING
    checkedAt: 2026-10-30
  - field: category
    url: https://nghttp2.org/documentation/nghttpx.1.html
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/nghttp2/nghttp2
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/README.rst
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/README.rst
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/README.rst
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/README.rst
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/nghttp2/nghttp2/releases
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/nghttp2/nghttp2/releases
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/nghttp2/nghttp2/releases
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/nghttp2/nghttp2
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/nghttp2/nghttp2/master/COPYING
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/nghttp2/nghttp2
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/nghttp2/nghttp2/contributors?per_page=1
    checkedAt: 2026-10-30
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

nghttpx is a reverse proxy for HTTP/3, HTTP/2 and HTTP/1 that ships in the nghttp2 project alongside the nghttp2 library. The [man page](https://nghttp2.org/documentation/nghttpx.1.html) describes its options, and the repository's README explains how to build the application programs from source or from a release tar archive.

## Worth knowing

nghttpx is a long-running server program, so the host has to keep a process running for it. The README advises jemalloc for long-running server programs to limit heap fragmentation.
