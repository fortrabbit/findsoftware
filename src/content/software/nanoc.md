---
id: nanoc
name: Nanoc
urls:
  home: https://nanoc.app
  repository: https://github.com/nanoc/nanoc
  docs: https://nanoc.app/doc/
category:
  - ssg
description: Ruby static-site generator that transforms content such as Markdown or AsciiDoc into HTML pages with a shared layout.
status: active
maintainer: Denis Defreyne
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - static
runtimeMin: ruby 3.2
templating: eRuby, Haml, Mustache
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: RubyGems (gem install nanoc)
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-08-30
githubStargazers: 2157
contributors: 89
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/nanoc/nanoc
    checkedAt: 2026-10-23
  - field: urls
    url: https://nanoc.app/
    checkedAt: 2026-10-23
  - field: urls
    url: https://nanoc.app/doc/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://nanoc.app/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/nanoc/nanoc
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/nanoc/nanoc
    checkedAt: 2026-10-23
  - field: license
    url: https://nanoc.app/
    checkedAt: 2026-10-23
  - field: category
    url: https://nanoc.app/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://nanoc.app/doc/installation/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/nanoc.json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nanoc.app/doc/installation/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://nanoc.app/doc/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://nanoc.app/doc/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://nanoc.app/doc/
    checkedAt: 2026-10-23
  - field: templating
    url: https://nanoc.app/doc/
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/nanoc/nanoc
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/nanoc/nanoc/contributors
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/nanoc.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/nanoc/nanoc/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/nanoc/nanoc/releases/latest
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Ruby · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Nanoc is a static-site generator written in Ruby and run from the command line. It reads content in formats such as Markdown or AsciiDoc, lays it out with templates, and writes HTML files that any web server can serve. Templating languages include eRuby, Haml and Mustache, and custom code can pull data from databases or web APIs. The project says it does not manage content; content is usually managed on the file system. Denis Defreyne maintains it, and it is distributed as a RubyGem.

## Worth knowing

Nanoc runs on a developer's machine, where the site is built and then deployed as files, so a Ruby environment is needed to build the site while the published output needs only a web server.
