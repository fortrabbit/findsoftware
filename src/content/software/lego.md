---
id: lego
name: lego
urls:
  home: https://astronomersiva.github.io/lego/
  repository: https://github.com/astronomersiva/lego
  docs: https://github.com/astronomersiva/lego/blob/master/README.md
category:
  - ssg
description: Node.js static site generator that builds optimised websites from Nunjucks or Liquid templates and Markdown posts.
status: active
maintainer: Sivasubramanyam A
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 8
templating: nunjucks, liquid
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm install -g
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2022-12-04
githubStargazers: 185
npmWeeklyDownloads: 9
contributors: 4
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://astronomersiva.github.io/lego/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/astronomersiva/lego
    checkedAt: 2026-10-22
  - field: urls
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/astronomersiva/lego
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/package.json
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://registry.npmjs.org/@astronomersiva%2flego/latest
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/astronomersiva/lego/master/README.md
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/@astronomersiva%2flego
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@astronomersiva%2flego/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@astronomersiva%2flego
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/astronomersiva/lego
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/astronomersiva/lego/contributors?per_page=1
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@astronomersiva/lego
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: JavaScript · SSG
ai: authored
packagistDownloads: null
---

lego is a static site generator for Node.js that builds optimised websites from Nunjucks or Liquid templates. It is installed under its scope with `npm i -g @astronomersiva/lego`, and `lego build` writes the optimised build. `lego serve` runs a local server during development.

The build output is static, and the build copies a CNAME file into the build folder so that the site works with GitHub Pages.

## Worth knowing

The unscoped npm name lego belongs to another project, so the install command uses the scoped package.
