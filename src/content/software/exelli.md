---
id: exelli
name: exelli
urls:
  repository: https://github.com/pigmej/exelli
category:
  - library
description: Elixir wrapper around the Elli server with a routing and handler syntax.
status: stub
maintainer: Jędrzej Nowak
maintainerType: individual
firstRelease: 2014
language: elixir
runtime:
  - beam
hosting:
  - elixir
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2014-12-06
githubStargazers: 16
contributors: 2
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/pigmej/exelli
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/pigmej/exelli/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/pigmej/exelli
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/pigmej/exelli/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/pigmej/exelli/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/pigmej/exelli/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/pigmej/exelli/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hex.pm/api/packages/exelli
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://hex.pm/api/packages/exelli
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/exelli
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/pigmej/exelli
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/pigmej/exelli/contributors
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
runsAs: null
---

exelli is an Elixir wrapper around Elli, the server it is built on, adding a syntax for handlers and routes. A handler module declares `get` and `post` blocks against path segments, and a router module enables handlers and middleware under prefixes. The server is started with `Exelli.elli_start`, which also accepts a plain list of the same middleware and handler entries without the router.

The README says other Elli middleware can be enabled alongside the project's own after it is added to the Mix project.

## Worth knowing

The README gives no installation steps. The only dependency instruction is to add a middleware to `mix.exs`, and the last commit on the default branch is from June 2022.
