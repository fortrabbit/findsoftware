---
id: bookdown
name: Bookdown
urls:
  repository: https://github.com/bookdown/Bookdown.Bookdown
  docs: https://bookdown.github.io/
category:
  - ssg
description: Static documentation generator that turns Markdown and JSON configuration files into DocBook-like HTML pages.
status: active
maintainer: Bookdown.Bookdown Contributors
maintainerType: community
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 5.6
contentStore:
  - flat-file
runsAs:
  - local
renderingModes:
  - static
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2019-04-23
githubStargazers: 82
packagistDownloads: 66604
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/bookdown/Bookdown.Bookdown
    checkedAt: 2026-10-20
  - field: urls
    url: https://bookdown.github.io/intro/what-is-bookdown.html
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/bookdown/Bookdown.Bookdown/blob/1.x/composer.json
    checkedAt: 2026-10-20
  - field: category
    url: https://bookdown.github.io/intro/what-is-bookdown.html
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/bookdown/Bookdown.Bookdown
    checkedAt: 2026-10-20
  - field: runtime
    url: https://bookdown.github.io/intro/getting-started.html
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://bookdown.github.io/intro/getting-started.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://bookdown.github.io/basic/generating-html.html
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://bookdown.github.io/basic/publishing.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://bookdown.github.io/intro/getting-started.html
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://bookdown.github.io/intro/what-is-bookdown.html
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/bookdown/Bookdown.Bookdown
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/bookdown/Bookdown.Bookdown/blob/1.x/LICENSE.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/bookdown/bookdown.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/bookdown/bookdown.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/bookdown/Bookdown.Bookdown
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/bookdown/bookdown.json
    checkedAt: 2026-10-20
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Bookdown is a PHP command-line tool that reads Markdown files and JSON configuration and writes DocBook-like HTML pages with a table of contents, numbered headings and previous, next and up navigation. The output is plain HTML, so the generated site can be published from a Git repository to GitHub Pages or any static host.

It is installed with Composer from a skeleton project, and the [getting-started guide](https://bookdown.github.io/intro/getting-started.html) shows how to generate the example pages and review them with PHP's built-in server. The generator runs on a developer's machine, not on the live site.

## Worth knowing

The project has no working website: the address its repository names now serves an unrelated site. The documentation lives on a GitHub Pages site, and the repository README itself holds no installation instructions.
