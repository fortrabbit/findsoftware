---
id: sugar
name: Sugar
urls:
  home: https://sugar-framework.github.io/
  repository: https://github.com/sugar-framework/sugar
  docs: https://sugar-framework.github.io/docs/
category:
  - framework
description: Modular web framework for Elixir.
status: stub
maintainer: Shane Logsdon
firstRelease: 2014
language: elixir
runtime:
  - beam
hosting:
  - elixir
runsAs:
  - always-on
installMethod: Mix dependency, then mix sugar.init
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2017-02-04
githubStargazers: 430
contributors: 13
social:
  x: https://twitter.com/sugar_framework
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://sugar-framework.github.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/sugar-framework/sugar
    checkedAt: 2026-10-26
  - field: urls
    url: https://sugar-framework.github.io/docs/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/sugar-framework/sugar/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: category
    url: https://sugar-framework.github.io/
    checkedAt: 2026-10-26
  - field: language
    url: https://sugar-framework.github.io/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://sugar-framework.github.io/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://sugar-framework.github.io/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/sugar-framework/sugar/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/sugar-framework/sugar/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://sugar-framework.github.io/docs/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/sugar-framework/sugar/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/sugar/releases/0.5.0
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/sugar-framework/sugar/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/sugar-framework/sugar
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/sugar-framework/sugar/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Sugar is a web framework for Elixir that describes itself as modular. It uses Plug.Router as its routing layer and adds a simpler DSL for routing applications, as the [documentation](https://sugar-framework.github.io/docs/) explains.

The framework is added as a Mix dependency, the project provides mix sugar.init to add its files to a project, and the README starts the web server with mix server.

## Worth knowing

Ecto and postgrex are no longer dependencies of the framework, so an application that uses them lists them in its own mix.exs. The README names Cowboy as the only supported web server, reached through the Plug adapter.
