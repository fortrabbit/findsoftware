---
id: quickblog
name: quickblog
urls:
  repository: https://github.com/borkdude/quickblog
  docs: https://github.com/borkdude/quickblog/blob/main/README.md
category:
  - cms
description: Blog engine for Clojure and babashka that renders Markdown posts into a blog with an index, archive, tag pages and templates.
status: active
maintainer: Michiel Borkent
maintainerType: individual
firstRelease: 2022
language: clojure
runsAs:
  - local
installMethod: babashka git dependency in bb.edn
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-06-12
githubStargazers: 218
contributors: 20
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/borkdude/quickblog
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/borkdude/quickblog/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/borkdude/quickblog/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/borkdude/quickblog/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/borkdude/quickblog
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/borkdude/quickblog/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/borkdude/quickblog/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/borkdude/quickblog
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/borkdude/quickblog/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/borkdude/quickblog/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/borkdude/quickblog/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/borkdude/quickblog/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/borkdude/quickblog
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/borkdude/quickblog/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

quickblog is a blog engine for Clojure and babashka, maintained by Michiel Borkent. It is added to a project as a git dependency and driven through tasks: the [quickstart](https://github.com/borkdude/quickblog/blob/main/README.md) adds a task to the project's `bb.edn`, and running `bb quickblog watch` starts an HTTP server that re-renders when files change.

The README states that the same API works from a Clojure project, so a blog can run under either babashka or Clojure. Posts are written in Markdown, and the README keeps a list of blogs built with it.
