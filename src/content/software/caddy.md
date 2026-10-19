---
id: caddy
name: Caddy
urls:
  home: https://caddyserver.com
  repository: https://github.com/caddyserver/caddy
  docs: https://caddyserver.com/docs/
  plugins: https://caddyserver.com/docs/modules
category:
  - web-server
description: Web server written in Go that obtains and renews TLS certificates automatically, configured with a Caddyfile or a JSON API.
status: active
maintainer: ZeroSSL
maintainerType: company
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: debian-ubuntu-packages, docker-image, homebrew, freebsd-port, build-from-source-go-or-xcaddy, binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-03
social:
  x: https://twitter.com/caddyserver
  forum: https://caddy.community
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://caddyserver.com/
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/caddyserver/caddy
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/caddyserver/caddy
    checkedAt: 2026-10-19
  - field: urls
    url: https://caddyserver.com/docs/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://caddyserver.com/
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://caddyserver.com/
    checkedAt: 2026-10-19
  - field: category
    url: https://caddyserver.com/
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/caddyserver/caddy
    checkedAt: 2026-10-19
  - field: runtime
    url: https://caddyserver.com/docs/install
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://endoflife.date/api/caddy.json
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/caddyserver/caddy/releases/latest
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/caddyserver/caddy
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://caddyserver.com/
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://caddyserver.com/docs/install
    checkedAt: 2026-10-19
  - field: urls
    url: https://caddyserver.com/docs/modules
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://caddyserver.com/docs/getting-started
    checkedAt: 2026-10-19
figure:
  emoji: 🖥️
  color: "#f7a399"
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

Caddy is a web server written in Go that is configured either with a Caddyfile, a plain-text format, or with JSON sent to its API. It obtains and renews TLS certificates for the sites it serves on its own, so a site behind Caddy needs no separate certificate tool to stay on HTTPS. Extensions are called modules, and the docs site keeps a directory of them.

## Worth knowing

The homepage says Caddy is free software that relies on sponsorships to survive.
