---
id: lektor
name: Lektor
urls:
  home: https://www.getlektor.com/
  repository: https://github.com/lektor/lektor
  docs: https://www.getlektor.com/docs/
  plugins: https://www.getlektor.com/plugins/
category:
  - ssg
  - cms
description: Static content management system that builds websites from flat files and a web admin interface, written in Python.
status: active
maintainer: Armin Ronacher
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.8
contentStore:
  - flat-file
adminUi: true
templating: jinja2
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pipx install lektor, or pip install lektor in a virtual environment
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-08-07
githubStargazers: 3949
contributors: 85
social:
  x: https://twitter.com/getlektor
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/lektor/lektor
    checkedAt: 2026-10-23
  - field: urls
    url: https://pypi.org/pypi/lektor/json
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.getlektor.com/contact/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/lektor/lektor
    checkedAt: 2026-10-23
  - field: category
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://www.getlektor.com/docs/installation/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/lektor/json
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: templating
    url: https://www.getlektor.com/docs/templates/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.getlektor.com/docs/deployment/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.getlektor.com/docs/installation/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/lektor/lektor
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://www.getlektor.com/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/lektor/lektor/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/lektor/lektor/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/lektor/lektor/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/lektor/lektor
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/lektor/lektor/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.getlektor.com/plugins/
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

Lektor is a static content management system written in Python. Site content is kept as flat files in a tree, and an admin interface edits the content. The build turns it into static HTML, rendered with Jinja2 templates, and the output can be deployed to any host.

## Worth knowing

The Lektor server runs on the author's own machine, and the built files are what goes live. The development version of the admin needs npm to build.
