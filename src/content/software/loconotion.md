---
id: loconotion
name: loconotion
urls:
  repository: https://github.com/leoncvlt/loconotion
category:
  - ssg
description: Python script that renders a public Notion.so page and its subpages into a static website.
status: discontinued
maintainer: Leonardo Cavaletti
maintainerType: individual
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.7
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: pip install -r requirements.txt
githubStargazers: 855
contributors: 20
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/leoncvlt/loconotion
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/leoncvlt/loconotion/blob/master/pyproject.toml
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/leoncvlt/loconotion
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/leoncvlt/loconotion/blob/master/pyproject.toml
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/leoncvlt/loconotion
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/leoncvlt/loconotion/contributors
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/leoncvlt/loconotion/blob/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

loconotion is a Python script that takes the URL of a public Notion.so page, or a TOML configuration file naming one, and generates a static site from the page and its subpages. It automates Google Chrome through ChromeDriver, so Chrome must be installed, and it writes the result to a `dist` folder. It installs with pip or Poetry, and the repository also supplies a Docker setup.

## Worth knowing

The README says the project is functional but unmaintained and may not match Notion's latest site structure, and that issues will likely not be resolved while pull requests are welcome. The source is the Notion page itself, so the page must stay public on Notion while the site is generated.
