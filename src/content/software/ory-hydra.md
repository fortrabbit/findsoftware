---
id: ory-hydra
name: Ory Hydra
urls:
  home: https://www.ory.com/hydra
  repository: https://github.com/ory/hydra
  docs: https://www.ory.com/docs/hydra
category:
  - auth
description: OpenID Certified OAuth 2.0 and OpenID Connect server that issues tokens and connects to an existing login and consent app.
status: active
maintainer: Ory Corp
maintainerType: company
firstRelease: 2016
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0
latestReleaseDate: 2026-03-20
githubStargazers: 17647
contributors: 301
social:
  x: https://x.com/orycorp
  forum: https://github.com/ory/hydra/discussions
  youtube: https://www.youtube.com/@OryCorp
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.ory.com/hydra
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.com/docs/hydra
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.ory.com/contact
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.ory.com/contact
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/ory/hydra/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ory/hydra/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ory/hydra
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/ory/hydra
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

Ory Hydra is an OAuth 2.0 authorization server and OpenID Connect provider written in Go. It issues and manages tokens and runs the protocol flows, and it connects to a separate login and consent app. The README lists PostgreSQL, MySQL and CockroachDB among the supported databases, and describes installs on Linux, macOS, Windows, Docker and Kubernetes. Ory Corp maintains the project and also offers it as a managed service on the Ory Network.

## Worth knowing

The Ory Enterprise License adds features that the open-source version does not have, along with security releases with service level agreements and support. It is distributed as a Docker image from a private registry that requires authentication, not as a public download. The open-source release line is calendar-versioned, so the current version is named by year and month rather than a major number.
