---
id: chewy
name: Chewy
urls:
  repository: https://github.com/toptal/chewy
  docs: https://github.com/toptal/chewy/tree/master/docs
category:
  - search
description: Object document mapper for Elasticsearch in Ruby, built on the official elasticsearch-ruby client, with ActiveRecord integration.
status: active
maintainer: Toptal, LLC
maintainerType: company
firstRelease: 2013
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
installMethod: gem install, Gemfile
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-06-19
githubStargazers: 1901
contributors: 136
dependentRepos: 533
dependentPackages: 7
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/toptal/chewy
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/toptal/chewy/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/toptal/chewy/master/LICENSE.txt
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/toptal/chewy
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/toptal/chewy/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/toptal/chewy/master/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/toptal/chewy/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/toptal/chewy/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/toptal/chewy
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/toptal/chewy/master/LICENSE.txt
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/chewy.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/toptal/chewy/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/toptal/chewy/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/toptal/chewy
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/toptal/chewy/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/chewy
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/chewy
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

Chewy is an object document mapper for Elasticsearch, written in Ruby and built on the official elasticsearch-ruby client. Index classes declare which model attributes become document fields, and the index is updated through bulk imports and atomic update strategies. Its chainable query DSL builds search requests against those indexes. The gem integrates with ActiveRecord and updates indexes on model changes through update_index callbacks, and the [docs](https://github.com/toptal/chewy/tree/master/docs) describe use without Rails. Installation is through the gem, and the Elasticsearch server runs separately.

## Worth knowing

Chewy targets Elasticsearch, and the README says OpenSearch is not officially supported. Each major Chewy version follows a major Elasticsearch version, and minor versions may include breaking changes.
