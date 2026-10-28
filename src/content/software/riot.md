---
id: riot
name: Riot
urls:
  repository: https://github.com/vcaesar/riot
  docs: https://github.com/vcaesar/riot/blob/main/README.md
category:
  - search
description: Go library for indexing and searching text, numeric, date, geo and vector data inside an application.
status: active
maintainer: vcaesar
maintainerType: individual
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go get
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 6058
contributors: 9
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/vcaesar/riot
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/vcaesar/riot/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/vcaesar/riot
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/vcaesar/riot/releases
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/vcaesar/riot
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/vcaesar/riot/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/vcaesar/riot/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/vcaesar/riot/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/vcaesar/riot
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/vcaesar/riot/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/vcaesar/riot/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/vcaesar/riot/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/vcaesar/riot
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/vcaesar/riot/contributors?per_page=1
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

Riot is a Go library for indexing and searching text inside an application. A program opens an index on disk or in memory, adds documents with typed fields, and runs queries that include phrase, prefix, fuzzy and numeric range matches, along with vector nearest-neighbour search. Its README describes it as a fork of Bluge, and a separate `gse` package wraps it with a tokenizer for Chinese and Japanese text.

## Worth knowing

Riot is not a server. The library runs inside the process that opens the index, so a site reaches search only through a program that uses it. The README names zed, a separate project, as a distributed search engine built on riot.
