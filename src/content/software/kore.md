---
id: kore
name: Kore
urls:
  home: https://kore.io
  repository: https://github.com/jorisvink/kore
  docs: https://docs.kore.io/4.2.0/
category:
  - framework
description: C and Python web application platform for writing scalable, concurrent web processes.
status: active
maintainer: Joris Vink
maintainerType: individual
firstRelease: 2014
language: c
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: make and make install from the source tree or a verified release tarball
licenseModel: open-source
license: ISC
currentMajor: "4"
latestReleaseDate: 2026-09-02
githubStargazers: 3830
contributors: 37
social:
  discord: https://discord.gg/jq4Pq8jCkb
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://kore.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/jorisvink/kore
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.kore.io/4.2.0/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/jorisvink/kore/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/jorisvink/kore
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/jorisvink/kore/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://docs.kore.io/4.2.0/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.kore.io/4.2.0/install.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.kore.io/4.2.0/install.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.kore.io/4.2.0/applications/running.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/jorisvink/kore/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/jorisvink/kore
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/jorisvink/kore/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/jorisvink/kore/git/refs/tags/4.2.3
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/jorisvink/kore/git/refs/tags/1.1-release
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://kore.io/releases/4.3.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/jorisvink/kore
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/jorisvink/kore/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kore is a web application platform for writing web processes in C, with an optional Python API for page handlers. An application is built as a dynamic library or as a single binary. Kore is installed with make and make install from a signed release tarball, or with Homebrew on macOS.

A running application is a parent process that the documentation says is stopped by sending it a SIGQUIT or SIGTERM signal. Asynchronous PostgreSQL support is optional and is enabled at build time.

## Worth knowing

The documentation covers only the 4.2.x releases.
