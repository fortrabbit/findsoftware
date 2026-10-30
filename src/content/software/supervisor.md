---
id: supervisor
name: Supervisor
urls:
  home: https://supervisord.org/
  repository: https://github.com/Supervisor/supervisor
  docs: https://supervisord.org/
category:
  - web-server
description: Client/server process control system, written in Python, that starts, stops and monitors programs on UNIX-like operating systems.
status: active
maintainer: Agendaless Consulting
firstRelease: 2004
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.4
adminUi: true
runsAs:
  - always-on
installMethod: pip install supervisor
licenseModel: open-source
license: BSD-derived
currentMajor: "4"
latestReleaseDate: 2025-08-23
githubStargazers: 9154
contributors: 148
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://supervisord.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://supervisord.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/Supervisor/supervisor
    checkedAt: 2026-10-30
  - field: urls
    url: https://supervisord.org/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://supervisord.org/
    checkedAt: 2026-10-30
  - field: category
    url: https://supervisord.org/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/Supervisor/supervisor
    checkedAt: 2026-10-30
  - field: runtime
    url: https://supervisord.org/introduction.html
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://supervisord.org/introduction.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://supervisord.org/installing.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://supervisord.org/installing.html
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://supervisord.org/running.html
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://supervisord.org/introduction.html
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/Supervisor/supervisor/blob/main/setup.py
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/Supervisor/supervisor/blob/main/LICENSES.txt
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/Supervisor/supervisor/tree/4.3.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/Supervisor/supervisor/tree/4.3.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://supervisord.org/changes.html
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/Supervisor/supervisor
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/Supervisor/supervisor/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Supervisor is a client/server system that monitors and controls processes on UNIX-like operating systems. Its server, supervisord, runs in the background unless its configuration sets it to stay in the foreground. The software is installed with pip, and the [installation guide](https://supervisord.org/installing.html) also describes a distribution package route.

## Worth knowing

Supervisor runs on UNIX-like systems and does not run under Windows, according to its [introduction](https://supervisord.org/introduction.html).
