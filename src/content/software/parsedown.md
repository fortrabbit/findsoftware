---
id: parsedown
name: Parsedown
urls:
  home: https://parsedown.org/
  repository: https://github.com/erusev/parsedown
category:
  - library
description: Markdown parser for PHP, distributed as a single class file with no dependencies.
status: active
maintainer: Emanuil Rusev
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-02-16
githubStargazers: 15048
packagistDownloads: 165450496
contributors: 43
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://parsedown.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/erusev/parsedown
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/erusev/parsedown/commits/c1bbcb1abd73ce7dcec05fb07f9b0d3c4260611f
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/erusev/parsedown/blob/master/LICENSE.txt
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/erusev/parsedown/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/erusev/parsedown
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/erusev/parsedown/blob/1.8.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/erusev/parsedown/blob/1.8.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/erusev/parsedown/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/erusev/parsedown/blob/master/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/erusev/parsedown
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/erusev/parsedown/releases/tag/1.8.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/erusev/parsedown/releases/tag/1.8.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/erusev/parsedown
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/erusev/parsedown/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/erusev/parsedown.json
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Parsedown converts Markdown text into HTML with PHP, as a single class file with no dependencies. Its [README](https://github.com/erusev/parsedown/blob/master/readme.md) calls its parsing approach line based: it reads the lines to recognise blocks, then the special characters to recognise inline elements.

## Worth knowing

The README says to turn on safe mode when processing untrusted user input, and warns that its markup escaping setting is not safe from XSS. It says the parser passes most CommonMark tests, not all of them.
