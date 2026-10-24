---
id: aiohttp
name: aiohttp
urls:
  home: https://docs.aiohttp.org
  repository: https://github.com/aio-libs/aiohttp
  docs: https://docs.aiohttp.org
category:
  - framework
  - library
description: Asynchronous HTTP client and server library for Python, built on asyncio, with a web server and a client session API.
status: active
maintainer: aio-libs
firstRelease: 2013
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
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-11
githubStargazers: 16588
contributors: 416
social:
  forum: https://github.com/aio-libs/aiohttp/discussions
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://docs.aiohttp.org
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/aio-libs/aiohttp
    checkedAt: 2026-10-24
  - field: urls
    url: https://docs.aiohttp.org
    checkedAt: 2026-10-24
  - field: category
    url: https://docs.aiohttp.org
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/aio-libs/aiohttp
    checkedAt: 2026-10-24
  - field: runtime
    url: https://pypi.org/pypi/aiohttp/json
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://pypi.org/pypi/aiohttp/json
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://docs.aiohttp.org
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/aio-libs/aiohttp
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/aio-libs/aiohttp/master/LICENSE.txt
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://api.github.com/users/aio-libs
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://pypi.org/pypi/aiohttp/json
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/aio-libs/aiohttp/releases/latest
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/aio-libs/aiohttp/releases/latest
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/aio-libs/aiohttp
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/aio-libs/aiohttp/contributors
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://docs.aiohttp.org/en/stable/deployment.html
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Python · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

aiohttp is an asynchronous HTTP client and server library for Python, built on asyncio. The documentation covers a client session API and a web server with middlewares, signals and pluggable routing, and both client and server support WebSockets.

A web application is an Application object run with web.run_app, which the deployment guide describes as a standalone server. The guide also covers running a pool of backend processes behind nginx or HAProxy, or gunicorn behind a reverse proxy, and recommends a tool such as Supervisord to restart the backends after a reboot or crash. The project is developed on GitHub under the aio-libs organization, with GitHub Discussions as a forum.
