---
id: docuowl
name: Docuowl
urls:
  repository: https://github.com/docuowl/docuowl
  docs: https://github.com/docuowl/docuowl/blob/master/README.md
category:
  - ssg
description: Documentation generator that compiles a directory of Markdown files into a single static HTML page.
status: stub
maintainer: Victor Gama
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: Homebrew
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2021-10-25
githubStargazers: 1310
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/docuowl/docuowl
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/docuowl/docuowl
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/docuowl/docuowl
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/docuowl/docuowl/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/docuowl/docuowl/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/docuowl/docuowl/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/docuowl/docuowl
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/docuowl/docuowl/contributors
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/docuowl/docuowl/blob/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Docuowl is a Go command-line tool that compiles a directory of Markdown files into a single static `index.html` file. Each section is a folder with a `content.md` file and an optional `sidenotes.md` file, and groups are folders with a `meta.md` file. A watch mode serves a preview on localhost and reloads when the input files change. It is installed with Homebrew or from the release downloads.

The README says the layout follows Stripe's API documentation, which Stripe allowed the author to use.

## Worth knowing

The README's TODO list names full-text search and tests as not yet done.
