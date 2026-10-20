---
id: flarum
name: Flarum
urls:
  home: https://flarum.org
  repository: https://github.com/flarum/flarum
  docs: https://docs.flarum.org
category:
  - community
description: Open-source forum software for online communities, built with PHP on the Laravel framework.
status: active
maintainer: Flarum Foundation
maintainerType: foundation
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
databases:
  - mysql
  - mariadb
  - sqlite
runsAs:
  - per-request
installMethod: unpack archive (tar.gz or zip), composer create-project
licenseModel: open-source
license: MIT, MIT
currentMajor: "2"
latestReleaseDate: 2026-10-17
githubStargazers: 16424
contributors: 35
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/flarum/flarum
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.flarum.org/install
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: category
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/flarum/flarum
    checkedAt: 2026-10-19
  - field: runtime
    url: https://docs.flarum.org/install
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://docs.flarum.org/install
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://packagist.org/packages/flarum/core.json
    checkedAt: 2026-10-19
  - field: databases
    url: https://docs.flarum.org/install
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.flarum.org/install
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.flarum.org/install
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/flarum/flarum
    checkedAt: 2026-10-19
  - field: license
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://flarum.org/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://packagist.org/packages/flarum/core.json
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://packagist.org/packages/flarum/core.json
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/flarum/flarum
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/flarum/flarum/contributors
    checkedAt: 2026-10-19
figure:
  emoji: 💬
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: PHP · Community
ai: authored
npmWeeklyDownloads: null
---

Flarum is a forum application with a Laravel back end and a Mithril front end. It runs as a PHP application behind Apache or Nginx and keeps its data in MySQL, MariaDB, SQLite or PostgreSQL. The [install guide](https://docs.flarum.org/install) offers two routes: unpacking an archive or running Composer.

## Worth knowing

The scheduler needs a cron job, and the queue can run on Redis. Both are optional and need setup beyond the PHP application.
