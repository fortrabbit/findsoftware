---
id: liveboat
name: Liveboat
urls:
  repository: https://github.com/exaroth/liveboat
  docs: https://github.com/exaroth/liveboat/blob/develop/README.md
category:
  - ssg
description: Static page generator that turns Newsboat RSS and Atom feed subscriptions into a static website, written in Rust.
status: active
maintainer: Konrad Wasowicz
maintainerType: individual
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - static
templating: handlebars
runsAs:
  - static
  - local
  - scheduled
renderingModes:
  - static
installMethod: cargo install liveboat, or a prebuilt binary, snap, AUR or Homebrew
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-12
githubStargazers: 115
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/exaroth/liveboat
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/exaroth/liveboat/develop/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/exaroth/liveboat
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/exaroth/liveboat
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/exaroth/liveboat/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/exaroth/liveboat/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/exaroth/liveboat/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/exaroth/liveboat
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/exaroth/liveboat/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/exaroth/liveboat/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/exaroth/liveboat/blob/develop/templates/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Liveboat is a static page generator written in Rust that turns RSS reader feed data into a static website. It builds the pages from Handlebars templates into a build directory and writes a JSON API of feed files beside them.

## Worth knowing

The generator runs on a local machine or in CI, and the README describes scheduling it with cron. The static output is what the host serves.
