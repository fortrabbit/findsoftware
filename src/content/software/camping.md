---
id: camping
name: Camping
urls:
  repository: https://github.com/camping/camping
  docs: https://github.com/camping/camping/blob/main/book/01_introduction.md
category:
  - framework
description: Ruby micro web framework that keeps a small application in a few files, organized as Model-View-Controller.
status: stub
maintainer: community
maintainerType: community
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.1
runsAs:
  - local
  - per-request
  - always-on
installMethod: gem install camping
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2024-08-09
githubStargazers: 993
contributors: 35
social:
  discord: https://discord.gg/JSmPBsWgFt
  forum: https://www.rubyforum.org/tag/camping
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: status
    url: https://rubycamping.org/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/camping/camping
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/camping/camping/blob/main/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/camping/camping/blob/main/README.md
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/camping/camping
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/camping/camping/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/camping/camping/blob/main/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/camping/camping/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/camping/camping/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/camping/camping/blob/main/book/08_publishing_an_app.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/camping/camping/blob/main/book/08_publishing_an_app.md
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://rubygems.org/api/v2/rubygems/camping/versions/3.2.6.json
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/camping/camping/blob/main/COPYING
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/camping/camping/blob/main/COPYING
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/camping.json
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/camping/camping/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/camping/camping/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/camping/camping
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/camping/camping/contributors?per_page=1
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Camping is a micro web framework for Ruby that keeps a complete application small enough for a few files. Each app follows the Model-View-Controller pattern, and the framework supports several apps that run together, each with its own models, routes and controllers. The [README](https://github.com/camping/camping/blob/main/README.md) describes installation with the gem command from RubyGems and a development mode run with the camping command, which it recommends running locally. The publishing chapter of the book describes running an app as a CGI script that the web server starts for each request, and as a Camping server on a machine that stays on.

## Worth knowing

The original work is credited to why the lucky stiff, and the project is now maintained by its community through the GitHub repository.
