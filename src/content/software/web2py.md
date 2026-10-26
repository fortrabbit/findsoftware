---
id: web2py
name: web2py
urls:
  home: https://www.web2py.com
  repository: https://github.com/web2py/web2py
  docs: https://web2py.com/books/default/chapter/29/01/introduction
category:
  - framework
description: Free full-stack Python framework for building database-driven web applications, with a built-in server and web-based IDE.
status: active
maintainer: Massimo Di Pierro
firstRelease: 2007
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
databases:
  - sqlite
  - sqlserver
  - postgres
  - mysql
adminUi: true
templating: web2py template language
i18n: yes
runsAs:
  - always-on
installMethod: unzip the binary distribution and run python web2py.py
licenseModel: open-source
license: Web2py is Licensed under the LGPL license version 3
currentMajor: "3"
latestReleaseDate: 2026-04-28
githubStargazers: 2166
contributors: 211
social:
  x: https://twitter.com/web2py/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.web2py.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/web2py/web2py
    checkedAt: 2026-10-26
  - field: urls
    url: https://web2py.com/books/default/chapter/29/01/introduction
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/web2py/web2py/blob/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/web2py/web2py/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://www.web2py.com/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/web2py/web2py
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/web2py/web2py/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/web2py/web2py/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/web2py/web2py/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.web2py.com/
    checkedAt: 2026-10-26
  - field: databases
    url: https://web2py.com/books/default/chapter/29/06/the-database-abstraction-layer
    checkedAt: 2026-10-26
  - field: templating
    url: https://web2py.com/books/default/chapter/29/04/the-core
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://www.web2py.com/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://web2py.com/books/default/chapter/29/01/introduction
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/web2py/web2py/blob/master/LICENSE.web2py.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.web2py.com/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/web2py/web2py/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://www.web2py.com/
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/web2py/web2py
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/web2py/web2py/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

web2py is a full-stack web framework written in Python, with a database abstraction layer, a template language, a built-in server and a web-based IDE for creating and deploying applications. It needs no installation: the distribution is unzipped and started with python web2py.py, and the process keeps running to serve requests. Its database layer generates SQL for SQLite, MSSQL, PostgreSQL and MySQL, and its access control is role-based.

Login can be delegated to third-party providers, including LDAP, OpenID and OAuth, and one web2py instance can serve several sites, each with its own database.

## Worth knowing

The project's own README says version 3 is in limited maintenance mode and that the maintainers do not recommend web2py for new projects. It names py4web as the framework to upgrade to, and the homepage makes the same recommendation.
