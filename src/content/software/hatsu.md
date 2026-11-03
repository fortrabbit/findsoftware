---
id: hatsu
name: Hatsu
urls:
  home: https://hatsu.cli.rs
  repository: https://github.com/importantimport/hatsu
  docs: https://hatsu.cli.rs
category:
  - community
description: Self-hosted bridge that makes a static site's pages and posts reachable from the fediverse through ActivityPub.
status: active
maintainer: 藍+85CD
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
runsAs:
  - always-on
installMethod: docker image ghcr.io/importantimport/hatsu
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-10-01
githubStargazers: 258
contributors: 7
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hatsu.cli.rs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://hatsu.cli.rs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/importantimport/hatsu
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/importantimport/hatsu/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/importantimport/hatsu/v0.3.5/Cargo.toml
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/importantimport/hatsu
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/importantimport/hatsu/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/importantimport/hatsu/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://hatsu.cli.rs/admins/environments.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hatsu.cli.rs/admins/install-docker.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hatsu.cli.rs/admins/install-binary.html
    checkedAt: 2026-11-03
  - field: databases
    url: https://hatsu.cli.rs/admins/environments.html
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/importantimport/hatsu
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/importantimport/hatsu/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/importantimport/hatsu/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/importantimport/hatsu/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/importantimport/hatsu
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/importantimport/hatsu/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hatsu is a bridge that makes a static site reachable from the fediverse. It runs on the creator's own server, takes the site's content from the site's feed, and presents the site's pages as ActivityPub posts from a Hatsu account. Fediverse users can follow the site or search for a page URL and land on the matching post, and replies from the fediverse come back to the static site as backfeed.

To connect a site, the site publishes its feed, serves the well-known files that Hatsu returns as static files, and adds an alternate link tag to each page. The [documentation](https://hatsu.cli.rs) covers the setup. Hatsu is written in Rust and runs as a Docker image or as a binary from GitHub Releases. Its settings come from environment variables, and it stores data in SQLite or PostgreSQL.

## Worth knowing

The documentation calls Hatsu a work in progress, and the README marks backfeed as WIP. Because Hatsu runs as a server process, the static site needs a separate machine or container running Hatsu next to its hosting.
