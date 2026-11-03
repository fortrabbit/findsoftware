---
id: medama
name: Medama Analytics
urls:
  home: https://oss.medama.io/introduction
  repository: https://github.com/medama-io/medama
  docs: https://oss.medama.io/introduction
category:
  - analytics
description: Self-hostable, cookie-free website analytics that runs as a single server binary or a Docker image.
status: active
maintainer: Ayuhito
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary download from GitHub Releases
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "0"
latestReleaseDate: 2026-01-18
githubStargazers: 640
contributors: 3
social:
  discord: https://medama.io/discord
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://oss.medama.io/introduction
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/medama-io/medama
    checkedAt: 2026-11-03
  - field: urls
    url: https://oss.medama.io/introduction.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/medama-io/medama/main/tracker/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/medama-io/medama
    checkedAt: 2026-11-03
  - field: category
    url: https://oss.medama.io/introduction.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://oss.medama.io/deployment/installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://oss.medama.io/deployment/installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://oss.medama.io/deployment/docker.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://oss.medama.io/deployment/docker.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://oss.medama.io/deployment/installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://oss.medama.io/deployment/installation.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://oss.medama.io/config/cli.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://oss.medama.io/api-reference/introduction.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/medama-io/medama/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/medama-io/medama/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/medama-io/medama/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/medama-io/medama/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/medama-io/medama/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/medama-io/medama/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/medama-io/medama
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/medama-io/medama/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Medama Analytics is website analytics that runs as a single server binary with no additional database setup, or as a Docker image. The [installation guide](https://oss.medama.io/deployment/installation.md) describes the binary, which a start command launches as the analytics server. The tracking script is served by the analytics instance and loaded with a script tag in the page head.

The web interface is a single page application that is built on the same API that external dashboards can call, and the instance serves an OpenAPI description of that API. The project describes its tracker as cookie free and as collecting no IP addresses or other identifiers. The Fly.io and Railway guides deploy the same Docker image on those platforms.

## Worth knowing

The single-binary guide lists Windows as unsupported and suggests Docker there.
