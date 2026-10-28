---
id: valkey-search
name: valkey-search
urls:
  repository: https://github.com/valkey-io/valkey-search
  docs: https://github.com/valkey-io/valkey-search/blob/main/QUICK_START.md
category:
  - search
description: Valkey module, written in C++, that adds search and vector indexing to the Valkey datastore.
status: active
maintainer: valkey-search contributors
maintainerType: community
firstRelease: 2025
language: cpp
basedOn:
  - valkey
installMethod: build from source
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-07-07
githubStargazers: 149
contributors: 56
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/valkey-io/valkey-search
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/valkey-io/valkey-search/blob/main/QUICK_START.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/valkey-io/valkey-search/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/valkey-io/valkey-search/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/valkey-io/valkey-search/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/valkey-io/valkey-search/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/valkey-io/valkey-search/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/valkey-io/valkey-search
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/valkey-io/valkey-search/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/valkey-io/valkey-search/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/valkey-io/valkey-search/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/valkey-io/valkey-search/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/valkey-io/valkey-search
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/valkey-io/valkey-search/contributors?per_page=1
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

valkey-search is a module for Valkey, the key-value datastore, that adds search and vector indexing to the server. The README describes it as a search engine provided as a Valkey module. It is built from source with CMake and loaded into the Valkey server as a module.

The copyright line names the module's contributors rather than a company. The repository is the only project site.

## Worth knowing

Building the module needs a recent GCC or Clang compiler. The quick start also mentions a pre-built Docker bundle, which the README does not describe, so the build from source is the route the README documents.
