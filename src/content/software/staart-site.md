---
id: staart-site
name: Staart Site
urls:
  home: https://staart.js.org/site
  repository: https://github.com/staart/site
  docs: https://staart.js.org/site/getting-started
category:
  - ssg
description: Static site generator for helpdesk or documentation websites, written in TypeScript.
status: stub
maintainer: Anand Chowdhary
firstRelease: 2019
language: typescript
runtime:
  - node
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
renderingModes:
  - static
installMethod: npm or yarn dev dependency @staart/site, or npx
licenseModel: open-source
license: MIT, CC BY 4.0
currentMajor: "2"
latestReleaseDate: 2020-04-27
githubStargazers: 43
npmWeeklyDownloads: 75
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://staart.js.org/site
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/staart/site
    checkedAt: 2026-10-23
  - field: urls
    url: https://staart.js.org/site/getting-started
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/staart/site/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/staart/site
    checkedAt: 2026-10-23
  - field: category
    url: https://staart.js.org/site
    checkedAt: 2026-10-23
  - field: runtime
    url: https://staart.js.org/site/github-pages-actions
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://staart.js.org/site/getting-started
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://staart.js.org/site/configuration
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://staart.js.org/site/github-pages-actions
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://staart.js.org/site/github-pages-actions
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/staart/site/master/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/staart/site/blob/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/staart/site/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/staart/site/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/staart/site/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/staart/site/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/staart/site
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/staart/site/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@staart/site
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Staart Site turns a folder of markdown content into a static website for helpdesk or documentation use. It is added to a project as a dev dependency or run once with npx, and it writes the site to a `public` folder. The code is written in TypeScript.

Because the output is plain files with no server part, a site can be published to GitHub Pages. The [GitHub Pages guide](https://staart.js.org/site/github-pages-actions) shows a GitHub Actions workflow that pushes the built folder to a `gh-pages` branch.
