---
id: wasm-pack
name: wasm-pack
urls:
  home: https://wasm-bindgen.github.io/wasm-pack/
  repository: https://github.com/wasm-bindgen/wasm-pack
  docs: https://wasm-bindgen.github.io/wasm-pack/book/
category:
  - build-tool
description: Command-line tool that builds Rust crates into WebAssembly packages for JavaScript, with npm publishing support.
status: active
maintainer: drager
firstRelease: 2018
language: rust
runtime:
  - binary
runsAs:
  - local
installMethod: cargo install
licenseModel: open-source
license: MIT OR Apache-2.0, Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-05-15
githubStargazers: 7293
npmWeeklyDownloads: 111161
contributors: 156
social:
  discord: https://discordapp.com/channels/442252698964721669/443151097398296587
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://wasm-bindgen.github.io/wasm-pack/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack
    checkedAt: 2026-10-28
  - field: urls
    url: https://wasm-bindgen.github.io/wasm-pack/book/
    checkedAt: 2026-10-28
  - field: category
    url: https://wasm-bindgen.github.io/wasm-pack/book/prerequisites/index.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://wasm-bindgen.github.io/wasm-pack/book/prerequisites/index.html
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack
    checkedAt: 2026-10-28
  - field: runtime
    url: https://wasm-bindgen.github.io/wasm-pack/book/prerequisites/index.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/wasm-bindgen/wasm-pack/blob/HEAD/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/wasm-bindgen/wasm-pack/v0.15.0/Cargo.toml
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://crates.io/api/v1/crates/wasm-pack/versions
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wasm-bindgen.github.io/wasm-pack/installer
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wasm-bindgen.github.io/wasm-pack/installer
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wasm-bindgen.github.io/wasm-pack/installer
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wasm-bindgen.github.io/wasm-pack/installer
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/wasm-bindgen/wasm-pack/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/wasm-pack
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

wasm-pack is a command-line tool that compiles a Rust crate to WebAssembly and packages the output for JavaScript. The build command writes a `pkg` folder with the compiled `.wasm` binary, a JavaScript wrapper, type declarations and a `package.json`. That folder can be published to the npm registry or used alongside JavaScript packages in an existing bundler workflow.

The build command takes a target that sets how the JavaScript is emitted and loaded: bundler, Node.js, a native browser ES module, a browser global without modules, or Deno. A separate `test` command runs browser tests, per the project's README.

## Worth knowing

Building needs a Rust toolchain. Publishing to npm needs npm installed and configured, and the prerequisites page says the project intends to remove the need for a Node runtime in that step.
