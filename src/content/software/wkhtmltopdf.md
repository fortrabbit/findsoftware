---
id: wkhtmltopdf
name: wkhtmltopdf
urls:
  home: https://wkhtmltopdf.org
  repository: https://github.com/wkhtmltopdf/wkhtmltopdf
  docs: https://wkhtmltopdf.org/docs.html
category:
  - library
  - media
description: Command-line tools that render HTML into PDF and image files using the Qt WebKit rendering engine.
status: discontinued
maintainer: Ashish Kulkarni
maintainerType: individual
firstRelease: 2008
language: cpp
runtime:
  - binary
hosting:
  - binary
installMethod: download, source build, windows installer, macos installer, linux packages
licenseModel: open-source
license: LGPL-3.0
latestReleaseDate: 2020-06-10
githubStargazers: 14541
contributors: 74
social:
  x: https://twitter.com/wkhtmltopdf
  forum: https://groups.google.com/g/wkhtmltopdf-general
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://wkhtmltopdf.org/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf
    checkedAt: 2026-11-17
  - field: urls
    url: https://wkhtmltopdf.org/docs.html
    checkedAt: 2026-11-17
  - field: status
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://wkhtmltopdf.org/
    checkedAt: 2026-11-17
  - field: maintainerType
    url: https://wkhtmltopdf.org/
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf/commits/fbaa69e634d68a4e62494b71e3a221ef290e07d6
    checkedAt: 2026-11-17
  - field: category
    url: https://wkhtmltopdf.org/
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf
    checkedAt: 2026-11-17
  - field: runtime
    url: https://wkhtmltopdf.org/
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://wkhtmltopdf.org/
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/wkhtmltopdf/wkhtmltopdf/blob/master/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://wkhtmltopdf.org/downloads.html
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://wkhtmltopdf.org/downloads.html
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://wkhtmltopdf.org/downloads.html
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf/releases/latest
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/wkhtmltopdf/wkhtmltopdf/contributors?per_page=1
    checkedAt: 2026-11-17
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

wkhtmltopdf is a pair of command-line tools, wkhtmltopdf and wkhtmltoimage, that render HTML into PDF and image files with the Qt WebKit rendering engine. The tools run headless and do not need a display. The [downloads page](https://wkhtmltopdf.org/downloads.html) offers installers and packages for several operating systems, and the README points to a separate repository for building and packaging.

## Worth knowing

The GitHub repository is archived. The project's [status page](https://wkhtmltopdf.org/status.html) describes the engine underneath as QtWebKit, which Qt deprecated and later removed, advises against passing untrusted HTML to the tool, and suggests WeasyPrint, Prince or puppeteer for some uses.
