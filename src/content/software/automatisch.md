---
id: automatisch
name: Automatisch
urls:
  home: https://automatisch.io
  repository: https://github.com/automatisch/automatisch
  docs: https://automatisch.io/docs
category:
  - backend
description: Open-source workflow automation app that connects third-party services in flows, offered as a cloud solution or self-hosted.
status: active
maintainer: Automatisch
firstRelease: 2023
language: javascript
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: AGPL-3.0, LICENSE.enterprise, for files with .ee. in their name
currentMajor: "0"
latestReleaseDate: 2025-08-08
githubStargazers: 14004
contributors: 33
social:
  x: https://twitter.com/automatischio
  discord: https://discord.gg/dJSah9CVrC
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://automatisch.io/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/automatisch/automatisch
    checkedAt: 2026-10-31
  - field: urls
    url: https://automatisch.io/docs
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://automatisch.io/docs/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/automatisch/automatisch/releases/tag/v0.6.0
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/automatisch/automatisch/languages
    checkedAt: 2026-10-31
  - field: category
    url: https://automatisch.io/
    checkedAt: 2026-10-31
  - field: category
    url: https://automatisch.io/docs/apps/webhooks/connection
    checkedAt: 2026-10-31
  - field: license
    url: https://raw.githubusercontent.com/automatisch/automatisch/main/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://raw.githubusercontent.com/automatisch/automatisch/main/LICENSE
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/automatisch/automatisch/blob/main/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://automatisch.io/docs/guide/installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://automatisch.io/docs/guide/installation
    checkedAt: 2026-10-31
  - field: databases
    url: https://automatisch.io/docs/advanced/configuration
    checkedAt: 2026-10-31
  - field: databases
    url: https://automatisch.io/docs/advanced/configuration
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/automatisch/automatisch/releases/tag/v0.15.0
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/automatisch/automatisch/releases/tag/v0.15.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/automatisch/automatisch
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/automatisch/automatisch/contributors?per_page=1
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://automatisch.io/docs/guide/installation
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
---

Automatisch is a workflow automation app that connects third-party services in flows without coding. A built-in Webhooks app gives a flow a URL that accepts GET, POST, PUT and PATCH requests, so another app or site can start a flow by calling it. The [documentation](https://automatisch.io/docs) describes installing it with Docker Compose or Docker, and the configuration page lists PostgreSQL and Redis as the services it needs. It runs as two services, a main one and a worker. A cloud solution is offered beside the self-hosted install.

## Worth knowing

The license file applies AGPL-3.0 to most files and a separate enterprise license to files with ".ee." in their name; the README calls the Enterprise Edition a commercial offering.
