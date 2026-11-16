---
id: ruby-sanitize
name: Sanitize
urls:
  repository: https://github.com/rgrove/sanitize
  docs: https://rubydoc.info/gems/sanitize/Sanitize
category:
  - library
description: Ruby library that cleans HTML and CSS strings by keeping only the elements, attributes and properties on an allowlist.
status: active
maintainer: Ryan Grove
maintainerType: individual
firstRelease: 2008
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-11-02
githubStargazers: 2054
contributors: 41
dependentRepos: 10715
dependentPackages: 260
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/rgrove/sanitize
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/rgrove/sanitize/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/rgrove/sanitize/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/rgrove/sanitize
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/rgrove/sanitize/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/rgrove/sanitize/blob/v7.0.2/sanitize.gemspec
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/rgrove/sanitize/blob/v7.0.2/sanitize.gemspec
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/rgrove/sanitize/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/rgrove/sanitize/blob/v7.0.2/sanitize.gemspec
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/rgrove/sanitize/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/rgrove/sanitize/commits/release-1.0.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/rgrove/sanitize/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/rgrove/sanitize/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/rgrove/sanitize
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/rgrove/sanitize/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/sanitize
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/sanitize
    checkedAt: 2026-11-16
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

Sanitize is a Ruby library that works as an allowlist-based sanitizer for HTML and CSS: it removes whatever elements, attributes and properties are not on the allowlist. The README says it is built on the Nokogiri HTML5 parser and on Crass, a CSS parser.

## Worth knowing

The README warns that Sanitize cannot fully sanitize the contents of math and svg elements, and that it removes them by default.
