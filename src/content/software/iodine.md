---
id: iodine
name: iodine
urls:
  repository: https://github.com/boazsegev/iodine
  docs: https://www.rubydoc.info/github/boazsegev/iodine
category:
  - web-server
description: C-powered HTTP and WebSocket application server for Ruby Rack applications, with built-in Pub/Sub.
status: active
maintainer: Boaz Segev
maintainerType: individual
firstRelease: 2015
language: c
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
runsAs:
  - always-on
installMethod: RubyGems (gem install iodine)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-26
githubStargazers: 991
contributors: 24
dependentRepos: 47
dependentPackages: 9
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://api.github.com/repos/boazsegev/iodine
    checkedAt: 2026-10-29
  - field: urls
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/LICENSE.txt
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/LICENSE.txt
    checkedAt: 2026-10-29
  - field: category
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/README.md
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/boazsegev/iodine/languages
    checkedAt: 2026-10-29
  - field: runtime
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/README.md
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://github.com/boazsegev/iodine/blob/v0.8.3/iodine.gemspec
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/README.md
    checkedAt: 2026-10-29
  - field: license
    url: https://api.github.com/repos/boazsegev/iodine/license
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/boazsegev/iodine/master/LICENSE.txt
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/boazsegev/iodine/releases/latest
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/boazsegev/iodine/releases/latest
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/iodine.json
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/boazsegev/iodine
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/boazsegev/iodine/contributors?per_page=1
    checkedAt: 2026-10-29
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/iodine
    checkedAt: 2026-10-29
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/iodine
    checkedAt: 2026-10-29
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

iodine is a Ruby gem that provides a C-powered HTTP and WebSocket server for Rack and NeoRack applications. Its README lists built-in WebSockets, Server-Sent Events, Pub/Sub, static file serving and TLS, and describes a master process that monitors worker processes. The Pub/Sub engine can use Redis or Valkey when a deployment needs an external broker.

It is installed with gem install iodine or added to a Gemfile for Bundler-managed applications. It runs as a long-lived server in front of the application, not as a script that runs per request. Boaz Segev is the copyright holder named in the MIT license, and the API reference is published on rubydoc.info.

## Worth knowing

The project has no website of its own: the repository and the API reference are its pages. On Windows the README describes single-process mode.
