---
id: litestar
name: Litestar
urls:
  home: https://litestar.dev/
  repository: https://github.com/litestar-org/litestar
  docs: https://docs.litestar.dev/
category:
  - framework
description: Python ASGI framework for building API and web applications, with typed request handling, OpenAPI generation and middleware.
status: active
maintainer: Litestar Org
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.8
templating: jinja, mako, minijinja
runsAs:
  - always-on
installMethod: pip install litestar
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-18
githubStargazers: 8530
contributors: 300
social:
  x: https://twitter.com/LitestarAPI
  discord: https://discord.gg/litestar
  forum: https://github.com/litestar-org/litestar/discussions
  subreddit: https://www.reddit.com/r/LitestarAPI
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://litestar.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/litestar-org/litestar
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.litestar.dev/2/index.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/litestar-org/litestar/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/litestar-org/litestar
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pypi.org/pypi/litestar/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/litestar/json
    checkedAt: 2026-10-26
  - field: category
    url: https://pypi.org/pypi/litestar/json
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/litestar-org/litestar/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.litestar.dev/latest/topics/deployment/manually-with-asgi-server.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/litestar-org/litestar
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/litestar-org/litestar/main/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/litestar-org/litestar/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/litestar-org/litestar/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/litestar-org/litestar
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/litestar-org/litestar/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/litestar-org/litestar/releases
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.litestar.dev/latest/usage/templating.html
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Litestar is an ASGI framework for Python that is used to build API and web applications. It is installed with pip install litestar and has built-in support for the Jinja, Mako and Minijinja template engines, which are installed through extras.

An application runs on an ASGI server such as Uvicorn, Hypercorn, Daphne or Granian. The deployment guide calls running it manually with an ASGI server mainly suited to development and testing, and recommends a container or a process control system such as Supervisor or systemd for production.

## Worth knowing

A Litestar application needs a host that keeps a process running for it.
