---
id: scully
name: Scully
urls:
  home: https://scully.io
  repository: https://github.com/scullyio/scully
  docs: https://scully.io/docs/learn/overview/
category:
  - ssg
description: Static site generator for Angular applications that pre-renders each route to an HTML file.
status: active
maintainer: HeroDevs, LLC
maintainerType: company
firstRelease: 2019
language: typescript
runtime:
  - node
hosting:
  - static
runtimeMin: node 14
basedOn:
  - angular
runsAs:
  - static
renderingModes:
  - static
installMethod: ng add @scullyio/init
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2022-09-21
githubStargazers: 2528
npmWeeklyDownloads: 704
contributors: 105
social:
  x: https://twitter.com/ScullyIO
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://scully.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/scullyio/scully
    checkedAt: 2026-10-23
  - field: urls
    url: https://scully.io/docs/learn/overview/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/scullyio/scully/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/scullyio/scully/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/scullyio/scully/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/scullyio/scully
    checkedAt: 2026-10-23
  - field: runtime
    url: https://scully.io/docs/learn/getting-started/requirements/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://scully.io/docs/learn/getting-started/requirements/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://scully.io/docs/learn/getting-started/installation/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://scully.io/docs/learn/getting-started/building/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://scully.io/docs/learn/getting-started/building/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/scullyio/scully
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/scullyio/scully/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@scullyio/init
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/scullyio/scully/releases/tags/v2.1.41
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/scullyio/scully/releases/tags/v2.1.41
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/scullyio/scully
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/scullyio/scully/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@scullyio/init
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Scully is a static site generator for Angular applications. After the Angular build, the npx scully command renders each route to an HTML file in the dist/static folder, and the Angular app then loads and bootstraps over those pre-rendered pages. Scully is added to a project with ng add @scullyio/init, which creates a config file that lists the routes to render.

## Worth knowing

Older Angular versions use an earlier Scully version that receives only security updates. Scully uses Chromium, so the machine that runs the build must be able to install and run it. Routes with parameters are not rendered until the config lists them.
