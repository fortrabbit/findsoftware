---
id: uvicorn
name: Uvicorn
urls:
  home: https://uvicorn.dev
  repository: https://github.com/Kludex/uvicorn
  docs: https://uvicorn.dev/
category:
  - web-server
description: ASGI web server for Python that serves asynchronous web applications over HTTP and WebSockets.
status: active
maintainer: Encode OSS Ltd
maintainerType: company
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-09-25
githubStargazers: 11052
contributors: 215
social:
  discord: https://discord.gg/RxKUF5JuHs
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://uvicorn.dev/
    checkedAt: 2026-10-30
  - field: urls
    url: https://uvicorn.dev/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/Kludex/uvicorn
    checkedAt: 2026-10-30
  - field: urls
    url: https://uvicorn.dev/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/Kludex/uvicorn/0.54.0/LICENSE.md
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/Kludex/uvicorn/0.54.0/LICENSE.md
    checkedAt: 2026-10-30
  - field: category
    url: https://uvicorn.dev/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/Kludex/uvicorn
    checkedAt: 2026-10-30
  - field: runtime
    url: https://uvicorn.dev/installation/
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/Kludex/uvicorn/blob/0.54.0/pyproject.toml
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://uvicorn.dev/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://uvicorn.dev/installation/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://uvicorn.dev/deployment/
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/Kludex/uvicorn
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/Kludex/uvicorn/0.54.0/LICENSE.md
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/Kludex/uvicorn/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/Kludex/uvicorn/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://pypi.org/pypi/uvicorn/json
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/Kludex/uvicorn
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/Kludex/uvicorn/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Uvicorn is an ASGI web server for Python that serves asynchronous web applications over HTTP and WebSockets. The uvicorn command line tool is the usual way to start an application, and the same server can be started from Python code. Its workers option runs several worker processes, which the deployment page describes as spawn-based rather than pre-forking, so the process manager also works on Windows.

## Worth knowing

The documentation recommends Gunicorn with Uvicorn's worker class for production, and it deprecates the Gunicorn worker class in favour of the uvicorn-worker package. The command line options --reload and --workers cannot be used together.
