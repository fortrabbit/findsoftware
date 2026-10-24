---
id: stapy
name: Stapy
urls:
  home: https://stapy.magentix.fr
  repository: https://git.sr.ht/~magentix/stapy
  docs: https://stapy.magentix.fr/
category:
  - ssg
description: Static site generator written in Python that builds sites from JSON page data and templates, with a local development server.
status: stub
maintainer: Magentix
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.6
contentStore:
  - flat-file
adminUi: true
templating: Stapy expressions ({{ }} variables, {% %} blocks)
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: download release archive (tar.gz or zip)
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "1"
latestReleaseDate: 2025-08-25
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://git.sr.ht/~magentix/stapy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: urls
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://git.sr.ht/~magentix/stapy/blob/master/LICENCE
    checkedAt: 2026-10-23
  - field: language
    url: https://git.sr.ht/~magentix/stapy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://git.sr.ht/~magentix/stapy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://git.sr.ht/~magentix/stapy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://git.sr.ht/~magentix/stapy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://git.sr.ht/~magentix/stapy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://stapy.magentix.fr/editor.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://stapy.magentix.fr/
    checkedAt: 2026-10-23
  - field: license
    url: https://git.sr.ht/~magentix/stapy/blob/master/LICENCE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://git.sr.ht/~magentix/stapy/blob/master/LICENCE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://git.sr.ht/~magentix/stapy/blob/master/CHANGELOG.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://git.sr.ht/~magentix/stapy/refs
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://git.sr.ht/~magentix/stapy/blob/master/CHANGELOG.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Stapy is a static site generator written in Python that works on any operating system without additional packages. Pages are defined as JSON files in a `source/pages` directory and rendered through HTML templates and themes, with an expression syntax for variables and blocks and Python plugins for custom code.

A local HTTP server serves the site while it is being written, and an official editor plugin runs in the browser from that server. A build writes the static files of each environment to the `web` directory, so the production folder can be sent to a classic host by SFTP or pushed to a static host. The [documentation](https://stapy.magentix.fr/) describes the steps.

## Worth knowing

The old address stapy.net no longer resolves; the README names stapy.magentix.fr as the official website. The source is on Sourcehut.
