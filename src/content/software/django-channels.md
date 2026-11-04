---
id: django-channels
name: Channels
urls:
  home: https://channels.readthedocs.io/en/latest/
  repository: https://github.com/django/channels
  docs: https://channels.readthedocs.io/en/latest/
category:
  - backend
description: Django extension that adds WebSocket, long-poll HTTP and other asynchronous protocol handling to Django projects.
status: active
maintainer: Django Software Foundation
maintainerType: foundation
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
basedOn:
  - django
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2025-11-20
githubStargazers: 6363
contributors: 263
dependentRepos: 7421
dependentPackages: 99
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://channels.readthedocs.io/en/latest/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/django/channels
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/django/channels/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/django/channels/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/django/channels/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/django/channels
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/django/channels/blob/4.3.2/setup.cfg
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/django/channels/blob/4.3.2/setup.cfg
    checkedAt: 2026-11-04
  - field: runsAs
    url: https://channels.readthedocs.io/en/latest/deploying.html
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://channels.readthedocs.io/en/latest/installation.html
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/django/channels/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/django/channels
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/django/channels/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/channels/json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://pypi.org/pypi/channels/json
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://pypi.org/pypi/channels/json
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/django/channels
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/django/channels/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/channels
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/channels
    checkedAt: 2026-11-04
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Channels extends Django to handle WebSocket connections, long-poll HTTP and background tasks next to the regular request cycle. It is built on ASGI, the Python specification for asynchronous servers, and Django's native ASGI support still serves plain HTTP. A project sets the ASGI_APPLICATION setting to a routing object in its asgi.py, which sends HTTP to Django and other protocols to their own handlers, and runs that application under a server such as Daphne. The Django Software Foundation maintains it as an official Django project.

## Worth knowing

A Channels project runs as a long-lived server process under a process supervisor or an orchestration system, so a host that serves static files or starts a script per request is not enough. The channel layer is optional. A backend such as the Redis one connects the server processes through a central server.
