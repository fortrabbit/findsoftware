---
id: lazyblorg
name: lazyblorg
urls:
  repository: https://github.com/novoid/lazyblorg
  docs: https://github.com/novoid/lazyblorg/blob/master/README.org
category:
  - ssg
description: Blogging system that generates static HTML5 blog pages from Org-mode files, run with Python.
status: active
maintainer: Karl Voit
maintainerType: individual
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.13
contentStore:
  - flat-file
templating: org-mode
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone
licenseModel: open-source
license: GPL-3.0-or-later
latestReleaseDate: 2026-03-21
githubStargazers: 437
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/novoid/lazyblorg
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/novoid/lazyblorg
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/novoid/lazyblorg/blob/master/pyproject.toml
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/novoid/lazyblorg/blob/master/README.org
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/novoid/lazyblorg/blob/master/templates/blog-format.org
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/novoid/lazyblorg/blob/master/pyproject.toml
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/novoid/lazyblorg/blob/master/license.txt
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/novoid/lazyblorg/blob/master/pyproject.toml
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/lazyblorg/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/novoid/lazyblorg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/novoid/lazyblorg/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

lazyblorg is a blog generator that turns Org-mode files into static HTML5 blog pages. Blog entries can be written anywhere in the Org-mode files, and the tool reads them from there, so the content lives in flat files. The templates are Org-mode files as well.

It is a Python program run from a git clone of the repository or an unpacked ZIP, and uv installs its dependencies. The [README](https://github.com/novoid/lazyblorg/blob/master/README.org) gives the setup steps, which begin with adapting a configuration file and a test run before the first generation. The project is maintained by Karl Voit.

## Worth knowing

The README names Debian GNU/Linux as the development platform, says the tool does not work on native Microsoft Windows and has not been tried on macOS. Each run regenerates all output pages. Its Org-mode parser covers a sub-set of the syntax, with Pandoc as fall-back for other elements.

The README calls lazyblorg a works-for-me project. Features are added when the author uses them, and pull requests for features the author does not use are not accepted.
