---
id: seekstorm
name: SeekStorm
urls:
  home: https://seekstorm.com
  repository: https://github.com/SeekStorm/SeekStorm
  docs: https://seekstorm.com/documentation/
category:
  - search
description: Open-source vector and lexical search library and multi-tenancy server written in Rust.
status: active
maintainer: SeekStorm spółka z o.o.
firstRelease: 2024
hqCountry: PL
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-source
license: Apache-2.0, Apache License 2.0
currentMajor: "3"
latestReleaseDate: 2026-10-27
githubStargazers: 1928
contributors: 10
social:
  x: https://x.com/seekstorm
  discord: https://discord.gg/FHCZbQwRE
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://seekstorm.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/SeekStorm/SeekStorm
    checkedAt: 2026-10-28
  - field: urls
    url: https://seekstorm.com/documentation/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/SeekStorm/SeekStorm/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://seekstorm.com/tos.html
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://seekstorm.com/about.html
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/SeekStorm/SeekStorm
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/SeekStorm/SeekStorm/blob/main/README.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://seekstorm.com/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/SeekStorm/SeekStorm
    checkedAt: 2026-10-28
  - field: runtime
    url: https://seekstorm.com/architecture.html
    checkedAt: 2026-10-28
  - field: category
    url: https://seekstorm.com/architecture.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/SeekStorm/SeekStorm/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/SeekStorm/SeekStorm/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/SeekStorm/SeekStorm/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/SeekStorm/SeekStorm/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/SeekStorm/SeekStorm/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/SeekStorm/SeekStorm
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/SeekStorm/SeekStorm/contributors
    checkedAt: 2026-10-28
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

SeekStorm is a search library and multi-tenancy server written in Rust, for lexical and vector search. An application can embed the library as a Rust crate, and the server runs on your own infrastructure from a Docker image. The company behind the project, SeekStorm spółka z o.o., is based in Warsaw.

The vendor also runs the software as SeekStorm Cloud, next to the self-hosted option. The homepage puts the choice as "Self-host for free, or let us run it."

## Worth knowing

The server is a long-running process, so it cannot run from static files on a web space. The embedded library needs no separate process. An index kept on SeekStorm Cloud depends on the vendor's service.
