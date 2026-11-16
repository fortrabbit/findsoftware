---
id: pygments
name: Pygments
urls:
  home: https://pygments.org/
  repository: https://github.com/pygments/pygments
  docs: https://pygments.org/docs/
category:
  - library
description: Python syntax highlighter for source code, usable as a library and as a command-line tool, with HTML among its output formats.
status: active
maintainer: Georg Brandl
maintainerType: individual
firstRelease: 2006
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
installMethod: pip
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "2"
latestReleaseDate: 2026-08-17
githubStargazers: 2223
contributors: 387
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pygments.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/pygments/pygments
    checkedAt: 2026-11-16
  - field: urls
    url: https://pygments.org/docs/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/pygments/pygments/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/pygments/pygments/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/pygments/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/pygments/pygments/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/pygments/pygments
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/pygments/pygments/blob/2.21.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/pygments/pygments/blob/2.21.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://pygments.org/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/pygments/pygments/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/pygments/pygments/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/pygments/pygments/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/pygments/pygments
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/pygments/pygments/contributors
    checkedAt: 2026-11-16
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
runsAs: null
---

Pygments is a Python library and command-line tool that highlights source code. Its output formats include HTML, RTF, LaTeX and ANSI sequences. The README names code hosting sites, forums and wikis as the places that need to prettify source code.

## Worth knowing

The README's security section says Pygments gives no guarantee on execution time for arbitrary input. It recommends that a web service highlighting user input ends each run after a short timeout and limits how many run at once.
