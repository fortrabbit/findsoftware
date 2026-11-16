---
id: pyecharts
name: pyecharts
urls:
  home: https://pyecharts.org/
  repository: https://github.com/pyecharts/pyecharts
  docs: https://pyecharts.org/#/en-us/
category:
  - graphics
description: Python library that generates Apache ECharts charts, written to local HTML files and embeddable in Flask and Django pages.
status: active
maintainer: chenjiandongx
maintainerType: individual
firstRelease: 2017
language: python
runtime:
  - python
runtimeMin: python 3.7
basedOn:
  - echarts
installMethod: pip, source
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-02-10
githubStargazers: 15779
contributors: 39
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pyecharts.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/pyecharts/pyecharts
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/pyecharts/pyecharts/blob/master/README.en.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/pyecharts/pyecharts/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/pyecharts/pyecharts/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/pyecharts/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/pyecharts/pyecharts/blob/master/README.en.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/pyecharts/pyecharts/blob/master/README.en.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/pyecharts/pyecharts
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/pyecharts/pyecharts/blob/v2.1.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/pyecharts/pyecharts/blob/v2.1.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/pyecharts/pyecharts/blob/master/README.en.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/pyecharts/pyecharts/blob/master/README.en.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/pyecharts/pyecharts/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/pyecharts/pyecharts/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/pyecharts/pyecharts/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/pyecharts/pyecharts
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/pyecharts/pyecharts/contributors
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

pyecharts is a Python library that generates charts for Apache ECharts. A script builds a chart from Python objects and calls render, which writes a local HTML file that a browser opens. The same charts can be placed in Flask and Django pages, and they display in Jupyter Notebook, JupyterLab and marimo. The 2.x line renders its charts with ECharts, the JavaScript library it is based on.

## Worth knowing

Saving a chart as an image is a separate step. The documentation names snapshot-selenium, which drives a browser, for PNG output.
