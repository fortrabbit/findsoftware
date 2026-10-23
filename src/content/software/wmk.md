---
id: wmk
name: wmk
urls:
  home: https://wmk.baldr.net/
  repository: https://github.com/bk/wmk
  docs: https://wmk.baldr.net/
category:
  - ssg
description: Static site generator written in Python that renders Markdown or HTML content through Mako or Jinja2 templates.
status: active
maintainer: Baldur Kristinsson
maintainerType: individual
firstRelease: 2022
language: python
runtime:
  - python
hosting:
  - static
contentStore:
  - flat-file
templating: mako, jinja2
runsAs:
  - static
renderingModes:
  - static
installMethod: git clone with pip
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-01-14
githubStargazers: 4
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://wmk.baldr.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/bk/wmk
    checkedAt: 2026-10-23
  - field: urls
    url: https://wmk.baldr.net/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/bk/wmk/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/bk/wmk
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/bk/wmk
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://wmk.baldr.net/
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://wmk.baldr.net/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/bk/wmk/tags?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/bk/wmk
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/bk/wmk/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/bk/wmk/master/readme.md
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

wmk is a static site generator written in Python. It renders Markdown or HTML content through Mako templates, with Jinja2 also supported, and writes the output into an htdocs directory.

## Worth knowing

The README requires a Unix-like environment with bash at /bin/bash, and rsync to copy static files. The watch commands need inotifywait or fswatch.
