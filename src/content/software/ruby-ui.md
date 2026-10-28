---
id: ruby-ui
name: RubyUI
urls:
  home: https://rubyui.com
  repository: https://github.com/ruby-ui/ruby_ui
  docs: https://rubyui.com/docs/introduction
category:
  - ui-library
description: Ruby gem with generators that copy UI components built on Phlex, Tailwind CSS and Stimulus into a Rails app.
status: active
maintainer: George Kettle
firstRelease: 2024
language: ruby
runtime:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - phlex
  - tailwindcss
  - stimulus
templating: phlex
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-08-05
githubStargazers: 1036
contributors: 39
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://rubyui.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/ruby-ui/ruby_ui
    checkedAt: 2026-10-28
  - field: urls
    url: https://rubyui.com/docs/introduction
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/ruby_ui.json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/ruby_ui.gemspec
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/ruby-ui/ruby_ui
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/ruby_ui.gemspec
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://rubyui.com/docs/introduction
    checkedAt: 2026-10-28
  - field: templating
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://rubyui.com/docs/installation/rails_bundler
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/ruby_ui.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/ruby_ui.gemspec
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/ruby_ui.gemspec
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/ruby-ui/ruby_ui/v1.6.0/gem/ruby_ui.gemspec
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/ruby-ui/ruby_ui/releases/tag/v1.6.0
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/ruby-ui/ruby_ui/releases/tag/v1.6.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ruby-ui/ruby_ui
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ruby-ui/ruby_ui/contributors?per_page=1&anon=true
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

RubyUI is a Ruby gem whose generators copy UI components into a Rails app, so the component code lives in the app itself. The gem is added with bundle, and a Rails install command sets it up. Components are then added one at a time with a component generator. The docs describe the components as built on Phlex, Tailwind CSS and Stimulus, and the project was previously named PhlexUI.

The gem's README describes the project as a collection of reusable components to copy into an app.

## Worth knowing

The installation guide expects the app to use Tailwind CSS and Stimulus. The components are written in Phlex, a Ruby view layer.
