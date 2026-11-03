---
id: y-sweet
name: Y-Sweet
urls:
  repository: https://github.com/jamsocket/y-sweet
category:
  - backend
  - database
description: Open-source realtime document store and sync backend for Yjs documents, persisting to S3-compatible storage.
status: discontinued
maintainer: Drifting in Space Corp.
maintainerType: company
parent: Modal
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-09-16
githubStargazers: 1021
npmWeeklyDownloads: 4479
contributors: 17
social:
  discord: https://discord.gg/N5sEpsuhh9
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: status
    url: https://modal.com/blog/jamsocket-is-joining-modal
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/jamsocket/y-sweet
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/jamsocket/y-sweet/releases/tag/v0.0.8
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/jamsocket/y-sweet/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: parent
    url: https://modal.com/blog/jamsocket-is-joining-modal
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/jamsocket/y-sweet/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/jamsocket/y-sweet
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/jamsocket/y-sweet/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/jamsocket/y-sweet/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/jamsocket/y-sweet/blob/main/docs/running.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/jamsocket/y-sweet/blob/main/docs/running.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/jamsocket/y-sweet/blob/main/README.md
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/y-sweet
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/jamsocket/y-sweet/releases/tag/v0.9.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/jamsocket/y-sweet/releases/tag/v0.9.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/jamsocket/y-sweet
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/jamsocket/y-sweet
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Y-Sweet is an open-source document store and realtime sync backend for Yjs documents, written in Rust. Document data is persisted to S3-compatible object storage. Clients sync through a server that the [README](https://github.com/jamsocket/y-sweet) says deploys as a native Linux process, and the server can be started with npx or from a Docker image. An application's own backend issues a client token for each document, which is how access to a document is controlled.

## Worth knowing

The company behind it, Jamsocket, is being acquired by Modal. The project's homepage now redirects to Modal's announcement, which says the core functionality is being migrated to Modal. The repository remains public.
