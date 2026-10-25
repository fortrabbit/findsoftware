---
id: decap-cms
name: Decap CMS
urls:
  home: https://decapcms.org
  repository: https://github.com/decaporg/decap-cms
  docs: https://decapcms.org/docs/intro/
category:
  - cms
description: Git-based content management interface, delivered as a single-page admin app, that edits the content files of a static site.
status: active
maintainer: Netlify
firstRelease: 2016
language: javascript
hosting:
  - static
adminUi: true
i18n: yes
runsAs:
  - static
  - browser
installMethod: CDN script tag
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-14
githubStargazers: 19441
npmWeeklyDownloads: 9167
contributors: 441
dependentRepos: 10
social:
  x: https://x.com/Decap_CMS
  discord: https://decapcms.org/chat
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://decapcms.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/decaporg/decap-cms
    checkedAt: 2026-10-23
  - field: urls
    url: https://decapcms.org/docs/intro/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/decaporg/decap-cms/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/decaporg/decap-cms/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/decaporg/decap-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/decaporg/decap-cms
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/decaporg/decap-cms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/decaporg/decap-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/decaporg/decap-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://decapcms.org/docs/install-decap-cms/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/decaporg/decap-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/decaporg/decap-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://decapcms.org/docs/install-decap-cms/
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/decaporg/decap-cms/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/decaporg/decap-cms/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/decaporg/decap-cms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/decaporg/decap-cms/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/decap-cms-app
    checkedAt: 2026-10-23
  - field: i18n
    url: https://decapcms.org/docs/i18n/
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/decap-cms-app
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Decap CMS is an editing interface for content stored in a Git repository. It is a single-page app that sits in the admin folder of a static site, so editors log in there and change the content files the site is built from. The admin folder is static files that any web space serves, and the admin code runs in the editor's browser. It supports side-by-side editing in multiple languages and a live preview.

The project was renamed from Netlify CMS in February 2023 and keeps the same repository history.

## Worth knowing

Decap Turbo is a hosted backend for the CMS: editors log in with Turbo accounts, large collections load from a cache, and access is managed per site.
