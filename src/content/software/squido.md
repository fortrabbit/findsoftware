---
id: squido
name: squido
urls:
  home: https://squido.markmoffat.com
  repository: https://github.com/mrvautin/squido
  docs: https://squido-docs.markmoffat.com/
category:
  - ssg
description: Static website generator built with Node.js that builds HTML pages from Markdown posts and a template engine.
status: active
maintainer: Mark Moffat
maintainerType: individual
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 18
contentStore:
  - flat-file
adminUi: true
templating: handlebars, ejs, pug
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install -g squido
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-12-16
githubStargazers: 68
npmWeeklyDownloads: 3
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://squido.markmoffat.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/mrvautin/squido
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/mrvautin/squido/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/mrvautin/squido/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mrvautin/squido
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/mrvautin/squido
    checkedAt: 2026-10-23
  - field: category
    url: https://squido.markmoffat.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mrvautin/squido/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/mrvautin/squido/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://squido-docs.markmoffat.com/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://squido.markmoffat.com/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://squido-docs.markmoffat.com/deployment-and-hosting/
    checkedAt: 2026-10-23
  - field: templating
    url: https://squido.markmoffat.com/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://squido.markmoffat.com/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://squido-docs.markmoffat.com/admin-editor/
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/mrvautin/squido/main/package.json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/mrvautin/squido/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/squido/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/squido
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mrvautin/squido
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mrvautin/squido/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/squido
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

squido turns Markdown posts and pages into static HTML, rendered with Handlebars, EJS or Pug templates. It is a Node.js command line tool installed from npm, and `squido build` writes the site to a `build` folder. Content from Ghost and WordPress exports can be imported, and a post editor is served alongside the local development server.

## Worth knowing

The build runs on Node.js. The output is static files, which can be hosted anywhere static websites are supported.
