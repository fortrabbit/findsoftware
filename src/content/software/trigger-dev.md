---
id: trigger-dev
name: Trigger.dev
urls:
  home: https://trigger.dev
  repository: https://github.com/triggerdotdev/trigger.dev
  docs: https://trigger.dev/docs
  pricing: https://trigger.dev/pricing
category:
  - backend
description: Open-source platform for building durable AI agents and background tasks in TypeScript, offered as a cloud service and for self-hosting.
status: active
maintainer: API Hero Ltd
maintainerType: company
firstRelease: 2023
hqCountry: GB
language: javascript
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
installMethod: Docker Compose
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "4"
latestReleaseDate: 2026-10-30
githubStargazers: 16705
npmWeeklyDownloads: 1770581
contributors: 146
social:
  x: https://twitter.com/triggerdotdev
  bluesky: https://bsky.app/profile/triggerdev.bsky.social
  discord: https://discord.gg/nkqV9xBYWy
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://trigger.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/triggerdotdev/trigger.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://trigger.dev/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://trigger.dev/legal/privacy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://trigger.dev/legal/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://trigger.dev/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/triggerdotdev/trigger.dev
    checkedAt: 2026-11-03
  - field: databases
    url: https://trigger.dev/docs/self-hosting/kubernetes
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://trigger.dev/docs/observability/query
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://trigger.dev/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trigger.dev/docs/self-hosting/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trigger.dev/docs/self-hosting/kubernetes
    checkedAt: 2026-11-03
  - field: urls
    url: https://trigger.dev/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://trigger.dev/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://registry.npmjs.org/@trigger.dev/sdk/latest
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/triggerdotdev/trigger.dev/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/triggerdotdev/trigger.dev/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/triggerdotdev/trigger.dev/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/triggerdotdev/trigger.dev
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/triggerdotdev/trigger.dev/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@trigger.dev/sdk
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Trigger.dev is an open-source platform for building durable AI agents and workflows in TypeScript. Its managed cloud service runs the tasks, and the same open-source code can be self-hosted with Docker Compose or with the official Helm chart for Kubernetes. A self-hosted instance runs a webapp that includes the dashboard, and a worker that executes tasks. The self-hosted stack uses PostgreSQL, Redis and ClickHouse.

## Worth knowing

The self-hosting docs state that the self-hosted version is functionally the same as the cloud service with some exceptions. Warm starts, auto-scaling, checkpoints and dedicated support are listed as cloud features. The SDK package is published under the MIT license, which differs from the Apache-2.0 license of the platform code.
