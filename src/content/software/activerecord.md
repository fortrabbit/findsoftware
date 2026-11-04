---
id: activerecord
name: Active Record
urls:
  home: https://rubyonrails.org
  repository: https://github.com/rails/rails
  docs: https://guides.rubyonrails.org/active_record_basics.html
category:
  - library
description: Object-relational mapping library for Ruby that maps classes to database tables, distributed as part of Rails.
status: active
maintainer: David Heinemeier Hansson
firstRelease: 2008
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - rails
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
installMethod: RubyGems (gem install activerecord)
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-04
githubStargazers: 58844
contributors: 371
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://rubyonrails.org/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/rails/rails
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/rails/rails/blob/main/activerecord/README.rdoc
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/rails/rails/blob/main/activerecord/MIT-LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/rails/rails
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/rails/rails/blob/v8.1.4.1/activerecord/activerecord.gemspec
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/rails/rails/blob/v8.1.4.1/activerecord/activerecord.gemspec
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/rails/rails/blob/v8.1.4.1/activerecord/activerecord.gemspec
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/rails/rails/blob/main/activerecord/README.rdoc
    checkedAt: 2026-11-04
  - field: databases
    url: https://guides.rubyonrails.org/active_record_basics.html
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/rails/rails/blob/main/activerecord/README.rdoc
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/rails/rails/blob/main/activerecord/README.rdoc
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/rails/rails/blob/main/activerecord/README.rdoc
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/rails/rails/releases/tag/v8.1.4.1
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/activerecord.json
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/rails/rails/tags
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/rails/rails
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/rails/rails/contributors
    checkedAt: 2026-11-04
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Active Record is the object-relational mapping layer of Rails, and it can be installed on its own from RubyGems. A class that subclasses its base class maps to a database table, and associations, validations, callbacks, transactions and migrations are declared in Ruby. The source sits in the Rails monorepo on GitHub, next to the other Rails components.

## Worth knowing

Active Record is one component of Rails, so the repository figures for stars and contributors describe the whole Rails project. The [Active Record guide](https://guides.rubyonrails.org/active_record_basics.html) is the entry point for its concepts.
