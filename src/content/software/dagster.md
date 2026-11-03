---
id: dagster
name: Dagster
urls:
  home: https://dagster.io
  repository: https://github.com/dagster-io/dagster
  docs: https://docs.dagster.io
category:
  - backend
description: Python data pipeline orchestrator for declaring, running and monitoring data assets as Python functions.
status: stub
maintainer: Dagster Labs, Inc.
maintainerType: company
firstRelease: 2018
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
installMethod: uv add dagster dagster-webserver dagster-dg-cli
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-30
githubStargazers: 16363
contributors: 406
social:
  x: https://x.com/dagster
  forum: https://github.com/dagster-io/dagster/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://dagster.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/dagster-io/dagster
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.dagster.io/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/dagster-io/dagster/master/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/dagster-io/dagster
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/dagster-io/dagster
    checkedAt: 2026-11-03
  - field: runtime
    url: https://raw.githubusercontent.com/dagster-io/dagster/1.13.28/python_modules/dagster/pyproject.toml
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/dagster-io/dagster/1.13.28/python_modules/dagster/pyproject.toml
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/dagster-io/dagster/master/python_modules/dagster/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/dagster-io/dagster/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/dagster-io/dagster/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/dagster-io/dagster/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/dagster-io/dagster/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/dagster-io/dagster
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/dagster-io/dagster/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/dagster-io/dagster/releases
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Dagster is a Python data pipeline orchestrator for declaring, running and monitoring data assets written as Python functions. It is installed from the PyPI package named dagster. The project publishes a GraphQL API served by its webserver, which lets clients query runs and launch job executions.

## Worth knowing

The homepage states that Dagster is now part of Prefect. The GraphQL API page describes the API as still evolving, with much of it meant for internal use by the webserver.
