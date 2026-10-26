---
id: iron
name: Iron
urls:
  repository: https://github.com/iron/iron
  docs: https://docs.rs/iron
category:
  - framework
description: High-level Rust web framework built on hyper, for extensible web applications.
status: stub
maintainer: Jonathan Reem
firstRelease: 2014
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: cargo dependency
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2019-08-14
githubStargazers: 6106
contributors: 130
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/iron/iron
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/iron/iron/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/iron/iron/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/iron/iron
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/iron/iron/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/iron/iron/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/iron/iron/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/iron/iron
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/iron/iron/master/LICENSE
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/iron/iron/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://crates.io/api/v1/crates/iron
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://crates.io/api/v1/crates/iron
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/iron
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/iron/iron
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/iron/iron/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Iron is a high-level web framework built in and for Rust, on top of the hyper HTTP library. A project adds it as a Cargo dependency and writes its handlers and middleware in Rust. The README describes it as scaling horizontally behind a load balancer, so an Iron app is a running Rust process.

The [API documentation](https://docs.rs/iron) is generated for each crate release. The README names Jonathan Reem as the core maintainer and author, and the LICENSE file gives the copyright to the Iron Core Team.

## Worth knowing

The README says no plugins or middleware are bundled with Iron. Routing, mounting, static file serving and logging are separate repositories.
