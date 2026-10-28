---
id: manticore
name: Manticore Search
urls:
  home: https://manticoresearch.com
  repository: https://github.com/manticoresoftware/manticoresearch
  docs: https://manual.manticoresearch.com
category:
  - search
description: Open-source search database for full-text, vector and hybrid search, with an SQL interface and an HTTP JSON API.
status: active
maintainer: Manticore Software Ltd
maintainerType: company
firstRelease: 2017
hqCountry: GB
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: curl install script
licenseModel: open-source
license: GPL-3.0
currentMajor: "29"
latestReleaseDate: 2026-09-11
githubStargazers: 12074
contributors: 62
social:
  x: https://twitter.com/manticoresearch
  forum: https://forum.manticoresearch.com/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://manticoresearch.com
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/manticoresoftware/manticoresearch
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://manticoresearch.com
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://manticoresearch.com
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://manticoresearch.com
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/manticoresoftware/manticoresearch/releases
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/manticoresoftware/manticoresearch
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://manual.manticoresearch.com
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://manticoresearch.com/install/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://manticoresearch.com/install/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://manticoresearch.com/install/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://manticoresearch.com/install/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/manticoresoftware/manticoresearch
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/manticoresoftware/manticoresearch/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/manticoresoftware/manticoresearch/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/manticoresoftware/manticoresearch/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/manticoresoftware/manticoresearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/manticoresoftware/manticoresearch/contributors
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

Manticore Search is a search database written in C++ that indexes documents and answers full-text, vector and hybrid queries, which it accepts as SQL and over an HTTP JSON API. Manticore Software Ltd, a company in the United Kingdom, maintains the project. The [install page](https://manticoresearch.com/install/) covers the Linux, macOS, Windows and Docker routes, and the [manual](https://manual.manticoresearch.com) documents the server.

## Worth knowing

The server runs as a daemon that listens on MySQL and HTTP ports, so it needs a running process rather than static files. The manual describes Manticore Buddy, a component installed with the packages, as written in PHP.
