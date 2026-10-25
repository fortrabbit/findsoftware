---
id: weaver
name: Weaver
urls:
  home: https://davidsiaw.github.io/weaver-docs/
  repository: https://github.com/davidsiaw/weaver
category:
  - ssg
description: Ruby DSL that generates websites from weave files.
status: active
maintainer: David Siaw
maintainerType: individual
firstRelease: 2015
language: ruby
runtime:
  - ruby
runsAs:
  - local
installMethod: gem install weaver
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-17
githubStargazers: 7
contributors: 1
dependentRepos: 10
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://davidsiaw.github.io/weaver-docs/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/davidsiaw/weaver
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/davidsiaw/weaver/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://davidsiaw.github.io/weaver-docs/
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/davidsiaw/weaver/master/weaver.gemspec
    checkedAt: 2026-10-23
  - field: runtime
    url: https://davidsiaw.github.io/weaver-docs/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://davidsiaw.github.io/weaver-docs/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://davidsiaw.github.io/weaver-docs/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/davidsiaw/weaver
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/davidsiaw/weaver/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/weaver.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/weaver.json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/weaver.json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/davidsiaw/weaver
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/davidsiaw/weaver/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/weaver
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Weaver is a Ruby library that generates websites from weave files. A weave file holds Ruby code that calls methods named after HTML tags, such as `h1` and `center_page`, and `bundle exec weaver build` writes the result into a build directory. `bundle exec weaver` starts a local preview on port 4567 during development. The project's documentation site is itself written in Weaver.

## Worth knowing

The repository README still contains the default text of a RubyGems template, with no usage section.
