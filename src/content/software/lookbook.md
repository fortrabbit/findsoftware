---
id: lookbook
name: Lookbook
urls:
  home: https://lookbook.build/
  repository: https://github.com/lookbook-hq/lookbook
  docs: https://lookbook.build/guide/installation
category:
  - dev-tool
description: UI development environment for Ruby on Rails apps that renders component previews and Markdown pages in a browsable inspector.
status: active
maintainer: Mark Perkins
firstRelease: 2021
language: ruby
runtime:
  - ruby
runtimeMin: ruby 2.7
basedOn:
  - rails
templating: erb
installMethod: Gemfile gem, then bundle install
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-08-31
githubStargazers: 1101
contributors: 80
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://lookbook.build/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/lookbook-hq/lookbook
    checkedAt: 2026-10-28
  - field: urls
    url: https://lookbook.build/guide/installation
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/lookbook-hq/lookbook/main/LICENSE.txt
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/lookbook-hq/lookbook
    checkedAt: 2026-10-28
  - field: category
    url: https://lookbook.build/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/lookbook-hq/lookbook/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/lookbook-hq/lookbook/blob/main/lookbook.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/lookbook-hq/lookbook/blob/v2.3.15/lookbook.gemspec
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://lookbook.build/guide/installation
    checkedAt: 2026-10-28
  - field: templating
    url: https://lookbook.build/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/lookbook-hq/lookbook
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/lookbook-hq/lookbook/main/LICENSE.txt
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/lookbook-hq/lookbook/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/lookbook-hq/lookbook/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/lookbook-hq/lookbook/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/lookbook-hq/lookbook
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/lookbook-hq/lookbook/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Lookbook is a UI development environment for Ruby on Rails applications, built as an isolated Rails engine. Each public method of a preview class is a scenario that Lookbook renders in isolation, and the preview inspector lists those scenarios. Lookbook previews ViewComponent and Phlex components, as well as ActionView partials, and Markdown pages in it can use ERB.

Installation adds the gem to the Gemfile, runs bundle install and mounts the engine in the application's routes.

## Worth knowing

The installation guide places the gem in the development group and mounts the engine inside a development check. The production guide says the gem must move into the production group and the development check must come out of the mount before Lookbook runs in production.
