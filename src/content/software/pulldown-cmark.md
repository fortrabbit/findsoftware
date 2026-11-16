---
id: pulldown-cmark
name: pulldown-cmark
urls:
  home: https://pulldown-cmark.github.io/pulldown-cmark
  repository: https://github.com/pulldown-cmark/pulldown-cmark
  docs: https://docs.rs/pulldown-cmark/
category:
  - library
description: CommonMark Markdown parser for Rust that works as a pull parser over the document's events.
status: active
maintainer: Google Inc.
maintainerType: company
firstRelease: 2015
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: cargo
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-30
githubStargazers: 2764
contributors: 114
dependentRepos: 4100
dependentPackages: 480
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pulldown-cmark.github.io/pulldown-cmark/
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.rs/pulldown-cmark/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/pulldown-cmark/pulldown-cmark
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/pulldown-cmark/pulldown-cmark/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://crates.io/api/v1/crates/pulldown-cmark
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/pulldown-cmark/pulldown-cmark/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/pulldown-cmark/pulldown-cmark/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/pulldown-cmark/pulldown-cmark/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/pulldown-cmark/pulldown-cmark/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/pulldown-cmark/pulldown-cmark/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/pulldown-cmark/pulldown-cmark/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://crates.io/api/v1/crates/pulldown-cmark
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/pulldown-cmark/pulldown-cmark
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/pulldown-cmark/pulldown-cmark/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/pulldown-cmark
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/pulldown-cmark
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

pulldown-cmark is a Rust crate that parses CommonMark Markdown as a pull parser: the caller iterates over a stream of events, and the crate includes an HTML renderer for those events. Optional extensions cover footnotes, GitHub flavored tables and task lists, strikethrough, and highlighted text. A command-line tool for rendering to HTML comes with it.
