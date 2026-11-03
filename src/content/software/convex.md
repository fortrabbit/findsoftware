---
id: convex
name: Convex
urls:
  home: https://www.convex.dev
  repository: https://github.com/convex/convex-backend
  docs: https://docs.convex.dev/
  pricing: https://www.convex.dev/plans
category:
  - backend
  - database
description: Open-source reactive database and backend for web apps, with server functions written in TypeScript and a cloud platform run by the maker.
status: active
maintainer: Convex, Inc.
maintainerType: company
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
  - mysql
adminUi: true
installMethod: docker
licenseModel: source-available
license: FSL-1.1-Apache-2.0
latestReleaseDate: 2026-10-22
githubStargazers: 12773
npmWeeklyDownloads: 2480802
contributors: 40
social:
  x: https://x.com/convex
  discord: https://discord.gg/convex
  youtube: https://www.youtube.com/@convex-dev
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.convex.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/convex/convex-backend
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.convex.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.convex.dev/plans
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/convex/convex-backend/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/convex/convex-backend/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/convex/convex-backend
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/convex/convex-backend
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/convex/convex-backend
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/convex/convex-backend
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/convex/convex-backend
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/convex/convex-backend/blob/main/self-hosted/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/convex/convex-backend/blob/main/self-hosted/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/convex/convex-backend
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/convex/convex-backend/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/convex/convex-backend/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/convex/convex-backend/releases/tag/precompiled-2026-10-22-1447815
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/convex/convex-backend/releases/tag/precompiled-2024-03-22-8a9f015
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/convex/convex-backend
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/convex/convex-backend/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/convex
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Convex is a backend for web apps that combines a database with server functions and client libraries. The open-source backend is written in Rust and runs all database and compute functions. Self-hosting uses a Docker image or a prebuilt binary, and the self-hosted build includes the dashboard and the CLI.

By default the backend keeps all state in a local SQLite database. The self-hosting guide also covers running the database on Postgres or MySQL.

## Worth knowing

The license is the Functional Source License. It permits any purpose other than a Competing Use, which means offering the software in a commercial product or service that substitutes for Convex or offers substantially similar functionality. The license converts to Apache 2.0 after the FSL period.

Self-hosted builds include an anonymous beacon, which can be turned off with a flag on the backend binary.

The vendor also runs a cloud platform, the Convex cloud platform.
