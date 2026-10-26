---
id: quart
name: Quart
urls:
  home: https://quart.palletsprojects.com
  repository: https://github.com/pallets/quart
  docs: https://quart.palletsprojects.com
  plugins: https://quart.palletsprojects.com/en/latest/how_to_guides/quart_extensions.html
category:
  - framework
description: Async Python web framework on asyncio with the same API as Flask.
status: active
maintainer: Pallets
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.13
basedOn:
  - flask
templating: jinja2
runsAs:
  - always-on
renderingModes:
  - server
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-12
githubStargazers: 3678
contributors: 104
social:
  discord: https://discord.gg/pallets
  forum: https://github.com/pallets/quart/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/pallets/quart
    checkedAt: 2026-10-26
  - field: urls
    url: https://quart.palletsprojects.com/en/latest/
    checkedAt: 2026-10-26
  - field: urls
    url: https://quart.palletsprojects.com/en/latest/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/pallets/quart/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/pallets/quart
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/pallets/quart/main/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://raw.githubusercontent.com/pallets/quart/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/pallets/quart/main/docs/tutorials/installation.rst
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://raw.githubusercontent.com/pallets/quart/main/docs/tutorials/installation.rst
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/pallets/quart/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/pallets/quart/main/docs/tutorials/deployment.rst
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/pallets/quart/main/docs/tutorials/deployment.rst
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/pallets/quart/main/docs/how_to_guides/templating.rst
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/pallets/quart
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/pallets/quart/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/quart/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/pallets/quart/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/pallets/quart/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/pallets/quart
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/pallets/quart/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://quart.palletsprojects.com/en/latest/how_to_guides/quart_extensions.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://raw.githubusercontent.com/pallets/quart/main/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Quart is an async Python web framework built on asyncio. The project describes it as an asyncio reimplementation of Flask, and its documentation includes a migration guide for applications that move from Flask. A Quart application can render HTML templates, write JSON APIs, serve WebSockets and stream request and response data.

Requests reach the application through an ASGI server. The deployment guide recommends Hypercorn and names Daphne and Uvicorn as other servers that work with Quart.

## Worth knowing

The deployment guide advises against running the application through the built-in run method in production. It also describes a serverless option through Mangum on AWS Lambda.
