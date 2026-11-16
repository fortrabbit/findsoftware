---
id: plotly-py
name: Plotly.py
urls:
  home: https://plotly.com/python/
  repository: https://github.com/plotly/plotly.py
  docs: https://plotly.com/python/
category:
  - graphics
description: Interactive, open-source Python graphing library whose charts can be saved as standalone HTML files.
status: active
maintainer: Plotly Technologies Inc.
maintainerType: company
firstRelease: 2013
language: python
runtime:
  - python
runtimeMin: python 3.8
basedOn:
  - plotly-js
installMethod: pip, conda
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-09-15
githubStargazers: 18907
contributors: 316
social:
  forum: https://community.plotly.com
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://plotly.com/python/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/plotly/plotly.py/blob/main/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/plotly/plotly.py
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/plotly/plotly.py/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/plotly/plotly.py/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/plotly/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/plotly/plotly.py/blob/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/plotly/plotly.py/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/plotly/plotly.py
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/plotly/plotly.py/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/plotly/plotly.py/blob/v7.1.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/plotly/plotly.py/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/plotly/plotly.py/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/plotly/plotly.py/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/plotly/plotly.py/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/plotly/plotly.py/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/plotly/plotly.py
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/plotly/plotly.py/contributors
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

Plotly.py is a Python graphing library for interactive charts, built on top of plotly.js. A Python script builds a figure and shows it in a Jupyter notebook, saves it as a standalone HTML file with write_html, or returns HTML with to_html for insertion into a template.

## Worth knowing

A self-contained HTML file inlines a copy of plotly.js, which makes the file large, and the export options control its size. Static image export uses the kaleido package, which requires Chrome or Chromium.
