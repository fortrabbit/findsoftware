---
id: lustre
name: Lustre
urls:
  home: https://hexdocs.pm/lustre
  repository: https://github.com/lustre-labs/lustre
  docs: https://hexdocs.pm/lustre
category:
  - framework
description: Gleam web framework for building HTML templates, single page applications, Web Components and real-time server components.
status: active
maintainer: Hayleigh Thompson
firstRelease: 2022
language: gleam
runtime:
  - beam
hosting:
  - elixir
  - static
runsAs:
  - always-on
  - static
renderingModes:
  - server
  - spa
installMethod: gleam add lustre
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-07-13
githubStargazers: 2482
contributors: 102
social:
  discord: https://discord.gg/Fm8Pwmy
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://hexdocs.pm/lustre
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/lustre-labs/lustre
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/lustre-labs/lustre/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hex.pm/api/packages/lustre
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/lustre-labs/lustre/main/LICENSE
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/lustre-labs/lustre/blob/main/gleam.toml
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/lustre-labs/lustre
    checkedAt: 2026-10-26
  - field: runtime
    url: https://hexdocs.pm/lustre/guide/07-full-stack-deployments.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/lustre-labs/lustre
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/lustre-labs/lustre/main/LICENSE
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/lustre-labs/lustre/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://hexdocs.pm/lustre/guide/07-full-stack-deployments.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://hexdocs.pm/lustre/guide/04-spa-deployments.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://hexdocs.pm/lustre/guide/05-server-side-rendering.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://hexdocs.pm/lustre/guide/05-server-side-rendering.html
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/lustre-labs/lustre
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/lustre-labs/lustre/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/lustre-labs/lustre/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/lustre
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Lustre is a web framework written in Gleam for HTML templates, single page applications, Web Components and real-time server components. Its README describes an API for constructing HTML from Gleam functions with no separate template files, and an architecture inspired by Elm and Erlang for managing state. A project adds it with `gleam add lustre`.

A full-stack Lustre app has a client part that compiles to JavaScript and a server part that compiles to Erlang. The [full-stack deployment guide](https://hexdocs.pm/lustre/guide/07-full-stack-deployments.html) builds both into one Docker image and names Fly.io as an example platform.

## Worth knowing

A full-stack app needs an Erlang runtime for its server as well as the browser bundle, so that deployment is a running server process. A Lustre single page application without a backend can instead be hosted on static hosting services, as the [SPA deployment guide](https://hexdocs.pm/lustre/guide/04-spa-deployments.html) describes.
