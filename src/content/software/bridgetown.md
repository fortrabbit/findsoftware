---
id: bridgetown
name: Bridgetown
urls:
  home: https://www.bridgetownrb.com/
  repository: https://github.com/bridgetownrb/bridgetown
  docs: https://www.bridgetownrb.com/docs
  plugins: https://www.bridgetownrb.com/plugins
category:
  - ssg
  - framework
description: Ruby site generator and fullstack framework that builds static sites and, through Roda, serves server-rendered routes.
status: active
maintainer: Whitefusion
maintainerType: company
firstRelease: 2020
language: ruby
runtime:
  - ruby
  - node
hosting:
  - ruby
  - node
  - static
runtimeMin: ruby 3.3
basedOn:
  - esbuild
contentStore:
  - flat-file
databases:
  - postgres
templating: erb, serbea, streamlined, liquid
i18n: multiple languages or locales
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
installMethod: gem install bridgetown -N
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-06
githubStargazers: 1372
contributors: 95
pluginCount: 31
social:
  mastodon: https://ruby.social/@bridgetown
  discord: https://discord.gg/4E6hktQGz4
  forum: https://www.rubyforum.org/tag/bridgetown
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://rubygems.org/api/v1/gems/bridgetown.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://rubygems.org/api/v1/gems/bridgetown.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.bridgetownrb.com/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/bridgetown.json
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: category
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://www.bridgetownrb.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: runtime
    url: https://www.bridgetownrb.com/docs/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/bridgetown.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://www.bridgetownrb.com/docs/installation
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: databases
    url: https://www.bridgetownrb.com/
    checkedAt: 2026-10-18
  - field: templating
    url: https://www.bridgetownrb.com/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://www.bridgetownrb.com/docs/internationalization
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.bridgetownrb.com/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://www.bridgetownrb.com/docs
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: license
    url: https://rubygems.org/api/v1/gems/bridgetown.json
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.bridgetownrb.com/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/bridgetown.json
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/bridgetownrb/bridgetown/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/bridgetownrb/bridgetown
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/bridgetownrb/bridgetown/contributors?anon=true
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.bridgetownrb.com/plugins
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://www.bridgetownrb.com/plugins
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://www.bridgetownrb.com/docs/deployment
    checkedAt: 2026-10-19
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bridgetown is a Ruby site generator and fullstack framework that builds static sites and can also serve server-rendered routes, both from one project. It began in 2020 as a fork of Jekyll and uses Roda for the server side and esbuild for frontend bundling. Content comes from local files or from external data loaded from APIs, and the server side can work with databases such as PostgreSQL. Whitefusion, a Portland-based web studio, leads development, and Whitefusion and Radioactive Toy offer commercial support. The [deployment guide](https://www.bridgetownrb.com/docs/deployment) covers static targets and Docker setups for dynamic sites.

## Worth knowing

Static output needs only file hosting, while server-rendered routes need a long-running Rack server such as Puma or Falcon. Node.js runs asset bundling and Ruby runs the generator, so a build needs both runtimes.
