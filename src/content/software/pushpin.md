---
id: pushpin
name: Pushpin
urls:
  home: https://pushpin.org
  repository: https://github.com/fastly/pushpin
  docs: https://pushpin.org/docs/
category:
  - web-server
  - backend
description: Reverse proxy server that holds client connections open for HTTP streaming, long-polling and WebSocket realtime endpoints in front of a web service.
status: active
maintainer: Fastly, Inc.
maintainerType: company
firstRelease: 2014
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: apt package, Debian and Ubuntu
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-09-01
githubStargazers: 3865
contributors: 15
social:
  x: https://twitter.com/pushpinorg
  forum: https://community.fastly.com/c/pushpin/12
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://pushpin.org
    checkedAt: 2026-11-03
  - field: urls
    url: https://pushpin.org/docs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/fastly/pushpin
    checkedAt: 2026-11-03
  - field: license
    url: https://pushpin.org/docs/about/
    checkedAt: 2026-11-03
  - field: category
    url: https://pushpin.org
    checkedAt: 2026-11-03
  - field: category
    url: https://pushpin.org
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/fastly/pushpin
    checkedAt: 2026-11-03
  - field: runtime
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://pushpin.org/docs/install/
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/fastly/pushpin/releases/tag/v1.42.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/fastly/pushpin/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/fastly/pushpin
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/fastly/pushpin
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://pushpin.org
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pushpin is a reverse proxy that sits in front of a web service and holds client connections open, so the backend can stream data to browsers and apps. The backend answers each proxied request with GRIP response headers that tell Pushpin to hold the connection and which channel it belongs to, and it pushes data to clients by calling Pushpin's control API. Pushpin supports HTTP streaming, HTTP long-polling and WebSockets.

The [install guide](https://pushpin.org/docs/install/) covers a Debian or Ubuntu package that runs Pushpin as a systemd service, a Homebrew formula, a Docker image and a build from source.

## Worth knowing

Pushpin is a proxy, so a site that uses it still needs its own backend service behind it. Fastly maintains it and provides commercial support.
