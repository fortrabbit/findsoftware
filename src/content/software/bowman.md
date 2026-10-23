---
id: bowman
name: Bowman
urls:
  repository: https://github.com/waldronmatt/bowman
  docs: https://github.com/waldronmatt/bowman/tree/master/docs
category:
  - ssg
description: Static site generator that builds pages from EJS templates and JSON data, with a Webpack and Browsersync toolchain.
status: stub
maintainer: Matthew Waldron
maintainerType: individual
firstRelease: 2020
language: javascript
runtime:
  - node
templating: ejs
renderingModes:
  - static
installMethod: npm install -g, then create-bowman-starter
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2021-09-24
githubStargazers: 21
npmWeeklyDownloads: 1
contributors: 2
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: status
    url: https://bowman.netlify.app/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/waldronmatt/bowman
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/waldronmatt/bowman/blob/master/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/waldronmatt/bowman/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/waldronmatt/bowman
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/waldronmatt/bowman/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://github.com/waldronmatt/bowman/blob/master/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://github.com/waldronmatt/bowman/blob/master/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/waldronmatt/bowman/blob/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://github.com/waldronmatt/bowman/blob/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://registry.npmjs.org/@waldronmatt%2fbowman/latest
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/waldronmatt/bowman/master/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/waldronmatt/bowman/releases
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/waldronmatt/bowman/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/waldronmatt/bowman/releases
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/waldronmatt/bowman
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/waldronmatt/bowman/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@waldronmatt/bowman
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Bowman is a static site generator with an integrated toolchain, written for Node.js and built on Webpack and Browsersync. Pages are generated from EJS templates, which produce HTML markup with plain JavaScript. The npm package is installed globally, and the `create-bowman-starter` command creates a project. `npm run dev` starts a development environment and `npm run build` builds and serves the site for production.

## Worth knowing

Content and data files must share the same folder structure and file names, or the build fails. The npm name `bowman` belongs to an unrelated package, so the install command is `@waldronmatt/bowman`. The homepage the GitHub repository lists now shows another organization's site, so the README and the docs folder in the repository are the documentation that remains.
