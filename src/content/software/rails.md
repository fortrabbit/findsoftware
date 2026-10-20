---
id: rails
name: Ruby on Rails
urls:
  home: https://rubyonrails.org
  repository: https://github.com/rails/rails
  docs: https://guides.rubyonrails.org
category:
  - framework
description: Ruby web application framework with an ORM, routing, ERB views, background jobs and built-in deployment tooling.
status: active
maintainerType: community
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
contentStore:
  - database
databases:
  - sqlite
  - mysql
  - mariadb
  - postgres
templating: erb
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: gem install rails, rails new
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-09-24
githubStargazers: 58849
contributors: 7094
social:
  x: https://x.com/rails
  discord: https://discord.gg/d8N68BCw49
wikidata: Q190478
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://github.com/rails/rails
    checkedAt: 2026-10-18
  - field: urls
    url: https://rubygems.org/api/v1/gems/rails.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://rubygems.org/api/v1/gems/rails.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-18
  - field: urls
    url: https://rubygems.org/api/v1/gems/rails.json
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://rubyonrails.org/community
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q190478
    checkedAt: 2026-10-18
  - field: category
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/rails/rails
    checkedAt: 2026-10-18
  - field: runtime
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/rails.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://guides.rubyonrails.org/active_record_basics.html
    checkedAt: 2026-10-18
  - field: databases
    url: https://guides.rubyonrails.org/active_record_basics.html
    checkedAt: 2026-10-18
  - field: databases
    url: https://guides.rubyonrails.org/configuring.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://guides.rubyonrails.org/i18n.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://guides.rubyonrails.org/install_ruby_on_rails.html
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/rails/rails
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/rails/rails
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/rails/rails/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/rails/rails/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/rails/rails
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/rails/rails/contributors?anon=true
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://guides.rubyonrails.org/getting_started.html
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Ruby · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ruby on Rails is a Ruby framework for web applications, bundling an ORM, routing, ERB views and background jobs. A new application uses SQLite by default and can also run on MySQL, MariaDB or PostgreSQL. Hotwire is the default front-end framework named on the homepage, and internationalization comes from the bundled Ruby i18n gem. Each new application includes a generated Dockerfile that uses Thruster to serve assets, and the bundled Kamal tool deploys the app as Docker containers to a server the user runs. The Rails Foundation, a US non-profit founded in 2022, supports the ecosystem. David Heinemeier Hansson created Rails.
