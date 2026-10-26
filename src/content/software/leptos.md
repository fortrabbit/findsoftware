---
id: leptos
name: Leptos
urls:
  home: https://leptos.dev
  repository: https://github.com/leptos-rs/leptos
  docs: https://book.leptos.dev
category:
  - framework
description: Rust framework for building reactive web applications, client-side or full-stack with server rendering and server functions.
status: active
maintainer: Greg Johnston
firstRelease: 2022
language: rust
runtime:
  - binary
hosting:
  - binary
  - static
runsAs:
  - static
  - always-on
renderingModes:
  - spa
  - server
installMethod: cargo add leptos from crates.io, with trunk installed for client-side apps
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-05
githubStargazers: 21433
contributors: 384
social:
  discord: https://discord.gg/x8NhWWYTV2
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://leptos.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/leptos-rs/leptos
    checkedAt: 2026-10-26
  - field: urls
    url: https://book.leptos.dev/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/leptos-rs/leptos/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/leptos-rs/leptos/releases?per_page=100
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/leptos-rs/leptos
    checkedAt: 2026-10-26
  - field: runtime
    url: https://leptos.dev/
    checkedAt: 2026-10-26
  - field: category
    url: https://leptos.dev/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://book.leptos.dev/getting_started/index.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://book.leptos.dev/getting_started/index.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://book.leptos.dev/getting_started/index.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://book.leptos.dev/deployment/csr.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://book.leptos.dev/deployment/ssr.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/leptos-rs/leptos
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/leptos-rs/leptos/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/leptos-rs/leptos/releases/tags/v0.8.22
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/leptos-rs/leptos
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/leptos-rs/leptos/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Leptos is a Rust framework for reactive web applications. A client-side app is built with Trunk, and a full-stack app uses Actix-web or Axum as its server library. The framework includes server functions.

Client-side builds can be hosted on any service that supports static site deploys, as the [CSR deployment guide](https://book.leptos.dev/deployment/csr.html) puts it. A full-stack app is deployed to server or container hosting services, as the [SSR deployment guide](https://book.leptos.dev/deployment/ssr.html) describes. The project is maintained in the leptos-rs organization on GitHub, and the book at book.leptos.dev is its main documentation.

## Worth knowing

The stable release line is still below 1.0, and a release candidate newer than the latest stable release is published.
