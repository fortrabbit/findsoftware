---
id: artalk
name: Artalk
urls:
  home: https://artalk.js.org
  repository: https://github.com/ArtalkJS/Artalk
  docs: https://artalk.js.org/en/guide/deploy.html
category:
  - community
description: Self-hosted comment system that is embedded into a blog, website or web application.
status: active
maintainer: qwqcode
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
  - sqlserver
adminUi: true
i18n: yes, multiple interface languages
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-25
githubStargazers: 2361
npmWeeklyDownloads: 2939
contributors: 48
social:
  forum: https://github.com/ArtalkJS/Artalk/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://artalk.js.org
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/ArtalkJS/Artalk
    checkedAt: 2026-11-03
  - field: urls
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ArtalkJS/Artalk/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ArtalkJS/Artalk/releases/tag/1.0.4
    checkedAt: 2026-11-03
  - field: category
    url: https://artalk.js.org/en/guide/intro.html
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/ArtalkJS/Artalk
    checkedAt: 2026-11-03
  - field: runtime
    url: https://artalk.js.org/en/guide/intro.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://artalk.js.org/en/guide/deploy.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://artalk.js.org/en/guide/backend/daemon.html
    checkedAt: 2026-11-03
  - field: databases
    url: https://artalk.js.org/en/guide/backend/config.html
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://artalk.js.org/en/guide/backend/multi-site.html
    checkedAt: 2026-11-03
  - field: i18n
    url: https://artalk.js.org/en/guide/frontend/i18n.html
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/ArtalkJS/Artalk
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/ArtalkJS/Artalk/releases/tag/v2.10.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ArtalkJS/Artalk/releases/tag/v2.10.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/ArtalkJS/Artalk
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ArtalkJS/Artalk/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/artalk
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Artalk is a comment system for blogs, websites and web applications, made of a Go server and a browser client. The server is installed from a Docker image, a binary, a Linux distribution package, a `go install` command or a build from source. The client is added to a page as a script or as the npm package `artalk`. Comments are kept in SQLite by default, and MySQL, PostgreSQL or SQL Server can be configured instead. Administrators manage comments and sites from a dashboard reached through the comment widget's sidebar, and several administrator accounts can be set up for multiple sites. The project's documentation describes importing comments from Typecho, WordPress, Disqus, Commento, Waline and Twikoo.

## Worth knowing

The server runs as a long-running process, so the host has to keep it running.
