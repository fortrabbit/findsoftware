---
id: libsql
name: libSQL
urls:
  repository: https://github.com/tursodatabase/libsql
  docs: https://github.com/tursodatabase/libsql/tree/main/docs
category:
  - database
description: Open source fork of SQLite, embeddable as a library, with a server mode (sqld) for remote access over HTTP.
status: active
maintainer: Turso
firstRelease: 2022
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: homebrew tap libsql/sqld (sqld server)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-13
githubStargazers: 17300
contributors: 109
social:
  discord: https://discord.gg/turso
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://github.com/tursodatabase/libsql
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/tursodatabase/libsql
    checkedAt: 2026-10-29
  - field: urls
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/README.md
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/tursodatabase/libsql
    checkedAt: 2026-10-29
  - field: runtime
    url: https://github.com/tursodatabase/libsql/blob/main/docs/BUILD-RUN.md
    checkedAt: 2026-10-29
  - field: category
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/README.md
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://crates.io/api/v1/crates/libsql
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/libsql
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/tursodatabase/libsql/releases/tag/libsql-0.1.0
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/tursodatabase/libsql
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/LICENSE.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/docs/BUILD-RUN.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/docs/BUILD-RUN.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/docs/BUILD-RUN.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/tursodatabase/libsql/blob/main/docs/BUILD-RUN.md
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/tursodatabase/libsql
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/tursodatabase/libsql/contributors
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://raw.githubusercontent.com/tursodatabase/libsql/main/libsql-server/README.md
    checkedAt: 2026-10-29
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

libSQL is an open source fork of SQLite, maintained by Turso. It is a library that runs inside the program that uses it, and its server mode, sqld, is a SQL daemon that serves the database to other clients. sqld installs from a prebuilt binary, with Homebrew, from a Docker image on ghcr.io, or by building from source with a Rust toolchain. The Rust crate published on crates.io under the name libsql comes from the same repository.

## Worth knowing

The README says libSQL is actively maintained while new features are being developed in Turso, a separate database it describes as not a fork of SQLite, and it advises new projects to look at Turso first.
