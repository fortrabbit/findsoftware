---
id: docfind
name: docfind
urls:
  home: https://microsoft.github.io/docfind/
  repository: https://github.com/microsoft/docfind
category:
  - search
description: Rust document search engine that compiles a full-text index into a WebAssembly module for search in the browser.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2025
hqCountry: US
language: rust
runsAs:
  - browser
  - local
installMethod: shell install script
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-11-19
githubStargazers: 697
contributors: 5
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://microsoft.github.io/docfind/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/microsoft/docfind
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/microsoft/docfind/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/microsoft/docfind/releases
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/microsoft/docfind/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/microsoft/docfind/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/microsoft/docfind/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/microsoft/docfind/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/microsoft/docfind
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/microsoft/docfind/contributors?per_page=1
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

docfind builds a search index from a JSON file of documents and writes it into a WebAssembly module, so that search runs in the visitor's browser with no server. The index maps keywords, extracted at build time with the RAKE algorithm, to documents through a finite state transducer; the stored document text is compressed with FSST. The README describes fuzzy matching with Levenshtein distance at query time.

The command-line tool is a self-contained Rust binary that runs on the developer's machine. Its output is a JavaScript module and a .wasm file, which a page imports as a module.

## Worth knowing

The repository has no documentation site; the README is the only documentation. The project's homepage is a demo that searches 50,000 news articles in the browser.
