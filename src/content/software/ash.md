---
id: ash
name: Ash Framework
urls:
  home: https://www.ash-hq.org
  repository: https://github.com/ash-project/ash
  docs: https://hexdocs.pm/ash
category:
  - framework
description: Declarative, extensible framework for building Elixir applications around resources and actions.
status: active
maintainer: Ash Framework
firstRelease: 2019
language: elixir
runtime:
  - beam
hosting:
  - elixir
databases:
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - graphql
installMethod: mix (Hex package)
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 2541
contributors: 319
social:
  bluesky: https://bsky.app/profile/ash-hq.org
  discord: https://discord.gg/w3AXeARR2p
  forum: https://elixirforum.com/ash
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/ash-project/ash
    checkedAt: 2026-10-24
  - field: urls
    url: https://www.ash-hq.org
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://www.ash-hq.org
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/ash-project/ash
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/ash-project/ash/blob/main/documentation/topics/about_ash/what-is-ash.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/ash-project/ash/blob/v3.37.0/mix.exs
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/ash-project/ash/blob/main/documentation/tutorials/get-started.md
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/ash-project/ash/blob/main/README.md
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://hex.pm/api/packages/ash
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://github.com/ash-project/ash/releases/tag/v3.37.0
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://github.com/ash-project/ash/releases/tag/v3.37.0
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/ash-project/ash
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/ash-project/ash/contributors
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ash Framework is a declarative, extensible framework for building Elixir applications around resources and actions. An application declares its resources and actions. Extension packages add data layers for PostgreSQL and SQLite, a GraphQL API and an admin interface, which is the separate AshAdmin package. The framework is installed as a Hex package with mix and the igniter tool, and its reference documentation is published on hexdocs.

## Worth knowing

The homepage says Ash works with Phoenix LiveView, and the framework builds on Ecto, Phoenix, Oban and Absinthe, which are separate projects that an Ash application uses alongside it.
