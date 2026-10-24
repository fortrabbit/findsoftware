---
id: magnanimous
name: Magnanimous
urls:
  home: https://renatoathaydes.github.io/magnanimous/
  repository: https://github.com/renatoathaydes/magnanimous
  docs: https://renatoathaydes.github.io/magnanimous/sections/docs.html
category:
  - ssg
description: Static website generator that builds HTML pages from source files, with a small templating language, written in Go.
status: active
maintainer: Renato Athaydes
maintainerType: individual
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - static
templating: magnanimous expression language
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: download the executable from the releases page, or go get
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-12-07
githubStargazers: 16
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://renatoathaydes.github.io/magnanimous/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/renatoathaydes/magnanimous
    checkedAt: 2026-10-23
  - field: urls
    url: https://renatoathaydes.github.io/magnanimous/sections/docs.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/renatoathaydes/magnanimous/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/renatoathaydes/magnanimous
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/renatoathaydes/magnanimous/blob/master/README.MD
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/renatoathaydes/magnanimous/blob/master/README.MD
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://renatoathaydes.github.io/magnanimous/sections/docs/get_started.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/renatoathaydes/magnanimous
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/renatoathaydes/magnanimous/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/renatoathaydes/magnanimous/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/renatoathaydes/magnanimous/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/renatoathaydes/magnanimous/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/renatoathaydes/magnanimous
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/renatoathaydes/magnanimous/contributors?per_page=100
    checkedAt: 2026-10-23
  - field: runtime
    url: https://renatoathaydes.github.io/magnanimous/sections/docs/get_started.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://renatoathaydes.github.io/magnanimous/sections/docs/get_started.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://renatoathaydes.github.io/magnanimous/sections/docs/get_started.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://renatoathaydes.github.io/magnanimous/sections/docs/get_started.html
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Magnanimous is a static website generator written in Go that ships as one executable. It reads source files from a source directory, processes the files in its processed directory with its own expression language, copies the static directory as it is, and writes the site to a target directory. Markdown files become HTML pages, and components with slots let a template reuse fragments.

## Worth knowing

The generator runs from the command line on a local machine and writes files, and the site is served as static files. Files whose names start with an underscore are fragments and are not copied to the site.
