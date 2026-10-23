---
id: pagefind
name: Pagefind
urls:
  home: https://pagefind.app
  repository: https://github.com/Pagefind/pagefind
category:
  - search
description: Static search library that builds a search index from built HTML at build time and serves search from static files.
status: active
firstRelease: 2022
language: rust
runtime:
  - binary
  - node
  - python
hosting:
  - binary
  - node
  - python
  - static
runsAs:
  - static
  - browser
installMethod: npm, pypi, precompiled binary download, cargo install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-04-12
githubStargazers: 5519
npmWeeklyDownloads: 1385578
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://pagefind.app/
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/Pagefind/pagefind
    checkedAt: 2026-10-19
  - field: firstRelease
    url: https://registry.npmjs.org/pagefind
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/Pagefind/pagefind
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/Pagefind/pagefind
    checkedAt: 2026-10-19
  - field: category
    url: https://pagefind.app/
    checkedAt: 2026-10-19
  - field: runtime
    url: https://pagefind.app/docs/installation/
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://pagefind.app/docs/installation/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://registry.npmjs.org/pagefind/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/Pagefind/pagefind/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/Pagefind/pagefind
    checkedAt: 2026-10-19
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/pagefind
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://pagefind.app/docs/
    checkedAt: 2026-10-19
figure:
  emoji: 🔎
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Rust · Search
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Pagefind runs as a step after the site generator has produced its HTML. It reads those pages, writes a search bundle beside them, and the browser queries that bundle directly, so the site needs no search server. The npm and PyPI packages wrap the same Rust binary. The [Pagefind site](https://pagefind.app/) covers installation and indexing.

## Worth knowing

Indexing happens at build time only, so search reflects the pages present when the build last ran.
