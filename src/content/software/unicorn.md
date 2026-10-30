---
id: unicorn
name: Unicorn
urls:
  home: https://yhbt.net/unicorn/
  repository: https://yhbt.net/unicorn.git
  docs: https://yhbt.net/unicorn/README
category:
  - web-server
description: Rack HTTP server for Ruby applications on Unix-like systems, run as a master process that manages forked worker processes.
status: stub
maintainer: unicorn contributors
maintainerType: community
firstRelease: 2009
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.0
runsAs:
  - always-on
installMethod: RubyGems (gem install)
licenseModel: open-source
license: GPL-2.0-or-later, Ruby (1.8)-specific terms
currentMajor: "6"
latestReleaseDate: 2021-12-25
social:
  forum: https://yhbt.net/unicorn-public/
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: urls
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: urls
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: urls
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://yhbt.net/unicorn/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://yhbt.net/unicorn/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: runtime
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://yhbt.net/unicorn/NEWS
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: license
    url: https://yhbt.net/unicorn/LICENSE
    checkedAt: 2026-10-30
  - field: license
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://yhbt.net/unicorn/README
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://yhbt.net/unicorn/NEWS
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/unicorn.json
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://yhbt.net/unicorn/NEWS
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Unicorn is an HTTP server for Rack applications. It runs as a long-lived process that spawns worker processes and reaps and restarts any that die. Its README describes the design as built for Rack, Unix and ease of debugging.

## Worth knowing

The README says the server is built for fast clients on low-latency connections, and that slow clients have to be served through a reverse proxy that buffers the request and the response. It also strongly discourages the use of Unicorn in new deployments, citing the damage the project has done to the Ruby ecosystem.
