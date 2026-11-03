---
id: hook0
name: Hook0
urls:
  home: https://www.hook0.com
  repository: https://github.com/hook0/hook0
  docs: https://documentation.hook0.com/
  pricing: https://www.hook0.com/pricing
category:
  - backend
description: Open-source webhook server that receives events from an application through a REST API and delivers them to subscribers' endpoints, with retries, signatures and delivery logs.
status: active
maintainer: FGRibreau SARL
maintainerType: company
firstRelease: 2025
hqCountry: FR
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: source-available
license: SSPL-1.0
latestReleaseDate: 2026-05-13
githubStargazers: 1505
contributors: 13
social:
  x: https://twitter.com/hook0_
  discord: https://discord.com/invite/VB68XsCPQ6
  youtube: https://www.youtube.com/channel/UCFGvNaoV6Ycdb6uh1rIvMcg
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.hook0.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hook0/hook0
    checkedAt: 2026-11-03
  - field: urls
    url: https://documentation.hook0.com/docs/what-is-hook0
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hook0/hook0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/hook0/hook0/tree/v1.0.0
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.hook0.com/terms
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://www.hook0.com/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.hook0.com/terms
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/hook0/hook0
    checkedAt: 2026-11-03
  - field: runtime
    url: https://documentation.hook0.com/docs/self-hosting/bare-metal
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://documentation.hook0.com/docs/self-hosting/bare-metal
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://documentation.hook0.com/docs/self-hosting/docker-compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://documentation.hook0.com/docs/self-hosting/bare-metal
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://documentation.hook0.com/docs/self-hosting/kubernetes
    checkedAt: 2026-11-03
  - field: databases
    url: https://documentation.hook0.com/docs/self-hosting/bare-metal
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/hook0/hook0
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.hook0.com/pricing
    checkedAt: 2026-11-03
  - field: category
    url: https://www.hook0.com/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/hook0/hook0
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/hook0/hook0/graphs/contributors
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hook0/hook0/releases/tag/api%2Fv1.0.2
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hook0 is a webhook server that an application calls to send events, and that delivers each event to the endpoints the application's users subscribe to, with retries, signatures and delivery logs. The application sends an event with one POST to the server's REST API, the server keeps the events and their delivery attempts, and a web dashboard manages the webhooks. The server is built from source with Cargo or started with Docker Compose or a Kubernetes deployment file, and it keeps its data in PostgreSQL. The project is operated by FGRibreau SARL in France, which also runs the hosted service, [Hook0 Cloud](https://www.hook0.com/pricing).

## Worth knowing

The self-hosting guides for Docker Compose, bare metal and Kubernetes are each headed "Development Only", and they point production workloads to Hook0 Cloud. The same guides set DISABLE_TARGET_IP_CHECK to true, which lets a webhook target on a local address receive deliveries.
