---
id: webpacker
name: Webpacker
urls:
  repository: https://github.com/rails/webpacker
  docs: https://github.com/rails/webpacker/blob/5-x-stable/README.md
category:
  - build-tool
description: Rails gem that manages app-like JavaScript modules with webpack, no longer developed by the Rails team.
status: discontinued
firstRelease: 2016
language: ruby
runtime:
  - ruby
runtimeMin: ruby 2.4
basedOn:
  - rails
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2023-01-31
githubStargazers: 5270
contributors: 418
dependentRepos: 120458
dependentPackages: 111
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: status
    url: https://raw.githubusercontent.com/rails/webpacker/master/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/rails/webpacker
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/rails/webpacker/5-x-stable/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/rails/webpacker/v5.4.4/webpacker.gemspec
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/rails/webpacker/v5.4.4/webpacker.gemspec
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/rails/webpacker
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/rails/webpacker/v5.4.4/webpacker.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/rails/webpacker/v5.4.4/webpacker.gemspec
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/rails/webpacker/5-x-stable/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/rails/webpacker/v5.4.4/webpacker.gemspec
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/rails/webpacker/v5.4.4/webpacker.gemspec
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/webpacker.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/webpacker.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/webpacker.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/rails/webpacker
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/rails/webpacker/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/webpacker
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/webpacker
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Webpacker was a Rails gem that set up webpack for app-like JavaScript modules in Rails applications. Its install task generated configuration files for the test, development and production environments and a directory layout for packs, and its binstubs ran webpack or the webpack dev server. Rails compiled the packs through the assets precompile step in production.

## Worth knowing

The project has ended: its README says Webpacker has been retired and that the Rails team no longer evolves it. The README points existing applications to jsbundling-rails with webpack or to import maps, and names the Shakapacker gem as the continuation of the unreleased v6 work. Security fixes on the Ruby side follow the Rails maintenance schedule, but the JavaScript libraries are no longer updated.
