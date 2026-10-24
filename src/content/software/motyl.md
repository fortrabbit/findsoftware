---
id: motyl
name: Motyl
urls:
  repository: https://github.com/fcambus/motyl
  docs: https://github.com/fcambus/motyl/blob/master/README.md
category:
  - ssg
description: Ruby blog-aware static site generator that builds posts and pages from Markdown with Mustache templates.
status: stub
maintainer: Frederic Cambus
maintainerType: individual
firstRelease: 2018
language: ruby
runtime:
  - ruby
contentStore:
  - flat-file
templating: mustache
runsAs:
  - local
renderingModes:
  - static
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "1"
latestReleaseDate: 2022-07-28
githubStargazers: 78
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/fcambus/motyl
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/fcambus/motyl/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fcambus/motyl
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/fcambus/motyl
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/fcambus/motyl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/fcambus/motyl/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/fcambus/motyl/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/fcambus/motyl/releases
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fcambus/motyl/contributors
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fcambus/motyl
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Motyl is a Ruby blog-aware static site generator that builds posts and pages from Markdown files with logic-less Mustache templates. The README lists syntax highlighting with Rouge, custom URLs built from file names, several categories per post and an Atom feed.

Running motyl writes the posts and pages into a public directory and copies the static assets. The README names kramdown, mustache and rouge as the gems it requires.

## Worth knowing

The README documents the required gems but no step for installing motyl itself; it points to an examples directory as the starting point. Themes are separate repositories, and the README's example is Chrysalide.
