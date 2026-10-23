---
id: susi
name: SuSi
urls:
  repository: https://github.com/AVGP/susi
  docs: https://github.com/AVGP/susi/blob/master/README.md
category:
  - ssg
description: Static site generator that renders Markdown files into static HTML pages through HTML layouts.
status: stub
maintainer: Martin Naumann
maintainerType: individual
firstRelease: 2014
language: javascript
hosting:
  - static
templating: mustache
runsAs:
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: ISC
currentMajor: "0"
latestReleaseDate: 2018-05-24
githubStargazers: 57
npmWeeklyDownloads: 1
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/AVGP/susi
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/AVGP/susi/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/AVGP/susi
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/susi
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/AVGP/susi/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/susi
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/AVGP/susi/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/susi
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/AVGP/susi
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/AVGP/susi/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/susi
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript · SSG
ai: authored
packagistDownloads: null
---

SuSi takes Markdown files and an optional HTML layout and writes static HTML files from them. Each Markdown file opens with a JSON block of frontmatter, and the layout places the Markdown content and the frontmatter values with Mustache-style placeholders. Layout files can also pull in other layout files with Apache SSI-style include comments. SuSi is a command-line tool: it takes an input directory, an output directory and a layouts directory as arguments. Its output is plain HTML files, so the result can go to any web space.
