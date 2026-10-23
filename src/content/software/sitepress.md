---
id: sitepress
name: Sitepress
urls:
  home: https://sitepress.cc
  repository: https://github.com/sitepress/sitepress
  docs: https://sitepress.cc/
category:
  - ssg
description: Ruby gem that serves file-based content pages inside a Rails app or compiles them into a static site.
status: active
maintainer: Bradley Gessler
firstRelease: 2016
language: ruby
runtime:
  - ruby
hosting:
  - ruby
  - static
basedOn:
  - rails
contentStore:
  - flat-file
templating: erb, haml, slim, markdown
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
installMethod: gem install sitepress
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2025-11-17
githubStargazers: 396
contributors: 7
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/sitepress/sitepress
    checkedAt: 2026-10-23
  - field: urls
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/sitepress/sitepress/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/sitepress/sitepress
    checkedAt: 2026-10-23
  - field: runtime
    url: https://sitepress.cc/getting-started/static
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: category
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: templating
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://sitepress.cc/getting-started/static
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sitepress.cc/getting-started/static
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sitepress.cc/getting-started/rails
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://sitepress.cc/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://sitepress.cc/getting-started/static
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/sitepress/sitepress/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://rubygems.org/api/v1/gems/sitepress.json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/sitepress/sitepress/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/sitepress.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/sitepress.json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/sitepress.json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/sitepress/sitepress
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/sitepress/sitepress/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Ruby · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Sitepress treats a folder of content files as a website. Each file can carry frontmatter that templates read, and the same content can run inside a Rails application or be compiled into static HTML, CSS and JavaScript. Sitepress is built on top of Rails and can serve several sites from one Rails app.

## Worth knowing

The Rails embed runs as a long-lived application process, while the static compiler produces files that a host serves. The two are separate ways to run the same content.
