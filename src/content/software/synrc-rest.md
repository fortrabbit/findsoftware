---
id: synrc-rest
name: REST
urls:
  home: https://rest.n2o.dev
  repository: https://github.com/synrc/rest
  docs: https://rest.n2o.dev
category:
  - framework
description: Erlang framework for REST JSON services, with record transformations generated at compile time and storage on ETS or KVS.
status: stub
maintainer: Synrc Research Center
firstRelease: 2014
language: erlang
runtime:
  - beam
hosting:
  - elixir
headlessApi:
  - rest
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2021-11-07
githubStargazers: 83
contributors: 5
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://rest.n2o.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/synrc/rest
    checkedAt: 2026-10-26
  - field: urls
    url: https://rest.n2o.dev/
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/synrc/rest/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/synrc/rest/languages
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/synrc/rest/blob/master/mix.exs
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://rest.n2o.dev/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/synrc/rest/blob/master/mix.exs
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/synrc/rest/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/synrc/rest/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/synrc/rest/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/synrc/rest/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://hex.pm/api/packages/rest
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/rest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/synrc/rest
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/synrc/rest/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

REST is an Erlang framework for JSON REST services, published by Synrc Research Center. A service is an Erlang module that implements the `rest` behaviour and uses a parse transform, a compile-time code generation step for the record transformations. The endpoints plug into a Cowboy router, and the module keeps its data either in ETS tables in memory or through KVS, which the [homepage](https://rest.n2o.dev/) describes as persistent storage.

## Worth knowing

The framework includes no routing of its own: the README says routing was left out on purpose, so a service relies on the Cowboy router it is plugged into.
