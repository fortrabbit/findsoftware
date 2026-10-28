---
id: tantiny
name: Tantiny
urls:
  repository: https://github.com/altertable-ai/tantiny
  docs: https://github.com/altertable-ai/tantiny/blob/main/README.md
category:
  - search
description: Embeddable full-text search library for Ruby that builds its index with the Tantivy search engine library.
status: active
maintainer: Altertable
firstRelease: 2022
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - tantivy
installMethod: gem install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-11-04
githubStargazers: 14
contributors: 5
dependentRepos: 2
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/altertable-ai/tantiny
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/altertable-ai/tantiny/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/tantiny.json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/altertable-ai/tantiny/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/altertable-ai/tantiny
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/altertable-ai/tantiny
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/altertable-ai/tantiny/blob/tantiny/v0.4.2/tantiny.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/altertable-ai/tantiny/blob/tantiny/v0.4.2/tantiny.gemspec
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/altertable-ai/tantiny/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/altertable-ai/tantiny/blob/main/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/altertable-ai/tantiny/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/altertable-ai/tantiny/blob/main/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/altertable-ai/tantiny
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/altertable-ai/tantiny/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/tantiny
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/altertable-ai/tantiny/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/altertable-ai/tantiny/releases/latest
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

Tantiny is a Ruby library that adds full-text search to a Ruby program without a separate search server. It wraps the Tantivy search engine library, written in Rust, and the index lives either in a directory or in memory. A schema declares the fields to index, and a search returns the ids of matching documents. The documents themselves are not stored in the index, so the caller loads them from its own store. The gem is a fork of the original Tantiny gem, and its README records the transfer of the gem to Altertable.

## Worth knowing

Tantiny installs precompiled native binaries from its GitHub releases. A Rust toolchain is needed only where no binary matches the platform, Ruby version and architecture. Writes lock the index, so the README recommends one writer process and several reader processes when more than one process shares an index.
