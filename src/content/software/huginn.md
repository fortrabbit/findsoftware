---
id: huginn
name: Huginn
urls:
  repository: https://github.com/huginn/huginn
  docs: https://github.com/huginn/huginn/wiki
category:
  - backend
description: Self-hosted system for building agents that watch the web and incoming events and take automated actions on the user's behalf.
status: active
maintainer: Andrew Cantino
maintainerType: individual
firstRelease: 2022
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.4
databases:
  - mysql
  - postgres
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
latestReleaseDate: 2026-11-02
githubStargazers: 50277
contributors: 226
social:
  forum: https://github.com/huginn/huginn/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/huginn/huginn/wiki
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/huginn/huginn/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/huginn/huginn/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/huginn/huginn/blob/v2026.11.01/Gemfile
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/huginn/huginn/blob/v2026.11.01/Gemfile
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/huginn/huginn/tree/v2022.01.04
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/huginn/huginn/releases/tag/v2026.11.01
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/huginn/huginn
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/huginn/huginn/graphs/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Huginn is a self-hosted Ruby system for building agents that watch the web and incoming events and take automated actions. Agents create and consume events and pass them along a directed graph, and the README describes it as a hackable version of IFTTT or Zapier on your own server. It can receive and send webhooks, and publish feeds and JSON endpoints from the events its agents collect.

Huginn runs as a web process plus a background worker, backed by MySQL or PostgreSQL. The README recommends a Docker Compose setup on your own server for production and also documents a single-container image, a source install on Ubuntu or Debian, and Heroku. Community-maintained packages exist for YunoHost and Unraid.
