---
id: comfy-middle-seat
name: Comfy Middle Seat
urls:
  repository: https://github.com/avonderluft/comfy-middle-seat
category:
  - cms
description: Rails engine that adds an embeddable, self-hosted content management system with editor-managed pages and layouts to an existing Rails application.
status: active
maintainer: Andrew vonderLuft
maintainerType: individual
firstRelease: 2026
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - rails
contentStore:
  - database
adminUi: true
i18n: yes
installMethod: bundler gem
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-25
githubStargazers: 3
contributors: 129
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/avonderluft/comfy-middle-seat/blob/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/comfy_middle_seat.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/avonderluft/comfy-middle-seat/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Comfy Middle Seat is a content management engine for Rails that adds editor-managed pages and layouts to an existing Rails application. Its admin area sits at a configurable route, and files go through Active Storage. Layouts use the `{{ cms:... }}` tag syntax, and the admin area supports translations and several sites from one installation.

The README says the gem continues the lineage of Comfortable Mexican Sofa and gives upgrade steps from Sofa, Comfortable Media Surfer and Occams. It says its database tables keep Sofa's names, so a Sofa installation does not need its tables renamed.

## Worth knowing

The README says the project is not intended to be a hosted SaaS CMS or a JavaScript-first visual page builder. Image resize options depend on whether the application's Active Storage uses ImageMagick or libvips.

Its documentation links to the Comfortable Media Surfer wiki for features it inherits.
