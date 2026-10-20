---
id: phoenix
name: Phoenix
urls:
  home: https://www.phoenixframework.org
  repository: https://github.com/phoenixframework/phoenix
  docs: https://phoenix.hexdocs.pm
category:
  - framework
description: Elixir web framework for server-rendered and real-time web applications, with LiveView for interactive pages.
status: active
firstRelease: 2014
language: elixir
runtime:
  - beam
hosting:
  - elixir
contentStore:
  - database
databases:
  - postgres
  - mysql
  - sqlserver
  - sqlite
templating: heex
runsAs:
  - always-on
renderingModes:
  - server
installMethod: mix archive.install hex phx_new, mix phx.new
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-25
githubStargazers: 23189
contributors: 1488
social:
  x: https://twitter.com/elixirphoenix
  discord: https://discord.gg/elixir
  forum: https://elixirforum.com/c/phoenix-forum
wikidata: Q55629889
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://phoenix.hexdocs.pm/overview.html
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/phoenixframework/phoenix
    checkedAt: 2026-10-18
  - field: urls
    url: https://hex.pm/api/packages/phoenix
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/phoenixframework/phoenix
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://hex.pm/api/packages/phoenix
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q55629889
    checkedAt: 2026-10-18
  - field: category
    url: https://phoenix.hexdocs.pm/overview.html
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/phoenixframework/phoenix
    checkedAt: 2026-10-18
  - field: runtime
    url: https://phoenix.hexdocs.pm/installation.html
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://phoenix.hexdocs.pm/installation.html
    checkedAt: 2026-10-18
  - field: databases
    url: https://phoenix.hexdocs.pm/installation.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://phoenix.hexdocs.pm/components.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.phoenixframework.org/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://phoenix.hexdocs.pm/installation.html
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/phoenixframework/phoenix
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/phoenixframework/phoenix
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/phoenixframework/phoenix/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/phoenixframework/phoenix/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/phoenixframework/phoenix
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/phoenixframework/phoenix/contributors?anon=true
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://hexdocs.pm/phoenix/deployment.html
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Elixir · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Phoenix is a web framework written in Elixir that runs on the BEAM virtual machine. Pages are rendered on the server with HEEx templates, and LiveView, which ships as a separate package, adds interactive pages. The phx.new generator creates a project, and mix phx.gen.release --docker writes a Dockerfile for a release build. A running application is a long-running BEAM process, started with mix phx.server or as a release. The Phoenix documentation recommends PostgreSQL, though other databases work and a project can run without one.

## Worth knowing

A production release needs SECRET_KEY_BASE and DATABASE_URL set in the environment. Phoenix applies bug fixes only to the latest minor branch, and security patches cover the last four minor branches.
