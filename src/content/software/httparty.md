---
id: httparty
name: HTTParty
urls:
  repository: https://github.com/jnunemaker/httparty
  docs: https://github.com/jnunemaker/httparty/tree/main/docs
category:
  - library
description: Ruby HTTP client library that wraps web requests in class methods and a mixin for building API client classes.
status: active
maintainer: John Nunemaker
maintainerType: individual
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.7
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-30
githubStargazers: 5900
contributors: 210
social:
  forum: https://github.com/jnunemaker/httparty/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/jnunemaker/httparty
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/jnunemaker/httparty/main/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/jnunemaker/httparty/blob/v0.24.3/httparty.gemspec
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jnunemaker/httparty/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/jnunemaker/httparty
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/jnunemaker/httparty/main/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/jnunemaker/httparty/blob/v0.24.3/httparty.gemspec
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/jnunemaker/httparty/blob/v0.24.3/httparty.gemspec
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/jnunemaker/httparty/main/MIT-LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/jnunemaker/httparty/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/jnunemaker/httparty/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/httparty.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/jnunemaker/httparty
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/jnunemaker/httparty/contributors
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

HTTParty is a Ruby library for sending HTTP requests and reading their responses. Code calls class methods such as `HTTParty.get`, or includes the HTTParty module in its own class and sets a base URI, so that the class's methods wrap one web API. A response exposes the body, status code, message and headers, and a JSON response is parsed into Ruby hashes and arrays unless the format option suppresses it.

The gem also ships an `httparty` command-line executable that prints a response for inspection and can format it as XML or JSON.

## Worth knowing

When a request sets its own Accept-Encoding header, HTTParty decompresses Brotli, LZW and Zstandard responses only if a separate gem is loaded. The [docs](https://github.com/jnunemaker/httparty/tree/main/docs) name each gem.
