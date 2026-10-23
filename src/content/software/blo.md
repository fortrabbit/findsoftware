---
id: blo
name: Blo
urls:
  repository: https://github.com/savuir/blo
  docs: https://github.com/savuir/blo/blob/master/README.md
category:
  - ssg
description: Static site generator for personal blogs that builds posts from Markdown files and Jinja2 page templates.
status: stub
maintainer: savuir
maintainerType: individual
firstRelease: 2015
language: python
runtime:
  - python
templating: jinja2
runsAs:
  - local
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2017-10-04
githubStargazers: 9
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/savuir/blo
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/savuir/blo/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/savuir/blo/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/savuir/blo
    checkedAt: 2026-10-23
  - field: runtime
    url: https://pypi.org/pypi/blo/json
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/savuir/blo/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/savuir/blo/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/savuir/blo/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/savuir/blo/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/savuir/blo
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/blo/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/blo/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/blo/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/savuir/blo
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/savuir/blo/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Blo is a static site generator for personal blogs, installed with pip. The `blo post` command creates a new note from a draft template and `blo build` builds the site from Markdown posts and Jinja2 page templates. The `blo serve` command runs the blog locally. Global site variables and paths live in `default.json`, and the draft templates live in `draft_templates.json`.

## Worth knowing

A new type of content takes an HTML template in the `templates` folder and an entry in `draft_templates.json`, as the README's customize section describes. The GitHub repository has only one release, while the PyPI package that the install command names has later ones.
