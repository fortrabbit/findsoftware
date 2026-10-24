---
id: gitmal
name: Gitmal
urls:
  repository: https://github.com/antonmedv/gitmal
  docs: https://github.com/antonmedv/gitmal/blob/master/docs/how-to-self-host-a-git-repository.md
category:
  - ssg
description: Static page generator that turns a Git repository into HTML pages for its files, commits and code.
status: active
maintainer: Anton Medvedev
maintainerType: individual
firstRelease: 2025
language: go
runtime:
  - binary
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: go install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-12-29
githubStargazers: 1342
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/antonmedv/gitmal
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/antonmedv/gitmal/blob/master/docs/how-to-self-host-a-git-repository.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/antonmedv/gitmal/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/antonmedv/gitmal
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/antonmedv/gitmal/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/antonmedv/gitmal/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/antonmedv/gitmal/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/antonmedv/gitmal/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/antonmedv/gitmal/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/antonmedv/gitmal/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/antonmedv/gitmal/blob/master/docs/how-to-self-host-a-git-repository.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/antonmedv/gitmal
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/antonmedv/gitmal/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/antonmedv/gitmal/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/antonmedv/gitmal/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/antonmedv/gitmal/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/antonmedv/gitmal
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/antonmedv/gitmal/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gitmal is a static page generator that turns a Git repository into HTML pages for its files and commits. It writes the pages to an output directory that a web server serves, so the published result needs no server-side code. The [self-host guide](https://github.com/antonmedv/gitmal/blob/master/docs/how-to-self-host-a-git-repository.md) sets up a bare repository whose post-receive hook runs gitmal on each push, with the web root serving the output next to a read-only clone URL.
