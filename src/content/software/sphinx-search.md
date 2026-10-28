---
id: sphinx-search
name: Sphinx
urls:
  home: https://sphinxsearch.com
  repository: https://github.com/sphinxsearch/sphinx
  docs: https://sphinxsearch.com/docs/sphinx3.html
  plugins: https://sphinxsearch.com/wiki/doku.php?id=third_party
category:
  - search
description: Full-text search server, written in C++, that indexes files and SQL databases and answers queries over SphinxQL.
status: active
maintainer: Sphinx Technologies Inc.
maintainerType: company
firstRelease: 2006
hqCountry: US
language: cpp
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
runsAs:
  - always-on
installMethod: precompiled binary download
license: dual-licensed (free and commercial), per the Sphinx 3 documentation, not open source since 3.0; sources available to commercial clients
currentMajor: "3"
latestReleaseDate: 2025-12-18
githubStargazers: 1826
contributors: 6
social:
  x: https://twitter.com/sphinxsearch
  forum: https://sphinxsearch.com/forum/
  facebook: https://www.facebook.com/SphinxSearchServer
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://sphinxsearch.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/sphinxsearch/sphinx
    checkedAt: 2026-10-28
  - field: urls
    url: https://sphinxsearch.com/docs/sphinx3.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://sphinxsearch.com/about/company/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://sphinxsearch.com/about/company/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://sphinxsearch.com/about/company/
    checkedAt: 2026-10-28
  - field: language
    url: https://sphinxsearch.com/docs/sphinx3.html
    checkedAt: 2026-10-28
  - field: runtime
    url: https://sphinxsearch.com/downloads/current/
    checkedAt: 2026-10-28
  - field: category
    url: https://sphinxsearch.com/docs/sphinx3.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://sphinxsearch.com/downloads/current/
    checkedAt: 2026-10-28
  - field: license
    url: https://sphinxsearch.com/docs/sphinx3.html
    checkedAt: 2026-10-28
  - field: license
    url: https://sphinxsearch.com/downloads/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://sphinxsearch.com/docs/sphinx3.html
    checkedAt: 2026-10-28
  - field: databases
    url: https://sphinxsearch.com/docs/sphinx3.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://sphinxsearch.com/downloads/current/
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://sphinxsearch.com/downloads/current/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://sphinxsearch.com/downloads/archive/
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/sphinxsearch/sphinx
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/sphinxsearch/sphinx/contributors
    checkedAt: 2026-10-28
  - field: urls
    url: https://sphinxsearch.com/
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Sphinx is a full-text search server written in C++. It indexes data from files and SQL databases, and clients query it through SphinxQL. The searchd process runs continuously and accepts connections, so a host has to keep it running. The project distributes prebuilt binaries, and its SQL data sources use native drivers for MySQL and PostgreSQL.

The company behind Sphinx is Sphinx Technologies Inc., which the project's about page describes as a private company based in the United States.

## Worth knowing

The project no longer publishes Sphinx under an open-source license, and says the sources are available to commercial clients. The GitHub repository holds the older sources, which carry a GPL license.
