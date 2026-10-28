---
id: scout-py
name: Scout
urls:
  home: https://scout.readthedocs.io/en/latest/
  repository: https://github.com/coleifer/scout
  docs: https://scout.readthedocs.io/en/latest/
category:
  - search
description: RESTful search server written in Python that keeps its search index in one SQLite database file.
status: active
maintainer: Charles Leifer
maintainerType: individual
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.8
basedOn:
  - flask
contentStore:
  - database
databases:
  - sqlite
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-04-14
githubStargazers: 315
contributors: 2
dependentRepos: 4
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://scout.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: urls
    url: https://scout.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/coleifer/scout
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/coleifer/scout/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://pypi.org/pypi/scout/json
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/coleifer/scout
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/coleifer/scout/blob/4.0.0/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/coleifer/scout/blob/4.0.0/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/coleifer/scout/blob/4.0.0/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/coleifer/scout/blob/4.0.0/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/coleifer/scout/blob/4.0.0/docs/installation.rst
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/coleifer/scout/blob/4.0.0/docs/installation.rst
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/coleifer/scout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/coleifer/scout
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/coleifer/scout/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/coleifer/scout/blob/4.0.0/scout/__init__.py
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://pypi.org/pypi/scout/json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/coleifer/scout
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/coleifer/scout/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/scout
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://github.com/coleifer/scout/blob/4.0.0/docs/server.rst
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/coleifer/scout/blob/4.0.0/docs/server.rst
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://github.com/coleifer/scout/blob/4.0.0/docs/server.rst
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/coleifer/scout/blob/4.0.0/docs/deployment.rst
    checkedAt: 2026-10-28
ai: authored
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Scout is a RESTful search server written in Python and built with Flask. It keeps its search index in one SQLite database file, which the server is given by path, and it exposes indexing and search as REST endpoints. The server runs as a long-lived process that listens on a port. The deployment page describes running it under a WSGI server such as Gevent or Gunicorn, or under a process manager, and the README names a Docker image that runs it on port 9004.

## Worth knowing

Because the server is its own process with its own database file, a host has to run a Python process for it, and static hosting cannot serve it. The database is one SQLite file that the server opens by path.
