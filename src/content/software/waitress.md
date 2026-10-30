---
id: waitress
name: Waitress
urls:
  home: https://docs.pylonsproject.org/projects/waitress/en/latest/
  repository: https://github.com/Pylons/waitress
  docs: https://docs.pylonsproject.org/projects/waitress/en/latest/usage.html
category:
  - web-server
description: Production-quality pure-Python WSGI server for Python 3 that has no dependencies outside the standard library.
status: active
maintainer: Pylons Project
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
runsAs:
  - always-on
licenseModel: open-source
license: ZPL-2.1
currentMajor: "3"
latestReleaseDate: 2024-11-16
githubStargazers: 1602
contributors: 57
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://docs.pylonsproject.org/projects/waitress/en/latest/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/Pylons/waitress
    checkedAt: 2026-10-30
  - field: urls
    url: https://docs.pylonsproject.org/projects/waitress/en/latest/usage.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://docs.pylonsproject.org/projects/waitress/en/latest/
    checkedAt: 2026-10-30
  - field: category
    url: https://docs.pylonsproject.org/projects/waitress/en/latest/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/Pylons/waitress/languages
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/Pylons/waitress/main/README.rst
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://pypi.org/pypi/waitress/json
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://docs.pylonsproject.org/projects/waitress/en/latest/usage.html
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/Pylons/waitress/blob/v3.0.2/LICENSE.txt
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/Pylons/waitress/blob/v3.0.2/LICENSE.txt
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/Pylons/waitress/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/Pylons/waitress/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/Pylons/waitress/commits/0.1
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/Pylons/waitress
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/Pylons/waitress/contributors?per_page=1
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

Waitress is a WSGI server for Python 3 applications. Its docs describe it as a production-quality, pure-Python server with no dependencies outside the Python standard library. It runs on CPython on Unix and Windows.

An application starts the server with a single call to the serve function on a chosen host and port, or with the bundled waitress-serve command. The server runs until it is stopped, for example with Ctrl-C.

## Worth knowing

Waitress does not natively support TLS, and its docs describe placing it behind a reverse proxy. The Pylons Project maintains it and points users to its website for support and development information.
