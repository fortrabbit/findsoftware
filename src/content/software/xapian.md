---
id: xapian
name: Xapian
urls:
  home: https://xapian.org/
  repository: https://github.com/xapian/xapian
  docs: https://xapian.org/docs/
category:
  - search
description: C++ search engine library for adding indexing and search to applications, with bindings for several programming languages.
status: active
maintainer: The Xapian Project
firstRelease: 2002
language: cpp
runtime:
  - binary
hosting:
  - binary
installMethod: source tarball, configure and make
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "2"
latestReleaseDate: 2026-08-13
githubStargazers: 878
contributors: 50
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://xapian.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/xapian/xapian
    checkedAt: 2026-10-28
  - field: urls
    url: https://xapian.org/docs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://xapian.org/download/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/xapian/xapian
    checkedAt: 2026-10-28
  - field: runtime
    url: https://xapian.org/docs/install.html
    checkedAt: 2026-10-28
  - field: category
    url: https://xapian.org/
    checkedAt: 2026-10-28
  - field: license
    url: https://xapian.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://xapian.org/docs/install.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://xapian.org/download
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/xapian/xapian/tags
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://xapian.org/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://xapian.org/history.html
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/xapian/xapian/git/refs/tags/v0.5.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/xapian/xapian
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/xapian/xapian/contributors?per_page=1
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

Xapian is a C++ search engine library that an application links against to add indexing and search, so the search runs inside the application's own process. The project maintains language bindings for several other languages, among them Python, PHP, Java, Ruby and C#. Omega, a search application built on the library, comes from the same source tree.

Packaged builds are available from most Linux distributions and BSD systems, and the project also publishes source tarballs that are built with configure and make. The [installation guide](https://xapian.org/docs/install.html) covers the source route on UNIX systems, macOS and Windows.

## Worth knowing

The library is licensed under the GPL, version 2 or later, which sets the terms for distributing an application that links it.
