---
id: sblg
name: sblg
urls:
  home: https://kristaps.bsd.lv/sblg
  repository: https://github.com/kristapsdz/sblg
  docs: https://kristaps.bsd.lv/sblg
category:
  - cms
description: Command-line utility that merges articles into HTML templates to generate static blogs with Atom and JSON feeds.
status: active
maintainer: Kristaps Dzonsons
maintainerType: individual
firstRelease: 2014
language: c
hosting:
  - static
contentStore:
  - flat-file
templating: xhtml
runsAs:
  - static
renderingModes:
  - static
installMethod: source archive, ./configure, make install
licenseModel: open-source
license: ISC
currentMajor: "0"
latestReleaseDate: 2024-11-28
githubStargazers: 104
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://kristaps.bsd.lv/sblg
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/kristapsdz/sblg
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/kristapsdz/sblg
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://kristaps.bsd.lv/sblg
    checkedAt: 2026-10-23
  - field: templating
    url: https://kristaps.bsd.lv/sblg
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://kristaps.bsd.lv/sblg
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://kristaps.bsd.lv/sblg
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/kristapsdz/sblg/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://kristaps.bsd.lv/sblg/archive.html
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/kristapsdz/sblg/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/kristapsdz/sblg/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/kristapsdz/sblg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/kristapsdz/sblg/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: C · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

sblg is a command-line utility that merges articles into templates and writes the result as static HTML pages, Atom feeds and JSON files. Articles and templates are XHTML files on disk and there is no database, so the output is a folder of files that a web server can serve. It is written in C and installs from a source archive with `./configure` and `make install`. Kristaps Dzonsons maintains it, and the project describes itself as part of the BSD.lv project.
