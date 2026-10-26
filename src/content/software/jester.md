---
id: jester
name: Jester
urls:
  repository: https://github.com/dom96/jester
  docs: https://github.com/dom96/jester/blob/master/readme.markdown
category:
  - framework
description: Web framework for Nim that provides a DSL for defining routes and building web applications.
status: stub
maintainer: Dominik Picheta
maintainerType: individual
firstRelease: 2016
language: nim
runtime:
  - binary
hosting:
  - binary
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2023-06-18
githubStargazers: 1626
contributors: 41
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/dom96/jester
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/dom96/jester/blob/master/readme.markdown
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/dom96/jester/master/license.txt
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/dom96/jester
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/dom96/jester/blob/master/readme.markdown
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/dom96/jester/blob/master/readme.markdown
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/dom96/jester/master/jester.nimble
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/dom96/jester/master/jester.nimble
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/dom96/jester/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/dom96/jester/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/dom96/jester/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/dom96/jester
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/dom96/jester/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Jester is a web framework for Nim, described by its repository as a sinatra-like framework that provides a DSL for quickly creating web applications in Nim. Routes are declared in Nim code, and an application is compiled to a native binary that the [README](https://github.com/dom96/jester/blob/master/readme.markdown) runs with a compile-and-run command. The project has no website of its own, so the GitHub repository is its only home.

## Worth knowing

The README says applications should run behind a reverse proxy before production use, and that the library is not yet hardened against HTTP security exploits, so it should not be exposed to the public internet.
