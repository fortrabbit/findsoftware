---
id: known
name: Known
urls:
  home: https://idno.co
  repository: https://github.com/idno/idno
category:
  - cms
description: Open-source PHP platform for social publishing, where one or more users post blog posts and status updates to a site they run.
status: active
maintainer: Known, Inc
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - mongodb
runsAs:
  - per-request
  - always-on
  - scheduled
installMethod: composer create-project idno/idno, release archive, or git clone with composer install
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-03-01
githubStargazers: 1126
contributors: 89
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://idno.co
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/idno/idno
    checkedAt: 2026-10-20
  - field: urls
    url: https://withknown.com/opensource
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/idno/idno/blob/dev/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://withknown.com
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/idno/idno
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/idno/idno/blob/1.6.4/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/idno/idno/blob/1.6.4/composer.json
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/idno/idno/blob/1.6.4/composer.json
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://withknown.com/opensource
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/idno/idno/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/idno/idno/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/idno/idno
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/idno/idno/contributors
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/idno/idno/blob/1.6.4/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/idno/idno/blob/1.6.4/README.md
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Known is a publishing platform for groups and individuals, where any number of users post blog posts and status updates to one shared site. It is written in PHP and keeps its content in MySQL, MariaDB or MongoDB, behind a web server with URL rewriting. It installs with Composer or from a release archive, and the project also runs Known as a hosted service at withknown.com.

## Worth knowing

By default Known processes events such as Webmention pings and ActivityPub deliveries inside the web request that triggered them. An asynchronous queue moves that work into a background worker, which the README says is required for ActivityPub. The worker must stay running, started by systemd or once a minute by cron.
