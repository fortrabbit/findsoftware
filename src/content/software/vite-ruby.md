---
id: vite-ruby
name: Vite Ruby
urls:
  home: https://vite-ruby.netlify.app/
  repository: https://github.com/ElMassimo/vite_ruby
  docs: https://vite-ruby.netlify.app/guide/
category:
  - build-tool
description: Ruby integration that connects the Vite frontend build tool to Ruby applications, starting with Rails through the vite_rails gem.
status: active
maintainer: Maximo Mussini
maintainerType: individual
firstRelease: 2021
language: ruby
runtime:
  - ruby
runtimeMin: ruby 2.5
basedOn:
  - rails
  - vite
runsAs:
  - local
installMethod: "Bundler: gem 'vite_rails' in the Gemfile, then bundle install"
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-07-03
githubStargazers: 1590
contributors: 61
dependentRepos: 240
dependentPackages: 2
social:
  discord: https://discord.gg/9sSq53jxb4
  forum: https://github.com/ElMassimo/vite_ruby/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://vite-ruby.netlify.app/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/ElMassimo/vite_ruby
    checkedAt: 2026-10-28
  - field: urls
    url: https://vite-ruby.netlify.app/guide/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/ElMassimo/vite_ruby/blob/vite_rails@3.11.1/vite_rails/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/ElMassimo/vite_ruby/blob/vite_rails@3.11.1/vite_rails/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/ElMassimo/vite_ruby/blob/vite_rails@3.11.1/vite_rails/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/ElMassimo/vite_ruby
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/ElMassimo/vite_ruby/blob/vite_rails@3.11.1/vite_rails/vite_rails.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/ElMassimo/vite_ruby/blob/vite_rails@3.11.1/vite_rails/vite_rails.gemspec
    checkedAt: 2026-10-28
  - field: license
    url: https://rubygems.org/api/v1/gems/vite_rails.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://vite-ruby.netlify.app/guide/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://vite-ruby.netlify.app/guide/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://vite-ruby.netlify.app/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://vite-ruby.netlify.app/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/vite_rails.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/vite_rails.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/vite_rails.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ElMassimo/vite_ruby
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ElMassimo/vite_ruby/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/vite_rails
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/vite_rails
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

Vite Ruby connects the Vite frontend build tool to Ruby applications. For Rails, the gem `vite_rails` provides a complete setup, so a Rails application can use Vite for its frontend. The gem is added to the Gemfile and installed with bundle, after which `bin/vite` starts the Vite development server on the developer's machine. The [guide](https://vite-ruby.netlify.app/guide/) also covers the installation steps. Separate gems cover Jekyll, Hanami and Padrino.
