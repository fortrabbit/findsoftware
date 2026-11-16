---
id: markdown-rs
name: markdown-rs
urls:
  repository: https://github.com/wooorm/markdown-rs
  docs: https://docs.rs/markdown/latest/markdown/
category:
  - library
description: CommonMark-compliant Markdown parser for Rust that builds a syntax tree and compiles Markdown to HTML, with GFM, MDX and math extensions.
status: active
maintainer: Titus Wormer
maintainerType: individual
firstRelease: 2022
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: cargo add
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-04-23
githubStargazers: 1595
contributors: 16
dependentRepos: 697
dependentPackages: 86
social:
  forum: https://github.com/wooorm/markdown-rs/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://github.com/wooorm/markdown-rs
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/wooorm/markdown-rs/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/wooorm/markdown-rs/blob/main/license
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/wooorm/markdown-rs/blob/main/license
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/wooorm/markdown-rs/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/wooorm/markdown-rs
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/wooorm/markdown-rs/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/wooorm/markdown-rs/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/wooorm/markdown-rs/blob/main/license
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/wooorm/markdown-rs
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/wooorm/markdown-rs/releases/tag/1.0.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/wooorm/markdown-rs/releases/tag/1.0.0
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/wooorm/markdown-rs/releases/tag/1.0.0-alpha.1
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/wooorm/markdown-rs
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/wooorm/markdown-rs/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/markdown
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/markdown
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

markdown-rs parses Markdown into events and then compiles them to HTML or to a syntax tree in the mdast format, with a position for each node. A Rust program calls `to_html` for a string of Markdown, or `to_html_with_options` with an `Options` value to switch on GFM, MDX, frontmatter and math. Its parser is a state machine built on alloc without the standard library, and it accounts for every byte of the input.

The README names micromark, a JavaScript Markdown parser, as a sibling project, and mdxjs-rs wraps this crate to compile MDX to JavaScript.

## Worth knowing

HTML output is safe by default: dangerous HTML and protocols are encoded or dropped unless `allow_dangerous_html` or `allow_dangerous_protocol` is turned on. MDX syntax errors come back as an error value from `to_html_with_options`, and the README advises capping the size of untrusted input before parsing it.
