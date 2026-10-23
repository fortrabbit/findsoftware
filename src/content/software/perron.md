---
id: perron
name: Perron
urls:
  home: https://perron.railsdesigner.com
  repository: https://github.com/Rails-Designer/perron
  docs: https://perron.railsdesigner.com/docs/
category:
  - ssg
description: Static site generator for Ruby on Rails that builds content collections from markdown or ERB into a static site.
status: active
maintainer: Rails Designer
firstRelease: 2025
language: ruby
runtime:
  - ruby
hosting:
  - static
runtimeMin: ruby 3.4
contentStore:
  - flat-file
templating: erb, markdown
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: bundle add perron, then bin/rails perron:install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-06-24
githubStargazers: 158
contributors: 6
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://perron.railsdesigner.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Rails-Designer/perron
    checkedAt: 2026-10-23
  - field: urls
    url: https://perron.railsdesigner.com/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/Rails-Designer/perron/main/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Rails-Designer/perron
    checkedAt: 2026-10-23
  - field: category
    url: https://perron.railsdesigner.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://perron.railsdesigner.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/perron.json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://perron.railsdesigner.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://perron.railsdesigner.com/docs/deploy/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://perron.railsdesigner.com/docs/deploy/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://perron.railsdesigner.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: templating
    url: https://rubygems.org/api/v1/gems/perron.json
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://perron.railsdesigner.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/Rails-Designer/perron/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/Rails-Designer/perron/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/Rails-Designer/perron/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Rails-Designer/perron/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/Rails-Designer/perron/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Rails-Designer/perron
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Rails-Designer/perron/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: Ruby · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Perron is a static site generator for Ruby on Rails, built on Rails and installed into a Rails application with bundle add perron and the perron:install task. Content lives in the application as markdown or ERB files, grouped into collections, and the perron:build task writes the finished site to an output directory. The library requires Ruby 3.4 or newer.

## Worth knowing

Perron has two modes. The default standalone mode produces a static site for build-based hosts such as Netlify. The integrated mode adds static pages to a live Rails application, which then runs on a Rails host such as Heroku.
