---
id: rage
name: Rage
urls:
  home: https://rage-rb.dev
  repository: https://github.com/rage-rb/rage
  docs: https://rage-rb.dev/docs/intro
category:
  - framework
description: API-first Ruby web framework that runs APIs, background jobs and WebSockets in one process using fibers.
status: active
maintainer: Roman Samoilov
firstRelease: 2023
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.3
databases:
  - mysql
  - postgres
runsAs:
  - always-on
installMethod: gem install rage-rb, then rage new my_app
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 1446
contributors: 25
social:
  x: https://x.com/codewithrage
  forum: https://github.com/rage-rb/rage/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://rage-rb.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/rage-rb/rage
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/rage-rb/rage/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/rage-rb/rage/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/rage-rb/rage
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/rage-rb/rage/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/rage-rb/rage/main/rage.gemspec
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://raw.githubusercontent.com/rage-rb/rage/main/rage.gemspec
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/rage-rb/rage/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://rage-rb.dev/docs/intro
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://rage-rb.dev/docs/rails
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://rage-rb.dev/docs/deferred
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/rage-rb/rage/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/rage-rb/rage/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rage-rb.dev/blog/2023/09/15/version-0-1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/rage-rb/rage/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/rage-rb/rage/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/rage-rb/rage
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/rage-rb/rage/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Rage is an API-first Ruby web framework that runs APIs and background jobs in one process, using fibers for concurrency. The README says it uses Rails compatibility as a foundation, so an existing Rails application can move endpoints to Rage gradually. The gem is installed with gem install rage-rb, and rage new creates an application; the database adapter is chosen at creation with the -d option, from MySQL, Trilogy, PostgreSQL or SQLite.

## Worth knowing

The background job queue runs inside the web server process rather than in a separate worker, so the server process has to stay running for queued work to finish. The Rails integration guide starts Rage in production with a Docker command that binds to all interfaces.
