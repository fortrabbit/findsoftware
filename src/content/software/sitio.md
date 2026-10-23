---
id: sitio
name: sitio
urls:
  repository: https://github.com/fiatjaf/sitio
  docs: https://github.com/fiatjaf/sitio/blob/master/README.md
category:
  - ssg
description: Static site generator that writes HTML pages from React components through a Node.js script.
status: stub
maintainer: fiatjaf
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - static
basedOn:
  - react
templating: jsx
runsAs:
  - static
renderingModes:
  - static
  - spa
installMethod: npm install sitio
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2019-03-14
githubStargazers: 50
npmWeeklyDownloads: 13
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/fiatjaf/sitio
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/fiatjaf/sitio/blob/master/package.json
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fiatjaf/sitio
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/sitio
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://registry.npmjs.org/sitio
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/fiatjaf/sitio/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/fiatjaf/sitio/blob/master/package.json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/fiatjaf/sitio/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/sitio/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/sitio
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fiatjaf/sitio
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fiatjaf/sitio/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/sitio
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

sitio is a static site generator powered by React. The site is built by running a Node.js script, such as `node generate.js --body=body.js`, and the output is written to a `_site` folder of static files. The project can also be used as a single-page application generator. It is installed with `npm install sitio`, and Markdown files kept on disk can be read as content.

## Worth knowing

Component code runs on Node.js during the build, so it must be valid there.
