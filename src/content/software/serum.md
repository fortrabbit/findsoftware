---
id: serum
name: Serum
urls:
  home: https://dalgona.github.io/Serum/
  repository: https://github.com/Dalgona/Serum
  docs: https://dalgona.github.io/Serum/docs/index.html
category:
  - ssg
description: Elixir static website generator that builds blogs and general sites from Markdown documents and EEx templates.
status: discontinued
maintainer: Eunbin Jeong
maintainerType: individual
firstRelease: 2018
language: elixir
runtime:
  - beam
hosting:
  - static
runtimeMin: beam 1.8
contentStore:
  - flat-file
templating: eex
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: mix archive.install hex serum_new, then mix serum.new
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2021-05-22
githubStargazers: 323
contributors: 12
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://api.github.com/repos/Dalgona/Serum
    checkedAt: 2026-10-23
  - field: urls
    url: https://dalgona.github.io/Serum/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Dalgona/Serum
    checkedAt: 2026-10-23
  - field: urls
    url: https://dalgona.github.io/Serum/docs/index.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/Dalgona/Serum/v1/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Dalgona/Serum
    checkedAt: 2026-10-23
  - field: runtime
    url: https://dalgona.github.io/Serum/getting-started.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://dalgona.github.io/Serum/getting-started.html
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/Dalgona/Serum/v1/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://dalgona.github.io/Serum/getting-started.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://dalgona.github.io/Serum/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://dalgona.github.io/Serum/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://dalgona.github.io/Serum/getting-started.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/Dalgona/Serum/v1/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://dalgona.github.io/Serum/docs/project-structure.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/Dalgona/Serum
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/Dalgona/Serum/v1/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/Dalgona/Serum/git/commits/f92496a468f0839c9bc247610e70b22fb0a434a7
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Dalgona/Serum/git/refs/tags/v1.5.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/serum/releases/1.5.1
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Dalgona/Serum
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Dalgona/Serum/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Serum is written in Elixir and builds a website from Markdown documents and EEx templates. It is aimed at blogs and also builds general sites. Pages and posts are files in a project folder, and the build writes the finished site into an output folder, so the live site is a set of static files.

The development server is for checking a site on the developer's machine before publishing.

## Worth knowing

The GitHub repository is archived. Neither the README nor the project site states an end, so the archive flag is the only sign that development has stopped.
