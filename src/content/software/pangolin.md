---
id: pangolin
name: Pangolin
urls:
  home: https://pangolin.net
  repository: https://github.com/fosrl/pangolin
  docs: https://docs.pangolin.net/
  pricing: https://pangolin.net/pricing
category:
  - web-server
description: Open-source networking and security platform that exposes web applications and private networks through a reverse proxy and WireGuard tunnels.
status: active
maintainer: Fossorial, Inc.
maintainerType: company
firstRelease: 2025
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - sqlite
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: AGPL-3.0, Fossorial Commercial License, SEE LICENSE IN LICENSE AND README.md
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 23269
contributors: 120
social:
  discord: https://discord.gg/HCJR8Xhme4
  youtube: https://pangolin.net/youtube
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://pangolin.net/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/fosrl/pangolin
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/fosrl/pangolin/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://pangolin.net/fcl
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/fosrl/pangolin/commits/a8172763a45f22120b9e8f00212025dcd2ea1f9a
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/fosrl/pangolin
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/fosrl/pangolin/blob/1.25.3/Dockerfile
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://docs.pangolin.net/development/system-architecture
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pangolin.net/self-host/manual/docker-compose
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.pangolin.net/self-host/quick-install
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://docs.pangolin.net/self-host/quick-install
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/fosrl/pangolin/blob/1.25.3/package.json
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/fosrl/pangolin/blob/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://pangolin.net/pricing
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/fosrl/pangolin/releases/tag/1.25.3
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/fosrl/pangolin/releases/tag/1.25.3
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/fosrl/pangolin
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/fosrl/pangolin/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: databases
    url: https://docs.pangolin.net/self-host/advanced/database-options
    checkedAt: 2026-10-30
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Pangolin publishes web applications and private networks through a reverse proxy and WireGuard tunnels, and applies identity-based access rules to them. The control plane is the Pangolin server application. It keeps its state in a SQLite or PostgreSQL database and pushes configuration to nodes, site connectors and clients over WebSocket. Users can sign in through an external OIDC identity provider. The [quick install guide](https://docs.pangolin.net/self-host/quick-install) runs a self-hosted server through an installer that starts its containers with Docker. A node runs several cooperating processes, among them Traefik and Gerbil, as the [system architecture](https://docs.pangolin.net/development/system-architecture) page describes. Pangolin Cloud, a managed service, runs the same codebase as the self-hosted server.

## Worth knowing

The repository is not uniformly AGPL-3: files that carry the Fossorial Commercial License header follow that license instead. The Enterprise Edition features need a license key on a separate Docker image, as the [Enterprise Edition page](https://docs.pangolin.net/self-host/enterprise-edition) states.
