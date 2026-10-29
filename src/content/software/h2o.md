---
id: h2o
name: H2O
urls:
  home: https://h2o.examp1e.net
  repository: https://github.com/h2o/h2o
  docs: https://h2o.examp1e.net/configure.html
category:
  - web-server
description: Optimized HTTP/1.x, HTTP/2 and HTTP/3 web server written in C.
status: stub
maintainer: DeNA Co., Ltd.
maintainerType: company
firstRelease: 2015
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: build-from-source-cmake
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2019-08-13
githubStargazers: 11559
contributors: 140
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://h2o.examp1e.net
    checkedAt: 2026-10-29
  - field: urls
    url: https://h2o.examp1e.net
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/h2o/h2o
    checkedAt: 2026-10-29
  - field: urls
    url: https://h2o.examp1e.net/configure.html
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/h2o/h2o/master/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/h2o/h2o/master/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://h2o.examp1e.net
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/h2o/h2o
    checkedAt: 2026-10-29
  - field: runtime
    url: https://h2o.examp1e.net/install.html
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://h2o.examp1e.net/install.html
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://h2o.examp1e.net/faq.html
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://h2o.examp1e.net/install.html
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/h2o/h2o/master/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/h2o/h2o/master/LICENSE
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/h2o/h2o/releases
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/h2o/h2o/releases/tag/v2.2.6
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/h2o/h2o/releases/tag/v2.2.6
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/h2o/h2o
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/h2o/h2o/contributors
    checkedAt: 2026-10-29
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

H2O is an HTTP server written in C that serves HTTP/1.x, HTTP/2 and HTTP/3. It is built from source with CMake, or as a library, and the [install guide](https://h2o.examp1e.net/install.html) says the server runs as a foreground process unless it is started with the -m option. Scripting with mruby is an optional build feature.

## Worth knowing

The install guide says the project has ceased to release versions, so a build comes from the master branch rather than from a tagged release. The record stays a stub until it is settled whether a project that ships from master counts as released.
