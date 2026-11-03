---
id: docassemble
name: docassemble
urls:
  home: https://docassemble.org
  repository: https://github.com/jhpyle/docassemble
  docs: https://docassemble.org/docs.html
category:
  - forms
description: Expert system that runs guided interviews written in YAML and Markdown with Python logic, and assembles documents from the answers.
status: active
maintainer: Jonathan Pyle
maintainerType: individual
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.12
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
templating: mako, markdown
i18n: yes, interviews in languages other than English
runsAs:
  - always-on
installMethod: Docker image jhpyle/docassemble
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-29
githubStargazers: 999
contributors: 39
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/jhpyle/docassemble
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/jhpyle/docassemble
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: language
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://pypi.org/pypi/docassemble.webapp/json
    checkedAt: 2026-11-03
  - field: category
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docassemble.org/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docassemble.org/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docassemble.org/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docassemble.org/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docassemble.org/download.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docassemble.org/deploy.html
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docassemble.org/deploy.html
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docassemble.org/docs/api.html
    checkedAt: 2026-11-03
  - field: i18n
    url: https://docassemble.org/docs/language.html
    checkedAt: 2026-11-03
  - field: databases
    url: https://docassemble.org/docs/installation.html
    checkedAt: 2026-11-03
  - field: templating
    url: https://docassemble.org/docs/roles.html
    checkedAt: 2026-11-03
  - field: templating
    url: https://docassemble.org/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/jhpyle/docassemble/blob/master/CHANGELOG.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://pypi.org/pypi/docassemble.webapp/json
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://pypi.org/pypi/docassemble.webapp/json
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/jhpyle/docassemble
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/jhpyle/docassemble/contributors
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/jhpyle/docassemble/blob/master/LICENSE.txt
    checkedAt: 2026-11-03
ai: authored
contentStore: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

docassemble is an expert system for guided interviews and document assembly, written in Python. Interview text is written in YAML and Markdown, and the software provides a web site that conducts interviews with users.

The project documents several ways to install it: the Docker image, Docker Compose or Helm, a manual installation without Docker, and the docassemble.webapp package from PyPI. The deploy guide describes running a server on the internet, and the installation page assumes PostgreSQL as the SQL database.

## Worth knowing

The Docker image is the route the deploy guide calls the easiest. The code is MIT-licensed, and the documentation is under CC BY 3.0.
