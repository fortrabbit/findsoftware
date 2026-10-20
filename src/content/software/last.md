---
id: last
name: Last
urls:
  repository: https://github.com/franzwilding/last
  docs: https://github.com/franzwilding/last/blob/master/README.md
category:
  - ssg
description: Static site generator bundle for Symfony applications that dumps the application's routes to static HTML files.
status: active
maintainer: Franz Wilding
maintainerType: individual
language: php
hosting:
  - static
basedOn:
  - symfony
runsAs:
  - static
renderingModes:
  - static
installMethod: composer require
currentMajor: "1"
latestReleaseDate: 2018-08-31
githubStargazers: 11
packagistDownloads: 151
contributors: 1
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/franzwilding/last
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://raw.githubusercontent.com/franzwilding/last/master/composer.json
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/franzwilding/last
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/franzwilding/last/blob/master/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/fw/last-bundle.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/franzwilding/last/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/franzwilding/last
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/franzwilding/last/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/fw/last-bundle.json
    checkedAt: 2026-10-20
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Last is a static site generator for Symfony applications, installed as a Symfony bundle with Composer. Its dump command runs requests against the application and writes each response as a static HTML file to a dist folder, as the [README](https://github.com/franzwilding/last/blob/master/README.md) describes. Static routes are covered by a built-in request provider; routes with mandatory placeholders, such as one page per article, need a custom provider that lists the requests.

## Worth knowing

The README says the bundle is not yet production ready: testing with more real-life projects and copying assets to the dist folder are listed as still missing. The repository has no license, so its terms of use are not stated.
