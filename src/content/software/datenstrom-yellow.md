---
id: datenstrom-yellow
name: Datenstrom Yellow
urls:
  home: https://datenstrom.se/yellow
  repository: https://github.com/datenstrom/yellow
  docs: https://datenstrom.se/yellow/help/
  plugins: https://datenstrom.se/yellow/extensions/
category:
  - cms
description: Flat-file website system in PHP that edits pages in a browser, stores content as files and generates static websites.
status: active
maintainer: Anna Svensson
language: php
runtime:
  - php
hosting:
  - php
  - static
runtimeMin: php 7.0
contentStore:
  - flat-file
adminUi: true
i18n: installation in 19 languages
runsAs:
  - per-request
  - static
  - local
renderingModes:
  - static
  - server
installMethod: download the ZIP file and copy it to a web server
licenseModel: open-source
license: EUPL-1.2
currentMajor: "1"
latestReleaseDate: 2026-09-25
githubStargazers: 486
contributors: 14
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: name
    url: https://datenstrom.se/yellow/
    checkedAt: 2026-10-24
  - field: urls
    url: https://datenstrom.se/yellow/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/datenstrom/yellow
    checkedAt: 2026-10-24
  - field: urls
    url: https://datenstrom.se/yellow/help/
    checkedAt: 2026-10-24
  - field: category
    url: https://datenstrom.se/yellow/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://datenstrom.se/yellow/extensions/
    checkedAt: 2026-10-24
  - field: language
    url: https://datenstrom.se/yellow/help/product-information
    checkedAt: 2026-10-24
  - field: runtime
    url: https://datenstrom.se/yellow/help/product-information
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://datenstrom.se/yellow/help/product-information
    checkedAt: 2026-10-24
  - field: contentStore
    url: https://datenstrom.se/yellow/help/api-for-developers
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://datenstrom.se/yellow/
    checkedAt: 2026-10-24
  - field: i18n
    url: https://datenstrom.se/yellow/help/product-information
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://datenstrom.se/yellow/help/api-for-developers
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://datenstrom.se/yellow/help/api-for-developers
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://datenstrom.se/yellow/help/product-information
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://datenstrom.se/yellow/help/api-for-developers
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://datenstrom.se/yellow/help/api-for-developers
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://datenstrom.se/yellow/help/how-to-get-started
    checkedAt: 2026-10-24
  - field: license
    url: https://datenstrom.se/yellow/help/license-terms
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://datenstrom.se/yellow/help/what-s-new
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://datenstrom.se/yellow/help/what-s-new
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/datenstrom/yellow
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/datenstrom/yellow/contributors
    checkedAt: 2026-10-24
  - field: urls
    url: https://datenstrom.se/yellow/extensions/
    checkedAt: 2026-10-24
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Datenstrom Yellow is a PHP website system that keeps content in files and lets the owner edit pages in a web browser after logging in. It is delivered as a ZIP file that is copied to a web server such as Apache, Caddy, LiteSpeed or Nginx, and the installer runs on screen. The [help for getting started](https://datenstrom.se/yellow/help/how-to-get-started) also covers running it on a computer with PHP's built-in web server. From the command line it can generate a static website in a folder, which is then uploaded to a web server.

## Worth knowing

There is no separate admin panel: editing happens in the browser after logging in. The homepage says there is no database.
