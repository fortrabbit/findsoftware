---
id: webgen
name: webgen
urls:
  home: https://webgen.gettalong.org/
  repository: https://github.com/gettalong/webgen
  docs: https://webgen.gettalong.org/documentation
category:
  - ssg
description: Ruby command line static website generator that combines content files with templates to produce HTML.
status: active
maintainer: Thomas Leitner
maintainerType: individual
firstRelease: 2008
language: ruby
runtime:
  - ruby
hosting:
  - static
runtimeMin: ruby 2.0
contentStore:
  - flat-file
templating: erb, haml
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: gem install
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "1"
latestReleaseDate: 2024-01-01
githubStargazers: 118
contributors: 3
social:
  x: https://twitter.com/_gettalong
  forum: https://groups.google.com/forum/?fromgroups#!forum/webgen-users
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://webgen.gettalong.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/gettalong/webgen
    checkedAt: 2026-10-23
  - field: urls
    url: https://webgen.gettalong.org/documentation
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://gettalong.org/legal.html
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/gettalong/webgen
    checkedAt: 2026-10-23
  - field: runtime
    url: https://webgen.gettalong.org/installation.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://webgen.gettalong.org/installation.html
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/gettalong/webgen/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://webgen.gettalong.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/gettalong/webgen/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/gettalong/webgen/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://webgen.gettalong.org/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://webgen.gettalong.org/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/gettalong/webgen/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/gettalong/webgen/master/COPYING
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/gettalong/webgen/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/gettalong/webgen/git/refs/tags/REL_0_5_0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/gettalong/webgen/git/refs/tags/REL_1_7_3
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/webgen.json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gettalong/webgen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gettalong/webgen/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://webgen.gettalong.org/
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

webgen is a command line program that combines content files with template files to generate HTML, so the layout stays separate from the content it wraps. Authors can write pages in several markup languages, and the generator adds menus, breadcrumb trails and news feeds. It regenerates only the items that changed, and the output is a self-contained static site whose links are relative, so it can be opened without a web server.

## Worth knowing

The installation page names Ruby 2.0.0 and Ubuntu 14.10 as tested platforms.
