---
id: bookstack
name: BookStack
urls:
  home: https://www.bookstackapp.com
  repository: https://codeberg.org/bookstack/bookstack
  docs: https://www.bookstackapp.com/docs/admin/installation/
category:
  - wiki
  - ssg
description: Self-hosted platform for organising and storing information as books and pages, built with PHP on the Laravel framework.
status: active
maintainer: Dan Brown
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
contentStore:
  - database
databases:
  - mysql
  - mariadb
runsAs:
  - per-request
renderingModes:
  - server
installMethod: git clone and composer install, Ubuntu install scripts (fresh OS only), community Docker setups
licenseModel: open-source
license: MIT, MIT
currentMajor: "26"
latestReleaseDate: 2026-09-29
contributors: 242
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/BookStackApp/BookStack
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: category
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/BookStackApp/BookStack
    checkedAt: 2026-10-19
  - field: runtime
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: contentStore
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: databases
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: renderingModes
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://www.bookstackapp.com/docs/admin/installation/
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/BookStackApp/BookStack
    checkedAt: 2026-10-19
  - field: license
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://www.bookstackapp.com/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://api.github.com/repos/BookStackApp/BookStack/releases/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/BookStackApp/BookStack/releases/latest
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/BookStackApp/BookStack/contributors
    checkedAt: 2026-10-19
figure:
  emoji: 📚
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Wiki
ai: authored
npmWeeklyDownloads: null
---

BookStack organizes information into books and pages and is built with PHP on the Laravel framework. Content and data live in a MySQL or MariaDB database, and a PHP-compatible web server serves the application. The [installation guide](https://www.bookstackapp.com/docs/admin/installation/) covers a manual install with git and Composer, Ubuntu install scripts for a fresh OS, and community Docker setups. Dan Brown created BookStack. Its source is on Codeberg, and the GitHub repository points there.

## Worth knowing

The installation guide states that BookStack does not currently support shared PHP hosting. The project publishes no official Docker image; the Docker setups come from the community.
