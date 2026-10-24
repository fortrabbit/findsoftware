---
id: jenny
name: Jenny
urls:
  repository: https://github.com/hmngwy/jenny
  docs: https://github.com/hmngwy/jenny/blob/master/README.md
category:
  - ssg
description: Bash-based static blog generator that builds dated Markdown files into a blog directory.
status: active
maintainer: Conrado Patricio Ambrosio
maintainerType: individual
firstRelease: 2018
contentStore:
  - flat-file
templating: heredocs
runsAs:
  - local
renderingModes:
  - static
installMethod: git clone, then make install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2024-09-09
githubStargazers: 99
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/hmngwy/jenny
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/hmngwy/jenny/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/hmngwy/jenny/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/hmngwy/jenny/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/hmngwy/jenny/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/hmngwy/jenny/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/hmngwy/jenny
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/hmngwy/jenny/contributors
    checkedAt: 2026-10-23
ai: authored
---

Jenny is a static blog generator written as a Bash script that uses sed and awk. Posts are files in a blog directory, and a file whose name starts with a date is a published post while any other file is a draft. Running `jenny` in that directory builds the site, and its templates use heredoc syntax. The project is installed with `make install` from a git clone, and the README also describes a Docker image.

## Worth knowing

GitHub lists no homepage for the project, so the repository is its only public address. The LICENSE file and the README give different copyright lines, and the LICENSE file names the copyright holder.
