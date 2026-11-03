---
id: prefect
name: Prefect
urls:
  home: https://www.prefect.io
  repository: https://github.com/PrefectHQ/prefect
  docs: https://docs.prefect.io
  pricing: https://www.prefect.io/pricing
category:
  - backend
description: Python workflow orchestration framework that runs flows on schedules, events or API calls, with a self-hostable server.
status: active
maintainer: Prefect Technologies, Inc.
maintainerType: company
firstRelease: 2018
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: pip, from PyPI
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-30
githubStargazers: 24108
contributors: 427
social:
  x: https://x.com/PrefectIO
  bluesky: https://bsky.app/profile/prefect.io
  discord: https://discord.com/invite/uu8dJCgttd
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.prefect.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.prefect.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/PrefectHQ/prefect
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/PrefectHQ/prefect/blob/3.9.1/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://www.prefect.io
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.prefect.io/v3/get-started/index
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/PrefectHQ/prefect
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.prefect.io/v3/get-started/install
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/PrefectHQ/prefect/blob/3.9.1/pyproject.toml
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.prefect.io/v3/get-started/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.prefect.io/v3/get-started/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.prefect.io/v3/how-to-guides/self-hosted/server-docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.prefect.io/v3/how-to-guides/self-hosted/docker-compose
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.prefect.io/v3/api-ref/rest-api/index
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.prefect.io/v3/how-to-guides/self-hosted/server-cli
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.prefect.io/v3/how-to-guides/self-hosted/server-cli
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.prefect.io/v3/how-to-guides/self-hosted/server-cli
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.prefect.io/v3/how-to-guides/self-hosted/server-cli
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/PrefectHQ/prefect/releases/tag/3.9.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/PrefectHQ/prefect/releases/tag/3.9.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/PrefectHQ/prefect/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/PrefectHQ/prefect
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/PrefectHQ/prefect
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.prefect.io/legal/terms
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.prefect.io/pricing
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Prefect is a Python framework for writing workflows as flows, which it runs on a schedule, on an external event or through its API. Projects install the Python package with pip or uv, as the [install guide](https://docs.prefect.io/v3/get-started/install) describes, and the Prefect server can also run from the official Docker image or from a Docker Compose setup.

The self-hosted server runs as its own process and serves a web UI. Its database is SQLite by default, and the [server guide](https://docs.prefect.io/v3/how-to-guides/self-hosted/server-cli) describes switching to PostgreSQL. A REST API on the server lets other programs create flow runs from a deployment.

## Worth knowing

The server is a long-running process, and the guide shows it started with several worker processes for concurrent requests. Prefect Cloud is the hosted service beside the open-source framework and server, and the docs describe features such as SSO, roles and webhooks only for Prefect Cloud.
