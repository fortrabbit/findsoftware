---
id: flower
name: Flower
urls:
  home: https://flower.readthedocs.io/en/latest/
  repository: https://github.com/mher/flower
  docs: https://flower.readthedocs.io/en/latest/
category:
  - analytics
  - backend
description: Web application for monitoring and managing Celery task queue clusters, showing worker and task status in real time.
status: active
maintainer: Mher Movsisyan
maintainerType: individual
firstRelease: 2012
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
adminUi: true
runsAs:
  - always-on
installMethod: pip install flower
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-09-22
githubStargazers: 7240
contributors: 205
dependentRepos: 3295
dependentPackages: 43
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://flower.readthedocs.io/en/latest/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/mher/flower
    checkedAt: 2026-11-03
  - field: urls
    url: https://flower.readthedocs.io/en/latest/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/mher/flower/blob/v2.2.0/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/mher/flower/blob/v2.2.0/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/mher/flower/commits/5a8227dce5fad4bbaa88f87730e69c35c2064995
    checkedAt: 2026-11-03
  - field: category
    url: https://flower.readthedocs.io/en/latest/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/mher/flower
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/mher/flower/blob/v2.2.0/setup.py
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/mher/flower/blob/v2.2.0/setup.py
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://flower.readthedocs.io/en/latest/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://flower.readthedocs.io/en/latest/install.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/mher/flower/blob/v2.2.0/README.rst
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://api.github.com/repos/mher/flower
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/mher/flower/blob/v2.2.0/README.rst
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/mher/flower/blob/v2.2.0/README.rst
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/mher/flower/releases/tag/v2.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/mher/flower/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/mher/flower
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/mher/flower/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/flower
    checkedAt: 2026-11-03
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/flower
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Flower is a web dashboard for Celery, the distributed task queue. It runs beside the Celery application: `celery -A tasks.app flower` loads that application's configuration, and the dashboard listens on port 5555 by default. It shows worker and task status as events arrive, offers remote control of workers and queues, and exposes an HTTP API and Prometheus metrics for the same cluster. Sign-in can use HTTP Basic Auth or OAuth with Google, GitHub, GitLab or Okta.

## Worth knowing

Flower reads from a Celery broker that the application uses, given as a broker URL or taken from the application's configuration, so a broker has to run alongside it. The configuration page describes a persistent mode that keeps task results and events in a database file.
