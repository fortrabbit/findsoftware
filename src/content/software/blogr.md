---
id: blogr
name: blogr
urls:
  repository: https://github.com/bahdotsh/blogr
  docs: https://github.com/bahdotsh/blogr/blob/main/docs/COMMANDS.md
category:
  - ssg
description: Command-line static site generator written in Rust for blogs and personal websites, with a built-in terminal editor and GitHub Pages deployment.
status: active
maintainer: Gokul
maintainerType: individual
firstRelease: 2025
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
renderingModes:
  - static
installMethod: cargo install blogr-cli
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-04-03
githubStargazers: 344
contributors: 6
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/bahdotsh/blogr
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/bahdotsh/blogr/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/bahdotsh/blogr/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/bahdotsh/blogr
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/bahdotsh/blogr/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/bahdotsh/blogr/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/bahdotsh/blogr/blob/main/docs/COMMANDS.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/bahdotsh/blogr/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/bahdotsh/blogr/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/bahdotsh/blogr/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/bahdotsh/blogr/main/Cargo.toml
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/bahdotsh/blogr/main/Cargo.toml
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/bahdotsh/blogr/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/bahdotsh/blogr/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/bahdotsh/blogr/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/bahdotsh/blogr
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/bahdotsh/blogr/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

blogr is a command-line static site generator written in Rust for blogs and personal websites. Blog posts are kept as Markdown files, `blogr serve` runs a development server with live reload, and `blogr build` builds the static site. The crate is installed from crates.io as `blogr-cli`, and the [commands reference](https://github.com/bahdotsh/blogr/blob/main/docs/COMMANDS.md) lists each command.

## Worth knowing

The README also describes an optional newsletter system with IMAP and SMTP, documented separately.
