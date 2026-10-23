---
id: gridea-pro
name: Gridea Pro
urls:
  home: https://www.gridea.pro/
  repository: https://github.com/Gridea-Pro/gridea-pro
  docs: https://www.gridea.pro/docs/
category:
  - cms
description: Desktop client for writing Markdown blog posts in a GUI and publishing them as a static blog.
status: active
maintainer: Gridea Pro Contributors
maintainerType: community
firstRelease: 2026
language: go
runtime:
  - binary
adminUi: true
templating: jinja2, ejs, go templates
runsAs:
  - local
renderingModes:
  - static
installMethod: download installer
licenseModel: open-source
license: GPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-06-04
githubStargazers: 468
contributors: 7
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.gridea.pro/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.gridea.pro/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.gridea.pro/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/Gridea-Pro/gridea-pro/blob/main/README-en.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Gridea-Pro/gridea-pro/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Go · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gridea Pro is a desktop application for writing blog posts in a graphical editor and publishing them as a static blog. It is built on Wails, a framework that combines a Go backend with a Vue 3 interface, and the README describes it as a complete rewrite of Gridea. Posts are written in Markdown, and the app renders them with one of three template engines: Jinja2 through Pongo2, EJS, or Go templates.

The app deploys the generated site to GitHub Pages, Vercel, Netlify, Coding, or an SFTP or FTP server. An existing Gridea data folder can be imported by pointing the site directory setting at it. A separate binary, gridea-pro-mcp, provides an MCP server so that AI assistants can work with the same site data.

## Worth knowing

Gridea Pro runs as a desktop application. The live site is served by whichever host the app deploys to.
