---
id: trailbase
name: TrailBase
urls:
  home: https://trailbase.io
  repository: https://github.com/trailbaseio/trailbase
  docs: https://trailbase.io/getting-started/install
category:
  - backend
description: Single-executable backend-as-a-service written in Rust, with REST and realtime APIs, built-in auth and an admin dashboard.
status: active
maintainer: trailbaseio
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: OSL-3.0
currentMajor: "0"
latestReleaseDate: 2026-10-30
githubStargazers: 5741
contributors: 31
social:
  discord: https://discord.gg/X8cWs7YC22
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://trailbase.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: urls
    url: https://trailbase.io/getting-started/install
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/repos/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: category
    url: https://trailbase.io/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: runtime
    url: https://trailbase.io/getting-started/install
    checkedAt: 2026-11-03
  - field: databases
    url: https://trailbase.io/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://trailbase.io/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://trailbase.io/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trailbase.io/getting-started/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trailbase.io/getting-started/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://trailbase.io/getting-started/install
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/trailbaseio/trailbase/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/trailbaseio/trailbase/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/trailbaseio/trailbase/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/trailbaseio/trailbase
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/trailbaseio/trailbase/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

TrailBase is a backend-as-a-service shipped as one executable written in Rust. It serves REST and realtime APIs over SQLite, with experimental Postgres support, and includes sign-in through OAuth providers and a built-in admin dashboard. The project publishes a binary download, an install script and a Docker image, and the repository can also be built from source. Its own pages describe it as a Firebase alternative and compare it with PocketBase and Supabase.

## Worth knowing

The README gives the project an alpha status badge, and Postgres support is marked experimental. The server keeps running to answer requests, so it needs a host that runs processes and not only static files. Its repository is under the Open Software License 3.0, while the client libraries are published under Apache-2.0.
