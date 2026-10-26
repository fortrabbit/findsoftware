---
id: py4web
name: py4web
urls:
  home: https://py4web.com
  repository: https://github.com/web2py/py4web
  docs: https://py4web.com/_documentation
category:
  - framework
description: Python web framework for building database-driven web applications, with a built-in dashboard app.
status: active
maintainer: Massimo Di Pierro
firstRelease: 2019
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
contentStore:
  - database
databases:
  - sqlite
  - postgres
  - mysql
  - oracle
  - sqlserver
  - mongodb
adminUi: true
headlessApi:
  - rest
templating: yatl, renoir
i18n: yes
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-08-05
githubStargazers: 322
contributors: 73
social:
  forum: https://groups.google.com/forum/#!forum/py4web
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/web2py/py4web
    checkedAt: 2026-10-26
  - field: urls
    url: https://py4web.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/web2py/py4web/master/LICENSE.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/web2py/py4web
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pypi.org/pypi/py4web/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/py4web/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://py4web.com/_documentation/static/en/chapter-03.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://pypi.org/pypi/py4web/json
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://py4web.com/_documentation/static/en/chapter-03.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://py4web.com/_documentation/static/en/chapter-03.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://py4web.com/_documentation/static/en/chapter-03.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://py4web.com/_documentation/static/en/chapter-03.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://py4web.com/_documentation/static/en/chapter-03.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://py4web.com/_documentation/static/en/chapter-07.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://py4web.com/_documentation/static/en/chapter-07.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://py4web.com/_documentation/static/en/chapter-07.html
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://py4web.com/_documentation/static/en/chapter-08.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://py4web.com/_documentation/static/en/chapter-09.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/web2py/py4web/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/py4web/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://pypi.org/pypi/py4web/json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pypi.org/pypi/py4web/json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/web2py/py4web
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/web2py/py4web/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

py4web is a Python web framework for database-driven web applications, and the [homepage](https://py4web.com) calls it the successor of web2py. It is installed with pip, and a built-in `_dashboard` app replaces the admin and appadmin of web2py. Templates use yatl and Renoir. The reference manual lists drivers for SQLite, PostgreSQL, MySQL and other databases, and a RestAPI that comes from pyDAL. For production, the [installation chapter](https://py4web.com/_documentation/static/en/chapter-03.html) shows the application running as a WSGI app under gunicorn.

## Worth knowing

The Python minimum is stated several ways: the docs say 3.7 or later, the README 3.9 or later, and the PyPI package requires 3.10 or later. The README says the project is not yet stable. GitHub has tags but no releases; the PyPI package is where new versions are published.
