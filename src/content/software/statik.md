---
id: statik
name: Statik
urls:
  repository: https://github.com/thanethomson/statik
  docs: https://github.com/thanethomson/statik/wiki
category:
  - ssg
description: Python static web site generator that builds sites from YAML data models and Jinja2 or Mustache templates.
status: discontinued
maintainer: Thane Thomson
maintainerType: individual
firstRelease: 2016
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.6
contentStore:
  - flat-file
templating: jinja2, mustache
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install statik
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2019-10-13
githubStargazers: 257
contributors: 10
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://api.github.com/repos/thanethomson/statik
    checkedAt: 2026-10-23
  - field: status
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/thanethomson/statik
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/thanethomson/statik
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/thanethomson/statik
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/statik/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/statik/0.23.0/json
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/statik/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/thanethomson/statik
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/thanethomson/statik/contributors
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/thanethomson/statik/blob/master/README.md
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Statik is a static web site generator that defines its own data models in YAML and loads their instances, written in YAML or Markdown, into an in-memory SQLite database through SQLAlchemy. Views in YAML tell it which models, data and templates to render to which URLs, and the templates are written in Jinja2 or Mustache. The `statik` command writes the site into a public folder and can upload it over SFTP or to Netlify.

## Worth knowing

The README says the author has not had time to maintain the project in years and asks anyone who wants to take it over to fork it. The repository is archived on GitHub.
