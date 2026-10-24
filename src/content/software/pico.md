---
id: pico
name: Pico
urls:
  home: https://picocms.org
  repository: https://github.com/picocms/Pico
  docs: https://picocms.org/docs/
category:
  - cms
description: Flat-file CMS that stores pages as Markdown files in a content folder and needs no database.
status: discontinued
maintainer: The Pico Community
maintainerType: community
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.3
contentStore:
  - flat-file
adminUi: false
templating: twig
runsAs:
  - per-request
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2020-08-29
githubStargazers: 3902
packagistDownloads: 38372
contributors: 46
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: status
    url: https://picocms.org/download/
    checkedAt: 2026-10-20
  - field: urls
    url: https://picocms.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/picocms/Pico
    checkedAt: 2026-10-20
  - field: urls
    url: https://picocms.org/docs/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://picocms.org/
    checkedAt: 2026-10-20
  - field: category
    url: https://picocms.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/picocms/Pico
    checkedAt: 2026-10-20
  - field: runtime
    url: https://picocms.org/download/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://picocms.org/download/
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://picocms.org/about/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://picocms.org/docs/
    checkedAt: 2026-10-20
  - field: templating
    url: https://picocms.org/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://picocms.org/download/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://picocms.org/download/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://picocms.org/about/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/picocms/Pico
    checkedAt: 2026-10-20
  - field: license
    url: https://picocms.org/
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/picocms/Pico/releases/tag/v2.1.4
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/picocms/Pico/releases/tag/v2.1.4
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/picocms/pico.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/picocms/Pico
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/picocms/Pico/contributors?anon=true&per_page=100
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Pico is a flat file CMS written in PHP. Pages are Markdown files in a content folder, rendered through Twig templates; there is no database and no administration back end. The [download page](https://picocms.org/download/) gives two ways to install it: a Composer create-project from the picocms/pico-composer skeleton, or a pre-bundled release uploaded to the web space. The [about page](https://picocms.org/about/) says it runs on almost any web space.

## Worth knowing

The download page carries an end-of-life notice. It says development of Pico stopped a very long time ago and advises against using it for new websites. For existing sites it reports no known security issues, but warns that they will run into issues because Pico was not designed for modern PHP versions.
