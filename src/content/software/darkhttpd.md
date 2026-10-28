---
id: darkhttpd
name: darkhttpd
urls:
  home: https://unix4lyfe.org/darkhttpd/
  repository: https://github.com/emikulic/darkhttpd
category:
  - web-server
description: Single-binary static web server written in C, run with a web root and no configuration file.
status: active
maintainer: Emil Mikulic
maintainerType: individual
firstRelease: 2021
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: make from source
licenseModel: open-source
license: ISC
currentMajor: "1"
latestReleaseDate: 2025-07-24
githubStargazers: 1351
contributors: 31
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/emikulic/darkhttpd
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: category
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/emikulic/darkhttpd
    checkedAt: 2026-10-28
  - field: runtime
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/emikulic/darkhttpd/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/emikulic/darkhttpd/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/emikulic/darkhttpd/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://unix4lyfe.org/darkhttpd/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/emikulic/darkhttpd/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/emikulic/darkhttpd/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/emikulic/darkhttpd/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/emikulic/darkhttpd
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/emikulic/darkhttpd/contributors?per_page=1
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

darkhttpd is a web server for static files, written in C and distributed as a single binary. The web root is its only required argument, and it reads no configuration file. The README covers a build with make and a Docker build from the repository's Dockerfile. It runs as one event loop with no forking or threads, and it can run in the background and write a pidfile.

## Worth knowing

darkhttpd serves static content only and does not run CGI.
