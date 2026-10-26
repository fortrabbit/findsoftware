---
id: topcoat
name: Topcoat
urls:
  repository: https://github.com/tokio-rs/topcoat
  docs: https://docs.rs/topcoat/latest/topcoat
category:
  - framework
description: Rust framework that renders full-stack web apps as HTML on the server, with client reactivity compiled from the same Rust code.
status: active
maintainer: Julien Scholz
firstRelease: 2026
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
templating: rust view! macro
i18n: Fluent translation files
runsAs:
  - local
  - always-on
renderingModes:
  - server
installMethod: cargo install of the topcoat-cli crate, then topcoat new
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-24
githubStargazers: 6226
contributors: 37
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/tokio-rs/topcoat
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/tokio-rs/topcoat/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/tokio-rs/topcoat/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/tokio-rs/topcoat
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/tokio-rs/topcoat/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/tokio-rs/topcoat/blob/main/docs/getting_started.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/tokio-rs/topcoat/blob/main/docs/getting_started.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/tokio-rs/topcoat/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/tokio-rs/topcoat/blob/main/docs/getting_started.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/tokio-rs/topcoat/blob/main/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/tokio-rs/topcoat/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/tokio-rs/topcoat/blob/main/docs/getting_started.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/tokio-rs/topcoat/main/llms.txt
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/tokio-rs/topcoat
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/tokio-rs/topcoat/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/tokio-rs/topcoat/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/tokio-rs/topcoat/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/tokio-rs/topcoat/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/tokio-rs/topcoat
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/tokio-rs/topcoat/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Topcoat is a Rust framework for full-stack web apps that renders all of its markup on the server. Async components produce the HTML and can query the database directly, and a `$(...)` expression is translated to JavaScript so that some interactions re-run in the browser without a WebAssembly bundle or a separate client build step.

Routes can be inferred from the module tree, and the `view!` macro writes HTML inside Rust. The `topcoat` CLI creates an app, and its recommended preset includes a todo example backed by Toasty and SQLite; `topcoat dev` starts the development server. The component library, Topcoat UI, is copied into the project so that its components can be edited there.

## Worth knowing

The README calls the project early-stage and experimental and says to expect breaking changes. The roadmap lists deployment docs, static export and pre-rendering as planned rather than built.
