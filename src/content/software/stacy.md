---
id: stacy
name: Stacy
urls:
  repository: https://github.com/boylesoftware/stacy
  docs: https://github.com/boylesoftware/stacy/blob/master/docs/tutorial/index.md
category:
  - ssg
description: Website generator that builds pages from Handlebars templates and Contentful content and publishes them to Amazon S3.
status: stub
maintainer: Boyle Software, Inc.
maintainerType: company
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 10
templating: handlebars
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install -g stacy
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2019-10-24
githubStargazers: 25
npmWeeklyDownloads: 1
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/boylesoftware/stacy
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/boylesoftware/stacy/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/boylesoftware/stacy
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/boylesoftware/stacy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/boylesoftware/stacy/master/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/boylesoftware/stacy/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/boylesoftware/stacy/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/boylesoftware/stacy/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/boylesoftware/stacy/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/boylesoftware/stacy
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/boylesoftware/stacy/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/stacy
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript · SSG
ai: authored
packagistDownloads: null
---

Stacy is a website generator that combines content from Contentful with Handlebars templates. It is installed globally with npm and runs on a developer's machine, where it serves the site locally during development.

The README describes automatic publishing to an Amazon S3 bucket, where the generated site is served from. The [tutorial](https://github.com/boylesoftware/stacy/blob/master/docs/tutorial/index.md) walks through the setup.

## Worth knowing

The content stays in Contentful, a separate hosted service that Stacy reads through its API. Automatic publishing relies on an AWS publisher that Contentful webhooks call.
