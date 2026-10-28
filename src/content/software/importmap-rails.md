---
id: importmap-rails
name: importmap-rails
urls:
  repository: https://github.com/rails/importmap-rails
  docs: https://github.com/rails/importmap-rails/blob/v2.2.3/README.md
category:
  - build-tool
description: Ruby gem that adds import maps to Rails so JavaScript ES modules load in the browser without transpiling or bundling.
status: active
maintainer: Basecamp
firstRelease: 2021
language: ruby
runtime:
  - ruby
runtimeMin: ruby 3.1
basedOn:
  - rails
installMethod: bundler, then rails generator importmap:install
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-01-07
githubStargazers: 1165
contributors: 62
dependentRepos: 15822
dependentPackages: 44
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/rails/importmap-rails
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/rails/importmap-rails
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://api.github.com/repos/rails/importmap-rails
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/importmap-rails.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/importmap-rails.gemspec
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/importmap-rails.gemspec
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/rails/importmap-rails/blob/v2.2.3/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/importmap-rails.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/importmap-rails.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/importmap-rails.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/rails/importmap-rails
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/rails/importmap-rails/contributors
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/importmap-rails
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/importmap-rails
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

importmap-rails is a Ruby gem that adds import maps to Rails, so the browser loads JavaScript ES modules directly. The application's `config/importmap.rb` pins logical module names to local files or CDN URLs, and the layout helper `javascript_importmap_tags` writes the map into the page. The `./bin/importmap` command downloads npm packages from a CDN into `vendor/javascript`, where they are served by the asset pipeline.

The README presents this as an approach that avoids transpiling and bundling, so an application ships many small files instead of one bundle. Rails 7 and later include the gem by default in new applications.

## Worth knowing

Subresource integrity is opt-in: the gem adds hashes only after `enable_integrity!` is called in the importmap configuration, and Propshaft needs an integrity algorithm set in the application.
