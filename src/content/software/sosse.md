---
id: sosse
name: SOSSE
urls:
  repository: https://github.com/biolds/sosse
  docs: https://sosse.readthedocs.io/en/stable/index.html
category:
  - search
description: Self-hosted search engine that crawls and archives web pages, using Selenium for pages that need JavaScript, and searches their content.
status: stub
maintainer: Laurent Defert
maintainerType: individual
firstRelease: 2023
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2025-10-16
githubStargazers: 408
contributors: 1
social:
  discord: https://discord.gg/Vt9cMf7BGK
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/biolds/sosse
    checkedAt: 2026-10-28
  - field: urls
    url: https://sosse.readthedocs.io/en/stable/index.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://sosse.readthedocs.io/en/stable/install/docker.html
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://pypi.org/pypi/sosse/json
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/biolds/sosse
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://sosse.readthedocs.io/en/stable/install/pip.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://sosse.readthedocs.io/en/stable/install/debian.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://sosse.readthedocs.io/en/stable/install/docker_compose.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://sosse.readthedocs.io/en/stable/install/debian.html
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://github.com/biolds/sosse/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://pypi.org/pypi/sosse/json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://pypi.org/pypi/sosse/json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://pypi.org/pypi/sosse/json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/biolds/sosse
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/biolds/sosse/contributors
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://sosse.readthedocs.io/en/stable/user/rest_api.html
    checkedAt: 2026-10-28
ai: authored
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Sosse is a self-hosted search engine that crawls websites, archives their pages and searches the stored content. It uses Selenium with a browser for pages that rely on JavaScript, and it keeps its data in PostgreSQL. Administrators configure the crawlers and view statistics in its administration interface. The software is written in Python and is installed with pip, from a Debian package, or as a Docker image.

## Worth knowing

The Debian install enables its daemons as always-on services, so the host has to keep processes running for the crawler and the search to work.
