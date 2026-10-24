---
id: drupan
name: drupan
urls:
  repository: https://github.com/fallenhitokiri/drupan
  docs: https://github.com/fallenhitokiri/drupan/tree/master/docs
category:
  - ssg
description: Static site generator for blogs, single page applications and traditional websites, extended through a plugin system.
status: stub
maintainer: Timo Zimmermann
maintainerType: individual
firstRelease: 2012
language: python
runtime:
  - python
hosting:
  - static
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
license: BSD-2-Clause-Views
currentMajor: "3"
latestReleaseDate: 2018-08-03
githubStargazers: 45
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/fallenhitokiri/drupan
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/fallenhitokiri/drupan/blob/master/License.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fallenhitokiri/drupan
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/fallenhitokiri/drupan/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/fallenhitokiri/drupan/blob/master/License.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/fallenhitokiri/drupan/blob/master/License.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/drupan/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/drupan/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/drupan/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fallenhitokiri/drupan
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fallenhitokiri/drupan/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

drupan is a static site generator written in Python. It reads content from files with a YAML header, renders them through Jinja2 templates and writes the site to a directory. A plugin system extends it, and the README lists a markdown plugin, a tags plugin and a blank plugin for index or archive pages.

Running `drupan` with a configuration file generates the site. A `serve` switch starts a development server on port 9000, and the deployment steps publish the output with git or to AWS S3 and CloudFront.
