---
id: premailer
name: Premailer
urls:
  home: https://premailer.github.io/premailer/
  repository: https://github.com/premailer/premailer
  docs: https://premailer.github.io/premailer/
category:
  - email
  - build-tool
description: Ruby gem that makes CSS inline in HTML email, converts links and warns about CSS that email clients do not support.
status: active
maintainer: Alex Dunae
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.3
installMethod: gem
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-11-01
githubStargazers: 2416
contributors: 102
dependentRepos: 5079
dependentPackages: 51
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://premailer.github.io/premailer/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/premailer/premailer
    checkedAt: 2026-11-16
  - field: urls
    url: https://premailer.github.io/premailer/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/premailer/premailer/blob/v1.33.0/LICENSE.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/premailer.json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/premailer/premailer/blob/v1.33.0/premailer.gemspec
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/premailer/premailer
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/premailer/premailer/blob/v1.33.0/premailer.gemspec
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/premailer/premailer/blob/v1.33.0/premailer.gemspec
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/premailer/premailer/blob/v1.33.0/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/premailer/premailer/blob/v1.33.0/premailer.gemspec
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/premailer/premailer/blob/v1.33.0/premailer.gemspec
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/premailer.json
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/premailer.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/premailer/premailer
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/premailer/premailer/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/premailer
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/premailer
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Premailer is a Ruby gem that prepares HTML email for delivery. Its [documentation](https://premailer.github.io/premailer/) says that CSS should be inline in HTML email, and the gem moves CSS styles into inline style attributes. It also converts relative paths to absolute ones, checks CSS properties against what email clients support, and can write a plain text version of the HTML. A Ruby application passes it a URL or an HTML string and gets back the HTML with inline styles.

## Worth knowing

Remote stylesheets that resolve to loopback or private addresses are dropped unless the caller allows local network access. CSS variables stay as variable calls in the output, and a separate build step is needed to replace them with their values.
