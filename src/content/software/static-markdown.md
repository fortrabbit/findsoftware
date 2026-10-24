---
id: static-markdown
name: Static Markdown
urls:
  repository: https://github.com/tripplyons/static-markdown
  docs: https://github.com/tripplyons/static-markdown/blob/master/docs/usage.md
category:
  - ssg
description: Static site generator that builds HTML pages from Markdown or HTML files, run as a command line tool or as a Node module.
status: stub
maintainer: Tripp Lyons
maintainerType: individual
firstRelease: 2020
runtime:
  - node
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: npm i -g static-markdown
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-06-04
githubStargazers: 6
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/tripplyons/static-markdown
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/tripplyons/static-markdown/blob/master/docs/usage.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/tripplyons/static-markdown/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/tripplyons/static-markdown/blob/master/docs/usage.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/tripplyons/static-markdown/blob/master/docs/usage.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/tripplyons/static-markdown/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/tripplyons/static-markdown/blob/master/docs/usage.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/tripplyons/static-markdown
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/tripplyons/static-markdown/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/tripplyons/static-markdown/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/static-markdown
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/static-markdown/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/static-markdown
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tripplyons/static-markdown
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tripplyons/static-markdown/contributors
    checkedAt: 2026-10-23
ai: authored
---

static-markdown is a command line tool and Node module that builds a static site from a project folder of Markdown and HTML pages. Each page starts with a JSON block of metadata, and its template field names the template that wraps it. Running `static-markdown` on a folder deletes the old `public` folder and writes the generated site there as static files.
