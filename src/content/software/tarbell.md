---
id: tarbell
name: Tarbell
urls:
  home: https://tarbell.readthedocs.io/en/latest/index.html
  repository: https://github.com/tarbell-project/tarbell
  docs: https://tarbell.readthedocs.io/en/latest/index.html
category:
  - ssg
description: Flask-based tool for authoring static websites from project templates and optional Google Sheets data, published to Amazon S3.
status: stub
maintainer: Tarbell Project
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 2.7
basedOn:
  - flask
templating: jinja
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install tarbell
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2017-12-19
githubStargazers: 164
contributors: 15
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://tarbell.readthedocs.io/en/latest/index.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/tarbell-project/tarbell
    checkedAt: 2026-10-23
  - field: urls
    url: https://tarbell.readthedocs.io/en/latest/index.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/tarbell-project/tarbell/master/setup.py
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/tarbell-project/tarbell
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/tarbell-project/tarbell
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/tarbell-project/tarbell
    checkedAt: 2026-10-23
  - field: runtime
    url: https://tarbell.readthedocs.io/en/latest/install.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://tarbell.readthedocs.io/en/latest/install.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://tarbell.readthedocs.io/en/latest/build.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://tarbell.readthedocs.io/en/latest/install.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://tarbell.readthedocs.io/en/latest/publish.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://tarbell.readthedocs.io/en/latest/managingprojects.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://tarbell.readthedocs.io/en/latest/publish.html
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/tarbell-project/tarbell/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/tarbell-project/tarbell/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/tarbell-project/tarbell/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/tarbell-project/tarbell/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/tarbell/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tarbell-project/tarbell
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tarbell-project/tarbell/contributors
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

Tarbell is a Python tool built on Flask that turns a project directory of Jinja2 templates into a static website. `tarbell generate` writes the site as HTML into a directory, and `tarbell publish` uploads it to Amazon S3 once S3 buckets are configured; the docs note that `tarbell generate` output can be synced to other hosts with a deployment script. During development, `tarbell serve` runs a preview server from the project directory. Project content can come from an optional Google Spreadsheet, as the [building guide](https://tarbell.readthedocs.io/en/latest/build.html) describes.

## Worth knowing

The install page states that Tarbell requires Python 2.7 and Git, does not currently support Python 3 and does not work on Windows.
