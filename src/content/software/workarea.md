---
id: workarea
name: Workarea
urls:
  home: https://www.workarea.com
  repository: https://github.com/workarea-commerce/workarea
  docs: https://developer.workarea.com
  plugins: https://github.com/workarea-commerce
category:
  - e-commerce
description: Commerce platform built on Ruby on Rails, combining storefront, content, search, insights and admin features.
status: stub
maintainer: WebLinc Corporation
maintainerType: company
firstRelease: 2019
hqCountry: US
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.4
databases:
  - mongodb
adminUi: true
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: Gemfile entry for the workarea gem, then bin/rails generate workarea:install
licenseModel: source-available
license: Business Software License, Business Source License, Version 2.0 or later of the GNU General Public License, as the Change License after each version's Change Date
currentMajor: "3"
latestReleaseDate: 2021-07-19
githubStargazers: 324
contributors: 18
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.workarea.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/workarea-commerce/workarea
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/workarea-commerce/workarea/master/LICENSE
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://raw.githubusercontent.com/workarea-commerce/workarea/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/workarea-commerce/workarea
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://developer.workarea.com/articles/create-a-new-app.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://developer.workarea.com/articles/create-a-new-app.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://developer.workarea.com/articles/create-a-new-app.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://developer.workarea.com/articles/infrastructure.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/workarea-commerce/workarea/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/workarea-commerce/workarea/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/workarea-commerce/workarea/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://rubygems.org/api/v1/gems/workarea.json
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/workarea-commerce/workarea/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/workarea.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/workarea-commerce/workarea/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/workarea.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/workarea-commerce/workarea
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/workarea-commerce/workarea/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Workarea is a commerce platform built on Ruby on Rails, and it describes itself as combining commerce, content, search and insights in one platform. It is built as a collection of Rails Engines. The developer guide adds the workarea gem to a new Rails app and runs its installer generator, and the data sits in MongoDB, with Elasticsearch and Redis alongside it.

## Worth knowing

The application needs a Sidekiq background process running next to the application server, so a host has to run more than one process. The developer hosting article recommends the Workarea Commerce Cloud subscription for hosting, and the README places features such as B2B functionality, order management and running multiple sites in that subscription. The source is public on GitHub, but the README and the LICENSE file name different licenses, and the LICENSE file limits production use to cases that are not a Commerce Service.
