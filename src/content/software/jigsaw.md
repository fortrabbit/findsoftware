---
id: jigsaw
name: Jigsaw
urls:
  home: https://jigsaw.tighten.com
  repository: https://github.com/tighten/jigsaw
  docs: https://jigsaw.tighten.com/docs/installation/
category:
  - ssg
description: Static site generator that builds sites from Blade templates and Markdown content.
status: active
maintainer: Tighten Co.
maintainerType: company
parent: Tighten
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 8.2
basedOn:
  - vite
contentStore:
  - flat-file
adminUi: false
templating: blade
runsAs:
  - static
renderingModes:
  - static
installMethod: composer require tightenco/jigsaw, vendor/bin/jigsaw init
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-05-21
githubStargazers: 2252
packagistDownloads: 474037
contributors: 81
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://jigsaw.tighten.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/tighten/jigsaw
    checkedAt: 2026-10-18
  - field: urls
    url: https://jigsaw.tighten.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://jigsaw.tighten.com/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://packagist.org/packages/tightenco/jigsaw
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://tighten.com/
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://tighten.com/
    checkedAt: 2026-10-18
  - field: parent
    url: https://tighten.com/
    checkedAt: 2026-10-18
  - field: category
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://jigsaw.tighten.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/tighten/jigsaw
    checkedAt: 2026-10-18
  - field: runtime
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/tightenco/jigsaw.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-18
  - field: templating
    url: https://jigsaw.tighten.com/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://jigsaw.tighten.com/docs/generating-your-site/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/tighten/jigsaw
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/tighten/jigsaw
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/tighten/jigsaw/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/tighten/jigsaw/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/tighten/jigsaw
    checkedAt: 2026-10-18
  - field: contributors
    url: https://github.com/tighten/jigsaw/graphs/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/tightenco/jigsaw
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://jigsaw.tighten.com/docs/installation/
    checkedAt: 2026-10-19
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Jigsaw is a static site generator in PHP from Tighten that builds sites from Blade templates, with Markdown and other file types as content. Remote collections can pull content from outside the project. Assets are compiled with Vite through npm, so a project that builds its own CSS or JavaScript needs Node, while the finished site is static files only.

Starters are provided for a blog and for an open source documentation site. The project also keeps a showcase of sites built with it.
