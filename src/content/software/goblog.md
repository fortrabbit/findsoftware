---
id: goblog
name: GoBlog
urls:
  repository: https://github.com/jlelse/GoBlog
  docs: https://github.com/jlelse/GoBlog/tree/master/docs
category:
  - cms
description: Single-user, multi-blog publishing platform written in Go, with IndieWeb and ActivityPub support.
status: active
maintainer: Jan-Lukas Else
maintainerType: individual
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - sqlite
adminUi: true
i18n: separate blogs per language within one installation
runsAs:
  - always-on
installMethod: Docker image or go build from source
licenseModel: open-source
license: MIT
githubStargazers: 281
contributors: 6
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/jlelse/GoBlog
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/jlelse/GoBlog
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/docs/advanced.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/jlelse/GoBlog
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/LICENSE
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/jlelse/GoBlog
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/jlelse/GoBlog/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/docs/configuration.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/docs/configuration.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://raw.githubusercontent.com/jlelse/GoBlog/master/docs/advanced.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

GoBlog is a single-user, multi-blog publishing platform written in Go. It runs as one binary that keeps posts, comments and sessions in a SQLite database, and writing happens in a web editor. One installation can host several blogs, and login works with a password or through OpenID Connect. Jan-Lukas Else maintains it, and it is distributed as a Docker image or built from source.

## Worth knowing

GoBlog is a long-running server, not a set of static files, so the host has to keep a process running to serve the blog.
