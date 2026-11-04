---
id: bootstrap-email
name: Bootstrap Email
urls:
  home: https://bootstrapemail.com
  repository: https://github.com/bootstrap-email/bootstrap-email
  docs: https://bootstrapemail.com/docs/introduction
category:
  - email
description: Compiler and stylesheet that turns HTML written with Bootstrap-like classes into table-based markup for HTML emails.
status: active
maintainer: Stuart Yamartino
firstRelease: 2017
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.0
installMethod: gem install bootstrap-email
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-12-19
githubStargazers: 1215
contributors: 25
dependentRepos: 50
social:
  x: https://twitter.com/BootstrapEmail
  forum: https://github.com/bootstrap-email/bootstrap-email/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://bootstrapemail.com
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/bootstrap-email/bootstrap-email
    checkedAt: 2026-11-04
  - field: urls
    url: https://bootstrapemail.com/docs/introduction
    checkedAt: 2026-11-04
  - field: category
    url: https://bootstrapemail.com/docs/introduction
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/bootstrap-email/bootstrap-email/blob/1.8.1/bootstrap-email.gemspec
    checkedAt: 2026-11-04
  - field: runtime
    url: https://bootstrapemail.com/docs/usage
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/bootstrap-email/bootstrap-email/blob/1.8.1/bootstrap-email.gemspec
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://bootstrapemail.com/docs/usage
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/bootstrap-email/bootstrap-email
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/bootstrap-email/bootstrap-email/main/LICENSE
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/bootstrap-email/bootstrap-email/main/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/bootstrap-email.json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/bootstrap-email/bootstrap-email/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/bootstrap-email/bootstrap-email/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/bootstrap-email/bootstrap-email
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/bootstrap-email/bootstrap-email/contributors
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/bootstrap-email
    checkedAt: 2026-11-04
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

Bootstrap Email compiles Bootstrap-style markup into table-based HTML with inlined styles, so emails render in email clients. The gem runs from the command line or inside a Ruby or Rails project, where the Rails route calls `bootstrap_mail` in place of `mail`. The [documentation](https://bootstrapemail.com/docs/introduction) names Bootstrap and Tailwind as its sources of inspiration.

## Worth knowing

Ruby has to be installed on the machine that runs the compiler. A hosted [online editor](https://bootstrapemail.com/docs/usage) is offered as another way to use Bootstrap Email, and the docs describe it as less integrated and less customizable than the gem.
