---
id: premailer-rails
name: premailer-rails
urls:
  repository: https://github.com/fphilipe/premailer-rails
  docs: https://github.com/fphilipe/premailer-rails/blob/main/README.md
category:
  - email
description: Ruby gem that adapts the premailer CSS inliner to ActionMailer, so linked stylesheets are inlined into HTML emails when they are delivered.
status: stub
maintainer: Philipe Fatio
maintainerType: individual
firstRelease: 2011
language: ruby
runtime:
  - ruby
hosting:
  - ruby
basedOn:
  - premailer
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-11-10
githubStargazers: 1764
contributors: 43
dependentRepos: 4603
dependentPackages: 15
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/fphilipe/premailer-rails
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/fphilipe/premailer-rails/blob/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/fphilipe/premailer-rails/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/fphilipe/premailer-rails/tags
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/fphilipe/premailer-rails/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/fphilipe/premailer-rails
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/fphilipe/premailer-rails/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://api.github.com/repos/fphilipe/premailer-rails
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fphilipe/premailer-rails/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/fphilipe/premailer-rails/blob/main/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/fphilipe/premailer-rails/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/premailer-rails.json
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/premailer-rails.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/fphilipe/premailer-rails
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/fphilipe/premailer-rails/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/premailer-rails
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/premailer-rails
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

premailer-rails is a Ruby gem that inlines CSS into the HTML emails an application sends with ActionMailer. It is an adapter for premailer: the gem registers a delivery hook, so every delivered email is processed, and the stylesheets it links are applied to matching elements through their style attribute. The README says it also works without Rails, for example with sinatra.

## Worth knowing

Linked stylesheets are read from a file under the `public/` folder, through the Rails asset pipeline, or over the network, in an order that can be configured.
