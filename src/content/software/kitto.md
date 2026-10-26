---
id: kitto
name: Kitto
urls:
  repository: https://github.com/kittoframework/kitto
  docs: https://github.com/kittoframework/kitto/wiki
category:
  - framework
description: Elixir framework for building dashboards from React widgets fed by supervised data jobs.
status: stub
maintainer: Dimitris Zorbas
firstRelease: 2016
language: elixir
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 19
runsAs:
  - always-on
installMethod: mix archive.install of the kitto_new archive, then mix kitto.new
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2020-12-06
githubStargazers: 958
contributors: 14
social:
  forum: https://elixirforum.com/t/kitto-a-framework-for-interactive-dashboards
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/kittoframework/kitto
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/kittoframework/kitto
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/kittoframework/kitto/wiki/%5BDeployment%5D-systemd-Unit
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/kittoframework/kitto
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/kittoframework/kitto/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/kittoframework/kitto/git/refs/tags/v0.9.2
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hex.pm/api/packages/kitto
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/kittoframework/kitto/git/refs/tags/v0.9.2
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/kittoframework/kitto
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/kittoframework/kitto/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kitto is an Elixir framework for building dashboards, with React widgets for the interface. A new dashboard project is created with a Mix archive and the mix kitto.new task, and the assets are built with npm for production. The project's wiki gives a systemd unit as a sample, which keeps the server running as a service and restarts it after a failure.

## Worth knowing

The project's own site, kitto.io, did not show the software when it was checked: the root page answered 403 Forbidden and the sample dashboard answered 404. The record is a stub until that changes or a newer release appears.
