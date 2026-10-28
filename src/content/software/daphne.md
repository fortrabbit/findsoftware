---
id: daphne
name: Daphne
urls:
  repository: https://github.com/django/daphne
  docs: https://channels.readthedocs.io/en/stable/installation.html
category:
  - web-server
description: HTTP, HTTP/2 and WebSocket protocol server for ASGI applications, developed to power Django Channels.
status: active
maintainer: Django Software Foundation
maintainerType: foundation
firstRelease: 2016
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2026-07-21
githubStargazers: 2688
contributors: 70
dependentRepos: 5881
dependentPackages: 37
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/django/daphne
    checkedAt: 2026-10-28
  - field: urls
    url: https://channels.readthedocs.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/django/daphne/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/django/daphne/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/django/daphne
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/django/daphne
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/django/daphne/blob/4.2.3/pyproject.toml
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/django/daphne/blob/4.2.3/pyproject.toml
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://channels.readthedocs.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/django/daphne
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/django/daphne
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://api.github.com/repos/django/daphne
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://pypi.org/pypi/daphne/json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/django/daphne/blob/main/CHANGELOG.txt
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/django/daphne/blob/main/CHANGELOG.txt
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/django/daphne
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/django/daphne/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/daphne
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/daphne
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

Daphne is an HTTP, HTTP/2 and WebSocket server for ASGI applications, written in Python and developed by the Django project to power Django Channels. It is started as a command that points at an ASGI application and listens on localhost port 8000 by default. It can listen on a UNIX socket behind a reverse proxy or run inside a process manager. The Channels documentation installs it as the channels[daphne] extra of the Channels package.

## Worth knowing

HTTP/2 is served natively only when Daphne runs with TLS, set up through Twisted endpoint strings. A reverse proxy in front of it has to pass the HTTP/2 connection through for the protocol to reach the browser.
