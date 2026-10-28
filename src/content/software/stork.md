---
id: stork
name: Stork
urls:
  home: https://stork-search.net
  repository: https://github.com/jameslittle230/stork
  docs: https://stork-search.net/docs
category:
  - search
description: Search library that builds a search index from documents with a Rust command-line tool and runs the search interface in the browser with WebAssembly.
status: discontinued
maintainer: James Little
maintainerType: individual
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
  - static
runsAs:
  - browser
  - local
  - static
installMethod: homebrew
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2023-01-12
githubStargazers: 2760
contributors: 12
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: status
    url: https://stork-search.net/
    checkedAt: 2026-10-28
  - field: status
    url: https://github.com/jameslittle230/stork/discussions/360
    checkedAt: 2026-10-28
  - field: urls
    url: https://stork-search.net/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/jameslittle230/stork
    checkedAt: 2026-10-28
  - field: urls
    url: https://stork-search.net/docs
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://stork-search.net/docs
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://stork-search.net/docs
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/jameslittle230/stork
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/jameslittle230/stork/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/jameslittle230/stork/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/jameslittle230/stork/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/jameslittle230/stork/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/jameslittle230/stork/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://stork-search.net/docs/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://stork-search.net/docs/install
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://stork-search.net/docs/install
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/jameslittle230/stork
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/jameslittle230/stork/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/jameslittle230/stork/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/jameslittle230/stork/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/jameslittle230/stork
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/jameslittle230/stork/contributors
    checkedAt: 2026-10-28
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
---

Stork is a search library for static sites, built from a Rust command-line tool and a JavaScript library. The tool reads a list of documents from a configuration file and writes a search index file, which is uploaded to the web server. The JavaScript library, which runs WebAssembly, loads that index in the visitor's browser and shows results as the visitor types. The command-line tool installs with Homebrew, from a binary download, or with Cargo.

## Worth knowing

The maintainer has stopped development and support for Stork. The project stays available without updates. The maintainer plans to keep the project's file CDN up for at least four years, and to give six months' notice before shutting it down.
