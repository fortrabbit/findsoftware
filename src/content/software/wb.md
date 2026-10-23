---
id: wb
name: Writer's Block
urls:
  repository: https://github.com/aerosol/wb
  docs: https://github.com/aerosol/wb/blob/develop/doc-food/docs/installation.md
category:
  - ssg
description: Elixir command-line engine that generates a static HTML personal wiki from a directory of Markdown documents.
status: stub
maintainer: Adam Rutkowski
maintainerType: individual
firstRelease: 2020
language: elixir
runtime:
  - beam
hosting:
  - static
runtimeMin: beam 1.11
contentStore:
  - flat-file
templating: eex
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: mix escript.install github aerosol/wb
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2022-11-27
githubStargazers: 38
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://mtod.org/wb/mtod-wb/index.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/aerosol/wb
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/installation.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/aerosol/wb/develop/mix.exs
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/aerosol/wb
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/usage.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/aerosol/wb/develop/mix.exs
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/installation.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/installation.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/installation.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/usage.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/usage.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/usage.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/usage.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/aerosol/wb
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/aerosol/wb/develop/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://hex.pm/api/packages/wb
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/aerosol/wb/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/aerosol/wb/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/aerosol/wb
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/aerosol/wb/contributors
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/aerosol/wb/develop/doc-food/docs/features.md
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Elixir · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Writer's Block, run as the `wb` command, is an Elixir tool for a personal wiki. Its documents are Markdown files in a folder, and it generates the site as static HTML into a separate build root. It is installed with `mix escript.install` from the GitHub repository, or built as a Docker image, and the [installation page](https://github.com/aerosol/wb/blob/develop/doc-food/docs/installation.md) lists Elixir 1.11 or greater as the prerequisite.

## Worth knowing

The README points to mtod.org/wb/, which carries no software documentation, so the install and usage pages are the ones in the repository. The record is a stub until the project shows the software on a site of its own again.
