---
id: lity
name: Lity
urls:
  home: https://sorgalla.com/lity/
  repository: https://github.com/jsor/lity
  docs: https://github.com/jsor/lity/blob/master/README.md
category:
  - ui-library
description: Lightbox plugin that opens images, iframes and inline content in an overlay, from a data attribute on a link or a function call.
status: stub
maintainer: Jan Sorgalla
maintainerType: individual
firstRelease: 2015
language: javascript
installMethod: script tag
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2020-04-26
githubStargazers: 1157
npmWeeklyDownloads: 8532
contributors: 8
dependentRepos: 191
dependentPackages: 11
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://sorgalla.com/lity/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/jsor/lity
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/jsor/lity/releases
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/jsor/lity/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/jsor/lity
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/jsor/lity/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/jsor/lity/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/jsor/lity/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/jsor/lity
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/jsor/lity/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/lity
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/lity
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/lity
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

Lity is a lightbox plugin that opens a link's target in an overlay when the link carries a data-lity attribute. A lity() call opens a URL or an HTML string the same way and returns an instance with methods to close the box and read its element, opener and content. A data-lity-target attribute opens a different URI than the one in the href, and the library fires events as the box opens, becomes ready, closes, is removed and resizes.

## Worth knowing

The README says Lity requires jQuery or Zepto, so the page has to load one of them before the lightbox script.
