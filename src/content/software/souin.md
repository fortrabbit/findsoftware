---
id: souin
name: Souin
urls:
  home: https://docs.souin.io
  repository: https://github.com/darkweak/souin
  docs: https://docs.souin.io/docs/
  plugins: https://github.com/darkweak/souin/tree/master/plugins
category:
  - web-server
description: HTTP cache system written in Go that runs as middleware or a plugin in reverse proxies and Go web frameworks.
status: active
maintainer: Sylvain Combraque
maintainerType: individual
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: docker-image
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-16
githubStargazers: 1013
contributors: 37
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://docs.souin.io/docs/introduction/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/darkweak/souin
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/darkweak/souin
    checkedAt: 2026-10-30
  - field: urls
    url: https://docs.souin.io/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/darkweak/souin/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/darkweak/souin/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://docs.souin.io/docs/introduction/
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/darkweak/souin/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/darkweak/souin
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/darkweak/souin/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/darkweak/souin/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/darkweak/souin/releases/tag/v1.0.0
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/darkweak/souin
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/darkweak/souin/contributors
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.souin.io/docs/quickstart/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.souin.io/docs/middlewares/caddy/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.souin.io/docs/quickstart/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/darkweak/souin/blob/master/README.md
    checkedAt: 2026-10-30
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

Souin is an HTTP cache written in Go. It can be placed on top of an existing reverse proxy, or added to one as a plugin, and the project's docs list integrations for Caddy, Traefik, Tyk and several Go web frameworks. The [Caddy module](https://docs.souin.io/docs/middlewares/caddy/) is built into a Caddy binary with xcaddy. The [quickstart](https://docs.souin.io/docs/quickstart/) also runs it from a Docker image.

## Worth knowing

The standalone server is described on the quickstart page as deprecated and meant only for testing. Souin keeps one in-memory store; other storage backends are added at build time from a separate repository.
