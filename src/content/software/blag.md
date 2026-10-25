---
id: blag
name: blag
urls:
  home: https://blag.readthedocs.io/en/latest/
  repository: https://github.com/venthur/blag
  docs: https://blag.readthedocs.io/en/latest/
category:
  - ssg
description: Blog-aware static site generator written in Python that builds a site from Markdown content and Jinja2 templates.
status: active
maintainer: Bastian Venthur
maintainerType: individual
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.10
contentStore:
  - flat-file
templating: jinja2
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install, Debian package
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2025-04-27
githubStargazers: 98
contributors: 3
ecosystemsMonthlyDownloads: 186
dependentRepos: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://blag.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/venthur/blag
    checkedAt: 2026-10-23
  - field: urls
    url: https://blag.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/venthur/blag/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://github.com/venthur/blag/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/venthur/blag
    checkedAt: 2026-10-23
  - field: runtime
    url: https://blag.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/venthur/blag/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/venthur/blag/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://blag.readthedocs.io/en/latest/manual/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://blag.readthedocs.io/en/latest/manual/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/venthur/blag/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/venthur/blag/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://blag.readthedocs.io/en/latest/manual/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://blag.readthedocs.io/en/latest/manual/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/venthur/blag
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/venthur/blag/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/blag/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/blag/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/blag/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/venthur/blag
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/venthur/blag/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/blag
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/blag
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

blag is a blog-aware static site generator written in Python. It reads Markdown files from a `content` directory, copies static files over, and renders the output with Jinja2 templates into a `build` directory. A Markdown file with a date is an article and the rest are pages; articles go into an Atom feed and into the tag pages.

It is installed from PyPI with `pip install blag`. `blag quickstart` creates a configuration and starter content, `blag build` builds the site, and an integrated devserver serves it while the content is edited. The [manual](https://blag.readthedocs.io/en/latest/manual/) describes the content layout and templates.
