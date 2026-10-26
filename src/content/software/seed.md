---
id: seed
name: Seed
urls:
  repository: https://github.com/seed-rs/seed
  docs: https://docs.rs/seed
category:
  - framework
description: Rust front-end framework for building web apps compiled to WebAssembly, with an Elm-like architecture.
status: discontinued
maintainer: David O'Connor
maintainerType: individual
firstRelease: 2018
language: rust
templating: Rust macros (the div! macro)
runsAs:
  - browser
installMethod: cargo generate from the seed-quickstart template, then trunk serve
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2023-03-06
githubStargazers: 3832
contributors: 50
social:
  discord: https://discord.gg/JHHcHp5
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: status
    url: https://raw.githubusercontent.com/seed-rs/seed/master/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/seed-rs/seed
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/seed-rs/seed/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/seed-rs/seed/master/LICENSE
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://raw.githubusercontent.com/seed-rs/seed/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/seed-rs/seed
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/seed-rs/seed/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/seed-rs/seed/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/seed-rs/seed/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/seed-rs/seed/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/seed-rs/seed
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/seed-rs/seed/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/seed/versions
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/seed-rs/seed/releases/latest
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/seed-rs/seed/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/seed-rs/seed
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/seed-rs/seed/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Seed is a Rust framework for front-end web apps that run in the browser as WebAssembly, with an Elm-like architecture. Its templating system is written in Rust, using macros such as div!, so the markup is Rust code rather than a template language.

The README starts apps from a quickstart template and runs them with trunk serve. The [API documentation](https://docs.rs/seed) is on docs.rs, which the README names as the place to read because the project's own guides are no longer reachable.

## Worth knowing

The README says Seed is not maintained at the moment. Its own website domain now redirects to an unrelated site, and the README says server-side rendering is not available yet.
