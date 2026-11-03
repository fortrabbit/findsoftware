---
id: windmill
name: Windmill
urls:
  home: https://www.windmill.dev
  repository: https://github.com/windmill-labs/windmill
  docs: https://www.windmill.dev/docs/intro
  pricing: https://www.windmill.dev/pricing
category:
  - backend
  - admin-panel
description: Self-hostable code-first platform for workflows, internal apps, AI agents and data pipelines.
status: active
maintainer: Windmill Labs, Inc.
maintainerType: company
firstRelease: 2022
hqCountry: US
language: rust
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: Apache-2.0, AGPL-3.0, proprietary, proprietary (Community Edition images and binaries)
currentMajor: "1"
latestReleaseDate: 2026-11-03
githubStargazers: 18367
contributors: 167
social:
  x: https://twitter.com/WindmillDev
  discord: https://discord.com/invite/V7PM2YHsPB
  youtube: https://www.youtube.com/channel/UChD8Xc-wCGk46HDhRNwWmZA
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.windmill.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/windmill-labs/windmill
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.windmill.dev/docs/intro
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.windmill.dev/pricing
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/windmill-labs/windmill/releases/tag/v1.6.0
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.windmill.dev/terms/2026-07-21
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/windmill-labs/windmill
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/windmill-labs/windmill
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/windmill-labs/windmill/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.windmill.dev/docs/advanced/self_host
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.windmill.dev/docs/advanced/self_host
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.windmill.dev/docs/advanced/self_host
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.windmill.dev/docs/advanced/self_host
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://www.windmill.dev/docs/advanced/self_host
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.windmill.dev/docs/intro
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/windmill-labs/windmill/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/windmill-labs/windmill/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/windmill-labs/windmill/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/windmill-labs/windmill/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/windmill-labs/windmill/releases/tag/v1.858.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/windmill-labs/windmill/releases/tag/v1.858.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/windmill-labs/windmill
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/windmill-labs/windmill
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.windmill.dev
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Windmill is a platform for workflows, internal apps, AI agents and data pipelines, built around scripts: a function in one of its supported languages becomes an API endpoint and a form, and each script and flow gets webhook endpoints that other systems can call to start a run. The server is written in Rust. A self-hosted instance runs a server process that serves the web interface and the API, plus workers that pull jobs from a Postgres database, which holds the whole state of the instance, including the job queue.

The [self-hosting guide](https://www.windmill.dev/docs/advanced/self_host) describes two setups: a Docker Compose file for a single machine, which starts Postgres, the server, the workers and a Caddy reverse proxy, and a Helm chart for Kubernetes. The web IDE covers scripts, flows and apps, and access is granted per folder, group and user.

## Worth knowing

The source is split between AGPLv3 and Apache 2.0, but the Community Edition images and binaries also contain proprietary code that may be used freely but not resold, offered as a managed service or modified without an agreement; the enterprise features, including SAML and SCIM, need a commercial license. A hosted version runs at app.windmill.dev, so self-hosting is optional. Self-hosting keeps long-running server and worker processes alive, so the host has to run them continuously.
