---
id: isso
name: Isso
urls:
  home: https://isso-comments.de
  repository: https://github.com/isso-comments/isso
  docs: https://isso-comments.de/docs/
category:
  - community
description: Self-hosted commenting server written in Python, with a JavaScript client and SQLite storage, that a site embeds to add comments to its pages.
status: active
maintainer: Martin Zimmermann
firstRelease: 2013
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
adminUi: true
headlessApi:
  - rest
i18n: yes, the client UI renders in the language set or the browser's preferred language
runsAs:
  - always-on
installMethod: pip install isso
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-03-26
githubStargazers: 5311
contributors: 128
social:
  forum: https://github.com/isso-comments/isso/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://isso-comments.de/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/isso-comments/isso
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/isso-comments/isso/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/isso-comments/isso/master/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/isso-comments/isso
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/isso-comments/isso/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://isso-comments.de/docs/reference/installation/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/isso-comments/isso/blob/0.14.0/pyproject.toml
    checkedAt: 2026-11-03
  - field: databases
    url: https://isso-comments.de/docs/reference/server-config/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://isso-comments.de/docs/reference/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://isso-comments.de/docs/reference/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://isso-comments.de/docs/reference/installation/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://isso-comments.de/docs/reference/installation/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://isso-comments.de/docs/reference/client-config/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://isso-comments.de/docs/reference/server-config/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://isso-comments.de/docs/reference/client-config/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/isso-comments/isso
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/isso-comments/isso/blob/0.14.0/pyproject.toml
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/isso-comments/isso/tags
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/isso-comments/isso/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/isso-comments/isso/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/isso-comments/isso
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/isso-comments/isso/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Isso is a commenting server written in Python, with a JavaScript client that a site embeds to show and collect comments. Comments are kept in an SQLite database, and the project documents imports from Disqus and WordPress exports. The server runs as a service, and the install guide shows init scripts for running it that way. The JavaScript client finds a REST API on the server, which the project documents separately.

The project describes itself as aiming to be a drop-in replacement for Disqus. An optional web administration interface moderates comments, and one server can serve comments for several websites.
