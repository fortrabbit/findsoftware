---
id: tags
name: Brace Tags
urls:
  repository: https://github.com/braceio/tags
category:
  - ssg
description: Static site generator with two template tags, include and is, for reusing HTML partials across the pages of a site.
status: stub
maintainer: Cole Krumbholz, Lauri Hynynen
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - static
templating: own template language with two tags, include and is
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: sudo easy_install brace-tags
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2014-06-18
githubStargazers: 192
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/braceio/tags
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/braceio/tags/master/setup.py
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/braceio/tags
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/braceio/tags/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/braceio/tags/master/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/braceio/tags/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/brace-tags/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/brace-tags/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/brace-tags/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/braceio/tags
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/braceio/tags/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Brace Tags is a static site generator written in Python with an own template language of two tags, `include` and `is`. `include` inserts a partial file into a page, and `is` changes the content of a partial depending on the page being generated, which is useful for marking the current item in a navigation. `tags build` writes the site to a `_site` folder that can be deployed to any static site host, and `tags serve` starts a local server for testing. Custom tags can be added as Python functions. The README describes installation with easy_install.

## Worth knowing

The latest PyPI release is more than four years old, so the register hides this record. The project's former site, tags.brace.io, no longer shows the software.
