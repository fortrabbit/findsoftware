---
id: sqlalchemy
name: SQLAlchemy
urls:
  home: https://www.sqlalchemy.org
  repository: https://github.com/sqlalchemy/sqlalchemy
  docs: https://www.sqlalchemy.org/docs/
category:
  - library
description: Python SQL toolkit with a Core SQL expression layer and an Object Relational Mapper for relational databases.
status: active
maintainer: SQLAlchemy authors and contributors
maintainerType: community
firstRelease: 2006
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
databases:
  - postgres
  - mysql
  - mariadb
  - sqlite
  - oracle
  - sqlserver
installMethod: pip, source distribution
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-04
githubStargazers: 12288
contributors: 405
social:
  mastodon: https://hachyderm.io/@zzzeek
  forum: https://github.com/sqlalchemy/sqlalchemy/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://www.sqlalchemy.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/sqlalchemy/sqlalchemy/blob/main/README.rst
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy/git/ref/tags/rel_0_1_0
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/sqlalchemy/sqlalchemy/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy
    checkedAt: 2026-11-16
  - field: category
    url: https://www.sqlalchemy.org/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://docs.sqlalchemy.org/en/21/intro.html
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://docs.sqlalchemy.org/en/21/intro.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlalchemy.org/en/21/dialects/postgresql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlalchemy.org/en/21/dialects/mysql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlalchemy.org/en/21/dialects/mysql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlalchemy.org/en/21/dialects/sqlite.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlalchemy.org/en/21/dialects/oracle.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://docs.sqlalchemy.org/en/21/dialects/mssql.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlalchemy.org/en/21/intro.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.sqlalchemy.org/en/21/intro.html
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy
    checkedAt: 2026-11-16
  - field: license
    url: https://www.sqlalchemy.org/
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://www.sqlalchemy.org/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sqlalchemy/sqlalchemy/contributors?per_page=1
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

SQLAlchemy is a Python toolkit for SQL with two layers: a Core SQL expression layer and an Object Relational Mapper for relational databases. Dialects for the supported databases are included, and third-party dialects are covered in a separate section of the docs.

## Worth knowing

A plain install no longer includes the greenlet dependency that asyncio support needs; the asyncio extra installs it.
