---
id: 20ful
name: 20ful
urls:
  repository: https://github.com/punund/20ful
  docs: https://github.com/punund/20ful/blob/master/README.md
category:
  - ssg
description: Static site generator that compiles Markdown, Pug, Nunjucks, Stylus, Sass and LiveScript sources into a website.
status: stub
maintainer: Iļja Ketris
maintainerType: individual
firstRelease: 2020
runtime:
  - node
hosting:
  - static
runtimeMin: node 16
templating: pug, nunjucks
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-06-09
githubStargazers: 7
npmWeeklyDownloads: 35
contributors: 2
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/punund/20ful
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/punund/20ful/blob/master/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://registry.npmjs.org/20ful/latest
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/punund/20ful/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://registry.npmjs.org/20ful/latest
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://registry.npmjs.org/20ful/latest
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://github.com/punund/20ful/blob/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://github.com/punund/20ful/blob/master/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/punund/20ful/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://github.com/punund/20ful/blob/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://registry.npmjs.org/20ful/latest
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://registry.npmjs.org/20ful/latest
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/punund/20ful/releases
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/punund/20ful/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/20ful
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/punund/20ful
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/punund/20ful/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/20ful
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

20ful is a static site generator that takes the files in `src/`, processes them and writes the result to `_site/`, keeping the directory structure. Markdown, Pug and Nunjucks sources become HTML, Stylus and Sass become CSS, and LiveScript becomes JavaScript, and other files are copied as they are. Front matter at the top of each file sets its template, layout, table-of-contents entry and cache busting, and a `20ful-config.yaml` file sets the source and output folders and the Markdown plugins. The `20ful serve` command builds the site and starts a development server that reloads the browser on change, using browser-sync. The npm package lists Iļja Ketris as its author.

## Worth knowing

The `20ful proxy <port>` command starts a proxy to a server that is already running, for a site with parts that need that server. Two files whose paths differ only by the `html/` folder collide in the output, and only one of them is written.
