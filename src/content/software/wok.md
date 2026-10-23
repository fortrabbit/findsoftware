---
id: wok
name: wok
urls:
  repository: https://github.com/mythmon/wok
category:
  - ssg
description: Python static website generator that turns templates, content and media into plain HTML with Jinja2 templates.
status: discontinued
maintainer: Mike Cooper
maintainerType: individual
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - static
contentStore:
  - flat-file
templating: jinja2
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: setup.py install from the repository
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2014-04-30
githubStargazers: 114
contributors: 23
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://api.github.com/repos/mythmon/wok
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/mythmon/wok
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/mythmon/wok/master/setup.py
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mythmon/wok
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/mythmon/wok/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/mythmon/wok/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/mythmon/wok/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mythmon/wok
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mythmon/wok/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/mythmon/wok/master/README.mkd
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

wok is a Python static website generator that turns templates, content and resources such as CSS and images into plain HTML. The pages are generated ahead of time rather than on each visit, so no server-side engine runs per request. Templates use Jinja2, and a development server started from the command line serves the output for local link testing.

## Worth knowing

The project's repository is archived on GitHub, and its documentation site no longer completes a TLS connection, so the README is the only readable description. The install instructions name a PyPI package called wok, but that package is a different tool, so the README's source install is the one that applies.
