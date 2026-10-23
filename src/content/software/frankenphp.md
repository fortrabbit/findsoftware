---
id: frankenphp
name: FrankenPHP
urls:
  home: https://frankenphp.dev
  repository: https://github.com/php/frankenphp
  docs: https://frankenphp.dev/docs/
category:
  - web-server
description: Application server for PHP written in Go that embeds the official PHP executor in the Caddy web server.
status: active
maintainer: Kévin Dunglas
maintainerType: individual
language: go
runtime:
  - binary
hosting:
  - binary
runtimeMin: php 8.2
basedOn:
  - caddy
runsAs:
  - always-on
renderingModes:
  - server
installMethod: install-script-sh, install-script-powershell, homebrew, docker-image, standalone-binary, build-from-source, go-library
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-16
githubStargazers: 11404
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://frankenphp.dev/
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/php/frankenphp
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/php/frankenphp
    checkedAt: 2026-10-19
  - field: urls
    url: https://frankenphp.dev/docs/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://frankenphp.dev/
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://frankenphp.dev/
    checkedAt: 2026-10-19
  - field: category
    url: https://frankenphp.dev/docs/
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://frankenphp.dev/docs/
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/php/frankenphp
    checkedAt: 2026-10-19
  - field: runtime
    url: https://frankenphp.dev/
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://frankenphp.dev/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/php/frankenphp/releases/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/php/frankenphp/releases/latest
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/php/frankenphp
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://github.com/php/frankenphp
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://frankenphp.dev/docs/
    checkedAt: 2026-10-19
  - field: renderingModes
    url: https://frankenphp.dev/docs/worker/
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/php/frankenphp
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://frankenphp.dev/docs/docker/
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
packagistDownloads: null
npmWeeklyDownloads: null
---

FrankenPHP is an application server for PHP written in Go and built on top of Caddy. It embeds the official PHP executor in the Caddy web server, so PHP runs inside the server process. Kévin Dunglas maintains the project. The binaries bundle a PHP build, so the PHP version ships with the server.

## Worth knowing

In [worker mode](https://frankenphp.dev/docs/worker/) the application stays in memory between requests instead of starting fresh for each one.
