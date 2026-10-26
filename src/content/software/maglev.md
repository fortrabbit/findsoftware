---
id: maglev
name: Maglev
urls:
  home: https://www.maglev.dev
  repository: https://github.com/maglevhq/maglev-core
  docs: https://docs.maglev.dev
  pricing: https://www.maglev.dev/saas-edition
category:
  - cms
description: Visual page builder for Ruby on Rails that adds a page editor and a content runtime to a Rails application.
status: active
maintainer: NoCoffee
firstRelease: 2022
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3
databases:
  - postgres
  - sqlite
  - mysql
  - mariadb
adminUi: true
templating: erb, haml, slim
i18n: yes, multiple languages on Rails I18n
renderingModes:
  - server
installMethod: Rails application template or the maglevcms gem in the Gemfile
licenseModel: open-core
license: MIT, commercial SaaS Edition license, one Rails application per license
currentMajor: "3"
latestReleaseDate: 2026-08-03
githubStargazers: 383
contributors: 14
social:
  discord: https://discord.gg/5sSBQFH5v5
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.maglev.dev
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/maglevhq/maglev-core
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/maglevhq/maglev-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.maglev.dev
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/maglevhq/maglev-core
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.maglev.dev/quickstart
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.maglev.dev/quickstart
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/maglevhq/maglev-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/maglevhq/maglev-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.maglev.dev/quickstart
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://docs.maglev.dev/quickstart
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.maglev.dev
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://docs.maglev.dev/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.maglev.dev/quickstart
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/maglevhq/maglev-core
    checkedAt: 2026-10-26
  - field: license
    url: https://www.maglev.dev/saas-edition
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/maglevhq/maglev-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.maglev.dev/saas-edition
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/maglevcms.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://rubygems.org/api/v1/versions/maglevcms.json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/maglevcms.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/maglevhq/maglev-core
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/maglevhq/maglev-core/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Maglev is a visual page builder for Ruby on Rails that runs inside the Rails application it belongs to. Editors compose pages from sections and blocks in a browser editor at `/maglev/editor`, and visitors get HTML rendered by the Rails app, with the app's own routing, auth and hosting. The open source gem is installed through a Rails application template or added to the Gemfile as `maglevcms`, and the project's quickstart covers both paths.

## Worth knowing

The open source edition is a single-site gem. The SaaS Edition is a commercial license for one Rails application, delivered as private gems, and it adds multi-site and multi-theme support for platforms.
