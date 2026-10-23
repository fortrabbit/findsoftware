---
id: beacon
name: Beacon
urls:
  home: https://beaconcms.org
  repository: https://github.com/BeaconCMS/beacon
  docs: https://hexdocs.pm/beacon
category:
  - cms
description: Content management system for Phoenix LiveView applications, with an admin UI package and sites defined in a database.
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
basedOn:
  - phoenix
contentStore:
  - database
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: mix igniter.new, mix igniter.install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-04-01
githubStargazers: 1262
contributors: 42
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://beaconcms.org
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/BeaconCMS/beacon
    checkedAt: 2026-10-23
  - field: urls
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/BeaconCMS/beacon/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/BeaconCMS/beacon/releases/tag/v0.1.0
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/BeaconCMS/beacon/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/BeaconCMS/beacon/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/BeaconCMS/beacon
    checkedAt: 2026-10-23
  - field: runtime
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://hexdocs.pm/beacon/installation.html
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/BeaconCMS/beacon/blob/main/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/BeaconCMS/beacon/releases/tag/v0.5.1
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/BeaconCMS/beacon/releases/tag/v0.5.1
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/BeaconCMS/beacon
    checkedAt: 2026-10-23
  - field: contributors
    url: https://github.com/BeaconCMS/beacon/graphs/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: Elixir · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Beacon is a content management system built with Phoenix LiveView for Elixir. A site is defined by layouts, pages and other resources stored in a PostgreSQL database, and the Phoenix application runs as a server. The beacon_live_admin package adds a LiveView admin UI, and one application can host several sites or domains.

An Igniter installer adds Beacon to a new or an existing Phoenix project; the [installation guide](https://hexdocs.pm/beacon/installation.html) covers the steps, and the docs include a guide for deploying to Fly.io. DockYard, Inc. maintains it.

## Worth knowing

The README says to expect incomplete features and breaking changes before a stable v1.0 is released. Only PostgreSQL is supported.
