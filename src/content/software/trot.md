---
id: trot
name: Trot
urls:
  repository: https://github.com/hexedpackets/trot
  docs: https://trot.hexdocs.pm/
category:
  - framework
description: Elixir web micro-framework built on Plug and Cowboy, for routing HTTP requests and writing APIs.
status: stub
maintainer: William Huba
maintainerType: individual
firstRelease: 2015
language: elixir
runtime:
  - beam
hosting:
  - elixir
basedOn:
  - cowboy
templating: eex, haml
runsAs:
  - always-on
renderingModes:
  - server
installMethod: mix dependency from GitHub
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2018-07-25
githubStargazers: 417
contributors: 9
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/hexedpackets/trot
    checkedAt: 2026-10-26
  - field: urls
    url: https://trot.hexdocs.pm/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/hexedpackets/trot/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/hexedpackets/trot
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/hexedpackets/trot
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/hexedpackets/trot/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/hexedpackets/trot/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://hex.pm/api/packages/trot
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/trot
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/hexedpackets/trot
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/hexedpackets/trot/contributors
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/hexedpackets/trot/blob/master/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Trot is an Elixir micro-framework built on Plug and Cowboy, aimed at making common Plug patterns easier to use when writing APIs. A router module declares routes with a macro per HTTP method, and a handler can return a body, a status code, a JSON-encodable object or a redirect. The server listens on a configurable port.

Templates are rendered from a configurable directory, in EEx or in HAML through the Calliope library. The project is added to a mix project as a dependency from GitHub.

## Worth knowing

The README gives the dependency as a GitHub reference and does not show a Hex dependency.
