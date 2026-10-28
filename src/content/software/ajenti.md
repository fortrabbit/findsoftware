---
id: ajenti
name: Ajenti
urls:
  repository: https://github.com/ajenti/ajenti
  docs: https://docs.ajenti.org/en/latest/
category:
  - web-server
description: Modular admin panel for Linux and BSD servers, built with Python and AngularJS, that manages system settings, services, files and packages from a browser.
status: stub
maintainer: Eugene Pankov
maintainerType: individual
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3
adminUi: true
templating: AngularJS
runsAs:
  - always-on
installMethod: install script into a virtual environment
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-25
githubStargazers: 7968
contributors: 25
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/ajenti/ajenti
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.ajenti.org/en/latest/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/ajenti/ajenti/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/ajenti/ajenti/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/ajenti/ajenti/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/ajenti/ajenti
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/ajenti/ajenti/blob/v2.2.18/ajenti-core/setup.py
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/ajenti/ajenti/blob/v2.2.18/ajenti-core/setup.py
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.ajenti.org/en/latest/man/install.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/ajenti/ajenti/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.ajenti.org/en/latest/man/install.html
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://docs.ajenti.org/en/latest/
    checkedAt: 2026-10-28
  - field: templating
    url: https://docs.ajenti.org/en/latest/
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/ajenti/ajenti/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/ajenti/ajenti/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/ajenti/ajenti/releases/tag/v2.2.15
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://pypi.org/pypi/ajenti-panel/json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ajenti/ajenti
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ajenti/ajenti/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
headlessApi: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Ajenti is a modular admin panel for Linux and BSD servers, written in Python with AngularJS for its interface. Its stock plugins cover system settings, services, cron, packages, network, files and a terminal. It is installed with pip as the ajenti-panel package, or with an install script that sets up a Python virtual environment, and it runs as a system service started by an init script.

## Worth knowing

The project's docs list no plugin that manages websites or web servers, and the panel manages the server it runs on.
