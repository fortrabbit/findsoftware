---
id: records
name: Records
urls:
  repository: https://github.com/kennethreitz/records
  docs: https://github.com/kennethreitz/records/blob/master/README.rst
category:
  - library
description: Python library for running raw SQL queries against relational databases.
status: active
maintainer: Kenneth Reitz
maintainerType: individual
firstRelease: 2016
language: python
runtime:
  - python
hosting:
  - python
databases:
  - postgres
  - mysql
  - sqlite
  - oracle
  - sqlserver
installMethod: pipenv
licenseModel: open-source
license: ISC
currentMajor: "0"
latestReleaseDate: 2024-03-29
githubStargazers: 7214
contributors: 45
dependentRepos: 254
dependentPackages: 11
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/kennethreitz/records
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/kennethreitz/records/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/kennethreitz/records/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/records/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/kennethreitz/records/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/kennethreitz/records
    checkedAt: 2026-11-16
  - field: runtime
    url: https://pypi.org/pypi/records/json
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/kennethreitz/records/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/kennethreitz/records/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/kennethreitz/records/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/kennethreitz/records/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/kennethreitz/records/releases/tag/v0.6.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/kennethreitz/records/releases/tag/v0.6.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/kennethreitz/records
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/kennethreitz/records/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/records
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/records
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

Records is a Python library that runs raw SQL and returns the results as rows. You write the SQL yourself and read the rows by column name, by index or as a dictionary. Queries can take named parameters and can be read from SQL files.

The README says the library is powered by SQLAlchemy and Tablib. Query results export through Tablib to CSV, JSON, YAML, spreadsheet and pandas DataFrame formats, and a command-line records tool exports query results as well.

## Worth knowing

Database drivers are not included, so the driver for each database has to be installed separately.
