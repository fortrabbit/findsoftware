---
id: uriel
name: Uriel
urls:
  home: https://uriel.foo
  repository: https://github.com/ratherlargerobot/uriel
  docs: https://documentation.uriel.foo/
category:
  - ssg
description: Static site generator written in Python as a single standalone script.
status: active
maintainer: Nathan Rosenquist
maintainerType: individual
firstRelease: 2022
language: python
runtime:
  - python
hosting:
  - static
contentStore:
  - flat-file
templating: simple but flexible templating system
runsAs:
  - static
renderingModes:
  - static
installMethod: copy the script
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "1"
latestReleaseDate: 2026-09-24
githubStargazers: 5
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://uriel.foo/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/ratherlargerobot/uriel
    checkedAt: 2026-10-23
  - field: urls
    url: https://documentation.uriel.foo/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/ratherlargerobot/uriel/blob/main/uriel
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ratherlargerobot/uriel
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ratherlargerobot/uriel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/ratherlargerobot/uriel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://documentation.uriel.foo/quickstart/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ratherlargerobot/uriel/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://documentation.uriel.foo/quickstart/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://uriel.foo/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://uriel.foo/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ratherlargerobot/uriel/blob/main/uriel
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://uriel.foo/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/ratherlargerobot/uriel/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/ratherlargerobot/uriel/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/ratherlargerobot/uriel/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ratherlargerobot/uriel
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ratherlargerobot/uriel/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://documentation.uriel.foo/quickstart/
    checkedAt: 2026-10-23
  - field: templating
    url: https://uriel.foo/
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Uriel is a static site generator distributed as one Python script that depends only on Python, with no third-party modules. It runs from any directory without installation. A project directory is created on the first run and regenerated on each later run, and the pages go into a `public` directory that any web server can host.

## Worth knowing

Projects can run their own Python code during a build, in the `lib` files of the project. The [documentation](https://documentation.uriel.foo/) says to trust a project before building it.
