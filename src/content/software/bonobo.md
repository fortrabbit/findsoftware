---
id: bonobo
name: Bonobo
urls:
  repository: https://github.com/rockhardandrew/bonobo
category:
  - ssg
description: Static site generator written in C that builds pages from Markdown files with JSON metadata.
status: stub
maintainer: Andrew Bonner
maintainerType: individual
language: c
runtime:
  - binary
contentStore:
  - flat-file
renderingModes:
  - static
installMethod: build from source with clang or tcc, then copy the binary to /usr/local/bin
licenseModel: open-source
license: ISC
githubStargazers: 11
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/rockhardandrew/bonobo
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/rockhardandrew/bonobo
    checkedAt: 2026-10-23
  - field: category
    url: https://api.github.com/repos/rockhardandrew/bonobo
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/rockhardandrew/bonobo/master/Makefile
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/rockhardandrew/bonobo/master/Makefile
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/rockhardandrew/bonobo/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/rockhardandrew/bonobo
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/rockhardandrew/bonobo/master/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/rockhardandrew/bonobo/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rockhardandrew/bonobo
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rockhardandrew/bonobo/contributors
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/rockhardandrew/bonobo
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bonobo is a static site generator written in C that builds pages from Markdown files. Each page starts with a JSON metadata block, and the content follows in Markdown. The Makefile in the repository builds a single bonobo binary, and an install target copies it to a system binary folder.

## Worth knowing

The repository has no release or tag, and its README has no install section, so the build steps are read from the Makefile alone.
