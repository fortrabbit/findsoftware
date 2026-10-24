---
id: reem
name: Reem
urls:
  repository: https://github.com/andrejewski/reem
  docs: https://github.com/andrejewski/reem/wiki
  plugins: https://www.npmjs.org/search?q=reem-plugin
category:
  - ssg
description: Static site generator written in JavaScript that reads a source directory, runs it through plugins and writes the output to a directory.
status: stub
maintainer: Chris Andrejewski
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - static
templating: consolidate.js
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install -g reem
licenseModel: open-source
license: ISC
currentMajor: "0"
latestReleaseDate: 2015-05-23
githubStargazers: 27
npmWeeklyDownloads: 2
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/andrejewski/reem
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/andrejewski/reem/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/andrejewski/reem/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/andrejewski/reem
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/andrejewski/reem/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/andrejewski/reem/wiki/Superusing-the-CLI
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/andrejewski/reem/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/andrejewski/reem/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/andrejewski/reem/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/andrejewski/reem/wiki/Introducing-Reem
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/andrejewski/reem
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/andrejewski/reem/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/reem
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/reem/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/reem
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/andrejewski/reem
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/andrejewski/reem/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/reem
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/andrejewski/reem/blob/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Reem is a static site generator written in JavaScript. It reads a source directory into a tree, runs the tree through plugins and middleware, and writes the result to an output directory. Templates go through consolidate.js, so the template language is the developer's choice.

A site is configured in a reemfile.js file and built with the reem command in the site folder. Plugins such as reem-markdown, which converts Markdown to HTML, are separate npm packages.

## Worth knowing

The README says Reem keeps changes backwards-compatible until a v1.0.0 release.
