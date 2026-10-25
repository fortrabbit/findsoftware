---
id: sitepipe
name: SitePipe
urls:
  repository: https://github.com/ChrisPenner/SitePipe
  docs: https://github.com/ChrisPenner/SitePipe
category:
  - ssg
description: Haskell static site generator for blogs and personal websites that renders loaded files through Mustache templates.
status: active
maintainer: Chris Penner
maintainerType: individual
firstRelease: 2017
language: haskell
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: mustache
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: clone the repository, then build with Stack
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2022-10-25
githubStargazers: 120
contributors: 7
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/ChrisPenner/SitePipe/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/ChrisPenner/SitePipe/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/ChrisPenner/SitePipe/git/commits/4314633e0445c0143afe0ea48cbbd8ad5bbae119
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/ChrisPenner/SitePipe/git/refs/tags/v0.4.0.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://hackage.haskell.org/package/sitepipe
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ChrisPenner/SitePipe
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ChrisPenner/SitePipe/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

SitePipe is a static site generator in Haskell for blogs and personal websites. Posts are Markdown files with YAML metadata, and Mustache templates render them into HTML pages. Building with Stack writes the finished site into an output folder as static files.

## Worth knowing

The README recommends the slick project to people getting started with a static site, and says SitePipe is not deprecated (yet).
