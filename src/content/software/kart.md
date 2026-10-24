---
id: kart
name: Kart
urls:
  home: https://kart.giacomocaironi.dev/
  repository: https://gitlab.com/giacomocaironi/kart
  docs: https://kart.giacomocaironi.dev/install/
category:
  - ssg
description: Python static site generator that uses Jinja2 templates and Markdown, with blog and tag index support.
status: active
maintainer: Giacomo Caironi
maintainerType: individual
firstRelease: 2020
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.9
contentStore:
  - flat-file
templating: jinja2
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install Kart
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-11-12
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://kart.giacomocaironi.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://gitlab.com/api/v4/projects/25466570
    checkedAt: 2026-10-23
  - field: urls
    url: https://kart.giacomocaironi.dev/install/
    checkedAt: 2026-10-23
  - field: category
    url: https://kart.giacomocaironi.dev/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/giacomocaironi/Kart
    checkedAt: 2026-10-23
  - field: runtime
    url: https://kart.giacomocaironi.dev/install/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/kart/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/giacomocaironi/Kart/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://kart.giacomocaironi.dev/getting-started/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://kart.giacomocaironi.dev/getting-started/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://kart.giacomocaironi.dev/getting-started/
    checkedAt: 2026-10-23
  - field: templating
    url: https://kart.giacomocaironi.dev/
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/giacomocaironi/Kart/master/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/giacomocaironi/Kart/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/kart/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/kart/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/kart/json
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://kart.giacomocaironi.dev/getting-started/
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kart is a static site generator written in Python that uses Jinja2 templates and Markdown to render sites. Content is kept as Markdown files in collection folders such as posts. It is installed with pip. `python main.py build` writes the site into a `_site` folder, which is then pushed to a production environment, and `python main.py serve` starts a development server that reloads when files change.

## Worth knowing

The README says Kart is not yet ready for real-world use and that its API can change between minor versions. Development is on GitLab, and the GitHub repository mirrors it.
