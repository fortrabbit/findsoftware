---
id: alfred
name: Alfred
urls:
  repository: https://github.com/rknell/alfred
  docs: https://github.com/rknell/alfred/blob/master/README.md
category:
  - framework
  - web-server
description: Express-style web server and REST API framework for Dart, with routing, middleware, body parsing and static file serving.
status: active
maintainer: rknell
maintainerType: individual
firstRelease: 2021
language: dart
headlessApi:
  - rest
installMethod: dart pub add alfred
licenseModel: open-source
license: MIT, BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2025-05-19
githubStargazers: 532
contributors: 12
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/rknell/alfred
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/rknell/alfred/blob/master/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://api.github.com/repos/rknell/alfred
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/rknell/alfred
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/rknell/alfred/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://pub.dev/packages/alfred/install
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/rknell/alfred/blob/master/LICENSE
    checkedAt: 2026-10-24
  - field: license
    url: https://pub.dev/packages/alfred
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://pub.dev/api/packages/alfred
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://pub.dev/api/packages/alfred
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://pub.dev/api/packages/alfred
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/rknell/alfred
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/rknell/alfred/contributors
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://github.com/rknell/alfred/blob/master/README.md
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Alfred is a web server and REST API framework for Dart. The README describes its routing and middleware as Express-style: handlers are registered for an HTTP method and path, and a handler can return a string, a map or list (sent as JSON), a file or a binary stream instead of calling a response method. Request bodies in URL-encoded, multipart and JSON form are parsed, and the framework includes CORS middleware, static file serving, WebSocket routes and resumable file downloads.

The framework has no database layer. The README points to the Dart drivers for MongoDB, PostgreSQL and SQLite, which applications use directly.

## Worth knowing

The LICENSE file states that the core library is MIT-licensed and that some parts are BSD-licensed, because they were brought in from older Google code.
