---
id: sass-embedded-ruby
name: sass-embedded (Ruby)
urls:
  repository: https://github.com/sass-contrib/sass-embedded-host-ruby
  docs: https://rubydoc.info/gems/sass-embedded/Sass
category:
  - css-framework
description: Ruby gem that compiles Sass stylesheets by sending them to Embedded Dart Sass over the Embedded Sass protocol.
status: active
maintainer: なつき
firstRelease: 2021
language: ruby
runtime:
  - ruby
  - node
runtimeMin: ruby 3.2
basedOn:
  - sass
installMethod: gem install sass-embedded
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-21
githubStargazers: 86
contributors: 2
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/sass-contrib/sass-embedded-host-ruby
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/sass-contrib/sass-embedded-host-ruby/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/sass-contrib/sass-embedded-host-ruby
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/v1.106.1/sass-embedded.gemspec
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/sass-contrib/sass-embedded-host-ruby/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/sass-contrib/sass-embedded-host-ruby/main/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/sass-embedded.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/sass-embedded.json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/sass-embedded.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/sass-contrib/sass-embedded-host-ruby
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/sass-contrib/sass-embedded-host-ruby/contributors
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

sass-embedded is a Ruby gem that compiles Sass by passing stylesheets to Embedded Dart Sass, the Dart implementation of Sass, over the Embedded Sass protocol. It is installed with gem install sass-embedded. The gem's README says it is backed by a native Dart Sass executable on supported platforms, so the compiler is Dart Sass and the gem supplies the Ruby side.

## Worth knowing

On platforms without a native executable, the gem uses a Node.js Dart Sass executable instead, so a Node.js installation is needed there as well as Ruby. The API documentation is on rubydoc.info.
