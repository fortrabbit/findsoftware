---
id: zoraxy
name: Zoraxy
urls:
  home: https://zoraxy.aroz.org
  repository: https://github.com/tobychui/zoraxy
  docs: https://github.com/tobychui/zoraxy/wiki
  plugins: https://github.com/aroz-online/zoraxy-official-plugins
category:
  - web-server
description: General-purpose HTTP reverse proxy and forwarding tool written in Go, with a web interface and built-in ACME certificates.
status: active
maintainer: Toby Chui
maintainerType: individual
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: precompiled binary
licenseModel: open-source
license: AGPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-08-22
githubStargazers: 5553
contributors: 60
social:
  discord: https://discord.gg/Ejg8aXGhZk
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://zoraxy.aroz.org/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/tobychui/zoraxy
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://zoraxy.aroz.org/
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/tobychui/zoraxy/wiki/Getting-Started
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://zoraxy.aroz.org/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://zoraxy.aroz.org/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/tobychui/zoraxy
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/tobychui/zoraxy/blob/main/README.md
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/tobychui/zoraxy/releases/tag/v3.3.4
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/tobychui/zoraxy/releases/tag/v3.3.4
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/tobychui/zoraxy/releases/tag/2.2
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/tobychui/zoraxy
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/tobychui/zoraxy/contributors
    checkedAt: 2026-10-31
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

Zoraxy is a reverse proxy and forwarding tool that serves websites and other HTTP services, configured through a web UI. It is written in Go and ships as a compiled binary that runs on Linux, Windows and ARM boards. On Linux the [Getting Started guide](https://github.com/tobychui/zoraxy/wiki/Getting-Started) sets it up as a system daemon with systemctl. A Docker image is the other documented route.

Its ACME support obtains and renews Let's Encrypt certificates, with DNS challenges for some providers. The README names Nginx and Nginx Proxy Manager as the setups that its config converter helps people move from.

## Worth knowing

Plugins are kept in a separate official plugin repository. The config converter from nginx is marked experimental, and the Docker version is not meant for readers without Docker networking experience.
