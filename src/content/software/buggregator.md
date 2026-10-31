---
id: buggregator
name: Buggregator
urls:
  home: https://buggregator.dev
  repository: https://github.com/buggregator/server
  docs: https://docs.buggregator.dev
category:
  - dev-tool
  - analytics
description: Debugging server that receives exceptions, variable dumps, emails, profiles and logs from application SDKs and shows them in one real-time web UI.
status: active
maintainer: Buggregator
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
runsAs:
  - local
  - always-on
installMethod: binary-download
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-08-17
githubStargazers: 1079
contributors: 5
social:
  x: https://twitter.com/buggregator
  discord: https://discord.gg/uxr5gw2p
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://buggregator.dev
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/buggregator/server
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.buggregator.dev
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/buggregator/server
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/buggregator/server
    checkedAt: 2026-10-31
  - field: runtime
    url: https://docs.buggregator.dev
    checkedAt: 2026-10-31
  - field: category
    url: https://buggregator.dev
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/buggregator/server/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.buggregator.dev
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.buggregator.dev
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/buggregator/server/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.buggregator.dev/config/helm-chart.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://buggregator.dev
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.buggregator.dev
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/buggregator/server/blob/master/README.md
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/buggregator/server/blob/master/README.md
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/buggregator/server/releases/tag/v2.4.1
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/buggregator/server/releases/tag/v2.4.1
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/buggregator/server/releases/tag/1.0-rc.1
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/buggregator/server
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/buggregator/server
    checkedAt: 2026-10-31
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

Buggregator is a debugging server that receives events from application SDKs and shows them in one real-time web UI. The server is a single Go binary with an embedded SQLite database, and the Sentry SDK, Symfony VarDumper and Monolog send to it by a changed address rather than by code changes. The [documentation](https://docs.buggregator.dev) describes a binary download, a Docker image from the GitHub Container Registry and a Helm chart for Kubernetes as install routes.

## Worth knowing

The project's own site describes the server as made for development environments, and the SQLite database is in memory by default unless a file is configured. The 1.x branch is a separate PHP version, which the docs point to.
