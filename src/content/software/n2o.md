---
id: n2o
name: N2O
urls:
  home: https://n2o.dev/
  repository: https://github.com/synrc/n2o
  docs: https://ws.n2o.dev/
category:
  - framework
description: Erlang message protocol loop library for WebSocket, HTTP, MQTT and TCP servers, usable as a web framework or application server.
status: active
maintainer: Synrc Research
firstRelease: 2013
language: erlang
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 25
templating: dtl, nitro
installMethod: mad get n2o, a rebar dependency
licenseModel: open-source
license: ISC, DHARMA License
currentMajor: "13"
latestReleaseDate: 2026-04-14
githubStargazers: 1340
contributors: 59
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://n2o.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/synrc/n2o
    checkedAt: 2026-10-26
  - field: urls
    url: https://ws.n2o.dev/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/synrc/n2o/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/synrc/n2o
    checkedAt: 2026-10-26
  - field: category
    url: https://ws.n2o.dev/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://n2o.dev/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://n2o.dev/
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/synrc/n2o/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ws.n2o.dev/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://n2o.dev/
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/synrc/n2o/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/synrc/n2o/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/synrc/n2o/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://n2o.dev/articles/history.htm
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://hex.pm/api/packages/n2o
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/n2o
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/synrc/n2o
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/synrc/n2o/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

N2O is an Erlang library that relays messages for WebSocket, MQTT and TCP servers. Its core runs a loop that routes each request through a ring of virtual nodes and a set of managed processes, and it ships optional session storage, BERT and JSON encoders, and message-bus backends. The project describes normal use as a web framework or web application server over WebSockets. An application adds the library as a dependency with the mad build tool, and the package is published on Hex. The project's documentation also covers a Nitrogen web framework protocol module and a business process engine protocol module.

## Worth knowing

The README gives the license as ISC, but the LICENSE file in the repository is the DHARMA License, so a reader needs to check which terms apply before reuse.
