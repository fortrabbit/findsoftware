---
id: xlog
name: XLog
urls:
  home: https://xlog.emadelsaid.com
  repository: https://github.com/emad-elsaid/xlog
  docs: https://xlog.emadelsaid.com/docs/Usage/
category:
  - ssg
  - wiki
description: Static site generator and live preview server for knowledge bases, digital gardens and personal wikis, written in Go.
status: active
maintainer: Emad Elsaid
maintainerType: individual
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
  - static
contentStore:
  - flat-file
adminUi: false
runsAs:
  - always-on
  - static
renderingModes:
  - static
installMethod: go install, pre-built binary, Docker, AUR, from source
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-08-09
githubStargazers: 234
contributors: 10
pluginCount: 37
social:
  forum: https://github.com/emad-elsaid/xlog/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://xlog.emadelsaid.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/emad-elsaid/xlog
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/emad-elsaid/xlog/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/emad-elsaid/xlog/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/emad-elsaid/xlog
    checkedAt: 2026-10-23
  - field: runtime
    url: https://xlog.emadelsaid.com/
    checkedAt: 2026-10-23
  - field: category
    url: https://xlog.emadelsaid.com/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://xlog.emadelsaid.com/docs/Installation/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/emad-elsaid/xlog/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://xlog.emadelsaid.com/tutorials/Creating%20a%20site
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://xlog.emadelsaid.com/tutorials/Creating%20a%20site
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://xlog.emadelsaid.com/docs/Usage/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://xlog.emadelsaid.com/docs/Usage/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/emad-elsaid/xlog
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/emad-elsaid/xlog/master/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/emad-elsaid/xlog/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/emad-elsaid/xlog/releases/latest
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/emad-elsaid/xlog/tags
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/emad-elsaid/xlog
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/emad-elsaid/xlog/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: pluginCount
    url: https://raw.githubusercontent.com/emad-elsaid/xlog/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

XLog is a static site generator for digital gardens and personal wikis, written in Go. It serves a folder of Markdown files as a website, stores nothing in a database, and can build the same files into static HTML. Pages are edited in the user's own text editor.

Running the binary in a folder starts an HTTP server on port 3000 with a live preview. The installation page lists installation with go install, pre-built binaries, Docker and the AUR, and the README describes built-in extensions for backlinks, hashtags and search.

## Worth knowing

The live server is a process that keeps running and answers requests, so a site served that way needs a host that runs it. The HTML written by the build step needs only static hosting.
