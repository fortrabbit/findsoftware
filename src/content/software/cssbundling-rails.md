---
id: cssbundling-rails
name: cssbundling-rails
urls:
  repository: https://github.com/rails/cssbundling-rails
category:
  - build-tool
description: Ruby gem that installs a Node-based CSS bundler (Tailwind CSS, Bootstrap, Bulma, PostCSS or Dart Sass) into a Rails application and delivers its output through the asset pipeline.
status: active
maintainer: David Heinemeier Hansson
firstRelease: 2021
language: ruby
runtime:
  - ruby
  - node
basedOn:
  - rails
runsAs:
  - local
installMethod: bin/bundle add cssbundling-rails, then bin/rails css:install:<bundler>
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-03-03
githubStargazers: 644
contributors: 56
dependentRepos: 2084
dependentPackages: 8
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/rails/cssbundling-rails
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/rails/cssbundling-rails
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/rails/cssbundling-rails
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/rails/cssbundling-rails/main/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/rails/cssbundling-rails/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/rails/cssbundling-rails/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/rails/cssbundling-rails/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/rails/cssbundling-rails
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/rails/cssbundling-rails/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/cssbundling-rails
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/cssbundling-rails
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
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

cssbundling-rails is a Ruby gem that bundles a Rails application's stylesheets with a Node-based bundler. Its installers set up Tailwind CSS, Bootstrap, Bulma, PostCSS or Dart Sass. During development the bundler runs in watch mode in a terminal. The bundled output is delivered through the asset pipeline in Rails.

The gem is added with the Rails bundler and an installer runs for the chosen bundler. It can also be selected when a new Rails application is created with the CSS option.

## Worth knowing

The bundler needs Node and yarn on the machine that builds the stylesheets, so an application that does not otherwise use Node gains that dependency.
