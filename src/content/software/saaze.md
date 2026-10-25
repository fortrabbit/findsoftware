---
id: saaze
name: Simplified Saaze
urls:
  repository: https://github.com/eklausme/saaze
  docs: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze
category:
  - cms
  - ssg
description: Command-line flat-file CMS for simple websites and blogs, built with PHP and a small C part, with content written in Markdown files.
status: active
maintainer: Elmar Klausmeier
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
  - static
runtimeMin: php 8.0
contentStore:
  - flat-file
adminUi: false
templating: php
runsAs:
  - static
  - per-request
renderingModes:
  - static
  - server
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-01
githubStargazers: 12
packagistDownloads: 128
contributors: 1
packagistMonthlyDownloads: 7
dependentRepos: 4
dependentPackages: 10
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://api.github.com/repos/eklausme/saaze
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/eklausme/saaze/blob/v2.6/README.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/eklausme/saaze/blob/v2.6/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/eklausme/saaze/blob/v2.6/README.md
    checkedAt: 2026-10-21
  - field: category
    url: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/eklausme/saaze
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/eklausme/saaze/blob/v2.6/composer.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/eklausme/saaze/blob/v2.6/composer.json
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://github.com/eklausme/saaze/blob/v2.6/README.md
    checkedAt: 2026-10-21
  - field: templating
    url: https://github.com/eklausme/saaze/blob/v2.6/README.md
    checkedAt: 2026-10-21
  - field: adminUi
    url: https://github.com/eklausme/saaze/blob/v2.6/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/eklausme/saaze/blob/v2.6/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/eklausme/saaze/blob/v2.6/composer.json
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://repo.packagist.org/p2/eklausme/saaze.json
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/eklausme/saaze/releases/tags/v2.6
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/eklausme/saaze
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/eklausme/saaze/contributors?anon=true
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/eklausme/saaze.json
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/eklausme/saaze.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/eklausme%2Fsaaze
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/eklausme%2Fsaaze
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/eklausme/saaze/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Simplified Saaze is a flat-file CMS for websites and blogs, and a simplified version of Saaze, the original project. It runs from the command line with no graphical interface. Content is kept in Markdown files, and templates are plain PHP and HTML.

It can generate static output: it reads Markdown files and writes fixed HTML files, which a web server serves without PHP. It can also generate pages on the fly, and then the web server runs PHP. The [installation and usage guide](https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze) covers both modes.

## Worth knowing

The guide is a post on the maintainer's personal blog.
