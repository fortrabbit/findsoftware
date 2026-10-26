---
id: reflex
name: Reflex
urls:
  home: https://reflex.dev
  repository: https://github.com/reflex-dev/reflex
  docs: https://reflex.dev/docs/getting-started/introduction
  pricing: https://reflex.dev/pricing/
category:
  - framework
description: Python library for building full-stack web apps, with the frontend compiled to React and the backend run as a Python server.
status: active
maintainer: Pynecone, Inc.
maintainerType: company
firstRelease: 2022
hqCountry: US
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
basedOn:
  - react
  - fastapi
databases:
  - mysql
  - postgres
  - sqlserver
  - sqlite
runsAs:
  - always-on
renderingModes:
  - spa
  - static
  - server
installMethod: uv add reflex
licenseModel: open-core
license: Reflex Enterprise End-User License Agreement, Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-08
githubStargazers: 28978
contributors: 234
social:
  x: https://x.com/getreflex
  discord: https://discord.gg/T5WSbC2YtQ
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://reflex.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/reflex-dev/reflex
    checkedAt: 2026-10-26
  - field: urls
    url: https://reflex.dev/docs/getting-started/introduction/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://build.reflex.dev/terms-of-use
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/reflex-dev/reflex
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pypi.org/pypi/reflex/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/reflex/json
    checkedAt: 2026-10-26
  - field: category
    url: https://reflex.dev/docs/getting-started/introduction/
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://reflex.dev/blog/2024-03-21-reflex-architecture/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://reflex.dev/blog/2024-03-21-reflex-architecture/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://reflex.dev/docs/hosting/self-hosting/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://reflex.dev/blog/2024-03-21-reflex-architecture/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://reflex.dev/docs/hosting/self-hosting/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/reflex-dev/reflex/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://reflex.dev/docs/database/overview/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://build.reflex.dev/terms-of-use
    checkedAt: 2026-10-26
  - field: license
    url: https://reflex.dev/docs/enterprise/overview/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/reflex-dev/reflex
    checkedAt: 2026-10-26
  - field: urls
    url: https://reflex.dev/pricing/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/reflex-dev/reflex/releases/tag/v0.10.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/reflex-dev/reflex/releases/tag/v0.10.0
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/reflex-dev/reflex/releases/tag/v0.1.5
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/reflex-dev/reflex
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/reflex-dev/reflex/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Reflex is a Python library for building full-stack web apps, with the interface written as Python components. The [architecture post](https://reflex.dev/blog/2024-03-21-reflex-architecture/) says Reflex apps compile to a React frontend and a FastAPI backend, and that app logic and state stay in Python on the server. Production mode serves the built frontend and the backend from a single server, and the two can also run as separate processes. For data, the database docs list MySQL, PostgreSQL, SQL Server and SQLite. Pynecone, Inc., which does business as Reflex, is named in the terms of use as the company behind it.

## Worth knowing

Reflex Cloud is a managed hosting service run through the `reflex deploy` command, next to the open-source framework. The [pricing page](https://reflex.dev/pricing/) says every plan includes the open-source framework, and its plans cover hosting and the AI builder.

Reflex Enterprise is a separate package of paid features built on top of Reflex, released under its own license agreement. Its OIDC authentication plugin is one of them.
