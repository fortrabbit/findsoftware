---
id: comrak
name: Comrak
urls:
  home: https://comrak.ee
  repository: https://github.com/kivikakk/comrak
  docs: https://docs.rs/comrak/latest/comrak/
category:
  - library
description: CommonMark and GitHub Flavored Markdown compatible parser and renderer written in Rust.
status: active
maintainer: Comrak contributors
maintainerType: community
firstRelease: 2017
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: cargo
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "0"
latestReleaseDate: 2026-10-26
githubStargazers: 1735
contributors: 94
dependentRepos: 541
dependentPackages: 116
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/kivikakk/comrak
    checkedAt: 2026-11-04
  - field: urls
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/kivikakk/comrak/blob/v0.59.0/COPYING
    checkedAt: 2026-11-04
  - field: language
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/kivikakk/comrak/blob/main/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: license
    url: https://comrak.ee/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/kivikakk/comrak/commits/0.1.0
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/kivikakk/comrak/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/kivikakk/comrak/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/kivikakk/comrak
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/kivikakk/comrak/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/comrak
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/comrak
    checkedAt: 2026-11-04
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

Comrak is a parser and renderer for CommonMark and GitHub Flavored Markdown, written in Rust. It runs as a command-line program that converts files to HTML, XML or CommonMark, and as a Rust library that parses a document into a tree, lets a program change the tree, and formats it again. A Rust project adds the library as a Cargo dependency.

None of Comrak's own extensions, such as footnotes, math and alerts, are enabled until a parse turns them on. Other languages bind to the library, among them the Ruby gem Commonmarker. The project is developed by a community of contributors.

## Worth knowing

Raw HTML and potentially dangerous links are removed by default. The unsafe option allows them, and the README recommends a sanitisation library configured for the application when that option is set.

The Disallowed Raw HTML extension, a GitHub Flavored Markdown feature, has been removed from Comrak, and the README says it should not be used.
