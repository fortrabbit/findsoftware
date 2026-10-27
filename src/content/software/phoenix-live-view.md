---
id: phoenix-live-view
name: Phoenix LiveView
urls:
  repository: https://github.com/phoenixframework/phoenix_live_view
  docs: https://phoenix-live-view.hexdocs.pm
category:
  - framework
description: Elixir library for building rich, real-time user interfaces with server-rendered HTML.
status: active
maintainer: Chris McCord
firstRelease: 2019
language: elixir
runtime:
  - beam
hosting:
  - elixir
basedOn:
  - phoenix
templating: heex
runsAs:
  - always-on
renderingModes:
  - server
installMethod: mix phx.new
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 6833
contributors: 436
httpArchiveSites: 848
dependentRepos: 3588
dependentPackages: 267
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://api.github.com/repos/phoenixframework/phoenix_live_view
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/phoenixframework/phoenix_live_view/blob/main/README.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://hex.pm/api/packages/phoenix_live_view
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/phoenixframework/phoenix_live_view/blob/main/LICENSE.md
    checkedAt: 2026-10-27
  - field: language
    url: https://api.github.com/repos/phoenixframework/phoenix_live_view
    checkedAt: 2026-10-27
  - field: runtime
    url: https://github.com/phoenixframework/phoenix_live_view/blob/v1.2.13/mix.exs
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/phoenixframework/phoenix_live_view/blob/main/README.md
    checkedAt: 2026-10-27
  - field: templating
    url: https://github.com/phoenixframework/phoenix_live_view/blob/main/README.md
    checkedAt: 2026-10-27
  - field: renderingModes
    url: https://github.com/phoenixframework/phoenix_live_view/blob/main/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://api.github.com/repos/phoenixframework/phoenix_live_view
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://api.github.com/repos/phoenixframework/phoenix_live_view
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/phoenixframework/phoenix_live_view/releases
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/phoenixframework/phoenix_live_view/releases
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://api.github.com/repos/phoenixframework/phoenix_live_view
    checkedAt: 2026-10-27
  - field: contributors
    url: https://api.github.com/repos/phoenixframework/phoenix_live_view/contributors?per_page=1
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/phoenix_live_view
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/phoenix_live_view
    checkedAt: 2026-10-27
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/phoenixframework/phoenix_live_view/blob/main/README.md
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://hexdocs.pm/phoenix_live_view/welcome.html
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://hexdocs.pm/phoenix_live_view/welcome.html
    checkedAt: 2026-10-27
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Phoenix LiveView is an Elixir library that renders pages on the server and holds a persistent connection to the browser, which receives only the changes. Pages are written in HEEx, the template language the README names as part of LiveView.

LiveView is a part of Phoenix: the docs say it is included by default in Phoenix applications and that using it requires an installed Phoenix application. New Phoenix applications created with mix phx.new ship with it, and the README points to a separate guide for adding it to an older Phoenix application.
