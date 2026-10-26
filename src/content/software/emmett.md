---
id: emmett
name: Emmett
urls:
  home: https://emmett.sh
  repository: https://github.com/emmett-framework/emmett
  docs: https://emmett.sh/docs
category:
  - framework
description: Full-stack Python web framework designed with simplicity in mind.
status: active
maintainer: Giovanni Barillari
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
  - postgres
  - mysql
  - sqlserver
  - mongodb
templating: Renoir
i18n: yes, Severus engine
runsAs:
  - always-on
installMethod: pip install emmett
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-10-08
githubStargazers: 1239
contributors: 23
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://emmett.sh/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/emmett-framework/emmett
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/emmett-framework/emmett/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/pyproject.toml
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/emmett-framework/emmett
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/emmett-framework/emmett/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/installation.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/emmett/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/installation.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/installation.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/pyproject.toml
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/emmett-framework/emmett/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/emmett-framework/emmett/releases/latest
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/emmett-framework/emmett/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/emmett-framework/emmett
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/emmett-framework/emmett/contributors
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/orm.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/templates.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/languages.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/emmett-framework/emmett/master/docs/deployment.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Emmett is a full-stack web framework for Python, installed with pip. Its HTML templates use the Renoir engine, and its ORM connects to SQLite, PostgreSQL, MySQL, MSSQL and MongoDB. Internationalization is handled by the Severus engine, which the project ships with the framework.

The included serve command starts an HTTP server for production use, so an Emmett application runs as a long-lived process rather than as static files. The project's own docs name Granian as the server behind that command.

## Worth knowing

The documentation and the registry metadata state different minimum Python versions.
