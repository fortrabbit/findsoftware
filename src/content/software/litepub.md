---
id: litepub
name: LitePub
urls:
  repository: https://github.com/mirovarga/litepub
category:
  - ssg
description: Static blog generator written in Go that renders Markdown posts and Go templates into HTML files, distributed as one binary.
status: active
maintainer: Miro Varga
maintainerType: individual
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: go templates
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: go install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-05-12
githubStargazers: 35
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/mirovarga/litepub
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/mirovarga/litepub/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mirovarga/litepub
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/mirovarga/litepub
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/mirovarga/litepub/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/mirovarga/litepub/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/mirovarga/litepub/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/mirovarga/litepub/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mirovarga/litepub
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mirovarga/litepub/contributors
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mirovarga/litepub/blob/master/README.md
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Go · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

LitePub is a static blog generator written in Go. Posts are Markdown files in a posts directory, with the title, date and tags read from the text of each post instead of from front matter. The `build` command applies Go html/template templates to them and writes static HTML files, and a built-in server previews the result. The README says it needs one binary and no configuration files or databases, and it is installed with `go install` or from a release download.
