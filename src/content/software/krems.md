---
id: krems
name: Krems
urls:
  repository: https://github.com/mreider/krems
  docs: https://github.com/mreider/krems/blob/main/README.md
category:
  - ssg
description: Go static site generator that builds Markdown websites for publishing to GitHub Pages through a GitHub Action.
status: active
maintainer: Matt Reider
maintainerType: individual
firstRelease: 2025
language: go
runtime:
  - binary
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-10-10
githubStargazers: 10
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/mreider/krems
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/mreider/krems/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://api.github.com/users/mreider
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mreider/krems
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mreider/krems
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mreider/krems/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mreider/krems/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/mreider/krems/blob/main/main.go
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mreider/krems/blob/main/main.go
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mreider/krems/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/mreider/krems/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/mreider/krems/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/mreider/krems/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/mreider/krems/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/mreider/krems/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mreider/krems
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mreider/krems/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Krems is a Go static site generator that turns a folder of Markdown files into a website for GitHub Pages. A build writes the site to a .tmp folder, and a local run serves that folder on localhost for preview. The README describes a GitHub Action that generates the site on each push and commits it to the gh-pages branch, which GitHub Pages serves. Matt Reider maintains it, a name taken from the GitHub profile.

## Worth knowing

The repository's license file carries the MIT template with a copyright year and no name, so the maintainer name comes from the author's GitHub profile.
