---
id: rack-app
name: Rack::App
urls:
  repository: https://github.com/rack-app/rack-app
  docs: https://github.com/rack-app/rack-app/wiki
category:
  - framework
description: Minimalist Ruby framework for building Rack applications with a Sinatra-style DSL.
status: active
maintainer: Adam Luzsi
firstRelease: 2015
language: ruby
runtime:
  - ruby
hosting:
  - ruby
templating: erb
runsAs:
  - always-on
installMethod: gem
licenseModel: open-source
license: Apache-2.0
currentMajor: "11"
latestReleaseDate: 2023-09-14
githubStargazers: 410
contributors: 12
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/rack-app/rack-app
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/rack-app/rack-app/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/rack-app/rack-app
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/rack-app/rack-app/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://api.github.com/repos/rack-app/rack-app
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/rack-app/rack-app/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/rack-app/rack-app
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/rack-app/rack-app/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/rack-app.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/rack-app/rack-app/tags?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/rack-app.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/rack-app/rack-app
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/rack-app/rack-app/contributors
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://rubygems.org/api/v1/gems/rack-app.json
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/rack-app/rack-app/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/rack-app/rack-app/wiki/getting%E2%80%90started
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Rack::App is a Ruby framework for building applications on the Rack interface. Endpoints are declared inside a class with a Sinatra-style DSL. The router is a prefix tree, so the README says adding endpoints does not slow route lookup. The framework includes parameter validation, middleware that applies to single endpoints, file upload and download, streamed responses, mounting of other Rack::App classes, static file serving and a bundled test module. The application starts through a config.ru file and a Rack server command, and the framework is installed with gem install or a Gemfile entry.

## Worth knowing

The README describes the framework as meant for seasoned web developers, and says it will not gain features without real-life use cases. Templates come from a separate front_end extension, which the README says adds dependencies.
