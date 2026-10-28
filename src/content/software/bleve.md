---
id: bleve
name: Bleve
urls:
  home: https://blevesearch.com
  repository: https://github.com/blevesearch/bleve
  docs: https://github.com/blevesearch/bleve/tree/master/docs
category:
  - search
description: Go library for indexing and searching text, numeric, geo-spatial and vector data, with a command-line tool.
status: active
maintainer: Couchbase, Inc.
maintainerType: company
parent: Couchbase
firstRelease: 2016
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go module import, go install for the CLI
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-08-24
githubStargazers: 11244
contributors: 93
dependentRepos: 435
dependentPackages: 275
social:
  x: https://twitter.com/blevesearch
  forum: https://groups.google.com/forum/#!forum/bleve
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://blevesearch.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/blevesearch/bleve
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/blevesearch/bleve/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.couchbase.com/
    checkedAt: 2026-10-28
  - field: parent
    url: https://raw.githubusercontent.com/blevesearch/bleve/master/CONTRIBUTING.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/blevesearch/bleve
    checkedAt: 2026-10-28
  - field: category
    url: https://blevesearch.com/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/blevesearch/bleve/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://blevesearch.com/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/blevesearch/bleve/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/blevesearch/bleve
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/blevesearch/bleve/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/blevesearch/bleve/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/blevesearch/bleve/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/blevesearch/bleve/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/blevesearch/bleve
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/blevesearch/bleve/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fblevesearch%2Fbleve%2Fv2
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fblevesearch%2Fbleve%2Fv2
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

Bleve is an indexing and search library for Go. A Go program imports it as a package, builds an index from a mapping that describes its fields, and queries the index in process. It indexes text, numeric, date, boolean, geo-spatial and vector fields, and it supports term, phrase, prefix, fuzzy, query-string and nested queries, faceting and result highlighting. Pre-built analyzers cover a set of languages, and a command-line tool installs with go install. The contributing guide describes Bleve as a Couchbase project.

## Worth knowing

Bleve has no server of its own: the index is served by the process that imports the library, and the examples write it to a file path the program chooses.
