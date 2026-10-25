---
id: ambassador
name: Ambassador
urls:
  repository: https://github.com/envoy/Ambassador
  docs: https://github.com/envoy/Ambassador/blob/master/README.md
category:
  - framework
description: Swift web framework for mocking HTTP API endpoints, built on the SWSGI interface and served by Embassy or another SWSGI server.
status: active
maintainer: Envoy
firstRelease: 2016
language: swift
runtime:
  - binary
hosting:
  - binary
installMethod: Swift Package Manager
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2018-10-10
githubStargazers: 190
contributors: 10
httpArchiveSites: 115
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/envoy/Ambassador
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/envoy/Ambassador/blob/master/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/envoy/Ambassador/blob/master/LICENSE
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/envoy/Ambassador
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/envoy/Ambassador/blob/master/Package.swift
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/envoy/Ambassador/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/envoy/Ambassador/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/envoy/Ambassador/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/envoy/Ambassador/blob/master/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/envoy/Ambassador/blob/master/LICENSE
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/envoy/Ambassador
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/envoy/Ambassador/tags
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/envoy/Ambassador/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/envoy/Ambassador/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/envoy/Ambassador
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/envoy/Ambassador/contributors
    checkedAt: 2026-10-24
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ambassador is a web framework for Swift that maps URL paths to response handlers, so an app can answer HTTP requests with fixed or generated responses. It is based on SWSGI, the Swift web server gateway interface. The README's example runs it on Embassy, the HTTP server that the package depends on, and says it can run with other SWSGI-compatible servers.

Handlers include a JSON response, a data response with a custom status and headers, and a decorator that delays another response by a set time or never returns it. Readers collect request bodies as data, JSON or URL-encoded parameters. The router can match paths with regular expressions and passes the captured groups to the handler.

## Worth knowing

The README describes the framework as designed for UI automatic testing and API mocking, and its example mocks API endpoints.
