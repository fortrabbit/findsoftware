---
id: reptar
name: Reptar
urls:
  home: https://reptar.github.io/
  repository: https://github.com/reptar/reptar
category:
  - ssg
description: Static site generator written in Node.js that builds a site from Markdown and Nunjucks templates into a folder for upload.
status: stub
maintainer: Harry Wolff
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 4
templating: nunjucks
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install -g reptar
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2017-10-07
githubStargazers: 263
npmWeeklyDownloads: 24
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/reptar/reptar
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/reptar/reptar/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/reptar/reptar
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/reptar/reptar
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/reptar/reptar/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/reptar/reptar/commits/v0.5.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/reptar/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/reptar
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/reptar/reptar
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/reptar/reptar/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/reptar
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Reptar is a Node.js static site generator, formerly named yarn. It reads the files of a site, renders Markdown with markdown-it and pages with Nunjucks templates, and writes the built site to a _site folder by default. The reptar serve command runs a local server over the built files, and the lazy development server rebuilds pages as their sources change.

The documentation describes the build output as a site to push to a web host, so a built Reptar site is a set of static files.

The documentation includes a guide for converting a Jekyll site to Reptar.
