---
id: pomerium
name: Pomerium
urls:
  home: https://www.pomerium.com
  repository: https://github.com/pomerium/pomerium
  docs: https://www.pomerium.com/docs
  pricing: https://www.pomerium.com/pricing
category:
  - web-server
  - auth
description: Identity- and context-aware reverse proxy that puts authentication and access policy in front of internal web apps and services.
status: active
maintainer: Pomerium, Inc.
maintainerType: company
firstRelease: 2019
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: pre-built binary
licenseModel: open-core
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-27
githubStargazers: 5085
contributors: 93
social:
  x: https://twitter.com/pomerium_io
  bluesky: https://bsky.app/profile/pomerium.io
  forum: https://discuss.pomerium.com/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/pomerium/pomerium/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.pomerium.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/pomerium/pomerium
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.pomerium.com/docs
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/pomerium/pomerium/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.pomerium.com/terms-of-service
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://www.pomerium.com/terms-of-service
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.pomerium.com/privacy-policy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/pomerium/pomerium/commits/v0.0.1
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/pomerium/pomerium
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.pomerium.com/docs/deploy/core
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.pomerium.com/docs/deploy/core
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.pomerium.com/docs/deploy/core
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.pomerium.com/docs/deploy/core
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.pomerium.com/docs/deploy/core
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.pomerium.com/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/pomerium/pomerium
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.pomerium.com/docs/deploy/enterprise
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/pomerium/pomerium/releases/tag/v0.33.6
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/pomerium/pomerium/releases/tag/v0.33.6
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/pomerium/pomerium
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/pomerium/pomerium/contributors
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.pomerium.com/docs/reference/databroker
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pomerium is an identity- and context-aware reverse proxy written in Go. It sits in front of internal web apps and other services, authenticates users through an OpenID Connect identity provider, and connects them without a corporate VPN. The open-source server is Pomerium Core, and the [deploy guide](https://www.pomerium.com/docs/deploy/core) describes installing it from a standalone binary, from deb and rpm packages, or from a container image. When installed from the OS packages, the server runs as a systemd service. Its databroker keeps state in PostgreSQL where that backend is configured.

Pomerium Zero is the vendor's managed control plane, and every plan runs a self-hosted data plane that handles application traffic. A self-hosted control plane comes with Pomerium Enterprise, which adds an Enterprise Console, directory sync and audit logs on top of Core.
