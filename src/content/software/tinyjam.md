---
id: tinyjam
name: tinyjam
urls:
  repository: https://github.com/mourner/tinyjam
  docs: https://github.com/mourner/tinyjam/blob/master/README.md
category:
  - ssg
description: Zero-configuration static site generator that renders EJS templates and Markdown files into HTML.
status: stub
maintainer: Volodymyr Agafonkin
maintainerType: individual
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 12
templating: ejs
runsAs:
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: ISC
currentMajor: "0"
latestReleaseDate: 2021-06-30
githubStargazers: 171
npmWeeklyDownloads: 18
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/mourner/tinyjam
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/mourner/tinyjam/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mourner/tinyjam
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mourner/tinyjam/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/tinyjam/latest
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/mourner/tinyjam/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/mourner/tinyjam/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/mourner/tinyjam/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/mourner/tinyjam/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mourner/tinyjam
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mourner/tinyjam/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/tinyjam
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

tinyjam builds a site from a source folder of EJS templates and Markdown or YAML data. Every Markdown and YAML file in the source folder becomes data that all templates can read, templates are the .ejs files, and templates whose names start with an underscore are skipped so they can serve as includes. It runs as a command-line tool with npx or from a global npm install, and the output folder defaults to the source folder when none is given. The project has no pagination, which its FAQ states, and Markdown is rendered according to the GitHub Flavored Markdown specification.
