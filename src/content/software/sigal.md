---
id: sigal
name: Sigal
urls:
  home: https://sigal.readthedocs.io/en/latest/
  repository: https://github.com/saimn/sigal
  docs: https://sigal.readthedocs.io/en/latest/
category:
  - ssg
description: Python static gallery generator that resizes images and builds HTML gallery pages from a directory tree.
status: active
maintainer: Simon Conseil
maintainerType: individual
firstRelease: 2012
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.11
contentStore:
  - flat-file
templating: jinja2
runsAs:
  - static
renderingModes:
  - static
installMethod: pip install sigal
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-02-06
githubStargazers: 949
contributors: 61
ecosystemsMonthlyDownloads: 370
dependentRepos: 6
dependentPackages: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://sigal.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/saimn/sigal
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/saimn/sigal/main/README.rst
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/saimn/sigal/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://raw.githubusercontent.com/saimn/sigal/main/README.rst
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/saimn/sigal/main/README.rst
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/saimn/sigal/main/README.rst
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/saimn/sigal/main/README.rst
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/saimn/sigal/main/README.rst
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/saimn/sigal/main/docs/faq.rst
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/saimn/sigal/main/docs/faq.rst
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/saimn/sigal/main/docs/getting_started.rst
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/saimn/sigal/main/docs/installation.rst
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/saimn/sigal/main/docs/installation.rst
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/saimn/sigal/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/saimn/sigal/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/sigal/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/saimn/sigal/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/saimn/sigal/releases/tags/2.6
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/saimn/sigal
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/saimn/sigal/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/sigal
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/sigal
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/sigal
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Sigal turns a directory tree of images into a static gallery. It resizes the images, creates thumbnails and writes HTML pages from Jinja2 templates, with three bundled themes built on JavaScript display libraries. The project's FAQ says Sigal runs no server process, so a built gallery is a folder of files that any web server can host.

## Worth knowing

The built-in server is meant for local browsing only. Password protection has to be configured in the web server, since the gallery is plain files.
