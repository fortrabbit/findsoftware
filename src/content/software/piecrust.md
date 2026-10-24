---
id: piecrust
name: PieCrust
urls:
  home: https://bolt80.com/piecrust/
  repository: https://github.com/ludovicchabant/PieCrust2
  docs: https://bolt80.com/piecrust/en/latest/docs/
category:
  - ssg
  - cms
description: Python static website generator that bakes text-file sites into HTML, with an optional flat-file CMS.
status: discontinued
maintainer: Ludovic Chabant
maintainerType: individual
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - python
  - static
runtimeMin: python 3.4
contentStore:
  - flat-file
adminUi: true
templating: jinja2, mustache
runsAs:
  - always-on
  - static
  - local
renderingModes:
  - static
  - server
installMethod: pip install piecrust
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2019-10-04
githubStargazers: 42
contributors: 4
social:
  x: https://www.twitter.com/ludovicchabant
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://github.com/ludovicchabant/PieCrust2
    checkedAt: 2026-10-23
  - field: urls
    url: https://bolt80.com/piecrust/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/ludovicchabant/PieCrust2
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/ludovicchabant/PieCrust2/master/LICENSE.rst
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ludovicchabant/PieCrust2
    checkedAt: 2026-10-23
  - field: category
    url: https://bolt80.com/piecrust/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://bolt80.com/piecrust/en/latest/getting-started
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://bolt80.com/piecrust/en/latest/getting-started
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://bolt80.com/piecrust/en/latest/getting-started
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://bolt80.com/piecrust/en/latest/docs/deploying
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://bolt80.com/piecrust/en/latest/docs/deploying
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://bolt80.com/piecrust/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://bolt80.com/piecrust/en/latest/docs/deploying/deploy-with-werkzeug
    checkedAt: 2026-10-23
  - field: templating
    url: https://bolt80.com/piecrust/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://bolt80.com/piecrust/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://bolt80.com/piecrust/en/latest/docs/admin-panel
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/ludovicchabant/PieCrust2/master/LICENSE.rst
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/ludovicchabant/PieCrust2/master/LICENSE.rst
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/PieCrust/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/PieCrust/json
    checkedAt: 2026-10-23
  - field: urls
    url: https://bolt80.com/piecrust/en/latest/docs/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/PieCrust/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ludovicchabant/PieCrust2
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ludovicchabant/PieCrust2/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

PieCrust is a Python static website generator and flat-file CMS. Its [homepage](https://bolt80.com/piecrust/) says all site content and configuration is kept in plain text files, with no databases. It is installed with pip, and the `chef` command bakes the site into static HTML files that can be published with an rsync, SFTP or shell command publisher.

PieCrust can also run as a dynamic CMS behind a WSGI server, and an optional administration panel starts with `chef serve --admin`. Content can be imported from WordPress and Jekyll sites.

## Worth knowing

The GitHub repository the support page names as the source is archived, so this record is marked discontinued. The BitBucket repository named on the same page no longer resolves.
