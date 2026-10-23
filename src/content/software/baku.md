---
id: baku
name: Baku
urls:
  repository: https://github.com/vladris/baku
  docs: https://github.com/vladris/baku/blob/main/README.md
category:
  - ssg
description: Python blogging engine and static website generator that writes posts in Markdown.
status: active
maintainer: Vlad Riscutia
maintainerType: individual
firstRelease: 2022
language: python
runtime:
  - python
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install baku
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-10-18
githubStargazers: 22
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/vladris/baku
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/vladris/baku/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/vladris/baku/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/vladris/baku
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/vladris/baku/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/vladris/baku/main/setup.py
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/vladris/baku/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/vladris/baku/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/vladris/baku/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/vladris/baku/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/vladris/baku/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/vladris/baku
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/vladris/baku/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/baku/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/baku/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/baku/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/vladris/baku
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/vladris/baku/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Baku is a Python blogging engine and static website generator that builds Markdown posts into a static blog. Its README calls it the spiritual successor to [Tinkerer](https://github.com/vladris/tinkerer).

A blog lives in a directory set up with `baku --init`. Each post is a Markdown file under a path that reflects its date, and drafts sit in a separate folder that the build ignores. The build writes the site to a folder that the [README](https://github.com/vladris/baku/blob/main/README.md) suggests publishing on a static host such as GitHub Pages. Pages are rendered from templates in the blog's `templates` folder with a templating engine of Baku's own. Posts can use MathJax for mathematical notation and Mermaid for diagrams.
