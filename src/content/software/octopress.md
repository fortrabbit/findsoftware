---
id: octopress
name: Octopress
urls:
  home: https://octopress.org/
  repository: https://github.com/octopress/octopress
  docs: https://octopress.org/docs/
category:
  - cms
description: Ruby gem that adds a command-line toolkit for writing and deploying Jekyll blogs.
status: stub
maintainer: Brandon Mathis
firstRelease: 2013
language: ruby
runtime:
  - ruby
hosting:
  - static
basedOn:
  - jekyll
contentStore:
  - flat-file
templating: liquid
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: gem install
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2015-07-15
githubStargazers: 1744
contributors: 10
social:
  x: https://twitter.com/octopress
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://octopress.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/octopress/octopress
    checkedAt: 2026-10-23
  - field: urls
    url: https://octopress.org/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://octopress.org/docs/setup/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/octopress/octopress
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/octopress/octopress
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/octopress/octopress/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/octopress/octopress/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/octopress.json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/octopress/octopress
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/octopress/octopress/contributors
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/octopress.json
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/octopress/octopress/master/README.md
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Ruby · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Octopress is a Ruby gem that adds a command-line toolkit to Jekyll for writing and deploying blogs. It creates posts, pages and drafts from templates, and Jekyll does the build. The README says its templates can use Liquid tags and filters from the site's plugins, and its deploy command publishes the built site by rsync, to Amazon S3 or to a Git host such as GitHub Pages.

## Worth knowing

The documentation on octopress.org dates from 2011 and describes the earlier Git-based setup, so its install steps do not match the gem. The GitHub repository has no release objects, only tags.
