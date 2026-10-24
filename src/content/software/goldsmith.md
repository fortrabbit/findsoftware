---
id: goldsmith
name: Goldsmith
urls:
  repository: https://git.sr.ht/~foosoft/goldsmith
category:
  - ssg
description: Static pipeline-based website generator written in Go, configured in code rather than through configuration files.
status: stub
maintainer: Alex Yatskov
maintainerType: individual
language: go
runtime:
  - binary
hosting:
  - static
templating: go templates
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: Go library imported by the site's own Go program
licenseModel: open-source
license: MIT
githubStargazers: 37
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://raw.githubusercontent.com/FooSoft/goldsmith/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/FooSoft/goldsmith
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/FooSoft/goldsmith
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://git.sr.ht/~foosoft/goldsmith/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/FooSoft/goldsmith
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/FooSoft/goldsmith/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Goldsmith is a static website generator written in Go. It has no configuration files; a site is a Go program that imports the library and chains plugins, such as Markdown, front matter, Go-template layouts and minification, and writes the result to a destination directory. A development server rebuilds the site when source files change.

## Worth knowing

The GitHub repository is archived and its README says it has permanently moved to git.sr.ht/~foosoft/goldsmith, which holds the source. The README gives a tutorial with import paths and no separate installation steps.
