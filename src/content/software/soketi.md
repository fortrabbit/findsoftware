---
id: soketi
name: soketi
urls:
  home: https://soketi.app
  repository: https://github.com/soketi/soketi
  docs: https://docs.soketi.app
category:
  - backend
description: Open-source WebSocket server that implements the Pusher protocol, so Pusher-compatible clients and SDKs can connect to it.
status: active
maintainer: Alex Renoki
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mysql
  - postgres
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2024-03-25
githubStargazers: 5634
npmWeeklyDownloads: 3170
contributors: 23
social:
  discord: https://discord.gg/VgfKCQydjb
  forum: https://github.com/soketi/soketi/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://soketi.app
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/soketi/soketi
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.soketi.app
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.soketi.app
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/soketi/soketi
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/soketi/soketi/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/soketi/soketi
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.soketi.app/getting-started/installation/cli-installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.soketi.app/getting-started/installation/cli-installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.soketi.app/getting-started/installation/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.soketi.app/getting-started/installation/helm-charts
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.soketi.app/getting-started/installation/cli-installation
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.soketi.app/app-management/introduction
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.soketi.app/app-management/dynamodb
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.soketi.app/getting-started/redis-configuration
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/soketi/soketi/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/soketi/soketi/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/soketi/soketi
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/soketi/soketi
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@soketi/soketi
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/soketi/soketi/blob/1.6.1/package.json
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

soketi is an open-source WebSocket server that speaks the Pusher protocol, and according to the [README](https://github.com/soketi/soketi/blob/1.x/README.md) existing projects that connect to Pusher need minimal code change to work with it. It is written in TypeScript and runs on Node.js. It installs from npm, from a Docker image, or as a Helm chart for Kubernetes. The [install guide](https://docs.soketi.app/getting-started/installation/cli-installation) describes running it under a process manager so that it stays up and restarts on failure.

App definitions, which hold the credentials that clients and the backend authenticate with, may be stored in MySQL, PostgreSQL or DynamoDB. Redis holds data for horizontal scaling, rate limiting and queues.

## Worth knowing

The install guide says Node.js LTS is required for the CLI build, because of uWebSockets.js build limitations. The Helm chart lives in a separate GitHub repository, and the Docker images are published to quay.io rather than Docker Hub.
