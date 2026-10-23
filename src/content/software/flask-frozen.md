---
id: flask-frozen
name: Frozen-Flask
urls:
  home: https://frozen-flask.readthedocs.io/
  repository: https://github.com/Frozen-Flask/Frozen-Flask
  docs: https://frozen-flask.readthedocs.io/
category:
  - ssg
description: Flask extension that freezes a Flask application into a set of static files.
status: active
maintainer: CourtBouillon
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.8
basedOn:
  - flask
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2024-02-09
githubStargazers: 797
contributors: 28
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Frozen-Flask/Frozen-Flask
    checkedAt: 2026-10-23
  - field: urls
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/Frozen-Flask/Frozen-Flask/main/README.rst
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/Frozen-Flask/json
    checkedAt: 2026-10-23
  - field: category
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Frozen-Flask/Frozen-Flask
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/Frozen-Flask/Frozen-Flask/main/pyproject.toml
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/Frozen-Flask/Frozen-Flask/main/pyproject.toml
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://frozen-flask.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/Frozen-Flask/Frozen-Flask/main/README.rst
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/Frozen-Flask/Frozen-Flask/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Frozen-Flask/Frozen-Flask/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/Frozen-Flask/Frozen-Flask/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Frozen-Flask/Frozen-Flask
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Frozen-Flask/Frozen-Flask/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Frozen-Flask freezes a Flask application into a set of static files. A developer creates a `Freezer` from the app object and calls its `freeze` method from a script, which writes the pages to a build directory. The [documentation](https://frozen-flask.readthedocs.io/en/latest/) says the result can be hosted without any server-side software other than a traditional web server, so Python and Flask are needed where the site is frozen and not on the server.

The documentation says Frozen-Flask finds URLs by simulating requests and following links built with `url_for`, and that pages it cannot find need URL generators.
