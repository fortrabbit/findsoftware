---
id: jaspr
name: Jaspr
urls:
  home: https://jaspr.site
  repository: https://github.com/schultek/jaspr
  docs: https://docs.jaspr.site
category:
  - framework
description: Dart web framework for building websites with client-side, server-side and static rendering.
status: active
maintainer: The Jaspr Authors
maintainerType: community
firstRelease: 2022
language: dart
runtime:
  - dart
  - binary
hosting:
  - dart
  - binary
  - static
runtimeMin: dart 3.8
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
  - spa
installMethod: dart pub global activate jaspr_cli, then jaspr create
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-25
githubStargazers: 2509
contributors: 66
social:
  discord: https://discord.gg/XGXrGEk4c6
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://jaspr.site/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/schultek/jaspr
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.jaspr.site/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/schultek/jaspr/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/schultek/jaspr
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/schultek/jaspr/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/schultek/jaspr/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/schultek/jaspr/main/docs/dev/deploying.mdx
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pub.dev/api/packages/jaspr
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://docs.jaspr.site/dev/modes
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.jaspr.site/dev/deploying
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.jaspr.site/dev/server
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.jaspr.site/quick_start
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/schultek/jaspr/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/schultek/jaspr/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pub.dev/api/packages/jaspr
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/schultek/jaspr/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pub.dev/api/packages/jaspr
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/schultek/jaspr
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/schultek/jaspr/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Jaspr is a Dart framework for building websites with client-side, server-side and static rendering. A site picks one of three rendering modes: static builds it to files at build time, server runs a Dart HTTP server that renders each request, and client mode leaves rendering to the browser. The [quickstart](https://docs.jaspr.site/quick_start) installs the jaspr_cli package from pub.dev, where the framework is published as jaspr, and creates the project with the jaspr create command.

## Worth knowing

A server-mode site is a Dart process that keeps running, so it needs a host that runs one. The [deployment guide](https://docs.jaspr.site/dev/deploying) lists static hosts for static output, and Firebase Hosting and GitHub Pages are named there as examples.
