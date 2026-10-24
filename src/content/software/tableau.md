---
id: tableau
name: tableau
urls:
  repository: https://github.com/elixir-tools/tableau
  docs: https://hexdocs.pm/tableau
category:
  - ssg
description: Static site generator for Elixir that builds pages from HEEx, Temple or EEx templates.
status: active
maintainer: Mitchell Hanberg
firstRelease: 2023
language: elixir
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 1.15
templating: heex, temple, eex
installMethod: mix archive, mix dependency
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-01-24
githubStargazers: 307
contributors: 17
social:
  discord: https://discord.gg/6XdGnxVA2A
  forum: https://github.com/elixir-tools/tableau/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/elixir-tools/tableau
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/elixir-tools/tableau/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/elixir-tools/tableau/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/elixir-tools/tableau/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/elixir-tools/tableau
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/elixir-tools/tableau/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/elixir-tools/tableau/blob/main/mix.exs
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/elixir-tools/tableau/blob/main/mix.exs
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/elixir-tools/tableau/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/elixir-tools/tableau
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/elixir-tools/tableau/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/elixir-tools/tableau/git/refs/tags/v0.1.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/elixir-tools/tableau/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/elixir-tools/tableau/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/elixir-tools/tableau
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/elixir-tools/tableau/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Tableau is a static site generator for Elixir. A new site is generated with the `tableau.new` Mix task, which offers HEEx, Temple or EEx templates and Tailwind CSS or a plain CSS file for assets, and Tableau can also be added as a dependency to an existing Mix project. The README describes a dev server, started with `mix tableau.server`, that rebuilds the requested page and reloads the browser when files change.
