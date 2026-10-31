---
id: airflow
name: Apache Airflow
urls:
  home: https://airflow.apache.org
  repository: https://github.com/apache/airflow
  docs: https://airflow.apache.org/docs/apache-airflow/stable/index.html
category:
  - backend
description: Open-source platform for developing, scheduling and monitoring batch workflows written as Python code.
status: stub
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: pip, uv, docker, helm
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-09-17
githubStargazers: 47331
contributors: 411
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://airflow.apache.org/
    checkedAt: 2026-10-31
  - field: urls
    url: https://airflow.apache.org/docs/apache-airflow/stable/index.html
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/apache/airflow
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/apache/airflow
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/apache/airflow
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/apache/airflow/blob/3.3.2/NOTICE
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://github.com/apache/airflow/blob/3.3.2/NOTICE
    checkedAt: 2026-10-31
  - field: category
    url: https://airflow.apache.org/docs/apache-airflow/stable/index.html
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/apache/airflow/blob/3.3.2/airflow-core/pyproject.toml
    checkedAt: 2026-10-31
  - field: runtime
    url: https://airflow.apache.org/docs/apache-airflow/stable/installation/index.html
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/apache/airflow/blob/3.3.2/airflow-core/pyproject.toml
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://airflow.apache.org/docs/apache-airflow/stable/start.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://airflow.apache.org/docs/apache-airflow/stable/index.html
    checkedAt: 2026-10-31
  - field: databases
    url: https://airflow.apache.org/docs/apache-airflow/stable/installation/index.html
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/apache/airflow/releases
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/apache/airflow/releases
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/apache/airflow/tags
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/apache/airflow
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/apache/airflow
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache Airflow is an open-source platform for developing, scheduling and monitoring batch workflows, and workflows are written as Python code. A web-based UI shows, manages and debugs the workflows. The start page documents installation with pip or uv, and the installation page also names the official Docker images and a Helm chart for Kubernetes. The standalone command starts a minimal local system with an SQLite database, which the docs present as a way to try the software without production setup.

The project's public REST API requires a JWT token, and its security page documents CORS settings for requests made from browser scripts.
