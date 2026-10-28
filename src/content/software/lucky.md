---
id: lucky
name: Lucky
urls:
  home: https://luckyframework.org
  repository: https://github.com/luckyframework/lucky
  docs: https://luckyframework.org/guides/
category:
  - framework
description: Web framework written in Crystal for HTML pages, JSON APIs and single-page frontends, with generators and an ORM.
status: active
maintainer: Paul Smith
firstRelease: 2017
language: crystal
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
renderingModes:
  - server
  - spa
installMethod: Lucky CLI from Homebrew or Scoop, then lucky init
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-04-23
githubStargazers: 2736
contributors: 88
social:
  bluesky: https://bsky.app/profile/luckyframework.org
  discord: https://discord.com/invite/HeqJUcb
addedAt: 2026-10-28
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://luckyframework.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/luckyframework/lucky
    checkedAt: 2026-10-26
  - field: urls
    url: https://luckyframework.org/guides/getting-started/installing
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/luckyframework/lucky/commits/v0.2.0
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/luckyframework/lucky/main/LICENSE
    checkedAt: 2026-10-26
  - field: category
    url: https://luckyframework.org/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/luckyframework/lucky
    checkedAt: 2026-10-26
  - field: runtime
    url: https://luckyframework.org/guides/getting-started/installing
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/luckyframework/lucky
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/luckyframework/lucky/main/LICENSE
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://luckyframework.org/guides/getting-started/installing
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://luckyframework.org/guides/deploying/ubuntu
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://luckyframework.org/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://luckyframework.org/
    checkedAt: 2026-10-26
  - field: databases
    url: https://luckyframework.org/guides/getting-started/installing
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/luckyframework/lucky
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/luckyframework/lucky/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/luckyframework/lucky/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/luckyframework/lucky/releases
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Lucky is a web framework written in Crystal for HTML pages, JSON APIs and single-page frontends. Its homepage lists generators, optional built-in authentication and a frontend setup with Bun, Webpack or Vite. Requests are handled by action classes that map each route to its response, and the database layer is built from model and query classes.

A new project starts with the Lucky command-line tool and `lucky init`. The [deployment guides](https://luckyframework.org/guides/deploying/heroku) cover Heroku, Fly.io, Dokku and an Ubuntu server.

## Worth knowing

An app is a long-lived process rather than a set of static files. The Ubuntu guide runs the app under a systemd unit, so the host has to keep that process running, and static hosting does not fit the framework's server-side model.
