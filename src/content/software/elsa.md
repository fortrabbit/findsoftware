---
id: elsa
name: Elsa
urls:
  repository: https://github.com/pyvec/elsa
  docs: https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst
category:
  - ssg
description: Helper module that freezes a Flask app built with Frozen-Flask into static HTML and deploys it to GitHub Pages.
status: stub
maintainer: Miro Hrončok
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2020-08-31
githubStargazers: 30
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/pyvec/elsa
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/pyvec/elsa/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/pyvec/elsa
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/pyvec/elsa/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/pyvec/elsa/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/pyvec/elsa/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/pyvec/elsa/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/pyvec/elsa/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/pyvec/elsa/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/elsa/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/elsa/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/elsa/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/pyvec/elsa
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/pyvec/elsa/contributors
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

Elsa is a helper module for Flask websites that are frozen with Frozen-Flask. A script passes the Flask app to `elsa.cli()` and gains `serve` to preview the site, `freeze` to write an HTML snapshot, and `deploy` to publish the frozen site to GitHub pages. The [quickstart](https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst) sets this up with Travis CI, which freezes and deploys after each push.

## Worth knowing

The README says the Travis CI deployment force-pushes the gh-pages branch in a single commit, which rewrites that branch's history. It also says a URL without a trailing slash makes GitHub Pages serve the page with the wrong content type, so Elsa treats that as an error and the README asks for trailing slashes.
