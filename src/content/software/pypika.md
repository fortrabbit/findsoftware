---
id: pypika
name: PyPika
urls:
  home: https://pypika.readthedocs.io/en/latest/
  repository: https://github.com/kayak/pypika
  docs: https://pypika.readthedocs.io/en/latest/
category:
  - library
description: Python API that builds SQL queries through a builder interface, with query classes for several database platforms.
status: active
maintainer: KAYAK Germany, GmbH
maintainerType: company
firstRelease: 2016
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
databases:
  - mysql
  - sqlserver
  - postgres
  - oracle
installMethod: pip
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-02-04
githubStargazers: 2925
contributors: 115
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pypika.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/kayak/pypika
    checkedAt: 2026-11-16
  - field: urls
    url: https://pypika.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/pypika/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/kayak/pypika
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/kayak/pypika/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/kayak/pypika/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/kayak/pypika/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/kayak/pypika
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/kayak/pypika/contributors
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

PyPika is a Python API that builds SQL queries through a builder pattern. A query is assembled from tables, fields and methods, and it becomes SQL text when cast to a string or passed through get_sql. The README presents it as a way to replace handwritten SQL, designed with data analysis in mind. Its platform-specific query classes handle differences between database vendors, such as quote characters.

## Worth knowing

The README says validation of SQL correctness is not a goal, so the caller checks inputs and handles database errors.
