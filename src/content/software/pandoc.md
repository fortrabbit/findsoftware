---
id: pandoc
name: Pandoc
urls:
  home: https://pandoc.org
  repository: https://github.com/jgm/pandoc
  docs: https://pandoc.org/getting-started.html
category:
  - media
description: Haskell library and command-line tool that converts documents between markup formats.
status: active
maintainer: John MacFarlane
maintainerType: individual
firstRelease: 2007
language: haskell
runsAs:
  - local
  - always-on
  - per-request
installMethod: official installer and binary downloads
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "3"
latestReleaseDate: 2026-10-08
githubStargazers: 46664
contributors: 416
social:
  forum: https://github.com/jgm/pandoc/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pandoc.org
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/jgm/pandoc
    checkedAt: 2026-10-23
  - field: urls
    url: https://pandoc.org/getting-started.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/jgm/pandoc/main/COPYRIGHT
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/jgm/pandoc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://pandoc.org
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pandoc.org/installing.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pandoc.org/getting-started.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pandoc.org/pandoc-server.html
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/jgm/pandoc/main/COPYRIGHT
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://pandoc.org
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/jgm/pandoc/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/jgm/pandoc/releases/latest
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://hackage.haskell.org/package/pandoc-0.4
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/jgm/pandoc
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/jgm/pandoc/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pandoc is a Haskell library for converting from one markup format to another, and a command-line tool that uses this library. The [installation page](https://pandoc.org/installing.html) lists installers, package managers, Docker images and binary archives for each platform. Pandoc can also run as a web server or as a CGI program, a mode the [pandoc-server page](https://pandoc.org/pandoc-server.html) describes. The project's COPYRIGHT file names John MacFarlane as the copyright holder.

## Worth knowing

The pandoc-server mode is a build option. The statically linked binaries provided by the project cannot load Lua filters that use C modules, which the installation page describes.
