---
id: hologram
name: Hologram
urls:
  home: https://hologram.page
  repository: https://github.com/bartblast/hologram
  docs: https://hologram.page/docs/installation
category:
  - framework
description: Elixir full-stack web framework whose client-side code runs in the browser as Elixir, compiled to JavaScript.
status: active
maintainer: Bart Blast
maintainerType: individual
firstRelease: 2021
language: elixir
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 28.1
basedOn:
  - phoenix
templating: HOLO
renderingModes:
  - server
installMethod: Hex dependency in mix.exs, then mix deps.get
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-25
githubStargazers: 1538
contributors: 51
social:
  discord: https://discord.gg/huJWNuqt8J
  forum: https://elixirforum.com/hologram
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://hologram.page/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/bartblast/hologram
    checkedAt: 2026-10-26
  - field: urls
    url: https://hologram.page/docs/installation
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/bartblast/hologram
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/bartblast/hologram/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/bartblast/hologram/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://hologram.page/docs/installation
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://hologram.page/docs/installation
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://hologram.page/docs/installation
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://hologram.page/docs/architecture
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/bartblast/hologram/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/bartblast/hologram
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/bartblast/hologram/blob/dev/mix.exs
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hex.pm/api/packages/hologram
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/bartblast/hologram/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/bartblast/hologram/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/bartblast/hologram
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/bartblast/hologram/contributors
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://hologram.page/docs/introduction
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/bartblast/hologram/blob/dev/mix.exs
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hologram is a full-stack Elixir web framework that runs on top of Phoenix. The README says the Elixir runtime is rebuilt in the browser, while the homepage says client code is compiled to JavaScript. The [architecture page](https://hologram.page/docs/architecture) describes the initial page as rendered to HTML on the server. Hologram is added to a Phoenix application as a Mix dependency, and `mix holo` starts the app in development. Pages use `~HOLO` templates. The package manifest names Bart Blast as maintainer.

## Worth knowing

The [installation guide](https://hologram.page/docs/installation) requires a working Phoenix application, so Hologram does not run on its own. It also asks for Node.js alongside Elixir.
