---
id: dream
name: Dream
urls:
  home: https://camlworks.github.io/dream/
  repository: https://github.com/camlworks/dream
  docs: https://camlworks.github.io/dream/
category:
  - framework
description: OCaml web framework built from plain handler and middleware functions, with routing, sessions, WebSockets, GraphQL and HTTPS support.
status: active
maintainer: Anton Bachin
firstRelease: 2021
language: other
runtime:
  - binary
hosting:
  - binary
templating: embedded ocaml
runsAs:
  - always-on
installMethod: opam install dream
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-07
githubStargazers: 1897
contributors: 59
social:
  discord: https://discord.gg/2JTYRq2rYh
  forum: https://discuss.ocaml.org/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://camlworks.github.io/dream/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/camlworks/dream
    checkedAt: 2026-10-26
  - field: urls
    url: https://camlworks.github.io/dream/
    checkedAt: 2026-10-26
  - field: category
    url: https://camlworks.github.io/dream/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/camlworks/dream
    checkedAt: 2026-10-26
  - field: runtime
    url: https://camlworks.github.io/dream/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://camlworks.github.io/dream/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/camlworks/dream/blob/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://camlworks.github.io/dream/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/camlworks/dream/blob/master/example/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/camlworks/dream
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/camlworks/dream/blob/master/LICENSE.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/camlworks/dream/blob/master/LICENSE.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/camlworks/dream/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/camlworks/dream/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/camlworks/dream/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/camlworks/dream
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/camlworks/dream/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Dream is a web framework for OCaml. A project installs the dream package with opam or esy and writes its handlers as plain functions, composed with middleware and routes. The framework covers WebSockets, GraphQL, HTML templates written with embedded OCaml, sessions and HTTPS. Anton Bachin holds the copyright.

## Worth knowing

The project's examples include running Dream on a server as a systemd daemon, so a Dream application is a process that stays running rather than a set of static files.
