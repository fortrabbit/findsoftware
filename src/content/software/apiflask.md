---
id: apiflask
name: APIFlask
urls:
  home: https://apiflask.com
  repository: https://github.com/apiflask/apiflask
  docs: https://apiflask.com/docs
category:
  - framework
description: Python web API framework built on Flask, with marshmallow or Pydantic schemas and automatic OpenAPI documentation.
status: active
maintainer: Grey Li
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
basedOn:
  - flask
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-09-12
githubStargazers: 1139
contributors: 51
social:
  x: https://twitter.com/apiflask
  forum: https://github.com/apiflask/apiflask/discussions
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/apiflask/apiflask
    checkedAt: 2026-10-24
  - field: urls
    url: https://apiflask.com
    checkedAt: 2026-10-24
  - field: urls
    url: https://apiflask.com
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/apiflask/apiflask/blob/main/docs/authors.md
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/apiflask/apiflask
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/apiflask/apiflask/blob/main/README.md
    checkedAt: 2026-10-24
  - field: basedOn
    url: https://github.com/apiflask/apiflask/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/apiflask/apiflask/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://github.com/apiflask/apiflask/blob/main/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/apiflask/apiflask/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/apiflask/apiflask/blob/main/docs/tips.md
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/apiflask/apiflask
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/apiflask/apiflask/blob/main/LICENSE
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://pypi.org/pypi/apiflask/json
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://pypi.org/pypi/apiflask/json
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://pypi.org/pypi/apiflask/json
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/apiflask/apiflask
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/apiflask/apiflask/contributors
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Python · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

APIFlask is a Python web API framework built on Flask. It started as a fork of APIFairy, and its documentation includes migration guides for projects that use Flask or Flask-RESTPlus/Flask-RESTX. The package installs with pip. Its API documentation and OpenAPI generation are features of the framework. The project's tips page describes running an application behind a reverse proxy such as Nginx, which forwards requests to the process that serves the application.

## Worth knowing

APIFlask is a library on top of Flask, so a project that uses it also depends on Flask and its requirements.
