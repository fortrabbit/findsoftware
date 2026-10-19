---
id: traefik
name: Traefik
urls:
  home: https://traefik.io
  repository: https://github.com/traefik/traefik
  docs: https://doc.traefik.io/traefik/
  pricing: https://traefik.io/pricing/
  plugins: https://plugins.traefik.io/
category:
  - web-server
description: Cloud-native application proxy and reverse proxy that discovers routes from container, orchestrator and file providers.
status: active
maintainer: Traefik Labs
maintainerType: company
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker-image, kubernetes-helm-chart
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-15
social:
  x: https://twitter.com/traefik
  forum: https://community.traefik.io/
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://traefik.io/
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/traefik/traefik
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/traefik/traefik
    checkedAt: 2026-10-19
  - field: urls
    url: https://doc.traefik.io/traefik/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://traefik.io/company/
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://traefik.io/company/
    checkedAt: 2026-10-19
  - field: category
    url: https://traefik.io/pricing/
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/traefik/traefik
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/traefik/traefik
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://endoflife.date/api/traefik.json
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/traefik/traefik/releases/latest
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/traefik/traefik
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://github.com/traefik/traefik
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://doc.traefik.io/traefik/getting-started/docker/
    checkedAt: 2026-10-19
  - field: urls
    url: https://traefik.io/
    checkedAt: 2026-10-19
  - field: urls
    url: https://traefik.io/pricing/
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://doc.traefik.io/traefik/getting-started/docker/
    checkedAt: 2026-10-19
figure:
  emoji: 🖥️
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Go · Server
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Traefik is a reverse proxy and load balancer written in Go that reads route definitions from container runtimes, orchestrators and files, so routing follows the services it finds. Traefik Labs maintains it. The [Docker guide](https://doc.traefik.io/traefik/getting-started/docker/) starts with a container image, and Kubernetes users install it from a Helm chart.

## Worth knowing

Traefik Hub and Traefik Enterprise are separate commercial products from Traefik Labs; this record covers the open-source Traefik Proxy.
