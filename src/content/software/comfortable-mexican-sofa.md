---
id: comfortable-mexican-sofa
name: ComfortableMexicanSofa
urls:
  repository: https://github.com/comfy/comfortable-mexican-sofa
  docs: https://github.com/comfy/comfortable-mexican-sofa/wiki
category:
  - cms
description: Ruby on Rails engine that adds a content management system with an admin area to an existing Rails application.
status: stub
maintainer: Oleg Khabarov
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
basedOn:
  - rails
adminUi: true
templating: cms content tags
i18n: yes
installMethod: bundler gem
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2019-12-31
githubStargazers: 2707
contributors: 121
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/comfy/comfortable-mexican-sofa/blob/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/comfortable_mexican_sofa.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/comfy/comfortable-mexican-sofa/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

ComfortableMexicanSofa is a content management system engine for Ruby on Rails. It is added to an existing Rails application as a gem, and its routes are mounted for an admin area and for serving content. A site defines a hostname, a content path and a language, and a layout defines the fields that editors fill in, such as text and wysiwyg content tags.

Images are resized through ActiveStorage with ImageMagick, and pagination comes from Kaminari or will_paginate. The README lists support for several languages and says one installation can run several sites.

## Worth knowing

The README points to separate branches and older gem versions for older Rails releases. The changelog is kept in the GitHub releases, not in a file in the repository.
