---
id: engineer
name: Engineer
urls:
  home: https://engineer.readthedocs.io/en/master/
  repository: https://github.com/tylerbutler/engineer
  docs: https://engineer.readthedocs.io/en/master/installation.html
category:
  - ssg
description: Static website generator written in Python that builds sites from Markdown posts and Jinja 2 templates.
status: stub
maintainer: Tyler Butler
maintainerType: individual
firstRelease: 2012
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 2.7
contentStore:
  - flat-file
templating: jinja2
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2017-05-26
githubStargazers: 27
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://engineer.readthedocs.io/en/master/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/tylerbutler/engineer
    checkedAt: 2026-10-23
  - field: urls
    url: https://engineer.readthedocs.io/en/master/installation.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/tylerbutler/engineer/main/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/engineer/json
    checkedAt: 2026-10-23
  - field: category
    url: https://engineer.readthedocs.io/en/master/intro.html
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/tylerbutler/engineer
    checkedAt: 2026-10-23
  - field: runtime
    url: https://engineer.readthedocs.io/en/master/intro.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://engineer.readthedocs.io/en/master/intro.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://engineer.readthedocs.io/en/master/intro.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://engineer.readthedocs.io/en/master/intro.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://engineer.readthedocs.io/en/master/deployment.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://engineer.readthedocs.io/en/master/cmdline.html
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://engineer.readthedocs.io/en/master/intro.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://engineer.readthedocs.io/en/master/installation.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/tylerbutler/engineer
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/tylerbutler/engineer/blob/main/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/engineer/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/engineer/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tylerbutler/engineer
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tylerbutler/engineer/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Engineer is a static website generator written in Python. Posts are written in Markdown and stored as text files, templates are written in Jinja 2, and the output is HTML files that can be uploaded to any web host with FTP or rsync, as the [deployment page](https://engineer.readthedocs.io/en/master/deployment.html) describes. The `engineer` command builds the site and `engineer serve` starts a small development server for previewing it.

The introduction says Engineer is not a CMS and that it assumes most content comes as articles.

## Worth knowing

The [command reference](https://engineer.readthedocs.io/en/master/cmdline.html) says the development server is not designed for production. The introduction states that Engineer requires Python 2.7 and has not been tested on Python 3. It describes Emma, an optional management site, but the documentation page for Emma reads "Coming soon".
