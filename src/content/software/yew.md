---
id: yew
name: Yew
urls:
  home: https://yew.rs
  repository: https://github.com/yewstack/yew
  docs: https://yew.rs/docs/getting-started/introduction
category:
  - framework
description: Rust framework for building client-side web applications that run as WebAssembly in the browser.
status: active
maintainer: Denis Kolodin
firstRelease: 2017
language: rust
hosting:
  - static
runsAs:
  - browser
  - static
renderingModes:
  - spa
  - server
installMethod: Cargo dependency on yew, built with the Trunk bundler
licenseModel: open-source
license: Apache-2.0, MIT OR Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-03-10
githubStargazers: 32835
contributors: 427
social:
  x: https://twitter.com/yewstack
  discord: https://discord.gg/VQck8X4
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://yew.rs/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/yewstack/yew
    checkedAt: 2026-10-26
  - field: urls
    url: https://yew.rs/docs/getting-started/introduction
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/yewstack/yew/blob/master/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/yewstack/yew
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/yewstack/yew/blob/master/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://yew.rs/docs/advanced-topics/server-side-rendering
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://yew.rs/docs/advanced-topics/server-side-rendering
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://yew.rs/docs/advanced-topics/server-side-rendering
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://yew.rs/docs/more/deployment
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://yew.rs/docs/getting-started/build-a-sample-app
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/yewstack/yew
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/yewstack/yew/blob/master/packages/yew/Cargo.toml
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/yewstack/yew/blob/master/LICENSE-MIT
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/yew/versions
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/yewstack/yew/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/yewstack/yew/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/yewstack/yew
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/yewstack/yew/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Yew is a Rust framework for building web applications. The application is added to a Cargo project as a dependency and built with the Trunk bundler into a WebAssembly bundle, which runs in the browser and renders components on the client by default. The docs describe server-side rendering as an option through a server renderer. The project is developed in the open on GitHub under the yewstack organization.

## Worth knowing

The [deployment page](https://yew.rs/docs/more/deployment) has the built output served by any HTTP server, with index.html returned for paths the router handles. Server-side rendering is an option the [server-side rendering page](https://yew.rs/docs/advanced-topics/server-side-rendering) describes, not the default.
