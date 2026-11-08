---
id: faraday
name: Faraday
urls:
  home: https://lostisland.github.io/faraday
  repository: https://github.com/lostisland/faraday
  docs: https://lostisland.github.io/faraday
  plugins: https://github.com/lostisland/awesome-faraday/
category:
  - library
description: Ruby HTTP client library that gives one interface over several HTTP adapters and Rack-style middleware.
status: active
maintainer: Rick Olson, Zack Hobson
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.0
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-26
githubStargazers: 5956
contributors: 271
social:
  forum: https://github.com/lostisland/faraday/discussions
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://rubygems.org/api/v1/gems/faraday.json
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/lostisland/faraday
    checkedAt: 2026-11-08
  - field: urls
    url: https://raw.githubusercontent.com/lostisland/faraday/main/README.md
    checkedAt: 2026-11-08
  - field: category
    url: https://raw.githubusercontent.com/lostisland/faraday/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/lostisland/faraday
    checkedAt: 2026-11-08
  - field: runtime
    url: https://raw.githubusercontent.com/lostisland/faraday/main/README.md
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/lostisland/faraday/blob/v2.15.1/faraday.gemspec
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/lostisland/faraday/blob/main/docs/getting-started/quick-start.md
    checkedAt: 2026-11-08
  - field: urls
    url: https://raw.githubusercontent.com/lostisland/faraday/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://api.github.com/repos/lostisland/faraday
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://raw.githubusercontent.com/lostisland/faraday/main/LICENSE.md
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/lostisland/faraday/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/lostisland/faraday/releases/latest
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/faraday.json
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/lostisland/faraday
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/lostisland/faraday/contributors
    checkedAt: 2026-11-08
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

Faraday is an HTTP client library for Ruby that gives one interface over several HTTP adapters, such as Net::HTTP, and runs requests and responses through Rack-style middleware. Code creates a connection with a base URL, default headers and middleware, then calls the HTTP verb methods on it.

The included middleware covers authentication, URL encoding, JSON encoding and decoding, instrumentation, logging and raising errors. The documentation also describes custom adapters and custom middleware. The gem is installed through Bundler's Gemfile or with the gem command.
