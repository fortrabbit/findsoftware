---
id: jetzig
name: Jetzig
urls:
  home: https://www.jetzig.dev
  repository: https://github.com/jetzig-framework/jetzig
  docs: https://www.jetzig.dev/documentation
category:
  - framework
description: Web framework written in Zig for building web applications.
status: active
maintainer: Robert Farrell
language: zig
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
headlessApi:
  - rest
templating: zmpl
runsAs:
  - always-on
installMethod: Jetzig command line tool generates a project
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-09-17
githubStargazers: 1516
contributors: 22
social:
  discord: https://discord.gg/eufqssz7X6
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.jetzig.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/jetzig-framework/jetzig
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.jetzig.dev/documentation/sections/quickstart
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/jetzig-framework/jetzig/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/jetzig-framework/jetzig
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/jetzig-framework/jetzig/blob/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.jetzig.dev/
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.jetzig.dev/documentation/sections/database/introduction
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.jetzig.dev/documentation/sections/quickstart
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.jetzig.dev/downloads.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.jetzig.dev/downloads.html
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.jetzig.dev/documentation/sections/environment
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.jetzig.dev/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.jetzig.dev/documentation/sections/environment
    checkedAt: 2026-10-26
  - field: license
    url: https://www.jetzig.dev/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.jetzig.dev/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/jetzig-framework/jetzig/tags
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/jetzig-framework/jetzig/git/tags/e73733a1604bc965e04787949abb8f9e9c8c8f3a
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/jetzig-framework/jetzig
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/jetzig-framework/jetzig/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Jetzig is a web framework written in Zig. Its HTML templates use Zmpl, and endpoints render JSON by default. Its database layer, JetQuery, provides a PostgreSQL adapter only at present. The [quickstart](https://www.jetzig.dev/documentation/sections/quickstart) generates a new project with the Jetzig command line tool, which is available as a pre-compiled download or can be compiled from source.

## Worth knowing

The quickstart says Jetzig requires the Zig master build, a nightly compiler, so a project follows a moving toolchain rather than a release. The [database introduction](https://www.jetzig.dev/documentation/sections/database/introduction) states that SQLite is planned but not yet provided. The application runs as a server process, with an option to detach it and run it as a service.
