---
id: gor
name: Gor
urls:
  repository: https://github.com/wendal/gor
  docs: https://github.com/wendal/gor/blob/master/README.md
category:
  - ssg
description: Go static website and blog generator engine that compiles Markdown posts into static HTML.
status: stub
maintainer: WendalChen
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
renderingModes:
  - static
installMethod: go install github.com/wendal/gor/gor
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2014-12-29
githubStargazers: 594
contributors: 15
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/wendal/gor
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/wendal/gor
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/wendal/gor/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/wendal/gor/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/wendal/gor/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/wendal/gor/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/wendal/gor
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/wendal/gor/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gor is a static website and blog generator engine written in Go. Its README describes it as a replacement for the official Ruby implementation of ruhoh, and the record lists ruhoh as an alternative. Posts are Markdown files in the site folder, and `gor compile` writes the finished site to a separate folder. The README says that output is only static files, so it can be deployed to [GitHub Pages](https://github.com/wendal/gor/blob/master/README.md) or a server of your own.

## Worth knowing

The repository has no LICENSE file; the README states the BSD 3 Clause license, and that statement is the license recorded for the project.
