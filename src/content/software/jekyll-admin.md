---
id: jekyll-admin
name: Jekyll Admin
urls:
  home: https://jekyll.github.io/jekyll-admin/
  repository: https://github.com/jekyll/jekyll-admin
  docs: https://jekyll.github.io/jekyll-admin/
category:
  - admin-panel
description: Jekyll plugin that adds a CMS-style graphical admin interface for authoring content and administering Jekyll sites.
status: active
maintainer: Mert Kahyaoğlu
firstRelease: 2016
language: javascript
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.7
basedOn:
  - jekyll
contentStore:
  - flat-file
adminUi: true
headlessApi:
  - rest
runsAs:
  - local
  - always-on
installMethod: Bundler gem in the Jekyll Gemfile
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-02-27
githubStargazers: 2926
contributors: 34
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://jekyll.github.io/jekyll-admin/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/jekyll/jekyll-admin
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/jekyll/jekyll-admin/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/jekyll/jekyll-admin
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/jekyll-admin.json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/jekyll/jekyll-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://jekyll.github.io/jekyll-admin/api
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://jekyll.github.io/jekyll-admin/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://jekyll.github.io/jekyll-admin/self-hosting
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/jekyll/jekyll-admin
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/jekyll/jekyll-admin/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/jekyll/jekyll-admin/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/jekyll/jekyll-admin/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/jekyll/jekyll-admin/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/jekyll/jekyll-admin
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/jekyll/jekyll-admin/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: 🎛️
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Admin
ai: authored
packagistDownloads: null
---

Jekyll Admin is a Jekyll plugin that adds a CMS-style graphical interface for writing content and administering a Jekyll site. It is added to the site's Gemfile in the jekyll_plugins group, and the interface is served at /admin by the local Jekyll server started with bundle exec jekyll serve. It has two parts: a Ruby HTTP API under /_api that handles Jekyll and filesystem operations, and a JavaScript front end built on that API.

## Worth knowing

The [self-hosting page](https://jekyll.github.io/jekyll-admin/self-hosting) describes running the admin on a live site behind an nginx reverse proxy, so a live site with the admin needs a process that keeps running. The API page says the HTTP API is pre-release and may change without notice until it reaches a 1.0 release.
