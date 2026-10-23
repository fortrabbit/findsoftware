---
id: rosid
name: Rosid
urls:
  home: https://rosid.electerious.com
  repository: https://github.com/electerious/Rosid
  docs: https://github.com/electerious/Rosid/blob/master/docs/Get%20started.md
category:
  - ssg
  - dev-tool
description: Node.js server and static site generator that transforms source files with handlers when they are requested and can compile them to a folder.
status: stub
maintainer: Tobias Reich
maintainerType: individual
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 8
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm install rosid
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2020-03-20
githubStargazers: 144
npmWeeklyDownloads: 67
contributors: 6
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://rosid.electerious.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/electerious/Rosid
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/electerious/Rosid/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/electerious/Rosid
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/electerious/Rosid/blob/master/docs/Get%20started.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/electerious/Rosid/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/electerious/Rosid
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/electerious/Rosid/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/rosid
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/rosid/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/rosid
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/electerious/Rosid
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/electerious/Rosid/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/rosid
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Rosid is a Node.js server and static site generator. Its development server transforms each requested file with a handler when the request arrives and reloads the browser when files change. The compile command runs the same transforms and writes the results to a folder of static files that can be hosted anywhere.

Rosid selects handlers for files with a rosidfile.json or rosidfile.js in the working directory. Handlers are separate npm packages, such as the Sass handler, and the project's own documentation names EJS, Nunjucks and Twig handlers among them.

## Worth knowing

The README says that installing Rosid with npm's --no-optional flag skips a lot of dependencies and makes the serve function unavailable.
