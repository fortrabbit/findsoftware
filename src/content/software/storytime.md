---
id: storytime
name: Storytime
urls:
  repository: https://github.com/CultivateLabs/storytime
  docs: https://github.com/CultivateLabs/storytime/wiki
category:
  - cms
description: Rails engine that adds a content management system and blogging to a Rails app, with the dashboard mounted inside the host app.
status: active
maintainer: CultivateLabs Inc.
maintainerType: company
firstRelease: 2014
language: ruby
runtime:
  - ruby
hosting:
  - ruby
basedOn:
  - rails
contentStore:
  - database
adminUi: true
templating: erb
runsAs:
  - always-on
installMethod: Gemfile entry, then rails generate storytime:install
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-01
githubStargazers: 744
contributors: 13
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/CultivateLabs/storytime
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://rubygems.org/api/v1/gems/storytime.json
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/CultivateLabs/storytime/wiki/Setup
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/CultivateLabs/storytime/wiki/Setup
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/CultivateLabs/storytime/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://rubygems.org/api/v1/gems/storytime.json
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/CultivateLabs/storytime/wiki/Using-Custom-Post-Types
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/CultivateLabs/storytime/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/storytime.json
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/storytime.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/CultivateLabs/storytime
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/CultivateLabs/storytime/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Storytime is a Rails engine that adds a content management system and blogging to a Rails application. Its dashboard manages content and other Rails models, and one deploy can serve several sites.

Installation adds a gem to the Gemfile and runs an install generator or a command-line setup; the manual route assumes the host has an authentication system, such as Devise. The [setup guide](https://github.com/CultivateLabs/storytime/wiki/Setup) describes the steps.

## Worth knowing

The README divides the work between the CMS and the host: Storytime edits content, copy and basic formatting, while the host app provides the page structure, styling and interactions. A site that needs a custom layout is therefore built in the host app, not in the dashboard.

Image uploads need ImageMagick installed. The engine runs inside a Rails server that stays running.
