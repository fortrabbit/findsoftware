---
id: beacon-cms
name: Beacon CMS
urls:
  home: https://beaconcms.org
  repository: https://github.com/BeaconCMS/beacon
  docs: https://hexdocs.pm/beacon/installation.html
category:
  - cms
description: Content management system built with Phoenix LiveView.
status: active
maintainer: DockYard, Inc.
maintainerType: company
firstRelease: 2024
language: elixir
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 1.14
contentStore:
  - database
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: mix igniter.install beacon,beacon_live_admin
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-04-01
githubStargazers: 1262
contributors: 42
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://beaconcms.org
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/BeaconCMS/beacon
    checkedAt: 2026-10-24
  - field: urls
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/BeaconCMS/beacon/blob/main/LICENSE.md
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/BeaconCMS/beacon
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-24
  - field: databases
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/BeaconCMS/beacon/blob/main/LICENSE.md
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/BeaconCMS/beacon/blob/main/LICENSE.md
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/BeaconCMS/beacon/releases
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/BeaconCMS/beacon/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/BeaconCMS/beacon/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/BeaconCMS/beacon
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/BeaconCMS/beacon/contributors
    checkedAt: 2026-10-24
  - field: contentStore
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-24
figure:
  emoji: 📝
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Elixir · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Beacon CMS is a content management system built with Phoenix LiveView, maintained by DockYard, Inc. It is installed into a Phoenix LiveView application with the mix igniter.install command, and the [installation guide](https://hexdocs.pm/beacon/installation.html) asks for a PostgreSQL database server. The admin interface, a LiveView UI for layouts, pages and other resources, comes from the beacon_live_admin package that the install command adds. The README describes a site as components stored in the database and served by a running server, and a [guide on multiple domains](https://github.com/BeaconCMS/beacon/blob/main/guides/recipes/multiple-domains-hosting.md) covers hosting several sites in one application.

## Worth knowing

The README says to expect incomplete features and breaking changes before a stable v1.0 is released, and it describes the page builder as being in its initial stages.
