---
id: mdbook
name: mdBook
urls:
  home: https://rust-lang.github.io/mdBook/
  repository: https://github.com/rust-lang/mdBook
  docs: https://rust-lang.github.io/mdBook/guide/installation.html
  plugins: https://github.com/rust-lang/mdBook/wiki/Third-party-plugins
category:
  - ssg
description: Command-line tool, written in Rust, that builds books and documentation as HTML from Markdown files.
status: active
maintainer: The Rust Programming Language
firstRelease: 2015
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: handlebars
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: cargo install mdbook, or a pre-compiled binary from GitHub Releases
licenseModel: open-source
license: MPL-2.0
currentMajor: "0"
latestReleaseDate: 2026-07-06
githubStargazers: 22241
contributors: 336
dependentRepos: 454
dependentPackages: 175
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://rust-lang.github.io/mdBook/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/rust-lang/mdBook
    checkedAt: 2026-10-23
  - field: urls
    url: https://rust-lang.github.io/mdBook/guide/installation.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://api.github.com/orgs/rust-lang
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/rust-lang/mdBook
    checkedAt: 2026-10-23
  - field: category
    url: https://rust-lang.github.io/mdBook/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://rust-lang.github.io/mdBook/guide/installation.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://rust-lang.github.io/mdBook/format/theme/index.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://rust-lang.github.io/mdBook/format/configuration/preprocessors.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/rust-lang/mdBook
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://rust-lang.github.io/mdBook/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/rust-lang/mdBook/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/rust-lang/mdBook/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/rust-lang/mdBook/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rust-lang/mdBook
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rust-lang/mdBook/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://rust-lang.github.io/mdBook/guide/creating.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://rust-lang.github.io/mdBook/guide/creating.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://rust-lang.github.io/mdBook/guide/creating.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://rust-lang.github.io/mdBook/guide/creating.html
    checkedAt: 2026-10-23
  - field: runtime
    url: https://rust-lang.github.io/mdBook/guide/installation.html
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/mdbook
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/mdbook
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

mdBook is a command-line tool, written in Rust, that builds a book from Markdown files. The contents of the src directory are included in the output. The default renderer uses Handlebars templates, and the build produces a directory that any web server can host. The Third Party Plugins wiki page lists community preprocessors. It is installed with cargo install mdbook or from a pre-compiled binary on the GitHub Releases page, and it is released under the Mozilla Public License, version 2.0.

## Worth knowing

The serve command starts a local webserver for writing and rebuilds the book as the files change. The directory that the build produces is the one that goes live.
