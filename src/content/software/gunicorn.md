---
id: gunicorn
name: Gunicorn
urls:
  home: https://gunicorn.org
  repository: https://github.com/benoitc/gunicorn
  docs: https://gunicorn.org/install/
category:
  - web-server
description: WSGI HTTP server for UNIX that runs Python web applications with a pre-fork worker model.
status: active
maintainer: Benoît Chesneau
maintainerType: individual
firstRelease: 2010
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "26"
latestReleaseDate: 2026-09-06
githubStargazers: 10717
contributors: 372
social:
  forum: https://github.com/benoitc/gunicorn/discussions
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://gunicorn.org
    checkedAt: 2026-10-29
  - field: urls
    url: https://gunicorn.org
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/benoitc/gunicorn
    checkedAt: 2026-10-29
  - field: urls
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/benoitc/gunicorn/master/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/benoitc/gunicorn/master/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://gunicorn.org
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/benoitc/gunicorn
    checkedAt: 2026-10-29
  - field: runtime
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://github.com/benoitc/gunicorn/blob/26.2.2/pyproject.toml
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://gunicorn.org/install/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://gunicorn.org/deploy/
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/benoitc/gunicorn/blob/master/README.md
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/benoitc/gunicorn/blob/master/README.md
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://pypi.org/pypi/gunicorn/json
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/benoitc/gunicorn/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/benoitc/gunicorn/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/benoitc/gunicorn
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/benoitc/gunicorn/contributors
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

Gunicorn is a WSGI HTTP server for UNIX that runs Python web applications, and it is written in Python. It serves the application through a pre-fork worker model. It installs with pip or pipx, as a system package, or from a Docker image on GitHub Container Registry. It runs as a long-lived process: the [deployment guide](https://gunicorn.org/deploy/) advises against its daemon mode when a process monitor manages it.

## Worth knowing

The deployment guide strongly recommends running Gunicorn behind a proxy server.
