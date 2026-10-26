---
id: kemal
name: Kemal
urls:
  home: https://kemalcr.com
  repository: https://github.com/kemalcr/kemal
  docs: https://kemalcr.com/guide/
category:
  - framework
description: Web framework for Crystal for building web applications and APIs, with routing, middleware, JSON handling and WebSocket support.
status: active
maintainer: Serdar Doğruyol
firstRelease: 2015
language: crystal
runtime:
  - binary
hosting:
  - binary
templating: ecr
runsAs:
  - always-on
installMethod: shards dependency, then shards install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-17
githubStargazers: 3929
contributors: 81
social:
  x: https://twitter.com/crystalkemal
  discord: https://discord.gg/prSVAZJEpz
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://kemalcr.com
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/kemalcr/kemal
    checkedAt: 2026-10-26
  - field: urls
    url: https://kemalcr.com/guide/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/kemalcr/kemal/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/kemalcr/kemal/releases
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/kemalcr/kemal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/kemalcr/kemal/languages
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/kemalcr/kemal/blob/master/shard.yml
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://kemalcr.com/guide/
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/kemalcr/kemal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/kemalcr/kemal/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/kemalcr/kemal/master/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/kemalcr/kemal/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/kemalcr/kemal/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/kemalcr/kemal
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/kemalcr/kemal/contributors
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://kemalcr.com/guide/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kemal is a web framework written in Crystal, which compiles to native code. Its README describes a built-in ECR template engine, and its guide adds the project to an application through a shard.yml dependency that shards install fetches. A built application is a compiled binary, and the guide shows managing it as a systemd service.

The README's FAQ names Sinatra, Flask and Express when it explains how Kemal differs from them.

## Worth knowing

The README badge and shard.yml state different Crystal requirements.
