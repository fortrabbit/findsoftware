---
id: peewee
name: peewee
urls:
  home: https://docs.peewee-orm.com/en/latest/
  repository: https://github.com/coleifer/peewee
  docs: https://docs.peewee-orm.com/en/latest/
category:
  - library
description: Small Python object-relational mapper with a query builder, asyncio support and migrations for SQLite, MySQL, MariaDB and PostgreSQL.
status: active
maintainer: Charles Leifer
maintainerType: individual
firstRelease: 2010
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.8
databases:
  - sqlite
  - mysql
  - mariadb
  - postgres
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-07
githubStargazers: 12006
contributors: 132
dependentRepos: 7932
dependentPackages: 236
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://docs.peewee-orm.com/en/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/coleifer/peewee
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.peewee-orm.com/en/latest/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/coleifer/peewee/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/peewee/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/coleifer/peewee/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/coleifer/peewee
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/coleifer/peewee/blob/4.5.3/pyproject.toml
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/coleifer/peewee/blob/4.5.3/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/coleifer/peewee/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/coleifer/peewee/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/coleifer/peewee
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/coleifer/peewee/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/coleifer/peewee/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/coleifer/peewee
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/coleifer/peewee/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/peewee
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/peewee
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

peewee is a Python object-relational mapper. Models are Python classes that map to database tables, and queries are built with a query builder that exposes SQL. It supports SQLite, MySQL, MariaDB and PostgreSQL, and its asyncio support is built on the standard async drivers. The package is installed with pip, and the [documentation](https://docs.peewee-orm.com/en/latest/) covers integrations with Flask, FastAPI and pydantic.

## Worth knowing

The library is a single module with no required dependencies. The MySQL, PostgreSQL and async database drivers are optional extras installed alongside it.
