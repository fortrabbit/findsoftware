---
id: cowboy
name: Cowboy
urls:
  home: https://ninenines.eu
  repository: https://github.com/ninenines/cowboy
  docs: https://ninenines.eu/docs/en/cowboy/2.20/guide/
category:
  - web-server
description: HTTP server for Erlang/OTP that provides routing, handlers, WebSocket, HTTP/2 and REST support.
status: active
maintainer: Loïc Hoguin
firstRelease: 2011
language: other
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 27
runsAs:
  - always-on
installMethod: Erlang.mk dependency, DEPS = cowboy
licenseModel: open-source
license: ISC
currentMajor: "2"
latestReleaseDate: 2026-10-08
githubStargazers: 7520
contributors: 120
social:
  discord: https://discord.gg/x25nNq2fFE
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://ninenines.eu/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/ninenines/cowboy
    checkedAt: 2026-10-26
  - field: urls
    url: https://ninenines.eu/docs/en/cowboy/2.20/guide/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/ninenines/cowboy
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/README.asciidoc
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/doc/src/guide/introduction.asciidoc
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/doc/src/guide/introduction.asciidoc
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/doc/src/guide/getting_started.asciidoc
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/doc/src/guide/getting_started.asciidoc
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/doc/src/guide/introduction.asciidoc
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/ninenines/cowboy
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/ninenines/cowboy/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/ninenines/cowboy/tags
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://hex.pm/api/packages/cowboy
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/cowboy
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ninenines/cowboy
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ninenines/cowboy/contributors
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Cowboy is an HTTP server for Erlang/OTP that a project adds as a dependency, with routing, handlers, WebSocket, HTTP/2 and REST support. The Erlang.mk build system fetches it through a `DEPS = cowboy` line. The user guide builds the Erlang VM and the application into a release that is started and then serves requests, so a Cowboy application runs as a long-lived process.

## Worth knowing

The README says Cowboy uses Ranch to manage connections, so Ranch is part of the stack; the record does not name Ranch as a parent. The project publishes its versions as Git tags and Hex uploads, not as GitHub releases.
