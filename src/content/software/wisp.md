---
id: wisp
name: Wisp
urls:
  home: https://gleam-wisp.github.io/wisp/
  repository: https://github.com/gleam-wisp/wisp
  docs: https://hexdocs.pm/wisp
category:
  - framework
description: Web framework for Gleam that handles HTTP requests with handlers and middleware, running on the Erlang runtime.
status: active
maintainer: Louis Pilfold
firstRelease: 2023
language: gleam
runtime:
  - beam
hosting:
  - elixir
runsAs:
  - always-on
renderingModes:
  - server
installMethod: gleam add wisp_mist, with the Mist adapter package
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-03-27
githubStargazers: 1494
contributors: 44
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://gleam-wisp.github.io/wisp/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/gleam-wisp/wisp
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/gleam-wisp/wisp/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/gleam-wisp/wisp/main/LICENCE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/gleam-wisp/wisp
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/gleam-wisp/wisp/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://gleam-wisp.github.io/wisp/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/gleam-wisp/wisp/blob/main/wisp_mist/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/gleam-wisp/wisp/blob/main/wisp_ewe/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/rawhat/mist/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/gleam-wisp/wisp/blob/main/wisp_mist/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/gleam-wisp/wisp/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/gleam-wisp/wisp
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/gleam-wisp/wisp/main/LICENCE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/gleam-wisp/wisp/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hex.pm/api/packages/wisp
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/gleam-wisp/wisp/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/gleam-wisp/wisp
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/gleam-wisp/wisp/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Wisp is a web framework for the Gleam language, built around handlers and middleware. A handler is a function that takes an HTTP request and returns a response, and middleware is a function that takes a response-returning function and wraps it, so one handler can be combined with logging, static file serving and other steps. The framework runs through an adapter package: wisp_mist starts the Mist web server inside the application's own program, and the README example keeps that program running to serve requests. A second adapter, wisp_ewe, is in the same repository.

## Worth knowing

The server runs as a long-running process started by the application.
