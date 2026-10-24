---
id: bssg
name: BSSG
urls:
  home: https://bssg.dragas.net/
  repository: https://brew.bsd.cafe/stefano/BSSG
  docs: https://brew.bsd.cafe/stefano/BSSG/src/branch/main/README.md
category:
  - ssg
description: Static site generator written in Bash that builds a website from Markdown posts and pages.
status: active
maintainer: Stefano Marinelli
maintainerType: individual
firstRelease: 2025
hosting:
  - static
contentStore:
  - flat-file
adminUi: false
i18n: built-in support for multiple languages using locale files
runsAs:
  - static
renderingModes:
  - static
installMethod: source clone
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-06-14
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://bssg.dragas.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://brew.bsd.cafe/stefano/BSSG
    checkedAt: 2026-10-23
  - field: urls
    url: https://bssg.dragas.net/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://bssg.dragas.net/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://bssg.dragas.net/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://bssg.dragas.net/
    checkedAt: 2026-10-23
  - field: license
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://brew.bsd.cafe/stefano/BSSG/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://brew.bsd.cafe/api/v1/repos/stefano/BSSG/releases?limit=50
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://brew.bsd.cafe/api/v1/repos/stefano/BSSG/releases?limit=50
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://brew.bsd.cafe/api/v1/repos/stefano/BSSG/releases?limit=50
    checkedAt: 2026-10-23
ai: authored
---

BSSG is a static site generator written in Bash. It reads Markdown posts, pages, drafts and static files from a site directory, and `./bssg.sh build` writes the finished site to an `output/` directory inside it. The README describes keeping the site content apart from the BSSG core scripts, so the core can be updated with `git pull` without touching the site. A built-in development server previews the output locally, and a custom deployment script can run after each build.

## Worth knowing

The README says the default bash on macOS is too old, so a newer bash from Homebrew is needed to run it there.
