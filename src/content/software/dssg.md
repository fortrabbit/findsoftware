---
id: dssg
name: DSSG
urls:
  repository: https://github.com/kambrium/dssg
  docs: https://github.com/kambrium/dssg/blob/master/README.md
category:
  - ssg
description: Static site generator that builds HTML pages from TOML files and Mustache templates, written in D.
status: stub
maintainer: Martin Muehlbauer
maintainerType: individual
firstRelease: 2017
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: mustache
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-02-03
githubStargazers: 22
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/kambrium/dssg
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/kambrium/dssg/blob/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/kambrium/dssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/kambrium/dssg
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/kambrium/dssg/blob/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/kambrium/dssg/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/kambrium/dssg/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/kambrium/dssg/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/kambrium/dssg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/kambrium/dssg/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

DSSG is a static site generator written in the D programming language. Each page is one TOML file of key-value pairs that hold both metadata and content, and a key whose name ends in `_md` is read as Markdown and converted to HTML. Content may also be pure HTML, and a project can use several Mustache templates.

The README describes creating a project with `dssg new`, then `dssg build` and `dssg serve`. The software is a downloaded binary.

## Worth knowing

The README names only Ubuntu 16.04 and Windows 10 binaries.
