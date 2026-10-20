---
id: discourse
name: Discourse
urls:
  home: https://www.discourse.org
  repository: https://github.com/discourse/discourse
  docs: https://github.com/discourse/discourse/blob/main/docs/INSTALL.md
  pricing: https://www.discourse.org/pricing
category:
  - community
description: Open-source community discussion platform, a forum built on Ruby on Rails with an Ember.js front end.
status: active
maintainer: Civilized Discourse Construction Kit, Inc.
maintainerType: company
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.4
contentStore:
  - database
databases:
  - postgres
headlessApi:
  - rest
runsAs:
  - always-on
renderingModes:
  - spa
installMethod: discourse_docker launcher (Docker)
licenseModel: open-source
license: GPL-2.0, GPL-2.0-or-later
latestReleaseDate: 2026-09-22
githubStargazers: 47996
contributors: 1201
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://www.discourse.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.discourse.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/discourse/discourse
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/discourse/discourse/blob/main/docs/INSTALL.md
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://www.discourse.org/legal
    checkedAt: 2026-10-20
  - field: category
    url: https://www.discourse.org/
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/discourse/discourse
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/discourse/discourse
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/discourse/discourse
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/discourse/discourse/blob/main/docs/INSTALL.md
    checkedAt: 2026-10-19
  - field: contentStore
    url: https://github.com/discourse/discourse
    checkedAt: 2026-10-19
  - field: databases
    url: https://github.com/discourse/discourse/blob/main/docs/INSTALL.md
    checkedAt: 2026-10-19
  - field: headlessApi
    url: https://github.com/discourse/discourse
    checkedAt: 2026-10-19
  - field: renderingModes
    url: https://github.com/discourse/discourse
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://github.com/discourse/discourse/blob/main/docs/INSTALL.md
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://github.com/discourse/discourse/blob/main/docs/INSTALL.md
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/discourse/discourse
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/discourse/discourse
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://www.discourse.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.discourse.org/pricing
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://endoflife.date/api/discourse.json
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/discourse/discourse
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/discourse/discourse/contributors
    checkedAt: 2026-10-19
figure:
  emoji: 💬
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Ruby · Community
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Discourse is a Ruby on Rails application that answers requests in JSON, with an Ember.js app in the browser as its front end. The main data store is PostgreSQL, and Redis is also required. Discourse was founded in 2013. The [install guide](https://github.com/discourse/discourse/blob/main/docs/INSTALL.md) states that the only officially supported installs are Docker based and lists the server requirements. The project also offers official hosting.

## Worth knowing

The install guide says operators run and monitor Sidekiq and Rails processes, so a Discourse site needs a host that keeps long-running processes alive.
