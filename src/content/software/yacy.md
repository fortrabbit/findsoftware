---
id: yacy
name: YaCy
urls:
  home: https://yacy.net
  repository: https://github.com/yacy/yacy_search_server
  docs: https://yacy.net/docs/
category:
  - search
description: Java search engine server with a built-in web crawler and web interface, usable for a private index or in a peer-to-peer search network.
status: active
maintainer: Michael Christen
firstRelease: 2010
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
runsAs:
  - always-on
installMethod: windows installer
licenseModel: open-source
license: GPL-2.0-or-later, LGPL
currentMajor: "1"
latestReleaseDate: 2026-03-29
githubStargazers: 4084
contributors: 79
social:
  x: https://twitter.com/yacy_search
  mastodon: https://sigmoid.social/@orbiterlab
  forum: https://community.searchlab.eu
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://yacy.net/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: urls
    url: https://yacy.net/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://yacy.net/download_installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://yacy.net/download_installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://yacy.net/download_installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://yacy.net/download_installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://yacy.net/download_installation/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/yacy/yacy_search_server/git/refs/tags/Release_1.941
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/yacy/yacy_search_server/git/refs/tags/Release_1.941
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/yacy/yacy_search_server/git/refs/tags/0.99
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/yacy/yacy_search_server
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/yacy/yacy_search_server/contributors?per_page=1
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

YaCy is a search engine server written in Java that combines a web crawler, a search index and a web interface in one application. Its [download page](https://yacy.net/download_installation/) offers packaged installers for Windows, macOS and Linux, a build from its git sources with ant, and an official Docker image.

## Worth knowing

A new installation joins a peer-to-peer search network by default, in which peers share index data. The README says the mode can be changed in the web interface, and that a search can be limited to the local index, in which case results come only from that index.
