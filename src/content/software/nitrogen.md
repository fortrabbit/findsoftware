---
id: nitrogen
name: Nitrogen
urls:
  home: https://nitrogenproject.com
  repository: https://github.com/nitrogen/nitrogen
  docs: https://nitrogenproject.com/doc/index.html
category:
  - framework
description: Erlang web framework for building interactive, Ajax-rich web applications.
status: stub
maintainer: Rusty Klophaus/Jesse Gumm
firstRelease: 2009
language: erlang
runtime:
  - beam
hosting:
  - elixir
templating: nitrogen-templates
runsAs:
  - always-on
installMethod: download archive, make
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2020-11-15
githubStargazers: 982
contributors: 29
social:
  x: https://twitter.com/nitrogenproject
  discord: https://discord.gg/ppGBxhM
  forum: https://groups.google.com/group/nitrogenweb
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://nitrogenproject.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/nitrogen/nitrogen
    checkedAt: 2026-10-26
  - field: urls
    url: https://nitrogenproject.com/doc/index.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://nitrogenproject.com/learn
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://nitrogenproject.com/doc/index.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/nitrogen/nitrogen/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/nitrogen/nitrogen
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/nitrogen/nitrogen/master/README.markdown
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/nitrogen/nitrogen/master/README.markdown
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://nitrogenproject.com/doc/index.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://nitrogenproject.com/downloads
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/nitrogen/nitrogen/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/nitrogen/nitrogen/commits/v1.0
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/nitrogen/nitrogen/tags
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/nitrogen/nitrogen/commits/v2.4.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/nitrogen/nitrogen
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/nitrogen/nitrogen/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Nitrogen is a web framework for Erlang, built on a pure Erlang technology stack, for interactive web applications. Pages and the events users trigger are handled in server-side Erlang code over an event-driven model, with websockets and an ajax fallback. The [getting started guide](https://nitrogenproject.com/doc/index.html) builds a starter application from source with make, and the starter runs on Inets, Erlang's built-in HTTP server. The [downloads page](https://nitrogenproject.com/downloads) offers self-contained packages for each platform, with a choice of Cowboy, Inets, Mochiweb, Webmachine or Yaws as the web server. A Nitrogen application is started, stopped and attached to as a detached console.

## Worth knowing

The repository has tags but no GitHub releases. The master README describes an upgrade to a newer major line that no tag in the repository covers.
