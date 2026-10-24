---
id: staticgen
name: staticgen
urls:
  repository: https://github.com/tj/staticgen
  docs: https://github.com/tj/staticgen/blob/master/Readme.md
category:
  - ssg
description: Static website generator that pre-renders the pages of a running HTTP server into static files.
status: stub
maintainer: TJ Holowaychuk
maintainerType: individual
firstRelease: 2019
language: go
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: gobinaries.com install script
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-09-23
githubStargazers: 716
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/tj/staticgen
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/tj/staticgen/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/tj/staticgen/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/tj/staticgen
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/tj/staticgen/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/tj/staticgen/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/tj/staticgen/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/tj/staticgen
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/tj/staticgen/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/tj/staticgen/tags
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/tj/staticgen/commits/4a3864dd
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/tj/staticgen/commits/9b13d39a
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tj/staticgen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tj/staticgen/contributors
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/tj/staticgen/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/tj/staticgen/blob/master/Readme.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

staticgen is a static website generator written in Go. It starts the HTTP server of a project the user already has, crawls the pages that server returns, and generates the pages and assets as a static site.

## Worth knowing

The README says it does not pre-render with a headless browser, so pages that rely on client-side JavaScript are copied in the state the server returns them.
