---
id: shelf
name: Shelf
urls:
  repository: https://github.com/dart-lang/shelf
  docs: https://github.com/dart-lang/shelf/tree/master/pkgs/shelf
category:
  - library
description: Dart package that models web server middleware as composable request-to-response functions.
status: active
maintainer: the Dart project authors
maintainerType: community
firstRelease: 2014
language: dart
runtime:
  - dart
hosting:
  - dart
runtimeMin: dart 3.9
runsAs:
  - always-on
installMethod: pub dependency in pubspec.yaml
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-10-16
githubStargazers: 1012
contributors: 58
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/dart-lang/shelf
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/dart-lang/shelf/master/pkgs/shelf/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/dart-lang/shelf/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/dart-lang/shelf
    checkedAt: 2026-10-26
  - field: category
    url: https://pub.dev/packages/shelf
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/dart-lang/shelf/master/pkgs/shelf/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pub.dev/api/packages/shelf
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://pub.dev/packages/shelf
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/dart-lang/shelf/master/pkgs/shelf/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/dart-lang/shelf
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pub.dev/api/packages/shelf
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/dart-lang/shelf/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/dart-lang/shelf/releases
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/dart-lang/shelf/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/dart-lang/shelf
    checkedAt: 2026-10-26
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

Shelf is a Dart package for building web servers from handler functions. A handler takes a request and returns a response, and the package's example composes a pipeline of middleware around a handler before passing it to `shelf_io.serve`, which listens on a host and port. The package is published on pub.dev as `shelf` and developed in the dart-lang/shelf repository alongside the packages that build on it, which the README names as examples of extensions.
