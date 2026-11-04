---
id: alembic
name: Alembic
urls:
  home: https://alembic.sqlalchemy.org
  repository: https://github.com/sqlalchemy/alembic
  docs: https://alembic.sqlalchemy.org/en/latest/
category:
  - library
description: Database migration tool for Python that runs versioned schema changes through SQLAlchemy.
status: active
maintainer: Michael Bayer
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
  - postgres
  - sqlserver
  - mysql
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 4464
contributors: 201
dependentRepos: 52456
dependentPackages: 620
social:
  forum: https://github.com/sqlalchemy/alembic/discussions/
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://alembic.sqlalchemy.org/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/sqlalchemy/alembic
    checkedAt: 2026-11-04
  - field: urls
    url: https://alembic.sqlalchemy.org/en/latest/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/alembic/json
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/sqlalchemy/alembic/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: category
    url: https://alembic.sqlalchemy.org/
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/sqlalchemy/alembic
    checkedAt: 2026-11-04
  - field: runtime
    url: https://alembic.sqlalchemy.org/en/latest/front.html
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/sqlalchemy/alembic/blob/rel_1_20_1/pyproject.toml
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://alembic.sqlalchemy.org/en/latest/front.html
    checkedAt: 2026-11-04
  - field: databases
    url: https://github.com/sqlalchemy/alembic/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: databases
    url: https://github.com/sqlalchemy/alembic/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: databases
    url: https://alembic.sqlalchemy.org/en/latest/changelog.html
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/sqlalchemy/alembic
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/sqlalchemy/alembic/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/sqlalchemy/alembic/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/sqlalchemy/alembic/releases/tag/rel_1_20_1
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/sqlalchemy/alembic/releases/tag/rel_1_20_1
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/sqlalchemy/alembic
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/sqlalchemy/alembic/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/alembic
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/alembic
    checkedAt: 2026-11-04
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

Alembic is a database migration tool for Python projects that use SQLAlchemy. It runs migration scripts that change a database's schema, and each script can upgrade the database to a new state or step it back down. The [README](https://github.com/sqlalchemy/alembic/blob/main/README.rst) describes an autogenerate step that compares the database with the SQLAlchemy models and writes candidate scripts for the developer to edit before running them.

Alembic installs from PyPI with pip. The README says Alembic is written by the author of SQLAlchemy, and the [front page](https://alembic.sqlalchemy.org/en/latest/front.html) states that it is part of the SQLAlchemy project.

## Worth knowing

SQLite supports few ALTER statements, so Alembic's batch mode rebuilds a table as a copy and moves the rows across when a migration changes it. The [batch page](https://alembic.sqlalchemy.org/en/latest/batch.html) describes this process.
